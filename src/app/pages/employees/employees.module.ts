import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: '',
    component: EmployeeDashboardComponent
  },
  {
    path: 'list',
    component: EmployeesComponent
  },
  {
    path: 'request',
    component: RequestComponent
  },
  {
    path: ':id/requests',
    component: EmployeeRequestsPageComponent
  },
  {
    path: ':id/requests/new',
    component: NewRequestComponent
  },
  {
    path: ':id/requests/edit/:requestId',
    component: EditRequestComponent
  }
];

import { RequestComponent } from './request/request.component';
import { EmployeesComponent } from './employees.component';
import { EmployeeDashboardComponent } from './dashboard/dashboard.component';
import { EmployeeRequestsComponent } from './requests/requests.component';
import { EmployeeRequestsPageComponent } from './requests-page.component';
import { NewRequestComponent } from './requests/new-request.component';
import { EditRequestComponent } from './requests/edit-request.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    RouterModule.forChild(routes)
  ]
})
export class EmployeesModule {}
