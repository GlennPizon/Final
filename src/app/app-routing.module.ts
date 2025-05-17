import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const APP_ROUTER: Routes = [
  {
    path: '',
    redirectTo: '/accounts',
    pathMatch: 'full'
  },
  {
    path: 'accounts',
    loadComponent: () => import('./pages/dashboard/accounts/accounts-list.component').then(m => m.AccountsListComponent)
  },
  {
    path: 'departments',
    loadComponent: () => import('./pages/dashboard/departments/departments.component').then(m => m.DepartmentsComponent)
  },
  {
    path: 'employees',
    loadChildren: () => import('./pages/employees/employees.module').then(m => m.EmployeesModule)
  },
  {
    path: 'workflows',
    loadChildren: () => import('./pages/workflows/workflows.module').then(m => m.WorkflowsModule)
  }
];

export const routerConfig = RouterModule.forRoot(APP_ROUTER);
