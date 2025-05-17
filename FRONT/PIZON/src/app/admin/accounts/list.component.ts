import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../_services';
import { Account } from '../../_models';

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
