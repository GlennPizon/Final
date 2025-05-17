import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, RouterLink, RouterLinkActive } from '@angular/router';
import { NavigationComponent } from '../../../shared/navigation/navigation.component';

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [CommonModule, NgbModule, RouterModule, RouterLink, RouterLinkActive, NavigationComponent],
  template: `
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 mb-3">
          <app-navigation></app-navigation>
        </div>

        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <h3 class="mb-3">Departments</h3>
              
              <div class="mb-3">
                <div class="d-flex justify-content-end">
                  <button class="btn btn-sm btn-primary" (click)="onAddDepartment()">Add Department</button>
                </div>
              </div>

              <table class="table">
                <thead>
                  <tr>
                    <th>Department ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Manager</th>
                    <th>Location</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>D001</td>
                    <td>Engineering</td>
                    <td>Software development and IT operations</td>
                    <td>John Smith</td>
                    <td>Building A, Floor 3</td>
                    <td>
                      <div class="d-flex gap-1">
                        <button class="btn btn-sm btn-outline-secondary">Edit</button>
                        <button class="btn btn-sm btn-outline-danger">Delete</button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>D002</td>
                    <td>Marketing</td>
                    <td>Digital marketing and brand management</td>
                    <td>Jane Doe</td>
                    <td>Building B, Floor 2</td>
                    <td>
                      <div class="d-flex gap-1">
                        <button class="btn btn-sm btn-outline-secondary">Edit</button>
                        <button class="btn btn-sm btn-outline-danger">Delete</button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>D003</td>
                    <td>Finance</td>
                    <td>Financial planning and accounting</td>
                    <td>Mike Johnson</td>
                    <td>Building C, Floor 1</td>
                    <td>
                      <div class="d-flex gap-1">
                        <button class="btn btn-sm btn-outline-secondary">Edit</button>
                        <button class="btn btn-sm btn-outline-danger">Delete</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .table {
      margin-bottom: 0;
    }
    
    .btn-sm {
      padding: 0.25rem 0.5rem;
    }
  `]
})
export class DepartmentsComponent {
  onAddDepartment() {
    // TODO: Implement department addition logic
    console.log('Add department clicked');
  }
}
