import { Role } from './role';
import { Employee } from './employee';


export interface Account {
  id: string; // UUID
  email: string;
  passwordHash?: string;
  role: Role;
  isVerified: boolean;
  verificationToken?: string;
  resetToken?: string;
  createdAt: string;
  updatedAt: string;
  // relations
  employee?: Employee;
}
