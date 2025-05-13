// src/accounts/account.service.ts
import {AppDataSource} from "../data-source";
import { Accounts } from "../accounts/accounts.entity";
import { RefreshToken } from "../auth/refresh-token.entity";
import bcrypt from "bcryptjs";
import { v4 as random } from "uuid";
import jwt from "jsonwebtoken";
import { sendEmail } from "../utils/send-email";
import dotenv from "dotenv";
import { Role } from "../utils/role";
import { MoreThan } from "typeorm";
import { Repository } from "typeorm";
import { generateJwtToken } from "../auth/jwt.utils"; 

dotenv.config();

const jwtSecret = process.env.JWT_SECRET as string;
const jwtExpiresIn = process.env.JWT_EXPIRES_IN || "1h";
const from = process.env.SMTP_USER as string;

export class AccountService {
  private userRepo = AppDataSource.getRepository(Accounts);
  private refreshTokenRepo = AppDataSource.getRepository(RefreshToken);

  async register({ email, password, confirmPassword, firstname, lastname, title, acceptTerms }, origin): Promise<{ message: string }> {
    if (!acceptTerms) throw new Error("You must accept the terms and conditions.");
    if (!email || !password || !confirmPassword || !firstname || !lastname || !title)
      throw new Error("All fields must be provided");
    if (password !== confirmPassword) throw new Error("Passwords do not match");

    const existingUser = await this.userRepo.findOneBy({ email });
    if (existingUser) {
      await this.sendAlreadyRegisteredEmail(email, origin);
      return { message: "Email already registered, check your inbox for verification." };
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const userCount = await this.userRepo.count();
    const role = userCount === 0 ? Role.Admin : Role.User;
    const id = random();
    const token = random();

    const newUser = this.userRepo.create({
      id,
      title,
      firstName: firstname,
      lastName: lastname,
      email,
      passwordHash: hashedPassword,
      acceptTerms,
      role,
      verificationToken: token,
    });

    await this.userRepo.save(newUser);
    await this.sendVerificationEmail(newUser, origin);
    return { message: "Registration successful, check your email to verify." };
  }

  async verifyEmail(token: string): Promise<{ message: string }> {
    const account = await this.userRepo.findOneBy({ verificationToken: token });
    if (!account) throw new Error("Verification failed");
    account.verified = new Date();
    account.verificationToken = null;
    await this.userRepo.save(account);
    
    return { message: "Email verified successfully, you can now login" };
  }

  async create(params: any): Promise<Pick<Accounts, 'id' | 'email' | 'title' | 'firstName' | 'lastName' | 'role' | 'created' | 'updated'>> {
   
    
    // Validate if email already exists
    if (await this.userRepo.findOne({ where: { email: params.email } })) {
      // If email already exists, send an email to the user
      await this.sendAlreadyRegisteredEmail(params.email, params.origin);
      // Throw an error to indicate that the email is already registered
        throw new Error(`Email "${params.email}" is already registered`);
    }
    let pass;
    if(params.password === params.confirmPassword && params.password !== null && params.confirmPassword !== null){
      const salt = await bcrypt.genSalt(10);
      pass = await bcrypt.hash(params.password, salt); // Hash the password
    }else{
      throw new Error("Password and Confirm Password do not match");
    }

    let id: string = random(); // Generate a random ID for the new account
    // Check if the ID already exists in the database and generate a new one if it does
    while (await this.userRepo.findOne({ where: { id } })) {
      id = random();
    }

    let verificationToken = random(); // Generate a random verification token
    // Check if the verification token already exists in the database and generate a new one if it does
    while (await this.userRepo.findOne({ where: { verificationToken } })) {
      verificationToken = random();

 
    // Create account entity
    const newAccount = new Accounts();
    newAccount.id = id
    newAccount.title = params.title;
    newAccount.firstName = params.firstName;
    newAccount.lastName = params.lastName;
    newAccount.email = params.email;
    newAccount.passwordHash = pass;
    newAccount.acceptTerms = params.acceptTerms; // Fix typo
    newAccount.role = Role.User; // Default role
    newAccount.verificationToken = verificationToken; // Set the verification token
    newAccount.verified = new Date();
    newAccount.created = new Date();
    newAccount.updated = new Date();


    // Save account to the database
    await this.userRepo.save(newAccount);

    return this.basicDetails(newAccount);
}
 }



 async authenticate(email: string, password: string, ip: string) {
     const user = await this.userRepo.findOne({ where: { email }, select: ['id', 'email', 'passwordHash', 'role'] });
     if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
       throw new Error('Invalid email or password');
     }
 
     const jwtToken = generateJwtToken({ id: user.id, role: user.role });
     const refreshToken = await this.createRefreshToken(user, ip);
     
 
     return {
       ...user,

       jwtToken,
       refreshToken: refreshToken.token
     };
   }
 
