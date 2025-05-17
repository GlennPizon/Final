import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'accounts',
        loadComponent: () => import('./accounts/accounts-list.component').then(m => m.AccountsListComponent)
      },
      {
        path: 'departments',
        loadComponent: () => import('./departments/departments.component').then(m => m.DepartmentsComponent)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
