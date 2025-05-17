import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './accounts/layout.component';
import { DashboardComponent } from './accounts/dashboard.component';
import { SubnavComponent } from './accounts/subnav.component';

@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent,
    SubnavComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule {}
