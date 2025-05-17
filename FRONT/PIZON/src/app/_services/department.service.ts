import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department } from '../_models/department';
import { environment } from '../../environments/environment';

const baseUrl = `${environment.apiUrl}/departments`;

@Injectable({ providedIn: 'root' })
export class DepartmentService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Department[]>(baseUrl);
  }

  getById(id: number) {
    return this.http.get<Department>(`${baseUrl}/${id}`);
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
