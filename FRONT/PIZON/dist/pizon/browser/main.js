import {
  ErrorInterceptor,
  JwtInterceptor,
  appInitializer
} from "./chunk-MC6MZTEJ.js";
import {
  Role
} from "./chunk-YJO6JCZO.js";
import {
  AuthGuard
} from "./chunk-PF5I5EEP.js";
import {
  AccountService,
  environment
} from "./chunk-NRVHY6N7.js";
import {
  APP_INITIALIZER,
  BrowserModule,
  CommonModule,
  Component,
  EventEmitter,
  HTTP_INTERCEPTORS,
  HashLocationStrategy,
  HttpClientModule,
  Input,
  LocationStrategy,
  NgClass,
  NgIf,
  NgModule,
  Output,
  ReactiveFormsModule,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  enableProdMode,
  platformBrowser,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IQD5Y6SM.js";

// src/app/home/home.component.ts
var HomeComponent = class _HomeComponent {
  accountService;
  account;
  constructor(accountService) {
    this.accountService = accountService;
  }
  ngOnInit() {
    this.account = this.accountService.accountValue;
  }
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)(\u0275\u0275directiveInject(AccountService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["ng-component"]], standalone: false, decls: 6, vars: 1, consts: [[1, "p-4"], [1, "container"]], template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p");
      \u0275\u0275text(5, "You're logged in with Angular 10 & JWT!!");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("Hi ", ctx.account.firstName, "!");
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeComponent, [{
    type: Component,
    args: [{ standalone: false, template: `<div class="p-4">\r
    <div class="container">\r
        <h1>Hi {{account.firstName}}!</h1>\r
        <p>You're logged in with Angular 10 & JWT!!</p>\r
    </div>\r
</div>` }]
  }], () => [{ type: AccountService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/home/home.component.ts", lineNumber: 8 });
})();

// src/app/app-routing.module.ts
var accountModule = () => import("./chunk-7K6CVN56.js").then((x) => x.AccountsModule);
var adminModule = () => import("./chunk-644K3WAG.js").then((x) => x.AdminModule);
var profileModule = () => import("./chunk-IMFKK6JR.js").then((x) => x.ProfileModule);
var routes = [
  { path: "", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "account", loadChildren: accountModule },
  { path: "profile", loadChildren: profileModule, canActivate: [AuthGuard] },
  { path: "admin", loadChildren: adminModule, canActivate: [AuthGuard], data: { roles: [Role.Admin] } },
  { path: "employees", loadChildren: () => import("./chunk-LZZHUMZO.js").then((m) => m.EmployeesModule), canActivate: [AuthGuard] },
  { path: "departments", loadChildren: () => import("./chunk-JMLZTBCK.js").then((m) => m.DepartmentsModule), canActivate: [AuthGuard] },
  { path: "workflows", loadChildren: () => import("./chunk-YVQCM3GO.js").then((m) => m.WorkflowsModule), canActivate: [AuthGuard] },
  { path: "requests", loadChildren: () => import("./chunk-S6CHIW6F.js").then((m) => m.RequestsModule), canActivate: [AuthGuard] },
  // otherwise redirect to home
  { path: "**", redirectTo: "" }
];
var AppRoutingModule = class _AppRoutingModule {
  static \u0275fac = function AppRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ], imports: [RouterModule.forRoot(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule],
      providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy }
      ]
    }]
  }], null, null);
})();

