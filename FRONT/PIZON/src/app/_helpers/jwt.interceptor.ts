import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountService } from '../_services';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private accountService: AccountService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const user = this.accountService.userValue;
    if (user && user.jwtToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${user.jwtToken}`
        }
      });
    }

    return next.handle(request);
  }
}
