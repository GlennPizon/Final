import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentListComponent } from './list.component';
import { DepartmentAddEditComponent } from './add-edit.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DepartmentsRoutingModule
  ],
  declarations: [
    DepartmentListComponent,
    DepartmentAddEditComponent
  ]
})
export class DepartmentsModule { }