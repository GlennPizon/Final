import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { WorkflowComponent } from './workflow.component';
import { WorkflowsRoutingModule } from './workflows-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    WorkflowsRoutingModule,
    WorkflowComponent
  ]
})
export class WorkflowsModule { }
