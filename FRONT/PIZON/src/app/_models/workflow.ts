export interface Workflow {
  id?: number;
  employeeId: number;
  type: string;
  details: any;              // can be typed further depending on your details structure
  status?: string;           // optional if returned from API
}
