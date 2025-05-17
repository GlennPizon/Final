import { Role } from './role';

export interface Account {
  id: string; // UUID as string
  email: string;
  firstName: string;
  lastName: string;
  title: string;
  role: Role; // Reference to Role model
  acceptTerms: boolean;
  verificationToken?: string;
  verified?: Date;
  resetToken?: string;
  resetTokenExpires?: Date;
  passwordReset?: Date;
  created: Date;
  updated: Date;
  isVerified: boolean; // Computed property
}
