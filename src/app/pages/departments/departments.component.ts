import { Component } from '@angular/core';

@Component({
  selector: 'app-departments',
  template: `
    <div class="container">
      <div class="card">
        <div class="card-header">
          <h3 class="mb-0">Departments List</h3>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Employees</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Engineering</td>
                  <td>Responsible for product development, software engineering, and technical support.</td>
                  <td>45</td>
                  <td>
                    <button class="btn btn-sm btn-primary me-2">Edit</button>
                    <button class="btn btn-sm btn-danger">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>Human Resources</td>
                  <td>Manages recruitment, employee relations, benefits, and organizational development.</td>
                  <td>20</td>
                  <td>
                    <button class="btn btn-sm btn-primary me-2">Edit</button>
                    <button class="btn btn-sm btn-danger">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>Finance</td>
                  <td>Handles financial planning, accounting, budgeting, and financial reporting.</td>
                  <td>15</td>
                  <td>
                    <button class="btn btn-sm btn-primary me-2">Edit</button>
                    <button class="btn btn-sm btn-danger">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>Marketing</td>
                  <td>Develops marketing strategies, manages campaigns, and analyzes market trends.</td>
                  <td>30</td>
                  <td>
                    <button class="btn btn-sm btn-primary me-2">Edit</button>
                    <button class="btn btn-sm btn-danger">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>Operations</td>
                  <td>Oversees daily business operations, supply chain management, and process optimization.</td>
                  <td>25</td>
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
