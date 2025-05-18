import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WorkflowService } from '../_services';
import { AlertService } from '../_services';

@Component({
  selector: 'app-workflow-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private workflowService: WorkflowService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      employeeId: ['', Validators.required],
      type: ['', Validators.required],
      details: ['', Validators.required]
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    this.alertService.clear();

    if (this.form.invalid) return;

    this.loading = true;
    const payload = {
      employeeId: +this.f['employeeId'].value,
      type: this.f['type'].value,
      details: JSON.parse(this.f['details'].value)
    };

    this.workflowService.create(payload)
      .subscribe({
        next: () => {
          this.alertService.success('Workflow created');
          this.form.reset();
          this.submitted = false;
          this.loading = false;
        },
        error: error => {
          this.alertService.error(error);
          this.loading = false;
        }
      });
  }
}
