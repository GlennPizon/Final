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
        <!-- Navigation Menu -->
        <div class="col-md-3">
          <div class="card">
            <div class="card-header">
              <h4 class="mb-0">Navigation</h4>
            </div>
            <div class="card-body">
              <ul class="nav nav-pills flex-column mb-3">
                <li class="nav-item">
                  <a class="nav-link active" [routerLink]="['/accounts']">
                    <i class="bi bi-person-circle"></i> Accounts
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" [routerLink]="['/employees']">
                    <i class="bi bi-people"></i> Employees
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" [routerLink]="['/departments']">
                    <i class="bi bi-building"></i> Departments
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" [routerLink]="['/requests']">
                    <i class="bi bi-send"></i> Requests
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Statistics Cards -->
        <div class="col-md-9">
          <div class="row">
            <div class="col-md-3">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Total Accounts</h5>
                  <div class="d-flex justify-content-between align-items-center">
                    <span class="display-4">120</span>
                    <i class="bi bi-person-circle text-primary display-1"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Active Employees</h5>
                  <div class="d-flex justify-content-between align-items-center">
                    <span class="display-4">85</span>
                    <i class="bi bi-people text-success display-1"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Departments</h5>
                  <div class="d-flex justify-content-between align-items-center">
                    <span class="display-4">10</span>
                    <i class="bi bi-building text-info display-1"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Pending Requests</h5>
                  <div class="d-flex justify-content-between align-items-center">
                    <span class="display-4">23</span>
                    <i class="bi bi-send text-warning display-1"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
          </ul>
        </div>
      </div>

      <router-outlet></router-outlet>


    </div>
  `,
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
  constructor(private router: Router) {}
}
