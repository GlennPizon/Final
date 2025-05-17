import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Account } from '../../../models/account.model';
import { AccountService } from '../../../services/account.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AccountModalComponent } from './account-modal.component';

@Component({
  selector: 'app-accounts-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgbModule, AccountModalComponent],
  template: `
    <div class="container-fluid py-3">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h2>Accounts</h2>
      </div>

      <div class="table-responsive">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th>Title</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let account of accounts">
              <td>{{ account.title }}</td>
              <td>{{ account.firstName }}</td>
              <td>{{ account.lastName }}</td>
              <td>{{ account.email }}</td>
              <td>
                <span class="badge" [ngClass]="account.role === 'admin' ? 'bg-danger' : 'bg-primary'">
                  {{ account.role }}
                </span>
              </td>
              <td>
                <span class="badge" [ngClass]="account.status === 'active' ? 'bg-success' : 'bg-secondary'">
                  {{ account.status }}
                </span>
              </td>
              <td>
                <button class="btn btn-sm btn-outline-secondary" (click)="editAccount(account)">
                  <i class="bi bi-pencil"></i> Edit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="d-flex justify-content-end mt-3">
        <button class="btn btn-primary" (click)="openAccountModal()">
          <i class="bi bi-plus"></i> Add Account
        </button>
      </div>
    </div>
  `,
  styles: [`
    .badge {
      text-transform: capitalize;
    }
  `]
})
export class AccountsListComponent implements OnInit {
  accounts: Account[] = [
    {
      id: 1,
      title: 'Mr.',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      role: 'admin',
      status: 'active'
    }
  ];

  constructor(
    private accountService: AccountService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.loadAccounts();
  }

  loadAccounts() {
    this.accountService.getAccounts().subscribe(
      accounts => this.accounts = accounts
    );
  }

  openAccountModal(account?: Account) {
    const modalRef = this.modalService.open(AccountModalComponent, { size: 'lg' });
    if (account) {
      modalRef.componentInstance.account = account;
    }

    modalRef.result.then((result) => {
      this.loadAccounts();
    }, (reason) => {
      // Modal dismissed
    });
  }

  editAccount(account: Account) {
    this.openAccountModal(account);
  }

  deleteAccount(account: Account) {
    if (confirm('Are you sure you want to delete ' + account.firstName + ' ' + account.lastName + '\'s account?')) {
      this.accountService.deleteAccount(account.id).subscribe(() => {
        this.loadAccounts();
      });
    }
  }
}
