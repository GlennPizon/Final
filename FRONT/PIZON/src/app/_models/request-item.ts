export interface RequestItem {
  id?: string; // UUID
  name: string;
  quantity: number;
  requestId?: string; // FK for request
}
