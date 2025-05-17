import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterLink,
    RouterModule
  ],
  template: `
    <div class="container-fluid">
      <div class="card mb-4">
        <div class="card-header">
          <h3 class="mb-0">Employees</h3>
        </div>
        <div class="card-body">
        <div class="mb-3">
        <table class="table">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Account</th>
              <th>Position</th>
              <th>Department</th>
              <th>Hire Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let employee of employees">
              <td>{{employee.employeeId}}</td>
              <td>
                {{employee.account?.title}} {{employee.account?.firstName}} {{employee.account?.lastName}}
                <br>
                <small class="text-muted">{{employee.account?.email}}</small>
              </td>
              <td>{{employee.position}}</td>
              <td>{{employee.department?.name}}</td>
              <td>{{employee.hireDate | date}}</td>
              <td>
                <span class="badge" [ngClass]="{'bg-success': employee.status === 'active',
                                               'bg-warning': employee.status === 'inactive',
                                               'bg-info': employee.status === 'on_leave'}">
                  {{employee.status | titlecase}}
                </span>
              </td>
              <td>
                <div class="btn-group">
                  <button class="btn btn-sm btn-primary" [routerLink]="['requests']">
                    <i class="bi bi-send"></i> Request
                  </button>
                  <button class="btn btn-sm btn-info" [routerLink]="['workflows']">
                    <i class="bi bi-diagram-3"></i> Workflows
                  </button>
                  <button class="btn btn-sm btn-warning" [routerLink]="['transfer']">
                    <i class="bi bi-arrow-left-right"></i> Transfer
                  </button>
                  <button class="btn btn-sm btn-secondary" [routerLink]="['edit']">
                    <i class="bi bi-pencil"></i> Edit
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="mt-3 d-flex justify-content-end">
          <button class="btn btn-sm btn-primary" [routerLink]="['new']">
            <i class="bi bi-plus-circle"></i> Add Employee
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [``]
})
export class EmployeesComponent {
  employees: Employee[] = [
    {
      id: 1,
      employeeId: 'EMP001',
      accountId: 1,
      position: 'Senior Developer',
      departmentId: 1,
      hireDate: new Date('2023-01-15'),
      status: 'active',
      account: {
        id: 1,
        title: 'Mr.',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        role: 'user',
        status: 'active'
      },
      department: {
        id: 1,
        name: 'IT',
        description: 'Information Technology Department',
        employeeCount: 10
      }
    }
  ];

  constructor(private router: Router) {}
}
