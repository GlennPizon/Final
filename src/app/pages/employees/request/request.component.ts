import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-request',
  standalone: true,
  imports: [CommonModule, NgbModule, RouterModule],
  template: `
    <div class="container-fluid">
      <div class="row">
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
