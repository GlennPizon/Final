import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccountService } from '../../_services';
import { Account } from '../../_models';

@Component({
  selector: 'app-profile-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy {
  account?: Account;
  private subscription: any;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.subscription = this.accountService.account.subscribe(x => this.account = x ?? undefined);
  }

  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      this.subscription.unsubscribe();
  }
}
