import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AccountService } from '../../services/account.service';
import { SharedModule } from '../../shared/shared.module';

import { DashboardComponent } from './dashboard.component';
import { AccountsListComponent } from './accounts/accounts-list.component';
import { AccountModalComponent } from './accounts/account-modal.component';
import { DepartmentsComponent } from './departments/departments.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule,
    DashboardRoutingModule,
    SharedModule
  ],
  providers: [
    AccountService
  ]
})
export class DashboardModule { }
