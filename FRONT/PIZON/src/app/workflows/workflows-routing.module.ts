import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkflowsLayoutComponent } from './layout.component';
import { ListComponent } from './list.component';
import { AddEditComponent } from './add-edit.component';
import { AuthGuard } from '../_helpers';

const routes: Routes = [
  {
    path: '', component: WorkflowsLayoutComponent, canActivate: [AuthGuard], children: [
      { path: '', component: ListComponent },
      { path: 'add', component: AddEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkflowsRoutingModule {}
