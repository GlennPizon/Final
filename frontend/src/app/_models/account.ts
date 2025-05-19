import { Role } from './role';

export class Account {
    id: string;
    title?: string;
    firstName: string;
    lastName: string;
    email: string;
    role: Role;
    token?: string;           // JWT token from backend
    refreshToken?: string;    // Refresh token for cookie
    isVerified?: boolean;
    isSuperAdmin?: boolean;
    status?: string;         // Account status (Active/Inactive)
    created?: Date;
    updated?: Date;
    isDeleting?: boolean;    // Used in account list component
}