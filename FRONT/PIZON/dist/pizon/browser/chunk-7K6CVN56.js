import {
  MustMatch
} from "./chunk-MC6MZTEJ.js";
import "./chunk-PF5I5EEP.js";
import {
  AccountService,
  AlertService
} from "./chunk-NRVHY6N7.js";
import {
  ActivatedRoute,
  CheckboxControlValueAccessor,
  CommonModule,
  Component,
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
  HttpClient,
  NgClass,
  NgControlStatus,
  NgControlStatusGroup,
  NgIf,
  NgModule,
  NgSelectOption,
  ReactiveFormsModule,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  SelectControlValueAccessor,
  UntypedFormBuilder,
  Validators,
  finalize,
  first,
  setClassMetadata,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption,
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
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-IQD5Y6SM.js";

// src/app/account/layout.component.ts
var LayoutComponent = class _LayoutComponent {
  router;
  accountService;
  constructor(router, accountService) {
    this.router = router;
    this.accountService = accountService;
    if (this.accountService.accountValue) {
      this.router.navigate(["/"]);
    }
  }
  static \u0275fac = function LayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LayoutComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AccountService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutComponent, selectors: [["ng-component"]], standalone: false, decls: 5, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col-sm-8", "offset-sm-2", "mt-5"], [1, "card", "m-3"]], template: function LayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "router-outlet");
      \u0275\u0275elementEnd()()()();
    }
  }, dependencies: [RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutComponent, [{
    type: Component,
    args: [{ standalone: false, template: '<div class="container">\r\n    <div class="row">\r\n        <div class="col-sm-8 offset-sm-2 mt-5">\r\n            <div class="card m-3">\r\n                <router-outlet></router-outlet>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>' }]
  }], () => [{ type: Router }, { type: AccountService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutComponent, { className: "LayoutComponent", filePath: "src/app/account/layout.component.ts", lineNumber: 11 });
})();

