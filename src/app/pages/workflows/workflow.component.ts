import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Workflow } from '@app/models/workflow.model';

@Component({
  selector: 'app-workflow',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="container-fluid">
      <div class="card">
        <div class="card-header">
          <h3 class="mb-0">Workflows for {{employeeId}}</h3>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Details</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let workflow of workflows">
                  <td>{{workflow.type | titlecase}}</td>
                  <td>{{workflow.details}}</td>
                  <td>
                    <span class="badge" [ngClass]="{'bg-warning': workflow.status === 'pending',
                                              'bg-success': workflow.status === 'approved',
                                              'bg-danger': workflow.status === 'rejected'}">
                      {{workflow.status | titlecase}}
                    </span>
                  </td>
                  <td>
                    <div class="btn-group">
                      <button class="btn btn-sm btn-info" [routerLink]="['/workflows/view', workflow.id]">
                        <i class="bi bi-eye"></i> View
                      </button>
                      <button class="btn btn-sm btn-warning" [routerLink]="['/workflows/edit', workflow.id]">
                        <i class="bi bi-pencil"></i> Edit
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [``]
})
export class WorkflowComponent {
  employeeId: string = 'EMP001';
  workflows: Workflow[] = [
    {
      id: 1,
      type: 'onboarding',
      employeeId: 1,
      details: 'Task: Setup workstation',
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ];
}
