import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { EmployeeDashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeDashboardComponent
  },
  {
    path: 'list',
    component: EmployeesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule {}
