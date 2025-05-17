import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-transfer',
  standalone: true,
  imports: [
    CommonModule,
    NgbModule
  ],
  template: `
    <div class="container-fluid">
      <div class="card">
        <div class="card-header">
          <h3 class="mb-0">Employee Transfer</h3>
        </div>
        <div class="card-body">
          <form>
            <div class="mb-3">
              <label class="form-label">New Department</label>
              <select class="form-select">
                <option value="">Select new department</option>
                <option value="hr">Human Resources</option>
                <option value="it">Information Technology</option>
                <option value="finance">Finance</option>
                <option value="marketing">Marketing</option>
                <option value="operations">Operations</option>
              </select>
            </div>
            <div class="d-flex justify-content-end">
              <button type="submit" class="btn btn-primary">
                <i class="bi bi-arrow-left-right"></i> Transfer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class TransferComponent {}
