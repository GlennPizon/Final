import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RequestsRoutingModule } from './requests-routing.module';
import { AddEditComponent } from './add-edit.component';
import { ListComponent } from './list.component';
import { RequestsLayoutComponent } from './layout.component';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RequestsRoutingModule,
    AddEditComponent,
    ListComponent,
    RequestsLayoutComponent
  ]
})
export class RequestsModule {}
