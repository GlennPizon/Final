import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'accounts',
    loadComponent: () => import('./pages/dashboard/accounts/accounts-list.component').then(m => m.AccountsListComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'departments',
    loadComponent: () => import('./pages/departments/departments.component').then(m => m.DepartmentsComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'employees',
    loadChildren: () => import('./pages/employees/employees.module').then(m => m.EmployeesModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'workflows',
    loadChildren: () => import('./pages/workflows/workflows.module').then(m => m.WorkflowsModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
