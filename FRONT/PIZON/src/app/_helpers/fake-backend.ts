import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

export function fakeBackendProvider() {
  let users: any[] = [{ id: 1, username: 'admin', password: 'admin', role: 'Admin' }];

  return {
    provide: HTTP_INTERCEPTORS,
    useClass: class implements HttpInterceptor {
      intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        return of(null).pipe(mergeMap(handleRoute)).pipe(materialize()).pipe(delay(500)).pipe(dematerialize());

        function handleRoute() {
          switch (true) {
            case url.endsWith('/account/authenticate') && method === 'POST':
              return authenticate();
            default:
              return next.handle(request);
          }
        }

        function authenticate() {
          const { username, password } = body;
          const user = users.find(x => x.username === username && x.password === password);
          if (!user) return error('Username or password is incorrect');
          return ok({
            id: user.id,
            username: user.username,
            role: user.role,
            jwtToken: 'fake-jwt-token'
          });
        }

        function ok(body: any) {
          return of(new HttpResponse({ status: 200, body }));
        }

        function error(message: string) {
          return throwError(() => new Error(message));
        }
      }
    },
    multi: true
  };
}
