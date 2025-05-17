import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutRoutingModule } from './layout-routing.module';

import { ShellComponent } from './shell/shell.component';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutRoutingModule,
    SharedModule, // ✅ CORRECT: imported here, not declared
    ShellComponent
  ]
})
export class LayoutModule {}
