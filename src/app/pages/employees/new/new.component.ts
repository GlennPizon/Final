import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [
    CommonModule,
    NgbModule
  ],
  template: `
    <div class="container-fluid">
      <div class="card">
        <div class="card-header">
          <h3 class="mb-0">New Employee</h3>
        </div>
        <div class="card-body">
          <form>
            <div class="mb-3">
              <label class="form-label">Employee ID</label>
              <input type="text" class="form-control">
            </div>
            <div class="mb-3">
              <label class="form-label">First Name</label>
              <input type="text" class="form-control">
            </div>
            <div class="mb-3">
              <label class="form-label">Last Name</label>
              <input type="text" class="form-control">
            </div>
            <div class="mb-3">
              <label class="form-label">Email</label>
              <input type="email" class="form-control">
            </div>
            <div class="mb-3">
              <label class="form-label">Position</label>
              <input type="text" class="form-control">
            </div>
            <div class="mb-3">
              <label class="form-label">Department</label>
              <select class="form-select">
                <option value="">Select department</option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label">Hire Date</label>
              <input type="date" class="form-control">
            </div>
            <div class="d-flex justify-content-end">
              <button type="submit" class="btn btn-primary">
                <i class="bi bi-plus-circle"></i> Add Employee
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class NewComponent {}
