import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AccountsListComponent } from './accounts/accounts-list.component';
import { AccountModalComponent } from './accounts/account-modal.component';
import { AccountsRoutingModule } from './accounts/accounts-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    DashboardRoutingModule,
    AccountsRoutingModule
  ]
})
export class DashboardModule { }
