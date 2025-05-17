import { Component } from '@angular/core';

@Component({
  selector: 'app-requests',
  template: `
    <div class="container">
      <div class="card">
        <div class="card-header">
          <h3 class="mb-0">REQUESTS</h3>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>Request ID</th>
                  <th>Type</th>
                  <th>Employee</th>
                  <th>Status</th>
                  <th>Created</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>REQ-001</td>
                  <td>Leave</td>
                  <td>John Doe</td>
                  <td>Pending</td>
                  <td>2025-05-16</td>
                  <td>
                    <button class="btn btn-sm btn-primary me-2">View</button>
                    <button class="btn btn-sm btn-success me-2">Approve</button>
                    <button class="btn btn-sm btn-danger">Reject</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `
})
export class RequestsComponent { }
