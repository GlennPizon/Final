import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

interface Workflow {
  id: number;
  name: string;
  status: string;
  startDate: Date;
  endDate: Date;
  description: string;
}

@Component({
  selector: 'app-workflows',
  standalone: true,
  imports: [
    CommonModule,
    NgbModule
  ],
  template: `
    <ng-template #workflowDetailsModal let-modal>
      <div class="modal-header">
        <h5 class="modal-title">Workflow Details</h5>
        <button type="button" class="btn-close" (click)="modal.dismiss('Cross click')"></button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-md-6">
            <strong>Name:</strong> {{selectedWorkflow?.name}}<br>
            <strong>Status:</strong> 
            <span class="badge" [ngClass]="{'bg-success': selectedWorkflow?.status === 'completed',
                                            'bg-warning': selectedWorkflow?.status === 'in_progress',
                                            'bg-info': selectedWorkflow?.status === 'pending'}">
              {{selectedWorkflow?.status | titlecase}}
            </span><br>
            <strong>Start Date:</strong> {{selectedWorkflow?.startDate | date}}<br>
            <strong>End Date:</strong> {{selectedWorkflow?.endDate | date}}<br>
          </div>
          <div class="col-md-6">
            <strong>Description:</strong><br>
            <p class="mt-2">{{selectedWorkflow?.description}}</p>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" (click)="modal.close('Close click')">Close</button>
      </div>
    </ng-template>

    <div class="container-fluid">
      <div class="card">
        <div class="card-header">
          <h3 class="mb-0">Workflows</h3>
        </div>
        <div class="card-body">
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Status</th>
                <th>Details</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let workflow of workflows">
                <td>{{workflow.id}}</td>
                <td>
                  <span class="badge" [ngClass]="{'bg-success': workflow.status === 'completed',
                                                'bg-warning': workflow.status === 'in_progress',
                                                'bg-info': workflow.status === 'pending'}">
                    {{workflow.status | titlecase}}
                  </span>
                </td>
                <td>
                  {{workflow.name}}
                </td>
                <td>
                  <select #statusSelect class="form-select form-select-sm" [value]="workflow.status" (change)="updateStatus(workflow.id, statusSelect.value)">
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class WorkflowsComponent {
  @ViewChild('workflowDetailsModal') workflowDetailsModal: any;
  selectedWorkflow: Workflow | null = null;

  showDetails(workflow: Workflow) {
    this.selectedWorkflow = workflow;
    this.workflowDetailsModal.show();
  }

  updateStatus(workflowId: number, newStatus: string) {
    const workflowIndex = this.workflows.findIndex(w => w.id === workflowId);
    if (workflowIndex !== -1) {
      this.workflows[workflowIndex].status = newStatus;
    }
  }

  workflows: Workflow[] = [
    {
      id: 1,
      name: 'Onboarding Process',
      status: 'completed',
      startDate: new Date('2023-01-15'),
      endDate: new Date('2023-01-20'),
      description: 'Initial employee onboarding workflow'
    },
    {
      id: 2,
      name: 'Performance Review',
      status: 'in_progress',
      startDate: new Date('2023-03-01'),
      endDate: new Date('2023-03-15'),
      description: 'Q1 performance review workflow'
    },
    {
      id: 3,
      name: 'Training Program',
      status: 'pending',
      startDate: new Date('2023-04-01'),
      endDate: new Date('2023-04-30'),
      description: 'Annual training program workflow'
    }
  ];
}
