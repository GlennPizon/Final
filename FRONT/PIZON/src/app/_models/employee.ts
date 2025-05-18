import { Department } from './department';

export interface Employee {
  id: string; // UUID
  userId: string; // Account ID (FK)
  employeeId: string;
  position: string;
  hireDate: string;
  departmentId: string;
  department?: Department;
}
