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
        <div class="col-12 mb-3">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <div class="collapse navbar-collapse justify-content-end">
                <ul class="navbar-nav mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link" [routerLink]="['/dashboard/accounts']">Accounts</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" [routerLink]="['/dashboard/employees']">Employees</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" [routerLink]="['/dashboard/departments']">Departments</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" [routerLink]="['/dashboard/requests']">Requests</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [`
    body {
      font-family: sans-serif;
      margin: 20px;
    }
    .container {
      max-width: 960px;
      margin: 0 auto;
    }
    .header {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-bottom: 20px;
      padding-right: 0;
    }
    .header .nav {
      margin-right: 0;
    }
    .nav-links a {
      margin-left: 15px;
      text-decoration: none;
      color: #0d6efd;
    }
    .table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 20px;
    }
    .table th, .table td {
      border: 1px solid #dee2e6;
      padding: 8px;
      text-align: left;
    }
    .table th {
      background-color: #f8f9fa;
    }
    .btn-edit {
      background-color: #0d6efd;
      color: white;
      border: none;
      padding: 5px 10px;
      border-radius: 5px;
      cursor: pointer;
      font-size: small;
    }
    .btn-add {
      background-color: #0d6efd;
      color: white;
      border: none;
      padding: 8px 15px;
      border-radius: 5px;
      cursor: pointer;
      font-size: small;
      margin-top: 10px;
      align-self: flex-end;
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
    .section-title {
      margin-bottom: 15px;
      font-weight: bold;
      color: #343a40;
    }
    .button-container {
      display: flex;
      justify-content: flex-end;
      margin-top: 10px;
    }
  `]
})
export class DashboardComponent {
  constructor(private router: Router) { }
}