// src/app/_components/alert.component.ts
var AlertComponent = class _AlertComponent {
  type = "success";
  message = "";
  static \u0275fac = function AlertComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AlertComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AlertComponent, selectors: [["app-alert"]], inputs: { type: "type", message: "message" }, decls: 2, vars: 2, consts: [[1, "alert", 3, "ngClass"]], template: function AlertComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275text(1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", ctx.type);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.message, "\n");
    }
  }, dependencies: [CommonModule, NgClass], styles: ["\n\n.alert[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-radius: 5px;\n  font-weight: bold;\n}\n.success[_ngcontent-%COMP%] {\n  background-color: #4CAF50;\n  color: white;\n}\n.error[_ngcontent-%COMP%] {\n  background-color: #F44336;\n  color: white;\n}\n.warning[_ngcontent-%COMP%] {\n  background-color: #FF9800;\n  color: white;\n}\n/*# sourceMappingURL=alert.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlertComponent, [{
    type: Component,
    args: [{ selector: "app-alert", imports: [CommonModule], template: '<div class="alert" [ngClass]="type">\r\n  {{ message }}\r\n</div>\r\n', styles: ["/* src/app/_components/alert.component.css */\n.alert {\n  padding: 10px;\n  border-radius: 5px;\n  font-weight: bold;\n}\n.success {\n  background-color: #4CAF50;\n  color: white;\n}\n.error {\n  background-color: #F44336;\n  color: white;\n}\n.warning {\n  background-color: #FF9800;\n  color: white;\n}\n/*# sourceMappingURL=alert.component.css.map */\n"] }]
  }], null, { type: [{
    type: Input
  }], message: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AlertComponent, { className: "AlertComponent", filePath: "src/app/_components/alert.component.ts", lineNumber: 11 });
})();

