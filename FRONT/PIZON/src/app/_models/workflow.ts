export interface Workflow {
  id: string; // UUID
  employeeId: string;
  type: 'Onboarding' | 'Offboarding' | 'Transfer';
  status: 'Pending' | 'In Progress' | 'Completed';
  details: Record<string, any>;
  createdAt: string;
  updatedAt?: string;
}
