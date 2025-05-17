import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeesRoutingModule } from './employees-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule {}
