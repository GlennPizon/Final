import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Workflow } from '../_models';
import { environment } from '../../environments/environment';

const baseUrl = `${environment.apiUrl}/workflows`;

@Injectable({ providedIn: 'root' })
export class WorkflowService {
  constructor(private http: HttpClient) {}

  getByEmployee(employeeId: number) {
    return this.http.get<Workflow[]>(`${baseUrl}/employee/${employeeId}`);
  }

  create(params: any) {
    return this.http.post(baseUrl, params);
  }

  updateStatus(id: number, status: string) {
    return this.http.put(`${baseUrl}/${id}/status`, { status });
  }

  initiateOnboarding(params: any) {
    return this.http.post(`${baseUrl}/onboarding`, params);
  }
  getAll() {
    return this.http.get<Workflow[]>(baseUrl);
  }
}
