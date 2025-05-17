export interface Employee {
  id?: number;               // optional for creation
  employeeId: string;
  userId: number;
  position: string;
  hireDate: string;          // or Date
  departmentId: number;
}
