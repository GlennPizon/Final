export interface Account {
  id: string;
  email: string;
  password?: string;
  firstName: string;
  lastName: string;
  role: Role;
  jwtToken?: string;
  isVerified?: boolean;
}
