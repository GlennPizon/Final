import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { EmployeeDashboardComponent } from './dashboard/dashboard.component';
import { RequestComponent } from './request/request.component';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./dashboard/dashboard.component').then(m => m.EmployeeDashboardComponent),
    children: [
      {
        path: 'list',
        loadComponent: () => import('./employees.component').then(m => m.EmployeesComponent)
      },
      {
        path: 'request',
        loadComponent: () => import('./request/request.component').then(m => m.RequestComponent)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule {}
