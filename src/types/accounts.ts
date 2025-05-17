export type UpdateAccountInput = {
  title?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  role?: 'Admin' | 'User';
  acceptTerms?: boolean;
};
