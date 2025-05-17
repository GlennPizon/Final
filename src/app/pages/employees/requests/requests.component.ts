import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Request } from '../../../models/request.model';

@Component({
  selector: 'app-employee-requests',
  imports: [
    CommonModule,
    RouterLink
  ],
  standalone: true,
  template: `
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h3 class="mb-0">Employee Requests</h3>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Employee</th>
                      <th>Items</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr *ngFor="let request of requests">
                      <td>{{request.type}}</td>
                      <td>{{request.employeeId}}</td>
                      <td>
                        <ul class="list-unstyled">
                          <li *ngFor="let item of request.items">
                            {{item.name}} ({{item.quantity}})
                          </li>
                        </ul>
                      </td>
                      <td>
                        <span class="badge" [ngClass]="{'bg-warning': request.status === 'pending',
                                                        'bg-success': request.status === 'approved',
                                                        'bg-danger': request.status === 'rejected'}">
                          {{request.status | titlecase}}
                        </span>
                      </td>
                      <td>
                        <div class="btn-group">
                          <button class="btn btn-sm btn-info" [routerLink]="['./view', request.id]">
                            <i class="bi bi-eye"></i> View
                          </button>
                          <button class="btn btn-sm btn-warning" [routerLink]="['./edit', request.id]">
                            <i class="bi bi-pencil"></i> Edit
                          </button>
                          <button class="btn btn-sm btn-danger" (click)="deleteRequest(request.id)">
                            <i class="bi bi-trash"></i> Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="mt-3 d-flex justify-content-end">
                <button class="btn btn-primary" [routerLink]="['./new']">
                  <i class="bi bi-plus-circle"></i> Add Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [``]
})
export class EmployeeRequestsComponent {
  requests: Request[] = [];

  deleteRequest(id: number) {
    // TODO: Implement request deletion
  }
}
