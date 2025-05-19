import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { WorkflowsRoutingModule } from './workflows-routing.module';
import { ListComponent } from './list.component';
import { WorkflowCreateComponent } from './create.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    WorkflowsRoutingModule
  ],
  declarations: [
    ListComponent,
    WorkflowCreateComponent
  ]
})
export class WorkflowsModule { }