import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Account } from '../_models/account';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  accounts: Account[] = [];

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.accountService.getAll().subscribe(accounts => {
      this.accounts = accounts;
    });
  }
}
