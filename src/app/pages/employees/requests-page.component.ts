import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Request } from '../../models/request.model';

@Component({
  selector: 'app-employee-requests-page',
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
              <div class="d-flex justify-content-between align-items-center">
                <h3 class="mb-0">Employee Requests</h3>
                <div>
                  <button class="btn btn-primary" [routerLink]="['/employees/new-request']">
                    <i class="bi bi-plus-circle"></i> New Request
                  </button>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="table-responsive mt-4">
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
                          <button class="btn btn-sm btn-warning" [routerLink]="['./edit', request.id]">
                            <i class="bi bi-pencil"></i> Edit
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [``]
})
export class EmployeeRequestsPageComponent {
  requests: Request[] = [
    {
      id: 1,
      type: 'equipment',
      employeeId: 101,
      status: 'pending',
      items: [
        { id: 1, name: 'Laptop', quantity: 1 },
        { id: 2, name: 'Monitor', quantity: 2 }
      ],
      createdAt: new Date('2024-05-15'),
      updatedAt: new Date('2024-05-15')
    },
    {
      id: 2,
      type: 'leave',
      employeeId: 102,
      status: 'approved',
      items: [
        { id: 3, name: 'Vacation Leave', quantity: 5 }
      ],
      createdAt: new Date('2024-05-14'),
      updatedAt: new Date('2024-05-16')
    }
  ];


}
