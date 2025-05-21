// src/accounts/account.controller.ts
import { CookieOptions, Request, Response } from "express";
import { AccountService } from "./accounts.service";
import { StatusCodes } from "http-status-codes";
import { generateJwtToken } from "../auth/jwt.utils";
import Role from "../utils/role";

const accountService = new AccountService();

export class AccountController {
  static async register(req: Request, res: Response) {
    try {
    
      const origin: string = req.get("origin") || `http://localhost:${process.env.APP_PORT}`;
      
      const result = await accountService.register(req.body, origin);
      res.status(StatusCodes.CREATED).json(result); 
    } catch (err: any) {
      console.error("Registration Error:", err);
      res.status(StatusCodes.BAD_REQUEST).json({ msg: err.message || "Invalid email or password" });
    }
  }

  static async verifyEmail(req: Request, res: Response) {
    try {
      const { token } = req.query;
      const result = await accountService.verifyEmail(token as string);

      res.json(result);
    } catch (err) {
      res.status(StatusCodes.BAD_REQUEST).json({ msg: `Invalid email or not verified` });
    }
  }

  static async authenticate(req: Request, res: Response) {
  const { email, password } = req.body;
  const ip: string = req.ip || '127.0.0.1';

  try {
    const result = await accountService.authenticate(email, password, ip);

    // Set the refresh token as cookie
    await AccountController.setTokenCookie(res, result.refreshToken);

    // Don't expose refreshToken in the body
    const { refreshToken, ...account } = result;
    res.json(account);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
}


  static async deleteAccount(req: Request, res: Response) {
    try {
      
      const result = await accountService.delete(req.params.id);
      res.json(result);
    } catch (err) {
      res.status(StatusCodes.UNAUTHORIZED).json({ msg: `Invalid email or password` });
    }
  }

  static async getAllAccounts(req: Request, res: Response) {
    try {
      const result = await accountService.getAll();
      res.json(result);
    } catch (err) {
      res.status(StatusCodes.BAD_REQUEST).json(err);
    }
  }

  static async getAccountById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const result = await accountService.getbyId(id);
      res.json(result);
    } catch (err) {
      res.status(StatusCodes.BAD_REQUEST).json(err);
    }
  }

  static async updateAccount(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const userRole = (req.user as any)?.role; // depends on your JWT middleware
    const updateFields = req.body;

    const result = await accountService.update(id, updateFields, userRole);
    res.json(result);
  } catch (err: any) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: err.message });
  }
}


  
  static async createAccount(req: Request, res: Response) {
    try {
      const {title, firstName, lastName, email, password, confirmPassword, acceptTerms} = req.body;
      const result = await accountService.create({
        title,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        acceptTerms
      }
      );
      
      res.json(result);
    } catch (err) {
      res.status(StatusCodes.BAD_REQUEST).json(err);
    }
  }

  static async forgotPassword(req: Request, res: Response) {
      try {
        const { email } = req.body;
        const origin: string = `http://localhost:${process.env.APP_PORT}`;
        const result = await accountService.forgotPassword(email, origin);
        res.json(result);
      } catch (err) {
        res.status(StatusCodes.BAD_REQUEST).json(err);
      }
    }

  static async resetPassword(req: Request, res: Response) {
    try {
      const { token, password, confirmPassword } = req.body;
      if(password !== confirmPassword) throw new Error("Passwords do not match")
      const result = await accountService.resetPassword(token, password);
      res.json(result);
    } catch (err) {
      res.status(StatusCodes.BAD_REQUEST).json(err);
    }
  }

  static async refreshToken(req: Request, res: Response) {
    try {
      const token = req.body.token || req.cookies.refreshToken;
      const refresh = token;
      if(!refresh){throw new Error("Invalid refresh token")}
      
      const ipAddress:any = req.ip|| '127.0.0.1';

      const result = await accountService.refresh(refresh, ipAddress);
      await AccountController.setTokenCookie(res, result.refreshToken);

      const {  refreshToken, ...account } = result;
      
      res.json(account);
    } catch (err) {
      res.status(StatusCodes.BAD_REQUEST).json(err);
    }
  }


  static async revokeToken(req: Request, res: Response) {
    try {
      const token = req.body.token || req.cookies.refreshToken;
      const ipAddress:any = req.ip;
      const result = await accountService.revokeToken(token, ipAddress);
      res.json(result);
    } catch (err) {
      res.status(StatusCodes.BAD_REQUEST).json(err);
    }
  }

  static async validateResetToken(req: Request, res: Response) {
    try {
      const { token } = req.body;
      const result = await accountService.validateResetToken(token);
      res.json(result);
    } catch (err) {
      res.status(StatusCodes.BAD_REQUEST).json(err);
    }
  }

  static async setTokenCookie(res: Response, token: string): Promise<void> {
  const cookieOptions: CookieOptions = {
    httpOnly: true, // Prevents client-side JavaScript access
    secure: process.env.NODE_ENV === "production", // HTTPS-only in production
    sameSite: "strict", // Protects against CSRF attacks
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7-day expiration
  };

  console.log("Setting Refresh Token Cookie:", token); // Debugging step
  res.cookie("refreshToken", token, cookieOptions);
}

}
