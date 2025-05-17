import { Component } from '@angular/core';

@Component({
  selector: 'app-departments',
  template: `
    <div class="container">
      <div class="card">
        <div class="card-header">
          <h3 class="mb-0">DEPARTMENTS</h3>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>Department ID</th>
                  <th>Name</th>
                  <th>Head</th>
                  <th>Employees</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Engineering</td>
                  <td>John Smith</td>
                  <td>45</td>
                  <td>
                    <button class="btn btn-sm btn-primary me-2">Edit</button>
                    <button class="btn btn-sm btn-danger">Delete</button>
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
export class DepartmentsComponent { }