   async createRefreshToken(user: Accounts, ip: string): Promise<RefreshToken> {
     const token = new RefreshToken();
     token.token = crypto.randomUUID();
     token.account = user;
     token.created = new Date();
     token.expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days
     token.createdByIp = ip;
 
     await this.refreshTokenRepo.save(token);
     return token;
   }
 
   async refresh(token: string, ip: string) {
     const existing = await this.refreshTokenRepo.findOne({
       where: { token },
       relations: ['account']
     });
 
     if (!existing || !existing.isActive) {
       throw new Error('Invalid or expired refresh token');
     }
 
     const newToken = await this.createRefreshToken(existing.account, ip);
     existing.revoked = new Date();
     existing.revokedByIp = ip;
     existing.replacedByToken = newToken.token;
     await this.refreshTokenRepo.save(existing);
 
     const jwtToken = generateJwtToken({ id: existing.account.id, role: existing.account.role });
 
     return {
       jwtToken,
       refreshToken: newToken.token
     };
   }

  async refreshToken(token: string, ipAddress: string): Promise<any> {
    // 🚀 Validate refresh token existence
    const refreshToken = await this.refreshTokenRepo.findOne({ where: { token }, relations: ["account"] });

    if (!refreshToken || !refreshToken.isActive) {
        throw new Error("Unauthorized: Invalid or expired refresh token");
    }

    const account = refreshToken.account;

    // 🚀 Rotate the refresh token
    const newRefreshToken = await this.generateRefreshToken(account, ipAddress);
    refreshToken.revoked = new Date();
    refreshToken.revokedByIp = ipAddress;

    await this.refreshTokenRepo.save([refreshToken, newRefreshToken]);

    // 🚀 Generate new JWT token
    const jwtToken = this.generateJwtToken(account);

    return {
        ...this.basicDetails(account),
        jwtToken,
        refreshToken: newRefreshToken.token,
    };
}


  async revokeToken(token: string, ipAddress: string): Promise<void> {
    const refreshToken = await this.refreshTokenRepo.findOneBy({ token });
    if (!refreshToken) throw new Error("Invalid token");
    refreshToken.revoked = new Date();
    refreshToken.revokedByIp = ipAddress;
    await this.refreshTokenRepo.save(refreshToken);
  }

  async forgotPassword(email: string, origin): Promise<{ message: string }> {
    const account = await this.userRepo.findOneBy({ email });
    if (!account) throw new Error("Email not found");
    account.resetToken = await this.randomTokenString();
    account.resetTokenExpires = new Date(Date.now() + 3600000); 
    await this.userRepo.save(account);
    await this.sendPasswordResetEmail(account, origin);
    return { message: "Password reset email sent" };
  }

  async validateResetToken(token: string): Promise<Accounts> {
    const account = await this.userRepo.findOne({ where: { resetToken: token, resetTokenExpires: MoreThan(new Date()) } });
    if (!account) throw new Error("Invalid token");
    return account;
  }

  async resetPassword(token: string, password: string): Promise<{ message: string }> {
    const account = await this.validateResetToken(token);
    account.passwordHash = await bcrypt.hash(password, 10);
    account.passwordReset = new Date();
    await this.userRepo.save(account);
    return { message: "Password reset successful" };
  }

