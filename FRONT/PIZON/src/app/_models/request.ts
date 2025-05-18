import { RequestItem } from './request-item';

export interface Request {
  id: string; // UUID
  employeeId: string;
  type: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  items: RequestItem[];
  createdAt: string;
  updatedAt?: string;
}
