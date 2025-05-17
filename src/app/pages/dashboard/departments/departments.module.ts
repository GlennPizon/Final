import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentsComponent } from './departments.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    DepartmentsRoutingModule,
    DepartmentsComponent
  ]
})
export class DepartmentsModule { }
