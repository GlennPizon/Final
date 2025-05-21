import {
  MustMatch
} from "./chunk-MC6MZTEJ.js";
import {
  AuthGuard
} from "./chunk-PF5I5EEP.js";
import {
  AccountService,
  AlertService
} from "./chunk-NRVHY6N7.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3
} from "./chunk-IQD5Y6SM.js";

// src/app/profile/layout/layout.component.ts
var LayoutComponent = class _LayoutComponent {
  static \u0275fac = function LayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutComponent, selectors: [["ng-component"]], standalone: false, decls: 3, vars: 0, consts: [[1, "p-4"], [1, "container"]], template: function LayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "router-outlet");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutComponent, [{
    type: Component,
    args: [{ standalone: false, template: '<div class="p-4">\r\n    <div class="container">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutComponent, { className: "LayoutComponent", filePath: "src/app/profile/layout/layout.component.ts", lineNumber: 7 });
})();

// src/app/profile/details/details.component.ts
var DetailsComponent = class _DetailsComponent {
  accountService;
  account;
  constructor(accountService) {
    this.accountService = accountService;
  }
  ngOnInit() {
    this.account = this.accountService.accountValue;
  }
  static \u0275fac = function DetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DetailsComponent)(\u0275\u0275directiveInject(AccountService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DetailsComponent, selectors: [["ng-component"]], standalone: false, decls: 22, vars: 6, consts: [["routerLink", "update"]], template: function DetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h1");
      \u0275\u0275text(1, "My Profile");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "p")(3, "strong");
      \u0275\u0275text(4, "Name: ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(5);
      \u0275\u0275element(6, "br");
      \u0275\u0275elementStart(7, "strong");
      \u0275\u0275text(8, "Email: ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9);
      \u0275\u0275element(10, "br");
      \u0275\u0275elementStart(11, "strong");
      \u0275\u0275text(12, "Role: ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(13);
      \u0275\u0275element(14, "br");
      \u0275\u0275elementStart(15, "strong");
      \u0275\u0275text(16, "Status: ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(17);
      \u0275\u0275element(18, "br");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "p")(20, "a", 0);
      \u0275\u0275text(21, "Update Profile");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate3(" ", ctx.account.title, " ", ctx.account.firstName, " ", ctx.account.lastName, "");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.account.email, "");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.account.role, "");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.account.status, "");
    }
  }, dependencies: [RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DetailsComponent, [{
    type: Component,
    args: [{ standalone: false, template: '<h1>My Profile</h1>\r\n<p>\r\n    <strong>Name: </strong> {{account.title}} {{account.firstName}} {{account.lastName}}<br />\r\n    <strong>Email: </strong> {{account.email}}<br />\r\n    <strong>Role: </strong> {{account.role}}<br />\r\n    <strong>Status: </strong> {{account.status}}<br />\r\n</p>\r\n<p><a routerLink="update">Update Profile</a></p>' }]
  }], () => [{ type: AccountService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DetailsComponent, { className: "DetailsComponent", filePath: "src/app/profile/details/details.component.ts", lineNumber: 8 });
})();

// src/app/profile/update/update.component.ts
var _c0 = (a0) => ({ "is-invalid": a0 });
function UpdateComponent_div_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Title is required");
    \u0275\u0275elementEnd();
  }
}
function UpdateComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275template(1, UpdateComponent_div_17_div_1_Template, 2, 0, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f.title.errors.required);
  }
}
function UpdateComponent_div_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "First Name is required");
    \u0275\u0275elementEnd();
  }
}
function UpdateComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275template(1, UpdateComponent_div_22_div_1_Template, 2, 0, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f.firstName.errors.required);
  }
}
function UpdateComponent_div_27_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Last Name is required");
    \u0275\u0275elementEnd();
  }
}
function UpdateComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275template(1, UpdateComponent_div_27_div_1_Template, 2, 0, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f.lastName.errors.required);
  }
}
function UpdateComponent_div_32_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Email is required");
    \u0275\u0275elementEnd();
  }
}
function UpdateComponent_div_32_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Email must be a valid email address");
    \u0275\u0275elementEnd();
  }
}
function UpdateComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275template(1, UpdateComponent_div_32_div_1_Template, 2, 0, "div", 22)(2, UpdateComponent_div_32_div_2_Template, 2, 0, "div", 22);
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
function UpdateComponent_div_42_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
function UpdateComponent_div_42_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Password must be at least 6 characters");
    \u0275\u0275elementEnd();
  }
}
function UpdateComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275template(1, UpdateComponent_div_42_div_1_Template, 2, 0, "div", 22)(2, UpdateComponent_div_42_div_2_Template, 2, 0, "div", 22);
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
function UpdateComponent_div_47_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Confirm Password is required");
    \u0275\u0275elementEnd();
  }
}
function UpdateComponent_div_47_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Passwords must match");
    \u0275\u0275elementEnd();
  }
}
function UpdateComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275template(1, UpdateComponent_div_47_div_1_Template, 2, 0, "div", 22)(2, UpdateComponent_div_47_div_2_Template, 2, 0, "div", 22);
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
function UpdateComponent_span_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 23);
  }
}
var UpdateComponent = class _UpdateComponent {
  formBuilder;
  route;
  router;
  accountService;
  alertService;
  account;
  form;
  loading = false;
  submitted = false;
  deleting = false;
  constructor(formBuilder, route, router, accountService, alertService) {
    this.formBuilder = formBuilder;
    this.route = route;
    this.router = router;
    this.accountService = accountService;
    this.alertService = alertService;
  }
  ngOnInit() {
    this.account = this.accountService.accountValue;
    this.form = this.formBuilder.group({
      title: [this.account?.title || "", Validators.required],
      firstName: [this.account?.firstName || "", Validators.required],
      lastName: [this.account?.lastName || "", Validators.required],
      email: [this.account?.email || "", [Validators.required, Validators.email]],
      password: ["", [Validators.minLength(6)]],
      confirmPassword: [""]
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
    this.accountService.update(this.account?.id, this.form.value).pipe(first()).subscribe({
      next: () => {
        this.alertService.success("Update successful", { keepAfterRouteChange: true });
        this.router.navigate(["../"], { relativeTo: this.route });
      },
      error: (error) => {
        this.alertService.error(error);
        this.loading = false;
      }
    });
  }
  onDelete() {
    if (confirm("Are you sure?")) {
      this.deleting = true;
      this.accountService.delete(this.account?.id).pipe(first()).subscribe({
        next: () => {
          this.alertService.success("Account deleted successfully", { keepAfterRouteChange: true });
          this.router.navigate(["/"]);
        },
        error: (error) => {
          this.alertService.error(error);
          this.deleting = false;
        }
      });
    }
  }
  static \u0275fac = function UpdateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UpdateComponent)(\u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AccountService), \u0275\u0275directiveInject(AlertService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UpdateComponent, selectors: [["ng-component"]], standalone: false, decls: 54, vars: 27, consts: [[3, "ngSubmit", "formGroup"], [1, "form-row"], [1, "form-group", "col"], ["formControlName", "title", 1, "form-control", 3, "ngClass"], ["value", ""], ["value", "Mr"], ["value", "Mrs"], ["value", "Miss"], ["value", "Ms"], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-group", "col-5"], ["type", "text", "formControlName", "firstName", 1, "form-control", 3, "ngClass"], ["type", "text", "formControlName", "lastName", 1, "form-control", 3, "ngClass"], [1, "form-group"], ["type", "text", "formControlName", "email", 1, "form-control", 3, "ngClass"], [1, "pt-3"], ["type", "password", "formControlName", "password", 1, "form-control", 3, "ngClass"], ["type", "password", "formControlName", "confirmPassword", 1, "form-control", 3, "ngClass"], ["type", "submit", 1, "btn", "btn-primary", "mr-2", 3, "disabled"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], ["routerLink", "../", "href", "", 1, "btn", "btn-link"], [1, "invalid-feedback"], [4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "mr-1"]], template: function UpdateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h1");
      \u0275\u0275text(1, "Update Profile");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "form", 0);
      \u0275\u0275listener("ngSubmit", function UpdateComponent_Template_form_ngSubmit_2_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(3, "div", 1)(4, "div", 2)(5, "label");
      \u0275\u0275text(6, "Title");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "select", 3);
      \u0275\u0275element(8, "option", 4);
      \u0275\u0275elementStart(9, "option", 5);
      \u0275\u0275text(10, "Mr");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "option", 6);
      \u0275\u0275text(12, "Mrs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "option", 7);
      \u0275\u0275text(14, "Miss");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "option", 8);
      \u0275\u0275text(16, "Ms");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(17, UpdateComponent_div_17_Template, 2, 1, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 10)(19, "label");
      \u0275\u0275text(20, "First Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(21, "input", 11);
      \u0275\u0275template(22, UpdateComponent_div_22_Template, 2, 1, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 10)(24, "label");
      \u0275\u0275text(25, "Last Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(26, "input", 12);
      \u0275\u0275template(27, UpdateComponent_div_27_Template, 2, 1, "div", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 13)(29, "label");
      \u0275\u0275text(30, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(31, "input", 14);
      \u0275\u0275template(32, UpdateComponent_div_32_Template, 3, 2, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "h3", 15);
      \u0275\u0275text(34, "Change Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "p");
      \u0275\u0275text(36, "Leave blank to keep the same password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 1)(38, "div", 2)(39, "label");
      \u0275\u0275text(40, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(41, "input", 16);
      \u0275\u0275template(42, UpdateComponent_div_42_Template, 3, 2, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 2)(44, "label");
      \u0275\u0275text(45, "Confirm Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(46, "input", 17);
      \u0275\u0275template(47, UpdateComponent_div_47_Template, 3, 2, "div", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "div", 13)(49, "button", 18);
      \u0275\u0275template(50, UpdateComponent_span_50_Template, 1, 0, "span", 19);
      \u0275\u0275text(51, " Update ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "a", 20);
      \u0275\u0275text(53, "Cancel");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(15, _c0, ctx.submitted && ctx.f.title.errors));
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.submitted && ctx.f.title.errors);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(17, _c0, ctx.submitted && ctx.f.firstName.errors));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitted && ctx.f.firstName.errors);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(19, _c0, ctx.submitted && ctx.f.lastName.errors));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitted && ctx.f.lastName.errors);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(21, _c0, ctx.submitted && ctx.f.email.errors));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitted && ctx.f.email.errors);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(23, _c0, ctx.submitted && ctx.f.password.errors));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitted && ctx.f.password.errors);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(25, _c0, ctx.submitted && ctx.f.confirmPassword.errors));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitted && ctx.f.confirmPassword.errors);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
    }
  }, dependencies: [NgClass, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UpdateComponent, [{
    type: Component,
    args: [{ standalone: false, template: `<h1>Update Profile</h1>\r
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
            <input type="text" formControlName="firstName" class="form-control" [ngClass]="{ 'is-invalid': submitted && f.firstName.errors }" />\r
            <div *ngIf="submitted && f.firstName.errors" class="invalid-feedback">\r
                <div *ngIf="f.firstName.errors.required">First Name is required</div>\r
            </div>\r
        </div>\r
        <div class="form-group col-5">\r
            <label>Last Name</label>\r
            <input type="text" formControlName="lastName" class="form-control" [ngClass]="{ 'is-invalid': submitted && f.lastName.errors }" />\r
            <div *ngIf="submitted && f.lastName.errors" class="invalid-feedback">\r
                <div *ngIf="f.lastName.errors.required">Last Name is required</div>\r
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
    <h3 class="pt-3">Change Password</h3>\r
    <p>Leave blank to keep the same password</p>\r
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
    <div class="form-group">\r
        <button type="submit" [disabled]="loading" class="btn btn-primary mr-2">\r
            <span *ngIf="loading" class="spinner-border spinner-border-sm mr-1"></span>\r
            Update\r
        </button>\r
        <!-- <button type="button" (click)="onDelete()" [disabled]="deleting" class="btn btn-danger">\r
            <span *ngIf="deleting" class="spinner-border spinner-border-sm mr-1"></span>\r
            Delete\r
        </button> -->\r
        <a routerLink="../" href="" class="btn btn-link">Cancel</a>\r
    </div>\r
</form>` }]
  }], () => [{ type: UntypedFormBuilder }, { type: ActivatedRoute }, { type: Router }, { type: AccountService }, { type: AlertService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UpdateComponent, { className: "UpdateComponent", filePath: "src/app/profile/update/update.component.ts", lineNumber: 13 });
})();

// src/app/profile/profile-routing.module.ts
var routes = [
  {
    path: "",
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "", component: DetailsComponent },
      { path: "edit", component: UpdateComponent }
    ]
  }
];
var ProfileRoutingModule = class _ProfileRoutingModule {
  static \u0275fac = function ProfileRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ProfileRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/profile/profile.module.ts
var ProfileModule = class _ProfileModule {
  static \u0275fac = function ProfileModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ProfileModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    ReactiveFormsModule,
    ProfileRoutingModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileModule, [{
    type: NgModule,
    args: [{
      imports: [
        CommonModule,
        ReactiveFormsModule,
        ProfileRoutingModule
      ],
      declarations: [
        LayoutComponent,
        DetailsComponent,
        UpdateComponent
      ]
    }]
  }], null, null);
})();
export {
  ProfileModule
};
//# sourceMappingURL=chunk-IMFKK6JR.js.map
