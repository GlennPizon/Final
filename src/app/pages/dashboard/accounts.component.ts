import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [CommonModule, NgbModule, RouterModule, RouterLink],
  template: `
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h4 class="mb-0">Accounts Management</h4>
            </div>
            <div class="card-body">
              <div class="d-flex justify-content-between mb-3">
                <div>
                  <button class="btn btn-primary" [routerLink]="['/accounts/new']">
                    <i class="bi bi-plus-circle"></i> Create New Account
                  </button>
                </div>
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Search accounts...">
                  <button class="btn btn-outline-secondary">
                    <i class="bi bi-search"></i>
                  </button>
                </div>
              </div>

              <div class="table-responsive">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Username</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>admin</td>
                      <td>admin@example.com</td>
                      <td>Administrator</td>
                      <td>
                        <span class="badge bg-success">Active</span>
                      </td>
                      <td>
                        <button class="btn btn-sm btn-warning me-1">
                          <i class="bi bi-pencil"></i>
                        </button>
                        <button class="btn btn-sm btn-danger">
                          <i class="bi bi-trash"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>employee1</td>
                      <td>employee1@example.com</td>
                      <td>Employee</td>
                      <td>
                        <span class="badge bg-success">Active</span>
                      </td>
                      <td>
                        <button class="btn btn-sm btn-warning me-1">
                          <i class="bi bi-pencil"></i>
                        </button>
                        <button class="btn btn-sm btn-danger">
                          <i class="bi bi-trash"></i>
                        </button>
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
  `
})
export class AccountsComponent {}
