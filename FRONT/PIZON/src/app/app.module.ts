import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavbarComponent } from './_components/navbar/navbar.component';
import { ToastComponent } from './_components/toast/toast.component';
import { AlertComponent } from './_components/alert.component';
import { LoaderComponent } from './_components/loader/loader.component';
import { ModalComponent } from './_components/modal/modal.component';

import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { HomeModule } from './home/home.module';
import { WorkflowsModule } from './workflows/workflows.module';
import { RequestsModule } from './requests/requests.module';
import { ProfileModule } from './profile/profile.module';
import { EmployeesModule } from './employees/employees.module';
import { DepartmentsModule } from './departments/departments.module';
import { AccountsModule } from './account';

@NgModule({
  declarations: [
    AppComponent, // ✅ Only components go here
    NavbarComponent,
    ToastComponent,
    AlertComponent,
    LoaderComponent,
    ModalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // HomeModule, // ✅ Modules go in imports, not declarations
    // WorkflowsModule,
    // RequestsModule,
    // ProfileModule,
    // HomeModule,
    // EmployeesModule,
    // DepartmentsModule,
    // AccountsModule,

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
