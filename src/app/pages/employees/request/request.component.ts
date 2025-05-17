import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-request',
  standalone: true,
  imports: [CommonModule, NgbModule, RouterModule, RouterLink, RouterLinkActive],
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
                    <a class="nav-link" routerLink="/accounts" routerLinkActive="active">Accounts</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" routerLink="/employees" routerLinkActive="active">Employees</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" routerLink="/departments" routerLinkActive="active">Departments</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" routerLink="/requests" routerLinkActive="active">Requests</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <h3 class="mb-3">Requests</h3>
              <table class="table">
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
                  <tr>
                    <td>Equipment</td>
                    <td>user&#64;example.com (Normal User)</td>
                    <td>Laptop (x1)</td>
                    <td>Pending</td>
                    <td>
                      <div class="d-flex gap-1">
                        <button *ngIf="status === 'Pending'" class="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Leave</td>
                    <td>admin&#64;example.com (Admin User)</td>
                    <td>Vacation (x5)</td>
                    <td>Approved</td>
                    <td>
                      <div class="d-flex gap-1">
                        <button *ngIf="status === 'Pending'" class="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="mt-3">
              <div class="d-flex justify-content-end">
                <button class="btn btn-sm btn-primary">Add Request</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class RequestComponent {
  status = 'Pending';
}
