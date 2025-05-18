import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestService } from '../_services';
import { AlertService } from '../_services';

@Component({
  selector: 'app-request-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private requestService: RequestService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      workflowId: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required]
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
      workflowId: +this.f['workflowId'].value,
      title: this.f['title'].value,
      description: this.f['description'].value
    };

    this.requestService.create(payload).subscribe({
      next: () => {
        this.alertService.success('Request submitted');
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
