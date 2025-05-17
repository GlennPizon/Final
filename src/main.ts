import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { APP_ROUTER } from './app/app-routing.module';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(APP_ROUTER)
  ]
})
  .catch(err => console.error(err));
