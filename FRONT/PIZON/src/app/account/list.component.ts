import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AccountService } from '../_services';
import { Account } from '../_models/account';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit, OnDestroy {
  accounts: Account[] = [];
  private subscription!: Subscription;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.subscription = this.accountService.getAll().subscribe(accounts => {
      this.accounts = accounts;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
