import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Account } from '../models/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private accounts: Account[] = [
    {
      id: 1,
      title: 'Mr.',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      role: 'admin',
      status: 'active'
    },
    {
      id: 2,
      title: 'Ms.',
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      role: 'user',
      status: 'active'
    },
    {
      id: 3,
      title: 'Dr.',
      firstName: 'Mike',
      lastName: 'Johnson',
      email: 'mike.johnson@example.com',
      role: 'user',
      status: 'inactive'
    }
  ];
  private nextId = 4;

  constructor() { }

  getAccounts(): Observable<Account[]> {
    return of(this.accounts);
  }

  getAccount(id: number): Observable<Account> {
    const account = this.accounts.find(a => a.id === id) as Account;
    return of(account);
  }

  createAccount(account: Omit<Account, 'id'>): Observable<Account> {
    const newAccount = { ...account, id: this.nextId++ };
    this.accounts.push(newAccount);
    return of(newAccount);
  }

  updateAccount(id: number, changes: Partial<Account>): Observable<Account> {
    const index = this.accounts.findIndex(a => a.id === id);
    if (index !== -1) {
      this.accounts[index] = { ...this.accounts[index], ...changes };
    }
    return of(this.accounts[index]);
  }

  deleteAccount(id: number): Observable<void> {
    const index = this.accounts.findIndex(a => a.id === id);
    if (index !== -1) {
      this.accounts.splice(index, 1);
    }
    return of();
  }
}
