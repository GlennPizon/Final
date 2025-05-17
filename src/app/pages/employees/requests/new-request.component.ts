import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Request, RequestItem } from '../../../models/request.model';

@Component({
  selector: 'app-new-request',
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  standalone: true,
  template: `
    <div class="card">
      <div class="card-header">
        <h3 class="mb-0">New Request</h3>
      </div>
      <div class="card-body">
        <form #requestForm="ngForm" (ngSubmit)="onSubmit()">
          <div class="mb-3">
            <label class="form-label">Request Type</label>
            <select class="form-select" name="type" [(ngModel)]="request.type" required>
              <option value="equipment">Equipment</option>
              <option value="leave">Leave</option>
              <option value="resources">Resources</option>
            </select>
          </div>

          <div class="mb-3">
            <label class="form-label">Items</label>
            <div *ngFor="let item of request.items; let i = index" class="mb-2">
              <div class="row">
                <div class="col-md-6">
                  <input type="text" class="form-control" name="itemName_{{i}}" [(ngModel)]="item.name" placeholder="Item name" required>
                </div>
                <div class="col-md-3">
                  <input type="number" class="form-control" name="itemQuantity_{{i}}" [(ngModel)]="item.quantity" placeholder="Quantity" required>
                </div>
                <div class="col-md-3">
                  <button type="button" class="btn btn-danger" (click)="removeItem(i)" *ngIf="request.items.length > 1">
                    <i class="bi bi-trash"></i> Remove
                  </button>
                </div>
              </div>
            </div>
            <button type="button" class="btn btn-success" (click)="addItem()">
              <i class="bi bi-plus-circle"></i> Add Item
            </button>
          </div>

          <div class="mt-4">
            <button type="submit" class="btn btn-primary me-2" [disabled]="!requestForm.form.valid">
              <i class="bi bi-save"></i> Save Request
            </button>
            <button type="button" class="btn btn-secondary" [routerLink]="['../']">
              <i class="bi bi-arrow-left"></i> Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: [``]
})
export class NewRequestComponent {
  request: Request = {
    id: 0,
    type: 'equipment',
    employeeId: 0,
    status: 'pending',
    items: [{
      id: 0,
      name: '',
      quantity: 1
    }],
    createdAt: new Date(),
    updatedAt: new Date()
  };

  addItem() {
    this.request.items.push({
      id: 0,
      name: '',
      quantity: 1
    });
  }

  removeItem(index: number) {
    this.request.items.splice(index, 1);
  }

  onSubmit() {
    // TODO: Implement request submission
    console.log('Request submitted:', this.request);
  }
}
