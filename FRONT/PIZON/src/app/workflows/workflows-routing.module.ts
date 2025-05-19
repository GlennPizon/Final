import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list.component';
import { WorkflowCreateComponent } from './create.component';
import { AuthGuard } from '../_helpers/auth.guard';
import { Role } from '../_models/role';

const routes: Routes = [
  {
    path: ':employeeId',
    component: ListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ':employeeId/create',
    component: WorkflowCreateComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkflowsRoutingModule { }