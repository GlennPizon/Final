import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RequestsRoutingModule } from './requests-routing.module';
import { AddEditComponent } from './add-edit.component';
import { ListComponent } from './list.component';
import { RequestsLayoutComponent } from './layout.component';

@NgModule({
  declarations: [
    AddEditComponent,
    ListComponent,
    RequestsLayoutComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RequestsRoutingModule
  ]
})
export class RequestsModule {}
