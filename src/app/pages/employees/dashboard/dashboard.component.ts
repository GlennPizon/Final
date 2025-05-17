import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employee-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterLink,
    RouterLinkActive,
    NgbModule
  ],
  template: `
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 mb-3">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <div class="collapse navbar-collapse justify-content-end">
                <ul class="navbar-nav mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link" routerLink="/dashboard/accounts" routerLinkActive="active">Accounts</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" routerLink="/employees" routerLinkActive="active">Employees</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" routerLink="/dashboard/departments" routerLinkActive="active">Departments</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" routerLink="/dashboard/requests" routerLinkActive="active">Requests</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="mb-0">Employees</h3>
              </div>
              <div class="card-body">
                <div class="table-container">
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
                      <tr>
                        <td>E001</td>
                        <td>john.doe&#64;example.com</td>
                        <td>Software Engineer</td>
                        <td>Engineering</td>
                        <td>2023-01-15</td>
                        <td>Active</td>
                        <td>
                          <div class="d-flex gap-1">
                            <a class="btn btn-sm btn-outline-secondary" routerLink="/employees/request">Request</a>
                            <button class="btn btn-sm btn-outline-secondary">Workflows</button>
                            <button class="btn btn-sm btn-outline-secondary">Transfer</button>
                            <button class="btn btn-sm btn-primary">Edit</button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>E002</td>
                        <td>jane.smith&#64;example.com</td>
                        <td>Project Manager</td>
                        <td>Management</td>
                        <td>2022-06-20</td>
                        <td>Active</td>
                        <td>
                          <div class="d-flex gap-1">
                            <a class="btn btn-sm btn-outline-secondary" routerLink="/employees/request">Request</a>
                            <button class="btn btn-sm btn-outline-secondary">Workflows</button>
                            <button class="btn btn-sm btn-outline-secondary">Transfer</button>
                            <button class="btn btn-sm btn-primary">Edit</button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="mt-3">
                  <div class="d-flex justify-content-end">
                    <button class="btn btn-sm btn-primary">Add Employee</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <router-outlet></router-outlet>
    </div>
  `

,
  styles: [`
    .header {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-bottom: 20px;
    }

    .nav-links a {
      margin-left: 15px;
      text-decoration: none;
      color: #0d6efd;
    }

    .card {
      border: none;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }

    .card-header {
      background-color: #f8f9fa;
      border-bottom: 1px solid #dee2e6;
      padding: 1rem;
    }

    .card-header h3 {
      margin: 0;
      color: #343a40;
    }

    .card-body {
      padding: 1rem;
    }

    .dashboard-sections {
      margin-top: 20px;
    }

    .display-4 {
      font-size: 2.5rem;
      font-weight: 600;
    }
  `]
})
export class EmployeeDashboardComponent {
  constructor(private router: Router) { }
}
