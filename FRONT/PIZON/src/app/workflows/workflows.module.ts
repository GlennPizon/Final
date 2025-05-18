import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { WorkflowsRoutingModule } from './workflows-routing.module';
import { AddEditComponent } from './add-edit.component';
import { ListComponent } from './list.component';
import { WorkflowsLayoutComponent } from './layout.component';

@NgModule({
  declarations: [
    AddEditComponent,
    ListComponent,
    WorkflowsLayoutComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    WorkflowsRoutingModule
  ]
})
export class WorkflowsModule {}
