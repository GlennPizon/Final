import { Employee } from './employee.model';

export interface Workflow {
    id: number;
    type: 'onboarding' | 'department_change' | 'leave_request';
    employeeId: number;
    details: string;
    status: 'pending' | 'approved' | 'rejected';
    employee?: Employee;
    createdAt: Date;
    updatedAt: Date;
}
