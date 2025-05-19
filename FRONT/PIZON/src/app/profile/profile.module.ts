import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileRoutingModule } from './profile-routing.module';
import { DetailsComponent } from './details/details.component';
import { UpdateComponent } from './update/update.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProfileRoutingModule,
    DetailsComponent,
    UpdateComponent,
    LayoutComponent
  ]
})
export class ProfileModule {}