// src/app/app.component.ts
var _c0 = (a0) => ({ "bg-light": a0 });
var _c1 = () => ({ exact: true });
function AppComponent_nav_1_a_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 12);
    \u0275\u0275text(1, "Admin");
    \u0275\u0275elementEnd();
  }
}
function AppComponent_nav_1_a_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 13);
    \u0275\u0275text(1, "Department");
    \u0275\u0275elementEnd();
  }
}
function AppComponent_nav_1_a_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 14);
    \u0275\u0275text(1, "Employee");
    \u0275\u0275elementEnd();
  }
}
function AppComponent_nav_1_a_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 15);
    \u0275\u0275text(1, "Request");
    \u0275\u0275elementEnd();
  }
}
function AppComponent_nav_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav", 3)(1, "div", 4)(2, "a", 5);
    \u0275\u0275text(3, "Home");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 6);
    \u0275\u0275text(5, "Profile");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, AppComponent_nav_1_a_6_Template, 2, 0, "a", 7)(7, AppComponent_nav_1_a_7_Template, 2, 0, "a", 8)(8, AppComponent_nav_1_a_8_Template, 2, 0, "a", 9)(9, AppComponent_nav_1_a_9_Template, 2, 0, "a", 10);
    \u0275\u0275elementStart(10, "a", 11);
    \u0275\u0275listener("click", function AppComponent_nav_1_Template_a_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275text(11, "Logout");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(5, _c1));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.account.role === ctx_r1.Role.Admin);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.account.role === ctx_r1.Role.Admin);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.account.role === ctx_r1.Role.Admin);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.account.role === ctx_r1.Role.Admin);
  }
}
var AppComponent = class _AppComponent {
  accountService;
  Role = Role;
  account;
  title = "user-management-system";
  constructor(accountService) {
    this.accountService = accountService;
    this.accountService.account.subscribe((x) => this.account = x);
  }
  logout() {
    this.accountService.logout();
  }
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)(\u0275\u0275directiveInject(AccountService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app"]], standalone: false, decls: 5, vars: 4, consts: [[1, "app-container", 3, "ngClass"], ["class", "navbar navbar-expand navbar-dark bg-dark", 4, "ngIf"], ["name", "subnav"], [1, "navbar", "navbar-expand", "navbar-dark", "bg-dark"], [1, "navbar-nav"], ["routerLink", "/", "routerLinkActive", "active", 1, "nav-item", "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/profile", "routerLinkActive", "active", 1, "nav-item", "nav-link"], ["routerLink", "/admin", "routerLinkActive", "active", "class", "nav-item nav-link", 4, "ngIf"], ["routerLink", "/departments", "routerLinkActive", "active", "class", "nav-item nav-link", 4, "ngIf"], ["routerLink", "/employees", "routerLinkActive", "active", "class", "nav-item nav-link", 4, "ngIf"], ["routerLink", "/requests", "routerLinkActive", "active", "class", "nav-item nav-link", 4, "ngIf"], [1, "nav-item", "nav-link", 3, "click"], ["routerLink", "/admin", "routerLinkActive", "active", 1, "nav-item", "nav-link"], ["routerLink", "/departments", "routerLinkActive", "active", 1, "nav-item", "nav-link"], ["routerLink", "/employees", "routerLinkActive", "active", 1, "nav-item", "nav-link"], ["routerLink", "/requests", "routerLinkActive", "active", 1, "nav-item", "nav-link"]], template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, AppComponent_nav_1_Template, 12, 6, "nav", 1);
      \u0275\u0275element(2, "router-outlet", 2)(3, "app-alert")(4, "router-outlet");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c0, ctx.account));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.account);
    }
  }, dependencies: [NgClass, NgIf, RouterOutlet, RouterLink, RouterLinkActive, AlertComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app", standalone: false, template: `<div class="app-container" [ngClass]="{ 'bg-light': account }">\r
    <!-- main nav -->\r
    <nav class="navbar navbar-expand navbar-dark bg-dark" *ngIf="account">\r
        <div class="navbar-nav">\r
            <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" class="nav-item nav-link">Home</a>\r
            <a routerLink="/profile" routerLinkActive="active" class="nav-item nav-link">Profile</a>\r
            <a *ngIf="account.role === Role.Admin" routerLink="/admin" routerLinkActive="active" class="nav-item nav-link">Admin</a>\r
            <a *ngIf="account.role === Role.Admin" routerLink="/departments" routerLinkActive="active" class="nav-item nav-link">Department</a>\r
            <a *ngIf="account.role === Role.Admin" routerLink="/employees" routerLinkActive="active" class="nav-item nav-link">Employee</a>\r
            <a *ngIf="account.role === Role.Admin" routerLink="/requests" routerLinkActive="active" class="nav-item nav-link">Request</a>\r
            <a (click)="logout()" class="nav-item nav-link">Logout</a>\r
        </div>\r
    </nav>\r
\r
    <!-- subnav router outlet -->\r
    <router-outlet name="subnav"></router-outlet>\r
\r
    <!-- global alert -->\r
    <app-alert></app-alert>\r
\r
    <!-- main router outlet -->\r
    <router-outlet></router-outlet>\r
</div>` }]
  }], () => [{ type: AccountService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 10 });
})();

// src/app/_components/navbar/navbar.component.ts
var NavbarComponent = class _NavbarComponent {
  static \u0275fac = function NavbarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavbarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavbarComponent, selectors: [["app-navbar"]], decls: 2, vars: 0, template: function NavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "p");
      \u0275\u0275text(1, "navbar works!");
      \u0275\u0275elementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavbarComponent, [{
    type: Component,
    args: [{ selector: "app-navbar", imports: [], template: "<p>navbar works!</p>\r\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavbarComponent, { className: "NavbarComponent", filePath: "src/app/_components/navbar/navbar.component.ts", lineNumber: 9 });
})();

// src/app/_components/loader/loader.component.ts
function LoaderComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1, " Loading...\n");
    \u0275\u0275elementEnd();
  }
}
var LoaderComponent = class _LoaderComponent {
  isLoading = false;
  static \u0275fac = function LoaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoaderComponent, selectors: [["app-loader"]], inputs: { isLoading: "isLoading" }, decls: 1, vars: 1, consts: [["class", "loader", 4, "ngIf"], [1, "loader"]], template: function LoaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, LoaderComponent_div_0_Template, 2, 0, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isLoading);
    }
  }, styles: ["\n\n.loader[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n  text-align: center;\n  padding: 20px;\n}\n/*# sourceMappingURL=loader.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoaderComponent, [{
    type: Component,
    args: [{ selector: "app-loader", template: '<div *ngIf="isLoading" class="loader">\r\n  Loading...\r\n</div>\r\n', styles: ["/* src/app/_components/loader/loader.component.css */\n.loader {\n  font-size: 18px;\n  font-weight: bold;\n  text-align: center;\n  padding: 20px;\n}\n/*# sourceMappingURL=loader.component.css.map */\n"] }]
  }], null, { isLoading: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoaderComponent, { className: "LoaderComponent", filePath: "src/app/_components/loader/loader.component.ts", lineNumber: 8 });
})();

// src/app/_components/modal/modal.component.ts
function ModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 3);
    \u0275\u0275listener("click", function ModalComponent_div_0_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275text(5, "Close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.title);
  }
}
var ModalComponent = class _ModalComponent {
  title = "";
  isOpen = false;
  close = new EventEmitter();
  onClose() {
    this.isOpen = false;
    this.close.emit();
  }
  static \u0275fac = function ModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModalComponent, selectors: [["app-modal"]], inputs: { title: "title", isOpen: "isOpen" }, outputs: { close: "close" }, decls: 1, vars: 1, consts: [["class", "modal", 4, "ngIf"], [1, "modal"], [1, "modal-content"], [3, "click"]], template: function ModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ModalComponent_div_0_Template, 6, 1, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isOpen);
    }
  }, styles: ["\n\n.modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: white;\n  padding: 20px;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=modal.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalComponent, [{
    type: Component,
    args: [{ selector: "app-modal", template: '<div class="modal" *ngIf="isOpen">\r\n  <div class="modal-content">\r\n    <h2>{{ title }}</h2>\r\n    <button (click)="onClose()">Close</button>\r\n  </div>\r\n</div>\r\n', styles: ["/* src/app/_components/modal/modal.component.css */\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.modal-content {\n  background: white;\n  padding: 20px;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=modal.component.css.map */\n"] }]
  }], null, { title: [{
    type: Input
  }], isOpen: [{
    type: Input
  }], close: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ModalComponent, { className: "ModalComponent", filePath: "src/app/_components/modal/modal.component.ts", lineNumber: 8 });
})();

// src/app/_components/toast/toast.component.ts
function ToastComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.message, "\n");
  }
}
var ToastComponent = class _ToastComponent {
  message = "";
  duration = 3e3;
  ngOnInit() {
    setTimeout(() => this.message = "", this.duration);
  }
  static \u0275fac = function ToastComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToastComponent, selectors: [["app-toast"]], inputs: { message: "message", duration: "duration" }, decls: 1, vars: 1, consts: [["class", "toast", 4, "ngIf"], [1, "toast"]], template: function ToastComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ToastComponent_div_0_Template, 2, 1, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.message);
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule], styles: ["\n\n.toast[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  background: #333;\n  color: white;\n  padding: 10px;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=toast.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastComponent, [{
    type: Component,
    args: [{ selector: "app-toast", imports: [
      CommonModule,
      ReactiveFormsModule
    ], template: '<div class="toast" *ngIf="message">\r\n  {{ message }}\r\n</div>\r\n', styles: ["/* src/app/_components/toast/toast.component.css */\n.toast {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  background: #333;\n  color: white;\n  padding: 10px;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=toast.component.css.map */\n"] }]
  }], null, { message: [{
    type: Input
  }], duration: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToastComponent, { className: "ToastComponent", filePath: "src/app/_components/toast/toast.component.ts", lineNumber: 15 });
})();

// src/app/app.module.ts
var AppModule = class _AppModule {
  static \u0275fac = function AppModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppModule, bootstrap: [AppComponent] });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [
    { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [AccountService] },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
    // provider used to create fake backend
    //fakeBackendProvider
  ], imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    AlertComponent
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppModule, [{
    type: NgModule,
    args: [{
      imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        CommonModule,
        AlertComponent
      ],
      declarations: [
        AppComponent,
        HomeComponent
      ],
      providers: [
        { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [AccountService] },
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
        // provider used to create fake backend
        //fakeBackendProvider
      ],
      bootstrap: [AppComponent]
    }]
  }], null, null);
})();

// src/main.ts
if (environment.production) {
  enableProdMode();
}
platformBrowser().bootstrapModule(AppModule).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
