export interface RequestItem {
    id: number;
    name: string;
    quantity: number;
}

export interface Request {
    id: number;
    type: 'equipment' | 'leave' | 'resources';
    employeeId: number;
    status: 'pending' | 'approved' | 'rejected';
    items: RequestItem[];
    createdAt: Date;
    updatedAt: Date;
}
