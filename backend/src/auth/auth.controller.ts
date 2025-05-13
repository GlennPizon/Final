// src/auth/auth.controller.ts
import { Request, Response } from 'express';
import { AuthService } from './auth.service';

const authService = new AuthService();

// AuthController
export class AuthController {
  static async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const ip = req.ip || '127.0.0.1';

    try {
      const result = await authService.login(email, password, ip);
      res.json(result);
    } catch (err) {
      res.status(401).json({ message: err.message });
    }
  }

  static async refresh(req: Request, res: Response) {
    const { token } = req.body;
    const ip = req.ip;

    try {
      const result = await authService.refresh(token, ip);
      res.json(result);
    } catch (err) {
      res.status(401).json({ message: err.message });
    }
  }

  static async revoke(req: Request, res: Response) {
    const { token } = req.body;
    const ip = req.ip;

    try {
      await authService.revoke(token, ip);
      res.json({ message: 'Token revoked' });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  static async logout(req: Request, res: Response) {
    const { token } = req.body;
    const ip = req.ip|| '127.0.0.1';

    try {
      await authService.logout(token, ip);
      res.json({ message: 'Logged out' });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
}
