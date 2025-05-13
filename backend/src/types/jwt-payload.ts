// src/types/jwt-payload.ts
import { Role } from '../utils/role';

export interface JwtPayload {
  id: string;
  role: Role;
  iat?: number;
  exp?: number;
}
