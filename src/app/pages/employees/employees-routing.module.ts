import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { RequestComponent } from './request/request.component';
import { WorkflowsComponent } from './workflows.component';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./employees.component').then(m => m.EmployeesComponent)
  },
  {
    path: 'requests',
    loadComponent: () => import('./requests-page.component').then(m => m.EmployeeRequestsPageComponent)
  },
  {
    path: 'workflows',
    loadComponent: () => import('./workflows.component').then(m => m.WorkflowsComponent)
  },
  {
    path: 'transfer',
    loadComponent: () => import('./transfer/transfer.component').then(m => m.TransferComponent)
  },
  {
    path: 'edit',
    loadComponent: () => import('./edit/edit.component').then(m => m.EditComponent)
  },
  {
    path: 'new',
    loadComponent: () => import('./new/new.component').then(m => m.NewComponent)
  },
  {
    path: ':id/requests/new',
    loadComponent: () => import('./requests/new-request.component').then(m => m.NewRequestComponent)
  },
  {
    path: ':id/requests/edit/:requestId',
    loadComponent: () => import('./requests/edit-request.component').then(m => m.EditRequestComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule {}
