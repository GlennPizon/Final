export interface Account {
    id: number;
    title: string;
    firstName: string;
    lastName: string;
    email: string;
    role: 'admin' | 'user';
    status: 'active' | 'inactive';
}
