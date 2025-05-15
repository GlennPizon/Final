import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable, catchError, switchMap, throwError } from 'rxjs';

@Injectable()
export class tokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');

    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(req).pipe(
  catchError(error => {
    if (error.status === 401) {
      return this.authService.refreshToken().pipe(
        switchMap(response => {
          localStorage.setItem('token', response.token);
          const newRequest = req.clone({
            setHeaders: { Authorization: `Bearer ${response.token}` }
          });
          return next.handle(newRequest); // Retry request with new token
        }),
        catchError(refreshError => {
          this.authService.logout(); // Logout if refresh fails
          return throwError(() => refreshError);
        })
      );
    }
    return throwError(() => error);
  })
);

  }
}
