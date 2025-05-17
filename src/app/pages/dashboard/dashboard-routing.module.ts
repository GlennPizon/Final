import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AccountsListComponent } from './accounts/accounts-list.component';
import { DepartmentsModule } from './departments/departments.module';
import { DepartmentsComponent } from './departments/departments.component';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./dashboard.component').then(m => m.DashboardComponent),
    children: [
      {
        path: 'accounts',
        loadComponent: () => import('./accounts/accounts-list.component').then(m => m.AccountsListComponent)
      },
      {
        path: '',
        component: DepartmentsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
