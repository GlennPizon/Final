import { Role } from '../_models';

export interface AuthenticateResponse {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
  isVerified: boolean;
  jwtToken: string;
  refreshToken: string;
}
