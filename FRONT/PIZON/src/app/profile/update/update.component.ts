import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../../_services/account.service';
import { AlertService } from '../../_services/alert.service';

@Component({
  selector: 'app-profile-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    const account = this.accountService.userValue;

    if (!account) {
      this.alertService.error('User account not found.');
      return;
    }

    this.form = this.formBuilder.group({
      firstName: [account.firstName, Validators.required],
      lastName: [account.lastName, Validators.required],
      email: [{ value: account.email, disabled: true }],
      password: ['', Validators.minLength(6)]
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit(): void {
    if (this.submitted || this.loading || this.form.invalid) return; // Prevent multiple submissions

    this.submitted = true;
    this.loading = true;
    this.alertService.clear();

    this.accountService.update(parseInt(this.accountService.userValue!.id), this.form.getRawValue()).subscribe({
      next: () => {
        this.alertService.success('Profile updated successfully!', { autoClose: true });
        this.loading = false;
      },
      error: error => {
        const errorMsg = error?.message || 'Failed to update profile. Please try again.';
        this.alertService.error(errorMsg);
        this.loading = false;
      }
    });
  }
}
