import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DetailsComponent } from './details/details.component';
import { UpdateComponent } from './update/update.component';
import { AuthGuard } from '../_helpers/auth.guard';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, canActivate: [AuthGuard], children: [
      { path: '', component: DetailsComponent },
      { path: 'edit', component: UpdateComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {}