// src/app/account/login.component.ts
var _c0 = (a0) => ({ "is-invalid": a0 });
function LoginComponent_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Email is required");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Email is invalid");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, LoginComponent_div_8_div_1_Template, 2, 0, "div", 15)(2, LoginComponent_div_8_div_2_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f.email.errors.required);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f.email.errors.email);
  }
}
function LoginComponent_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, LoginComponent_div_15_div_1_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f.password.errors.required);
  }
}
function LoginComponent_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 16);
  }
}
var LoginComponent = class _LoginComponent {
  formBuilder;
  route;
  router;
  accountService;
  alertService;
  http;
  form;
  loading = false;
  submitted = false;
  constructor(formBuilder, route, router, accountService, alertService, http) {
    this.formBuilder = formBuilder;
    this.route = route;
    this.router = router;
    this.accountService = accountService;
    this.alertService = alertService;
    this.http = http;
  }
  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }
  onSubmit() {
    this.submitted = true;
    this.alertService.clear();
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    this.accountService.login(this.f["email"].value, this.f["password"].value).pipe(first()).subscribe({
      next: () => {
        const returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
        this.router.navigateByUrl(returnUrl);
      },
      error: (error) => {
        this.alertService.error(error);
        this.loading = false;
      }
    });
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AccountService), \u0275\u0275directiveInject(AlertService), \u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["ng-component"]], standalone: false, decls: 26, vars: 11, consts: [[1, "card-header"], [1, "card-body"], [3, "ngSubmit", "formGroup"], [1, "form-group"], ["placeholder", "glennpizon@gmail.com", "type", "text", "formControlName", "email", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["placeholder", "glennpizon", "type", "password", "formControlName", "password", 1, "form-control", 3, "ngClass"], [1, "form-row"], [1, "form-group", "col"], [1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], ["routerLink", "../register", 1, "btn", "btn-link"], [1, "form-group", "col", "text-right"], ["routerLink", "../forgot-password", 1, "btn", "btn-link", "pr-0"], [1, "invalid-feedback"], [4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "mr-1"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h3", 0);
      \u0275\u0275text(1, "Login");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 1)(3, "form", 2);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_3_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(4, "div", 3)(5, "label");
      \u0275\u0275text(6, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(7, "input", 4);
      \u0275\u0275template(8, LoginComponent_div_8_Template, 3, 2, "div", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 3)(10, "label");
      \u0275\u0275text(11, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p");
      \u0275\u0275text(13, "glennpizon");
      \u0275\u0275elementEnd();
      \u0275\u0275element(14, "input", 6);
      \u0275\u0275template(15, LoginComponent_div_15_Template, 2, 1, "div", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 7)(17, "div", 8)(18, "button", 9);
      \u0275\u0275template(19, LoginComponent_span_19_Template, 1, 0, "span", 10);
      \u0275\u0275text(20, " Login ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "a", 11);
      \u0275\u0275text(22, "Register");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 12)(24, "a", 13);
      \u0275\u0275text(25, "Forgot Password?");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(7, _c0, ctx.submitted && ctx.f.email.errors));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitted && ctx.f.email.errors);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(9, _c0, ctx.submitted && ctx.f.password.errors));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitted && ctx.f.password.errors);
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
    }
  }, dependencies: [NgClass, NgIf, RouterLink, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ standalone: false, template: `<h3 class="card-header">Login</h3>\r
\r
<div class="card-body">\r
    <form [formGroup]="form" (ngSubmit)="onSubmit()">\r
        <div class="form-group">\r
            <label>Email</label>\r
            <input placeholder="glennpizon@gmail.com" type="text" formControlName="email" class="form-control" [ngClass]="{ 'is-invalid': submitted && f.email.errors }" />\r
            <div *ngIf="submitted && f.email.errors" class="invalid-feedback">\r
                <div *ngIf="f.email.errors.required">Email is required</div>\r
                <div *ngIf="f.email.errors.email">Email is invalid</div>\r
            </div>\r
        </div>\r
        <div class="form-group">\r
            <label>Password</label>\r
            <p>glennpizon</p>\r
            <input placeholder="glennpizon" type="password" formControlName="password" class="form-control" [ngClass]="{ 'is-invalid': submitted && f.password.errors }" />\r
            <div *ngIf="submitted && f.password.errors" class="invalid-feedback">\r
                <div *ngIf="f.password.errors.required">Password is required</div>\r
            </div>\r
        </div>\r
        <div class="form-row">\r
            <div class="form-group col">\r
                <button [disabled]="loading" class="btn btn-primary">\r
                    <span *ngIf="loading" class="spinner-border spinner-border-sm mr-1"></span>\r
                    Login\r
                </button>\r
                <a routerLink="../register" class="btn btn-link">Register</a>\r
            </div>\r
            <div class="form-group col text-right">\r
                <a routerLink="../forgot-password" class="btn btn-link pr-0">Forgot Password?</a>\r
                <!-- <br>\r
                <a routerLink="" class="btn btn-link" (click)="resetFakeBackendStorage()">Reset Fake Accounts</a> -->\r
            </div>\r
        </div>\r
    </form>\r
</div>` }]
  }], () => [{ type: UntypedFormBuilder }, { type: ActivatedRoute }, { type: Router }, { type: AccountService }, { type: AlertService }, { type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/account/login.component.ts", lineNumber: 14 });
})();