  async getAll() {
    const accounts = await this.userRepo.find();
    return accounts.map((account) => this.basicDetails(account));
  }

  async getbyId(id: string) {
    const account = await this.userRepo.findOneBy({ id });
    return this.basicDetails(account);
  }

  async update(id: string, params: { email?: string; password?: string },userRole:string) {
    const account = await this.userRepo.findOneBy({ id });
    if (!account) throw new Error("Account not found");
    if (params.email && params.email !== account.email && await this.userRepo.findOneBy({ email: params.email })) {
      throw new Error("Email already exists");
    }
    if (params.password) {
      account.passwordHash = await bcrypt.hash(params.password, 10);
    }
    Object.assign(account, params);
    account.updated = new Date();
    await this.userRepo.save(account);
    return this.basicDetails(account);
  }

  async delete(id: string) {
    const account = await this.userRepo.findOneBy({ id });
    if (!account) throw new Error("Account not found");
    await this.userRepo.remove(account);
    return { message: "Account deleted successfully." };
  }

  async generateJwtToken(account: Accounts): Promise<string> {
    const payload = { id: account.id, role: account.role };
    return jwt.sign(payload, jwtSecret, { expiresIn: jwtExpiresIn });
  }

  async generateRefreshToken(account: Accounts, ipAddress: string): Promise<RefreshToken> {
    const tokenString = await this.randomTokenString();

    const token = new RefreshToken();
    token.token = tokenString;
    token.expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days expiration
    token.created = new Date();
    token.createdByIp = ipAddress;
    token.account = account;

    // 🚀 Save refresh token in database for future validation
    await this.refreshTokenRepo.save(token);

    return token;
}


  async randomTokenString(): Promise<string> {
    return random();
  }

   basicDetails(account: Accounts) {
    const { id, title, firstName, lastName, email, role, created, updated } = account;
    return { id, email, title, firstName, lastName, role, created, updated };
  }

  
  async sendVerificationEmail(account: Accounts, origin: string): Promise<void> {
    let message;

    if(origin){
      const verifyUrl = `${origin}/accounts/verify-email?token=${account.verificationToken}`;
      message = `Click to verify your email: <a href="${verifyUrl}">${verifyUrl}</a>
      <p><code>${account.verificationToken}</code></p>`;
    }

    else{
      message = `
      <p>Please use the below token to verify your email with the <code>/accounts/verify-email</code> api route:</p>
      <p><code>${account.verificationToken}</code></p>
      `;

    }

    await sendEmail(
      account.email,
      "Sign-Up verification Api-Verify Email",
      `<h4>Verify your Email</h4>
      <p>Thank you for registering. Please verify your email address to complete your registration.</p>
      <p>${message}</p>`,
      from

    );

  }

  async sendAlreadyRegisteredEmail(email: string, origin: string): Promise<void> {
    let message;
  
    if (origin) {
      message = `
        If you don't know your password, please use the below token to reset your password with the <code>/accounts/forgot-password</code> api route:
      `
    } else {
      message = `Click to reset your password: <a href="/accounts/forgot-password">Reset Password</a>`;
    }

    await sendEmail(
      email,
      "Sign Up Verification API - Email Already Registered", 
      `<h4>Email Already Registered</h4>
      <p>Your ${email} is already registered.}</p>
      <p>${message}</p>`,
      from
    );


  }

    async sendPasswordResetEmail(account: Accounts, origin: string): Promise<void> {
      let message;

      if (origin) {
        const resetUrl = `${origin}/accounts/reset-password?token=${account.resetToken}`;
        message = `Click to reset your password: the link below is valid for 1 hour: <br>
                  <a href="${resetUrl}">${resetUrl}</a>`;

      }

      else {
        message = `Click to reset your password: with the <code>/accounts/reset-password</code> api route: <br>
                  <p>Use the below token to reset your password:</p>
                  <p><code>${account.resetToken}</code></p>`
        
      }

      await sendEmail(
        account.email,
        "Sign Up Verification API - Password Reset",
        `<h4>Password Reset Email</h4>
        <p>${message}</p>`,
        from
      );
    }  


}
