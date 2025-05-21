import {
  AccountService
} from "./chunk-NRVHY6N7.js";
import {
  Injectable,
  Router,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-IQD5Y6SM.js";

// src/app/_helpers/auth.guard.ts
var AuthGuard = class _AuthGuard {
  router;
  accountService;
  constructor(router, accountService) {
    this.router = router;
    this.accountService = accountService;
  }
  canActivate(route, state) {
    const account = this.accountService.accountValue;
    if (!account) {
      this.router.navigate(["/account/login"], { queryParams: { returnUrl: state.url } });
      return false;
    }
    const requiredRoles = route.data["roles"];
    if (requiredRoles && !requiredRoles.includes(account.role)) {
      this.router.navigate(["/"]);
      return false;
    }
    return true;
  }
  static \u0275fac = function AuthGuard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthGuard)(\u0275\u0275inject(Router), \u0275\u0275inject(AccountService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthGuard, factory: _AuthGuard.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthGuard, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: Router }, { type: AccountService }], null);
})();

export {
  AuthGuard
};
//# sourceMappingURL=chunk-PF5I5EEP.js.map