// src/app/account/register.component.ts
var _c02 = (a0) => ({ "is-invalid": a0 });
function RegisterComponent_div_18_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Title is required");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275template(1, RegisterComponent_div_18_div_1_Template, 2, 0, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f.title.errors.required);
  }
}
function RegisterComponent_div_23_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "First Name is required");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275template(1, RegisterComponent_div_23_div_1_Template, 2, 0, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f.firstname.errors.required);
  }
}
function RegisterComponent_div_28_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Last Name is required");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275template(1, RegisterComponent_div_28_div_1_Template, 2, 0, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f.lastname.errors.required);
  }
}
function RegisterComponent_div_33_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Email is required");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_33_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Email must be a valid email address");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275template(1, RegisterComponent_div_33_div_1_Template, 2, 0, "div", 26)(2, RegisterComponent_div_33_div_2_Template, 2, 0, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f.email.errors.required);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f.email.errors.email);
  }
}
function RegisterComponent_div_39_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_39_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Password must be at least 6 characters");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275template(1, RegisterComponent_div_39_div_1_Template, 2, 0, "div", 26)(2, RegisterComponent_div_39_div_2_Template, 2, 0, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f.password.errors.required);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f.password.errors.minlength);
  }
}
function RegisterComponent_div_44_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Confirm Password is required");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_44_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Passwords must match");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275template(1, RegisterComponent_div_44_div_1_Template, 2, 0, "div", 26)(2, RegisterComponent_div_44_div_2_Template, 2, 0, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f.confirmPassword.errors.required);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f.confirmPassword.errors.mustMatch);
  }
}
function RegisterComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1, "Accept Ts & Cs is required");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_span_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 27);
  }
}
var RegisterComponent = class _RegisterComponent {
  formBuilder;
  route;
  router;
  accountService;
  alertService;
  form;
  loading = false;
  submitted = false;
  constructor(formBuilder, route, router, accountService, alertService) {
    this.formBuilder = formBuilder;
    this.route = route;
    this.router = router;
    this.accountService = accountService;
    this.alertService = alertService;
  }
  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: ["", Validators.required],
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      title: ["", Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
      role: ["User"],
      status: ["Active"]
    }, {
      validator: MustMatch("password", "confirmPassword")
    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }
  onSubmit() {
    this.submitted = true;
    this.alertService.clear();
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    this.accountService.register(this.form.value).pipe(first()).subscribe({
      next: (response) => {
        this.alertService.success("Registration successful, please check your email for verification instructions", { keepAfterRouteChange: true });
        this.router.navigate(["../login"], { relativeTo: this.route });
      },
      error: (error) => {
        this.alertService.error(error);
        this.loading = false;
      }
    });
  }
  static \u0275fac = function RegisterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegisterComponent)(\u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AccountService), \u0275\u0275directiveInject(AlertService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["ng-component"]], standalone: false, decls: 56, vars: 31, consts: [[1, "card-header"], [1, "card-body"], [3, "ngSubmit", "formGroup"], [1, "form-row"], [1, "form-group", "col"], ["formControlName", "title", 1, "form-control", 3, "ngClass"], ["value", ""], ["value", "Mr"], ["value", "Mrs"], ["value", "Miss"], ["value", "Ms"], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-group", "col-5"], ["type", "text", "formControlName", "firstname", 1, "form-control", 3, "ngClass"], ["type", "text", "formControlName", "lastname", 1, "form-control", 3, "ngClass"], [1, "form-group"], ["type", "text", "formControlName", "email", 1, "form-control", 3, "ngClass"], ["type", "password", "formControlName", "password", 1, "form-control", 3, "ngClass"], ["type", "password", "formControlName", "confirmPassword", 1, "form-control", 3, "ngClass"], [1, "form-group", "form-check"], ["type", "checkbox", "formControlName", "acceptTerms", "id", "acceptTerms", 1, "form-check-input", 3, "ngClass"], ["for", "acceptTerms", 1, "form-check-label"], [1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], ["routerLink", "../login", "href", "", 1, "btn", "btn-link"], [1, "invalid-feedback"], [4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "mr-1"]], template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h3", 0);
      \u0275\u0275text(1, "Register");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 1)(3, "form", 2);
      \u0275\u0275listener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_3_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "label");
      \u0275\u0275text(7, "Title");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "select", 5);
      \u0275\u0275element(9, "option", 6);
      \u0275\u0275elementStart(10, "option", 7);
      \u0275\u0275text(11, "Mr");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "option", 8);
      \u0275\u0275text(13, "Mrs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "option", 9);
      \u0275\u0275text(15, "Miss");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "option", 10);
      \u0275\u0275text(17, "Ms");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(18, RegisterComponent_div_18_Template, 2, 1, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 12)(20, "label");
      \u0275\u0275text(21, "First Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(22, "input", 13);
      \u0275\u0275template(23, RegisterComponent_div_23_Template, 2, 1, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 12)(25, "label");
      \u0275\u0275text(26, "Last Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(27, "input", 14);
      \u0275\u0275template(28, RegisterComponent_div_28_Template, 2, 1, "div", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 15)(30, "label");
      \u0275\u0275text(31, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(32, "input", 16);
      \u0275\u0275template(33, RegisterComponent_div_33_Template, 3, 2, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 3)(35, "div", 4)(36, "label");
      \u0275\u0275text(37, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(38, "input", 17);
      \u0275\u0275template(39, RegisterComponent_div_39_Template, 3, 2, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 4)(41, "label");
      \u0275\u0275text(42, "Confirm Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(43, "input", 18);
      \u0275\u0275template(44, RegisterComponent_div_44_Template, 3, 2, "div", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 19);
      \u0275\u0275element(46, "input", 20);
      \u0275\u0275elementStart(47, "label", 21);
      \u0275\u0275text(48, "Accept Terms & Conditions");
      \u0275\u0275elementEnd();
      \u0275\u0275template(49, RegisterComponent_div_49_Template, 2, 0, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "div", 15)(51, "button", 22);
      \u0275\u0275template(52, RegisterComponent_span_52_Template, 1, 0, "span", 23);
      \u0275\u0275text(53, " Register ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "a", 24);
      \u0275\u0275text(55, "Cancel");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(17, _c02, ctx.submitted && ctx.f.title.errors));
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.submitted && ctx.f.title.errors);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(19, _c02, ctx.submitted && ctx.f.firstname.errors));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitted && ctx.f.firstname.errors);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(21, _c02, ctx.submitted && ctx.f.lastname.errors));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitted && ctx.f.lastname.errors);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(23, _c02, ctx.submitted && ctx.f.email.errors));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitted && ctx.f.email.errors);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(25, _c02, ctx.submitted && ctx.f.password.errors));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitted && ctx.f.password.errors);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(27, _c02, ctx.submitted && ctx.f.confirmPassword.errors));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitted && ctx.f.confirmPassword.errors);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(29, _c02, ctx.submitted && ctx.f.acceptTerms.errors));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.submitted && ctx.f.acceptTerms.errors);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
    }
  }, dependencies: [NgClass, NgIf, RouterLink, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterComponent, [{
    type: Component,
    args: [{ standalone: false, template: `<h3 class="card-header">Register</h3>\r
<div class="card-body">\r
    <form [formGroup]="form" (ngSubmit)="onSubmit()">\r
        <div class="form-row">\r
            <div class="form-group col">\r
                <label>Title</label>\r
                <select formControlName="title" class="form-control" [ngClass]="{ 'is-invalid': submitted && f.title.errors }">\r
                    <option value=""></option>\r
                    <option value="Mr">Mr</option>\r
                    <option value="Mrs">Mrs</option>\r
                    <option value="Miss">Miss</option>\r
                    <option value="Ms">Ms</option>\r
                </select>\r
                <div *ngIf="submitted && f.title.errors" class="invalid-feedback">\r
                    <div *ngIf="f.title.errors.required">Title is required</div>\r
                </div>\r
            </div>\r
            <div class="form-group col-5">\r
                <label>First Name</label>\r
                <input type="text" formControlName="firstname" class="form-control" [ngClass]="{ 'is-invalid': submitted && f.firstname.errors }" />\r
                <div *ngIf="submitted && f.firstname.errors" class="invalid-feedback">\r
                    <div *ngIf="f.firstname.errors.required">First Name is required</div>\r
                </div>\r
            </div>\r
            <div class="form-group col-5">\r
                <label>Last Name</label>\r
                <input type="text" formControlName="lastname" class="form-control" [ngClass]="{ 'is-invalid': submitted && f.lastname.errors }" />\r
                <div *ngIf="submitted && f.lastname.errors" class="invalid-feedback">\r
                    <div *ngIf="f.lastname.errors.required">Last Name is required</div>\r
                </div>\r
            </div>\r
        </div>\r
        <div class="form-group">\r
            <label>Email</label>\r
            <input type="text" formControlName="email" class="form-control" [ngClass]="{ 'is-invalid': submitted && f.email.errors }" />\r
            <div *ngIf="submitted && f.email.errors" class="invalid-feedback">\r
                <div *ngIf="f.email.errors.required">Email is required</div>\r
                <div *ngIf="f.email.errors.email">Email must be a valid email address</div>\r
            </div>\r
        </div>\r
        <div class="form-row">\r
            <div class="form-group col">\r
                <label>Password</label>\r
                <input type="password" formControlName="password" class="form-control" [ngClass]="{ 'is-invalid': submitted && f.password.errors }" />\r
                <div *ngIf="submitted && f.password.errors" class="invalid-feedback">\r
                    <div *ngIf="f.password.errors.required">Password is required</div>\r
                    <div *ngIf="f.password.errors.minlength">Password must be at least 6 characters</div>\r
                </div>\r
            </div>\r
            <div class="form-group col">\r
                <label>Confirm Password</label>\r
                <input type="password" formControlName="confirmPassword" class="form-control" [ngClass]="{ 'is-invalid': submitted && f.confirmPassword.errors }" />\r
                <div *ngIf="submitted && f.confirmPassword.errors" class="invalid-feedback">\r
                    <div *ngIf="f.confirmPassword.errors.required">Confirm Password is required</div>\r
                    <div *ngIf="f.confirmPassword.errors.mustMatch">Passwords must match</div>\r
                </div>\r
            </div>\r
        </div>\r
        <div class="form-group form-check">\r
            <input type="checkbox" formControlName="acceptTerms" id="acceptTerms" class="form-check-input" [ngClass]="{ 'is-invalid': submitted && f.acceptTerms.errors }" />\r
            <label for="acceptTerms" class="form-check-label">Accept Terms & Conditions</label>\r
            <div *ngIf="submitted && f.acceptTerms.errors" class="invalid-feedback">Accept Ts & Cs is required</div>\r
        </div>\r
        <div class="form-group">\r
            <button [disabled]="loading" class="btn btn-primary">\r
                <span *ngIf="loading" class="spinner-border spinner-border-sm mr-1"></span>\r
                Register\r
            </button>\r
            <a routerLink="../login" href="" class="btn btn-link">Cancel</a>\r
        </div>\r
    </form>\r
</div>` }]
  }], () => [{ type: UntypedFormBuilder }, { type: ActivatedRoute }, { type: Router }, { type: AccountService }, { type: AlertService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src/app/account/register.component.ts", lineNumber: 13 });
})();

// src/app/account/verify-email.component.ts
function VerifyEmailComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, " Verifying... ");
    \u0275\u0275elementEnd();
  }
}
function VerifyEmailComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, " Verification failed, you can also verify your account using the ");
    \u0275\u0275elementStart(2, "a", 3);
    \u0275\u0275text(3, "forgot password");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " page. ");
    \u0275\u0275elementEnd();
  }
}
var EmailStatus;
(function(EmailStatus2) {
  EmailStatus2[EmailStatus2["Verifying"] = 0] = "Verifying";
  EmailStatus2[EmailStatus2["Failed"] = 1] = "Failed";
})(EmailStatus || (EmailStatus = {}));
var VerifyEmailComponent = class _VerifyEmailComponent {
  route;
  router;
  accountService;
  alertService;
  EmailStatus = EmailStatus;
  emailStatus = EmailStatus.Verifying;
  constructor(route, router, accountService, alertService) {
    this.route = route;
    this.router = router;
    this.accountService = accountService;
    this.alertService = alertService;
  }
  ngOnInit() {
    const token = this.route.snapshot.queryParams["token"];
    this.router.navigate([], { relativeTo: this.route, replaceUrl: true });
  }
  static \u0275fac = function VerifyEmailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VerifyEmailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AccountService), \u0275\u0275directiveInject(AlertService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VerifyEmailComponent, selectors: [["ng-component"]], standalone: false, decls: 5, vars: 2, consts: [[1, "card-header"], [1, "card-body"], [4, "ngIf"], ["routerLink", "forgot-password"]], template: function VerifyEmailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h3", 0);
      \u0275\u0275text(1, "Verify Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 1);
      \u0275\u0275template(3, VerifyEmailComponent_div_3_Template, 2, 0, "div", 2)(4, VerifyEmailComponent_div_4_Template, 5, 0, "div", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.emailStatus == ctx.EmailStatus.Verifying);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.emailStatus == ctx.EmailStatus.Failed);
    }
  }, dependencies: [NgIf, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VerifyEmailComponent, [{
    type: Component,
    args: [{ standalone: false, template: '<h3 class="card-header">Verify Email</h3>\r\n<div class="card-body">\r\n    <div *ngIf="emailStatus == EmailStatus.Verifying">\r\n        Verifying...\r\n    </div>\r\n    <div *ngIf="emailStatus == EmailStatus.Failed">\r\n        Verification failed, you can also verify your account using the <a routerLink="forgot-password">forgot password</a> page.\r\n    </div>\r\n</div>' }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: AccountService }, { type: AlertService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VerifyEmailComponent, { className: "VerifyEmailComponent", filePath: "src/app/account/verify-email.component.ts", lineNumber: 16 });
})();

// src/app/account/forgot-password.component.ts
var _c03 = (a0) => ({ "is-invalid": a0 });
function ForgotPasswordComponent_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Email is required");
    \u0275\u0275elementEnd();
  }
}
function ForgotPasswordComponent_div_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Email is invalid");
    \u0275\u0275elementEnd();
  }
}
function ForgotPasswordComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275template(1, ForgotPasswordComponent_div_8_div_1_Template, 2, 0, "div", 10)(2, ForgotPasswordComponent_div_8_div_2_Template, 2, 0, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f.email.errors.required);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f.email.errors.email);
  }
}
function ForgotPasswordComponent_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 11);
  }
}
var ForgotPasswordComponent = class _ForgotPasswordComponent {
  formBuilder;
  accountService;
  alertService;
  form;
  loading = false;
  submitted = false;
  constructor(formBuilder, accountService, alertService) {
    this.formBuilder = formBuilder;
    this.accountService = accountService;
    this.alertService = alertService;
  }
  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]]
    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }
  onSubmit() {
    this.submitted = true;
    this.alertService.clear();
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    this.alertService.clear();
    this.accountService.forgotPassword(this.f["email"].value).pipe(first()).pipe(finalize(() => this.loading = false)).subscribe({
      next: () => this.alertService.success("Please check your email for password reset instructions"),
      error: (error) => this.alertService.error(error)
    });
  }
  static \u0275fac = function ForgotPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ForgotPasswordComponent)(\u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(AccountService), \u0275\u0275directiveInject(AlertService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPasswordComponent, selectors: [["ng-component"]], standalone: false, decls: 15, vars: 7, consts: [[1, "card-header"], [1, "card-body"], [3, "ngSubmit", "formGroup"], [1, "form-group"], ["type", "text", "formControlName", "email", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], ["routerLink", "../login", 1, "btn", "btn-link"], [1, "invalid-feedback"], [4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "mr-1"]], template: function ForgotPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h3", 0);
      \u0275\u0275text(1, "Forgot Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 1)(3, "form", 2);
      \u0275\u0275listener("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_3_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(4, "div", 3)(5, "label");
      \u0275\u0275text(6, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(7, "input", 4);
      \u0275\u0275template(8, ForgotPasswordComponent_div_8_Template, 3, 2, "div", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 3)(10, "button", 6);
      \u0275\u0275template(11, ForgotPasswordComponent_span_11_Template, 1, 0, "span", 7);
      \u0275\u0275text(12, " Submit ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "a", 8);
      \u0275\u0275text(14, "Cancel");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c03, ctx.submitted && ctx.f.email.errors));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitted && ctx.f.email.errors);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
    }
  }, dependencies: [NgClass, NgIf, RouterLink, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForgotPasswordComponent, [{
    type: Component,
    args: [{ standalone: false, template: `<h3 class="card-header">Forgot Password</h3>\r
<div class="card-body">\r
    <form [formGroup]="form" (ngSubmit)="onSubmit()">\r
        <div class="form-group">\r
            <label>Email</label>\r
            <input type="text" formControlName="email" class="form-control" [ngClass]="{ 'is-invalid': submitted && f.email.errors }" />\r
            <div *ngIf="submitted && f.email.errors" class="invalid-feedback">\r
                <div *ngIf="f.email.errors.required">Email is required</div>\r
                <div *ngIf="f.email.errors.email">Email is invalid</div>\r
            </div>\r
        </div>\r
        <div class="form-group">\r
            <button [disabled]="loading" class="btn btn-primary">\r
                <span *ngIf="loading" class="spinner-border spinner-border-sm mr-1"></span>\r
                Submit\r
            </button>\r
            <a routerLink="../login" class="btn btn-link">Cancel</a>\r
        </div>\r
    </form>\r
</div>` }]
  }], () => [{ type: UntypedFormBuilder }, { type: AccountService }, { type: AlertService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPasswordComponent, { className: "ForgotPasswordComponent", filePath: "src/app/account/forgot-password.component.ts", lineNumber: 11 });
})();

// src/app/account/reset-password.component.ts
var _c04 = (a0) => ({ "is-invalid": a0 });
function ResetPasswordComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, " Validating token... ");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, " Token validation failed, if the token has expired you can get a new one at the ");
    \u0275\u0275elementStart(2, "a", 4);
    \u0275\u0275text(3, "forgot password");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " page. ");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_form_5_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_form_5_div_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Password must be at least 6 characters");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_form_5_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275template(1, ResetPasswordComponent_form_5_div_5_div_1_Template, 2, 0, "div", 2)(2, ResetPasswordComponent_form_5_div_5_div_2_Template, 2, 0, "div", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.f.password.errors.required);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.f.password.errors.minlength);
  }
}
function ResetPasswordComponent_form_5_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Confirm Password is required");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_form_5_div_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Passwords must match");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_form_5_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275template(1, ResetPasswordComponent_form_5_div_10_div_1_Template, 2, 0, "div", 2)(2, ResetPasswordComponent_form_5_div_10_div_2_Template, 2, 0, "div", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.f.confirmPassword.errors.required);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.f.confirmPassword.errors.mustMatch);
  }
}
function ResetPasswordComponent_form_5_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 14);
  }
}
function ResetPasswordComponent_form_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 5);
    \u0275\u0275listener("ngSubmit", function ResetPasswordComponent_form_5_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(1, "div", 6)(2, "label");
    \u0275\u0275text(3, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 7);
    \u0275\u0275template(5, ResetPasswordComponent_form_5_div_5_Template, 3, 2, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 6)(7, "label");
    \u0275\u0275text(8, "Confirm Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 9);
    \u0275\u0275template(10, ResetPasswordComponent_form_5_div_10_Template, 3, 2, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 6)(12, "button", 10);
    \u0275\u0275template(13, ResetPasswordComponent_form_5_span_13_Template, 1, 0, "span", 11);
    \u0275\u0275text(14, " Reset Password ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "a", 12);
    \u0275\u0275text(16, "Cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(7, _c04, ctx_r1.submitted && ctx_r1.f.password.errors));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.submitted && ctx_r1.f.password.errors);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(9, _c04, ctx_r1.submitted && ctx_r1.f.confirmPassword.errors));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.submitted && ctx_r1.f.confirmPassword.errors);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
  }
}
var TokenStatus;
(function(TokenStatus2) {
  TokenStatus2[TokenStatus2["Validating"] = 0] = "Validating";
  TokenStatus2[TokenStatus2["Valid"] = 1] = "Valid";
  TokenStatus2[TokenStatus2["Invalid"] = 2] = "Invalid";
})(TokenStatus || (TokenStatus = {}));
var ResetPasswordComponent = class _ResetPasswordComponent {
  formBuilder;
  route;
  router;
  accountService;
  alertService;
  TokenStatus = TokenStatus;
  tokenStatus = TokenStatus.Validating;
  token = null;
  form;
  loading = false;
  submitted = false;
  constructor(formBuilder, route, router, accountService, alertService) {
    this.formBuilder = formBuilder;
    this.route = route;
    this.router = router;
    this.accountService = accountService;
    this.alertService = alertService;
  }
  ngOnInit() {
    this.form = this.formBuilder.group({
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: ["", Validators.required]
    }, {
      validator: MustMatch("password", "confirmPassword")
    });
    const tokenFromQuery = this.route.snapshot.queryParams["token"];
    const token = typeof tokenFromQuery === "string" ? tokenFromQuery : null;
    this.router.navigate([], { relativeTo: this.route, replaceUrl: true });
    if (!token) {
      this.tokenStatus = TokenStatus.Invalid;
      return;
    }
    this.accountService.validateResetToken(token).pipe(first()).subscribe({
      next: () => {
        this.token = token;
        this.tokenStatus = TokenStatus.Valid;
      },
      error: () => {
        this.tokenStatus = TokenStatus.Invalid;
      }
    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }
  onSubmit() {
    this.submitted = true;
    this.alertService.clear();
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    this.accountService.resetPassword(this.token, this.f.password.value, this.f.confirmPassword.value).pipe(first()).subscribe({
      next: () => {
        this.alertService.success("Password reset successful, you can now login", { keepAfterRouteChange: true });
        this.router.navigate(["../login"], { relativeTo: this.route });
      },
      error: (error) => {
        this.alertService.error(error);
        this.loading = false;
      }
    });
  }
  static \u0275fac = function ResetPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResetPasswordComponent)(\u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AccountService), \u0275\u0275directiveInject(AlertService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResetPasswordComponent, selectors: [["ng-component"]], standalone: false, decls: 6, vars: 3, consts: [[1, "card-header"], [1, "card-body"], [4, "ngIf"], [3, "formGroup", "ngSubmit", 4, "ngIf"], ["routerLink", "../forgot-password"], [3, "ngSubmit", "formGroup"], [1, "form-group"], ["type", "password", "formControlName", "password", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "password", "formControlName", "confirmPassword", 1, "form-control", 3, "ngClass"], [1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], ["routerLink", "../login", 1, "btn", "btn-link"], [1, "invalid-feedback"], [1, "spinner-border", "spinner-border-sm", "mr-1"]], template: function ResetPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h3", 0);
      \u0275\u0275text(1, "Reset Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 1);
      \u0275\u0275template(3, ResetPasswordComponent_div_3_Template, 2, 0, "div", 2)(4, ResetPasswordComponent_div_4_Template, 5, 0, "div", 2)(5, ResetPasswordComponent_form_5_Template, 17, 11, "form", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.tokenStatus == ctx.TokenStatus.Validating);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.tokenStatus == ctx.TokenStatus.Invalid);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.tokenStatus == ctx.TokenStatus.Valid);
    }
  }, dependencies: [NgClass, NgIf, RouterLink, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResetPasswordComponent, [{
    type: Component,
    args: [{ standalone: false, template: `<h3 class="card-header">Reset Password</h3>\r
<div class="card-body">\r
    <div *ngIf="tokenStatus == TokenStatus.Validating">\r
        Validating token...\r
    </div>\r
    <div *ngIf="tokenStatus == TokenStatus.Invalid">\r
        Token validation failed, if the token has expired you can get a new one at the <a routerLink="../forgot-password">forgot password</a> page.\r
    </div>\r
    <form *ngIf="tokenStatus == TokenStatus.Valid" [formGroup]="form" (ngSubmit)="onSubmit()">\r
        <div class="form-group">\r
            <label>Password</label>\r
            <input type="password" formControlName="password" class="form-control" [ngClass]="{ 'is-invalid': submitted && f.password.errors }" />\r
            <div *ngIf="submitted && f.password.errors" class="invalid-feedback">\r
                <div *ngIf="f.password.errors.required">Password is required</div>\r
                <div *ngIf="f.password.errors.minlength">Password must be at least 6 characters</div>\r
            </div>\r
        </div>\r
        <div class="form-group">\r
            <label>Confirm Password</label>\r
            <input type="password" formControlName="confirmPassword" class="form-control" [ngClass]="{ 'is-invalid': submitted && f.confirmPassword.errors }" />\r
            <div *ngIf="submitted && f.confirmPassword.errors" class="invalid-feedback">\r
                <div *ngIf="f.confirmPassword.errors.required">Confirm Password is required</div>\r
                <div *ngIf="f.confirmPassword.errors.mustMatch">Passwords must match</div>\r
            </div>\r
        </div>\r
        <div class="form-group">\r
            <button [disabled]="loading" class="btn btn-primary">\r
                <span *ngIf="loading" class="spinner-border spinner-border-sm mr-1"></span>\r
                Reset Password\r
            </button>\r
            <a routerLink="../login" class="btn btn-link">Cancel</a>\r
        </div>\r
    </form>\r
</div>` }]
  }], () => [{ type: UntypedFormBuilder }, { type: ActivatedRoute }, { type: Router }, { type: AccountService }, { type: AlertService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResetPasswordComponent, { className: "ResetPasswordComponent", filePath: "src/app/account/reset-password.component.ts", lineNumber: 19 });
})();

// src/app/account/account-routing.module.ts
var routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "verify-email", component: VerifyEmailComponent },
      { path: "forgot-password", component: ForgotPasswordComponent },
      { path: "reset-password", component: ResetPasswordComponent }
    ]
  }
];
var AccountRoutingModule = class _AccountRoutingModule {
  static \u0275fac = function AccountRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccountRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AccountRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/account/account.module.ts
var AccountsModule = class _AccountsModule {
  static \u0275fac = function AccountsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccountsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AccountsModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountsModule, [{
    type: NgModule,
    args: [{
      declarations: [
        LayoutComponent,
        ForgotPasswordComponent,
        LoginComponent,
        RegisterComponent,
        ResetPasswordComponent,
        VerifyEmailComponent
        // AddEditComponent
      ],
      imports: [
        CommonModule,
        AccountRoutingModule,
        ReactiveFormsModule
      ]
    }]
  }], null, null);
})();
export {
  AccountsModule
};
//# sourceMappingURL=chunk-7K6CVN56.js.map
