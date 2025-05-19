import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RequestsListComponent } from './list.component';
import { RequestsFormComponent } from './form.component';

const routes: Routes = [
  { path: '', component: RequestsListComponent },
  { path: 'add', component: RequestsFormComponent },
  { path: 'edit/:id', component: RequestsFormComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    RequestsListComponent,
    RequestsFormComponent
  ]
})
export class RequestsModule { }