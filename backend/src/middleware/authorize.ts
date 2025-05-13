import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { Role } from '../utils/role';
import dotenv from 'dotenv';

dotenv.config();

const jwtSecret = process.env.JWT_SECRET as string;

// Extend Express's Request type
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

  return (req: Request, res: Response, next: NextFunction): void => {
    const authHeader = req.headers.authorization;
    const token = authHeader?.startsWith('Bearer ') ? authHeader.split(' ')[1] : req.cookies?.refreshToken;

    if (!token) {
      res.status(401).json({ message: 'Unauthorized: No token provided' });
      return;
    }

    try {
      const decoded = jwt.verify(token, jwtSecret) as { id: string; role: Role };

      if (!decoded?.role) {
        res.status(401).json({ message: 'Unauthorized: Invalid token payload' });
        return;
      }

      if (allowedRoles.length > 0 && !allowedRoles.includes(decoded.role)) {
        res.status(403).json({ message: 'Forbidden: Insufficient permissions' });
        return;
      }

      req.user = decoded;
      next();
    } catch (err: any) {
      const msg =
        err.name === 'TokenExpiredError'
          ? 'Unauthorized: Token expired'
          : 'Unauthorized: Invalid token';
      res.status(401).json({ message: msg });
    }
  };
};
