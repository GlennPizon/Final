import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WorkflowService } from '../_services/workflow.service';
import { Workflow } from '../_models/workflow';

@Component({
  selector: 'app-workflow-status-update',
  templateUrl: './status-update.component.html'
})
export class StatusUpdateComponent implements OnInit {
  @Input() workflow!: Workflow;
  form!: FormGroup;
  submitting = false;
  statusOptions = ['Pending', 'In Progress', 'Completed'];

  constructor(
    private fb: FormBuilder,
    private workflowService: WorkflowService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      status: [this.workflow.status]
    });
  }

  updateStatus() {
    if (this.form.invalid) return;

    this.submitting = true;
    const newStatus = this.form.value.status;

    this.workflowService.updateStatus(this.workflow.id, newStatus).subscribe({
      next: () => {
        this.workflow.status = newStatus;
        this.submitting = false;
      },
      error: () => (this.submitting = false)
    });
  }
}
