import { Account } from './account.model';
import { Department } from './department.model';

export interface Employee {
    id: number;
    employeeId: string;
    accountId: number;
    position: string;
    departmentId: number;
    hireDate: Date;
    status: 'active' | 'inactive' | 'on_leave';
    account?: Account;
    department?: Department;
}
