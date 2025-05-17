import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departments-dashboard',
  standalone: false,
  template: `
    <div class="container">
      <div class="card mb-4">
        <div class="card-header">
          <h3 class="mb-0">DEPARTMENTS DASHBOARD</h3>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-4 mb-4">
              <div class="card bg-info text-white">
                <div class="card-body">
                  <h5 class="card-title">Total Departments</h5>
                  <p class="card-text display-4">15</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="card bg-primary text-white">
                <div class="card-body">
                  <h5 class="card-title">Active Departments</h5>
                  <p class="card-text display-4">13</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="card bg-success text-white">
                <div class="card-body">
                  <h5 class="card-title">Employees</h5>
                  <p class="card-text display-4">245</p>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 mb-4">
              <div class="card">
                <div class="card-header">
                  <h5 class="mb-0">Recent Changes</h5>
                </div>
                <div class="card-body">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                      <div class="d-flex justify-content-between">
                        <span>New Department Added</span>
                        <span class="text-muted">10:30 AM</span>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="d-flex justify-content-between">
                        <span>Department Restructured</span>
                        <span class="text-muted">09:45 AM</span>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="d-flex justify-content-between">
                        <span>Department Head Changed</span>
                        <span class="text-muted">08:15 AM</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-6 mb-4">
              <div class="card">
                <div class="card-header">
                  <h5 class="mb-0">Quick Actions</h5>
                </div>
                <div class="card-body">
                  <div class="d-grid gap-2">
                    <button class="btn btn-primary" [routerLink]="['/departments/new']">Add Department</button>
                    <button class="btn btn-success" [routerLink]="['/departments/reports']">View Reports</button>
                    <button class="btn btn-info" [routerLink]="['/departments/structure']">View Structure</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card {
      border: none;
      box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    }
    .card-header {
      background-color: #f8f9fa;
    }
    .display-4 {
      font-size: 2.5rem;
    }
  `]
})
export class DepartmentsDashboardComponent { }
