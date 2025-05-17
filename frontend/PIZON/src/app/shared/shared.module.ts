import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ModalComponent } from './components/modal/modal.component';
import { ToastComponent } from './components/toast/toast.component';

@NgModule({
  declarations: [
  
  ],
  imports: [
    CommonModule,
    ModalComponent,
    ToastComponent,
    LoaderComponent,
    SidebarComponent,
    NavbarComponent
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    LoaderComponent,
    ModalComponent,
    ToastComponent
  ]
})
export class SharedModule { }
