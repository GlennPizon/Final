import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../_models/';
import { environment } from '../../environments/environment';

const baseUrl = `${environment.apiUrl}/employees`;

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Employee[]>(baseUrl);
  }

  getById(id: number) {
    return this.http.get<Employee>(`${baseUrl}/${id}`);
  }

  create(params: any) {
    return this.http.post(baseUrl, params);
  }

  update(id: number, params: any) {
    return this.http.put(`${baseUrl}/${id}`, params);
  }

  delete(id: number) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  transfer(id: number, departmentId: number) {
    return this.http.post(`${baseUrl}/${id}/transfer`, { departmentId });
  }
}
