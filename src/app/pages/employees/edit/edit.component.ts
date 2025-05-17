import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    CommonModule,
    NgbModule
  ],
  template: `
    <div class="container-fluid">
      <div class="card">
        <div class="card-header">
          <h3 class="mb-0">Edit Employee</h3>
        </div>
        <div class="card-body">
          <form>
            <div class="mb-3">
              <label class="form-label">Employee ID</label>
              <input type="text" class="form-control">
            </div>
            <div class="mb-3">
              <label class="form-label">Account</label>
              <input type="text" class="form-control">
            </div>
            <div class="mb-3">
              <label class="form-label">Hire Date</label>
              <input type="date" class="form-control">
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
              <label class="form-label">Status</label>
              <select class="form-select">
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="on_leave">On Leave</option>
              </select>
            </div>
            <div class="d-flex justify-content-end">
              <button type="submit" class="btn btn-primary">
                <i class="bi bi-save"></i> Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class EditComponent {}
