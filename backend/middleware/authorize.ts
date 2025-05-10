// src/middleware/authorize.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Role } from '../utils/role';

dotenv.config();

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        role: Role;
        [key: string]: any;
      };
    }
  }
}

export const authorize = (roles: Role[] | Role = []) => {
  const allowedRoles = Array.isArray(roles) ? roles : [roles];
  const jwtSecret = process.env.JWT_SECRET as string;

  return (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    jwt.verify(token, jwtSecret, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Unauthorized: Invalid or expired token' });
      }

      const payload = decoded as { id: string; role: Role };

      if (!payload || (allowedRoles.length && !allowedRoles.includes(payload.role))) {
        return res.status(403).json({ message: 'Forbidden: Insufficient permissions' });
      }

      req.user = payload;
      next();
    });
  };
};
