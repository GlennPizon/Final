import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountsRoutingModule } from './account-routing.module';
import { LayoutComponent } from './layout.component';
import { ListComponent } from './list.component';
import { AddEditComponent } from './add-edit.component';
import { OverviewComponent } from './overview.component';
import { SubnavComponent } from './subnav.component';

@NgModule({
  declarations: [
  
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AccountsRoutingModule,
    LayoutComponent,
    ListComponent,
    AddEditComponent,
    OverviewComponent,
    SubnavComponent
  ]
})
export class AccountsModule {}
