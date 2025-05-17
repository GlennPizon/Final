import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsListComponent } from './accounts-list.component';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./accounts-list.component').then(m => m.AccountsListComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
