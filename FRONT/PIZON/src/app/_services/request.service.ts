import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Request } from '../_models';
import { environment } from '../../environments/environment';

const baseUrl = `${environment.apiUrl}/requests`;

@Injectable({ providedIn: 'root' })
export class RequestService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Request[]>(baseUrl);
  }

  getById(id: number) {
    return this.http.get<Request>(`${baseUrl}/${id}`);
  }

  getByEmployee(employeeId: number) {
    return this.http.get<Request[]>(`${baseUrl}/employee/${employeeId}`);
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
}
