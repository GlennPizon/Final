import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WorkflowService } from '../_services/workflow.service';
import { AlertService } from '../_services/alert.service';

@Component({
  templateUrl: 'create.component.html',
  standalone: false
})
export class WorkflowCreateComponent implements OnInit {
  form!: FormGroup;
  employeeId!: number;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private workflowService: WorkflowService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.employeeId = Number(this.route.snapshot.params['employeeId']); // Ensure correct type

    this.form = this.formBuilder.group({
      type: ['', Validators.required],
      details: ['']
    });
  }

  get f() { return this.form.controls; }

  onSubmit() {
    if (this.form.invalid) return;

    const workflow = {
      employeeId: this.employeeId,
      type: this.form.value['type'], // Use bracket notation for safe access
      details: this.form.value['details'] || '{}' // Ensure valid JSON format
    };

    this.workflowService.create(workflow)
      .subscribe({
        next: () => {
          this.alertService.success('Workflow created successfully', { keepAfterRouteChange: true });
          this.router.navigate(['/workflows', this.employeeId]);
        },
        error: (error) => this.alertService.error(error)
      });
  }
}
