// src/accounts/account.controller.ts
import { CookieOptions, Request, Response } from "express";
import { AccountService } from "./accounts.service";
import { StatusCodes } from "http-status-codes";
import { generateJwtToken } from "../auth/jwt.utils";

const accountService = new AccountService();

export class AccountController {
  static async register(req: Request, res: Response) {
    try {
      const { email, password, confirmPassword, firstname, lastname, title, acceptTerms } = req.body;
      const origin: string = req.headers.origin || `http://localhost:${process.env.APP_PORT}`;
      const result = await accountService.register({ email, password, confirmPassword, firstname, lastname, title, acceptTerms }, origin);
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
      const ip:string = req.ip || '127.0.0.1';
  
      try {
        const result = await accountService.authenticate(email, password, ip);

        res.json(result);
      } catch (err) {
        res.status(401).json({ message: err.message });
      }
    }

  static async deleteAccount(req: Request, res: Response) {
    try {
      const { id } = req.body;
      const result = await accountService.delete(id);
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
/*
  static async updateAccount(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { email, password } = req.body;
      const userRole = req.user.role;

      const result = await accountService.update(id, { email, password }, userRole );
      res.json(result);
    } catch (err) {
      res.status(StatusCodes.BAD_REQUEST).json(err);
    }
  }

  */
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
      const token = req.cookies.refreshToken;
      const ipAddress:any = req.ip|| '127.0.0.1';

      console.log("Cookies from Request:", req.cookies);
      console.log("Refresh Token from Cookies:", req.cookies?.refreshToken);
      console.log("IP Address:", ipAddress);

      if (!token) {
        return res.status(401).json({ message: "Unauthorized: No refresh token provided" });
      }

      const result = await accountService.refreshToken(token, ipAddress);
      res.json(result);
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
