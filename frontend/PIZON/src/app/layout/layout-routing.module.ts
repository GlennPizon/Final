import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './shell/shell.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../dashboard/dashboard.module').then(m => m.DashboardModule),
      },
      {
        path: 'accounts',
        loadChildren: () =>
          import('../accounts/accounts.module').then(m => m.AccountsModule),
      },
      {
        path: 'employees',
        loadChildren: () =>
          import('../employees/employees.module').then(m => m.EmployeesModule),
      },
      {
        path: 'departments',
        loadChildren: () =>
          import('../departments/departments.module').then(m => m.DepartmentsModule),
      },
      {
        path: 'requests',
        loadChildren: () =>
          import('../requests/requests.module').then(m => m.RequestsModule),
      },
      {
        path: 'workflows',
        loadChildren: () =>
          import('../workflows/workflows.module').then(m => m.WorkflowsModule),
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'dashboard',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
