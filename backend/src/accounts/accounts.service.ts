// src/accounts/account.service.ts
import { AppDataSource } from "../data-source";
import { Accounts } from "./accounts.entity";
import { RefreshToken } from "../auth/refresh-token.entity";
import bcrypt from "bcryptjs";
import { v4 as random } from "uuid";
import jwt from "jsonwebtoken";
import { sendEmail } from "../utils/send-email";
import dotenv from "dotenv";
import { Any, MoreThan } from "typeorm";
import { Role } from "../utils/Role";
dotenv.config();

const jwtSecret = process.env.JWT_SECRET as string;
const jwtExpiresIn = process.env.JWT_EXPIRES_IN || "1h";
const from = process.env.SMTP_USER as string;

export class AccountService {
  private userRepo = AppDataSource.getRepository(Accounts);
  private refreshTokenRepo = AppDataSource.getRepository(RefreshToken);


  async revokeToken(token: string, ipAddress: string): Promise<void> {
    const refreshToken = await this.refreshTokenRepo.findOneBy({ token });
    if (!refreshToken) throw new Error("Invalid token");
    refreshToken.revoked = new Date();
    refreshToken.revokedByIp = ipAddress;
    await this.refreshTokenRepo.save(refreshToken);
  }

  async register({ email, password, confirmPassword, firstname, lastname, title, acceptTerms }, origin: string): Promise<{ message: string }> {
    if (!acceptTerms) throw new Error("You must accept the terms and conditions.");
    if (!email.trim()) throw new Error("Email cannot be empty");
    if (!password.trim() || !confirmPassword.trim()) throw new Error("Password cannot be empty");
    if (password !== confirmPassword) throw new Error("Passwords do not match");
    if (!firstname.trim()) throw new Error("First name cannot be empty");
    if (!lastname.trim()) throw new Error("Last name cannot be empty");
    if (!title.trim()) throw new Error("Title cannot be empty");

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
      email,
      passwordHash: hashedPassword,
      firstName: firstname,
      lastName: lastname,
      title,
      acceptTerms,
      role,
      verificationToken: token
    });

    await this.userRepo.save(newUser);
    await this.sendVerificationEmail(newUser, origin);
    return { message: "Registration successful, check your email to verify." };
  }

  async authenticate(email: string, password: string, ipAddress: string) {
    const user = await this.userRepo.findOneBy({ email });
    if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
      throw new Error("Invalid email or password");
    }
    const jwtToken = await this.generateJwtToken(user);
    const refreshToken = await this.generateRefreshToken(user, ipAddress);
    await this.refreshTokenRepo.save(refreshToken);

    return {
      ...this.basicDetails(user),
      jwtToken,
      refreshToken: refreshToken.token
    };
  }

  async refreshToken(token: string, ipAddress: string) {
    const refreshToken = await this.refreshTokenRepo.findOne({ where: { token }, relations: ["account"] });
    if (!refreshToken || !refreshToken.isActive) throw new Error("Invalid refresh token");

    const newRefreshToken = await this.generateRefreshToken(refreshToken.account, ipAddress);
    refreshToken.revoked = new Date();
    refreshToken.revokedByIp = ipAddress;
    await this.refreshTokenRepo.save([refreshToken, newRefreshToken]);
    const jwtToken = await this.generateJwtToken(refreshToken.account);

    return {
      ...this.basicDetails(refreshToken.account),
      jwtToken,
      refreshToken: newRefreshToken.token
    };
  }

  async logout(refreshToken: string): Promise<void> {
    if (!refreshToken) throw new Error("Refresh token is missing");
  }

  async verifyEmail(token: string): Promise<{ message: string }> {
    const account = await this.userRepo.findOneBy({ verificationToken: token });
    if (!account) throw new Error("Verification Failed");
    account.verified = new Date();
    account.verificationToken = null;
    await this.userRepo.save(account);
    return { message: "Email verified successfully" };
  }

  async forgotPassword(email: string, origin: string): Promise<{ message: string }> {
    const account = await this.userRepo.findOneBy({ email });
    if (!account) throw new Error("Email not found");

    account.resetToken = await this.randomTokenString();
    account.resetTokenExpires = new Date(Date.now() + 3600000);
    await this.userRepo.save(account);
    await this.sendPasswordResetEmail(account, origin);
    return { message: "Password reset email sent" };
  }

  async validateResetToken(token: string): Promise<Accounts> {
    const account = await this.userRepo.findOne({
      where: { resetToken: token, resetTokenExpires: MoreThan(new Date()) }
    });
    if (!account) throw new Error("Invalid token");
    return account;
  }

  async resetPassword(token: string, password: string, confirmPassword: string): Promise<{ message: string }> {
    if (password !== confirmPassword) throw new Error("Passwords do not match");
    const account = await this.validateResetToken(token);
    account.passwordHash = await bcrypt.hash(password, 10);
    account.passwordReset = new Date();
    account.resetToken = null;
    account.resetTokenExpires = null;
    await this.userRepo.save(account);
    return { message: "Password reset successful, you can now login" };
  }

  async getAll() {
    const accounts = await this.userRepo.find();
    return accounts.map(x => this.basicDetails(x));
  }

  async getById(id: string) {
    const account = await this.userRepo.findOneBy({ id });
    if (!account) throw new Error("Account not found");
    return this.basicDetails(account);
  }

  async create(params: any) {
    if (await this.userRepo.findOne({ where: { email: params.email } })) {
      await this.sendAlreadyRegisteredEmail(params.email, params.origin);
      throw new Error(`Email "${params.email}" is already registered`);
    }
    if (params.password !== params.confirmPassword) throw new Error("Password and Confirm Password do not match");

    const pass = await bcrypt.hash(params.password, 10);
    const id = random();
    const verificationToken = random();

    const newAccount = this.userRepo.create({
      id,
      title: params.title,
      firstName: params.firstName,
      lastName: params.lastName,
      email: params.email,
      passwordHash: pass,
      acceptTerms: params.acceptTerms,
      role: Role.User,
      verificationToken,
      verified: new Date(),
      created: new Date(),
      updated: new Date()
    });

    await this.userRepo.save(newAccount);
    return this.basicDetails(newAccount);
  }

  async update(id: string, params: any) {
    const account = await this.userRepo.findOneBy({ id });
    if (!account) throw new Error("Account not found");
    if (params.email && params.email !== account.email && await this.userRepo.findOneBy({ email: params.email })) {
      throw new Error("Email already exists");
    }
    if (params.password) {
      params.passwordHash = await bcrypt.hash(params.password, 10);
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
    const refreshToken = new RefreshToken();
    refreshToken.token = await this.randomTokenString();
    refreshToken.expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    refreshToken.created = new Date();
    refreshToken.createdByIp = ipAddress;
    refreshToken.account = account;
    return refreshToken;
  }

  async randomTokenString(): Promise<string> {
    return random();
  }

  async sendVerificationEmail(account: Accounts, origin: string): Promise<void> {
    const verifyUrl = `${origin}/verify-email?token=${account.verificationToken}`;
    const message = `Click to verify your email: <a href="${verifyUrl}">${verifyUrl}</a>`;
    await sendEmail(account.email, "Verify your Email", message, from);
  }

  async sendAlreadyRegisteredEmail(email: string, origin: string): Promise<void> {
    const message = origin
      ? `Your email is already registered. Please visit <a href='${origin}/login'>login</a>`
      : `Your email is already registered.`;
    await sendEmail(email, "Email Already Registered", message, from);
  }

  async sendPasswordResetEmail(account: Accounts, origin: string): Promise<void> {
    const resetUrl = `${origin}/reset-password?token=${account.resetToken}`;
    const message = `Click here to reset your password: <a href='${resetUrl}'>${resetUrl}</a>`;
    await sendEmail(account.email, "Reset Your Password", message, from);
  }

  basicDetails(account: Accounts) {
    const { id, email, title, firstName, lastName, role, created, updated } = account;
    return { id, email, title, firstName, lastName, role, created, updated };
  }
}
