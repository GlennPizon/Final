import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_helpers/auth.guard';

export const routes: Routes = [
  // Default redirect
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // Public routes
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  

  // Authenticated routes
  {
    path: '',
    canActivateChild: [AuthGuard],
    children: [
      { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
      { path: 'accounts', loadChildren: () => import('./account/account.module').then(m => m.AccountsModule) },
      { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
      { path: 'employees', loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule) },
      { path: 'departments', loadChildren: () => import('./departments/departments.module').then(m => m.DepartmentsModule) },
      { path: 'requests', loadChildren: () => import('./requests/requests.module').then(m => m.RequestsModule) },
      { path: 'workflows', loadChildren: () => import('./workflows/workflows.module').then(m => m.WorkflowsModule) },
    ]
  },

  // Fallback
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
