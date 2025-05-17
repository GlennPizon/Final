import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Account } from '../../../models/account.model';
import { AccountService } from '../../../services/account.service';

@Component({
  selector: 'app-account-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgbModule],
  template: `
    <div class="modal-header">
      <h4 class="modal-title">{{ account ? 'Edit Account' : 'Add Account' }}</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss()"></button>
    </div>
    <div class="modal-body">
      <form [formGroup]="accountForm">
        <div class="mb-3">
          <label for="title" class="form-label">Title</label>
          <input type="text" class="form-control" id="title" formControlName="title">
          <div *ngIf="accountForm.get('title')?.errors?.['required'] && accountForm.get('title')?.touched" class="text-danger">
            Title is required
          </div>
        </div>

        <div class="mb-3">
          <label for="firstName" class="form-label">First Name</label>
          <input type="text" class="form-control" id="firstName" formControlName="firstName">
          <div *ngIf="accountForm.get('firstName')?.errors?.['required'] && accountForm.get('firstName')?.touched" class="text-danger">
            First name is required
          </div>
        </div>

        <div class="mb-3">
          <label for="lastName" class="form-label">Last Name</label>
          <input type="text" class="form-control" id="lastName" formControlName="lastName">
          <div *ngIf="accountForm.get('lastName')?.errors?.['required'] && accountForm.get('lastName')?.touched" class="text-danger">
            Last name is required
          </div>
        </div>

        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" formControlName="email">
          <div *ngIf="accountForm.get('email')?.errors?.['required'] && accountForm.get('email')?.touched" class="text-danger">
            Email is required
          </div>
          <div *ngIf="accountForm.get('email')?.errors?.['email'] && accountForm.get('email')?.touched" class="text-danger">
            Please enter a valid email
          </div>
        </div>

        <div class="mb-3">
          <label for="role" class="form-label">Role</label>
          <select class="form-select" id="role" formControlName="role">
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <div class="mb-3">
          <label for="status" class="form-label">Status</label>
          <select class="form-select" id="status" formControlName="status">
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </form>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" (click)="activeModal.dismiss()">Cancel</button>
      <button type="button" class="btn btn-primary" (click)="save()" [disabled]="!accountForm.valid">Save</button>
    </div>
  `
})
export class AccountModalComponent implements OnInit {
  @Input() account?: Account;
  accountForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private accountService: AccountService
  ) {
    this.accountForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['user', Validators.required],
      status: ['active', Validators.required]
    });
  }

  ngOnInit() {
    if (this.account) {
      this.accountForm.patchValue(this.account);
    }
  }

  save() {
    if (this.accountForm.valid) {
      const accountData = this.accountForm.value;
      
      if (this.account) {
        // Update existing account
        this.accountService.updateAccount(this.account.id, accountData)
          .subscribe(updatedAccount => {
            this.activeModal.close(updatedAccount);
          });
      } else {
        // Create new account
        this.accountService.createAccount(accountData)
          .subscribe(newAccount => {
            this.activeModal.close(newAccount);
          });
      }
    }
  }
}
