import {
  AccountService,
  environment
} from "./chunk-NRVHY6N7.js";
import {
  Injectable,
  catchError,
  setClassMetadata,
  throwError,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-IQD5Y6SM.js";

// src/app/_helpers/error.interceptor.ts
var ErrorInterceptor = class _ErrorInterceptor {
  accountService;
  constructor(accountService) {
    this.accountService = accountService;
  }
  intercept(request, next) {
    return next.handle(request).pipe(catchError((err) => {
      if ([401, 403].includes(err.status) && this.accountService.accountValue) {
        this.accountService.logout();
      }
      const error = err && err.error && err.error.message || err.statusText;
      console.error(err);
      return throwError(error);
    }));
  }
  static \u0275fac = function ErrorInterceptor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ErrorInterceptor)(\u0275\u0275inject(AccountService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ErrorInterceptor, factory: _ErrorInterceptor.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ErrorInterceptor, [{
    type: Injectable
  }], () => [{ type: AccountService }], null);
})();

// src/app/_helpers/jwt.interceptor.ts
var JwtInterceptor = class _JwtInterceptor {
  accountService;
  constructor(accountService) {
    this.accountService = accountService;
  }
  intercept(request, next) {
    const account = this.accountService.accountValue;
    const isLoggedIn = account && account.jwtToken;
    const isApiUrl = request.url.startsWith(environment.apiUrl);
    if (isLoggedIn && isApiUrl) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${account.jwtToken}` }
      });
    }
    return next.handle(request);
  }
  static \u0275fac = function JwtInterceptor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _JwtInterceptor)(\u0275\u0275inject(AccountService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _JwtInterceptor, factory: _JwtInterceptor.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JwtInterceptor, [{
    type: Injectable
  }], () => [{ type: AccountService }], null);
})();

// src/app/_helpers/must-match.validator.ts
function MustMatch(controlName, matchingControlName) {
  return (formGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    if (matchingControl.errors && !matchingControl.errors["mustMatch"]) {
      return;
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}

// src/app/_helpers/app.initializer.ts
function appInitializer(accountService) {
  return () => new Promise((resolve) => {
    accountService.refreshToken().subscribe().add(resolve);
  });
}

export {
  ErrorInterceptor,
  JwtInterceptor,
  MustMatch,
  appInitializer
};
//# sourceMappingURL=chunk-MC6MZTEJ.js.map
