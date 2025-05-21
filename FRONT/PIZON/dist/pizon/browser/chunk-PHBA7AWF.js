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
  CommonModule,
  Component,
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
  NgClass,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  NgModule,
  NgSelectOption,
  ReactiveFormsModule,
  Router,
  RouterLink,
  RouterModule,
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
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction1,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate3
} from "./chunk-IQD5Y6SM.js";

// src/app/admin/accounts/list.component.ts
function ListComponent_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 7)(10, "a", 8);
    \u0275\u0275text(11, "Edit");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const account_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", account_r1.title, " ", account_r1.firstName, " ", account_r1.lastName, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(account_r1.email);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", account_r1.status === "InActive" ? "red" : "blue");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(account_r1.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(account_r1.role);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("routerLink", "edit/", account_r1.id, "");
  }
}
function ListComponent_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 9);
    \u0275\u0275element(2, "span", 10);
    \u0275\u0275elementEnd()();
  }
}
var ListComponent = class _ListComponent {
  accountService;
  accounts;
  constructor(accountService) {
    this.accountService = accountService;
  }
  ngOnInit() {
    this.accountService.getAll().pipe(first()).subscribe((accounts) => this.accounts = accounts);
  }
  deleteAccount(id) {
    const account = this.accounts.find((x) => x.id === id);
    account.isDeleting = true;
    this.accountService.delete(id).pipe(first()).subscribe(() => {
      this.accounts = this.accounts.filter((x) => x.id !== id);
    });
  }
  static \u0275fac = function ListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ListComponent)(\u0275\u0275directiveInject(AccountService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListComponent, selectors: [["ng-component"]], standalone: false, decls: 21, vars: 2, consts: [["routerLink", "add", 1, "btn", "btn-sm", "btn-success", "mb-2"], [1, "table", "table-striped"], [2, "width", "30%"], [2, "width", "20%"], [2, "width", "10%"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [2, "white-space", "nowrap"], [1, "btn", "btn-sm", "btn-primary", "mr-1", 3, "routerLink"], ["colspan", "4", 1, "text-center"], [1, "spinner-border", "spinner-border-lg", "align-center"]], template: function ListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h1");
      \u0275\u0275text(1, "Accounts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "p");
      \u0275\u0275text(3, "All accounts from secure (admin only) api end point:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "a", 0);
      \u0275\u0275text(5, "Create Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "table", 1)(7, "thead")(8, "tr")(9, "th", 2);
      \u0275\u0275text(10, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "th", 2);
      \u0275\u0275text(12, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "th", 3);
      \u0275\u0275text(14, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "th", 3);
      \u0275\u0275text(16, "Role");
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "th", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "tbody");
      \u0275\u0275template(19, ListComponent_tr_19_Template, 12, 10, "tr", 5)(20, ListComponent_tr_20_Template, 3, 0, "tr", 6);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(19);
      \u0275\u0275property("ngForOf", ctx.accounts);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.accounts);
    }
  }, dependencies: [NgForOf, NgIf, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListComponent, [{
    type: Component,
    args: [{ standalone: false, template: `<h1>Accounts</h1>\r
<p>All accounts from secure (admin only) api end point:</p>\r
<a routerLink="add" class="btn btn-sm btn-success mb-2">Create Account</a>\r
<table class="table table-striped">\r
    <thead>\r
        <tr>\r
            <th style="width:30%">Name</th>\r
            <th style="width:30%">Email</th>\r
            <th style="width:20%">Status</th>\r
            <th style="width:20%">Role</th>\r
            <th style="width:10%"></th>\r
        </tr>\r
    </thead>\r
    <tbody>\r
        <tr *ngFor="let account of accounts">\r
            <td>{{account.title}} {{account.firstName}} {{account.lastName}}</td>\r
            <td>{{account.email}}</td>\r
            <td [style.color]="account.status === 'InActive' ? 'red' : 'blue'">{{account.status}}</td>\r
            <td>{{account.role}}</td>\r
            <td style="white-space: nowrap">\r
                <a routerLink="edit/{{account.id}}" class="btn btn-sm btn-primary mr-1">Edit</a>\r
                <!-- <button (click)="deleteAccount(account.id)" class="btn btn-sm btn-danger btn-delete-account" [disabled]="account.isDeleting">\r
                    <span *ngIf="account.isDeleting" class="spinner-border spinner-border-sm"></span>\r
                    <span *ngIf="!account.isDeleting">Delete</span>\r
                </button> -->\r
            </td>\r
        </tr>\r
        <tr *ngIf="!accounts">\r
            <td colspan="4" class="text-center">\r
                <span class="spinner-border spinner-border-lg align-center"></span>\r
            </td>\r
        </tr>\r
    </tbody>\r
</table>` }]
  }], () => [{ type: AccountService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListComponent, { className: "ListComponent", filePath: "src/app/admin/accounts/list.component.ts", lineNumber: 9 });
})();

// src/app/admin/accounts/add-edit.component.ts
var _c0 = (a0) => ({ "is-invalid": a0 });
function AddEditComponent_h1_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1");
    \u0275\u0275text(1, "Create Account");
    \u0275\u0275elementEnd();
  }
}
function AddEditComponent_h1_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1");
    \u0275\u0275text(1, "Edit Account");
    \u0275\u0275elementEnd();
  }
}
function AddEditComponent_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Title is required");
    \u0275\u0275elementEnd();
  }
}
function AddEditComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275template(1, AddEditComponent_div_15_div_1_Template, 2, 0, "div", 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f.title.errors.required);
  }
}
function AddEditComponent_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "First Name is required");
    \u0275\u0275elementEnd();
  }
}
function AddEditComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275template(1, AddEditComponent_div_20_div_1_Template, 2, 0, "div", 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f.firstname.errors.required);
  }
}
function AddEditComponent_div_25_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Last Name is required");
    \u0275\u0275elementEnd();
  }
}
function AddEditComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275template(1, AddEditComponent_div_25_div_1_Template, 2, 0, "div", 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f.lastname.errors.required);
  }
}
function AddEditComponent_div_31_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Email is required");
    \u0275\u0275elementEnd();
  }
}
function AddEditComponent_div_31_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Email must be a valid email address");
    \u0275\u0275elementEnd();
  }
}
function AddEditComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275template(1, AddEditComponent_div_31_div_1_Template, 2, 0, "div", 0)(2, AddEditComponent_div_31_div_2_Template, 2, 0, "div", 0);
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
function AddEditComponent_div_41_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Role is required");
    \u0275\u0275elementEnd();
  }
}
function AddEditComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275template(1, AddEditComponent_div_41_div_1_Template, 2, 0, "div", 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f.role.errors.required);
  }
}
function AddEditComponent_div_50_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Status is required");
    \u0275\u0275elementEnd();
  }
}
function AddEditComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275template(1, AddEditComponent_div_50_div_1_Template, 2, 0, "div", 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f.status.errors.required);
  }
}
function AddEditComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h3", 28);
    \u0275\u0275text(2, "Change Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Leave blank to keep the same password");
    \u0275\u0275elementEnd()();
  }
}
function AddEditComponent_div_57_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
function AddEditComponent_div_57_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Password must be at least 6 characters");
    \u0275\u0275elementEnd();
  }
}
function AddEditComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275template(1, AddEditComponent_div_57_div_1_Template, 2, 0, "div", 0)(2, AddEditComponent_div_57_div_2_Template, 2, 0, "div", 0);
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
function AddEditComponent_div_62_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Confirm Password is required");
    \u0275\u0275elementEnd();
  }
}
function AddEditComponent_div_62_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Passwords must match");
    \u0275\u0275elementEnd();
  }
}
function AddEditComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275template(1, AddEditComponent_div_62_div_1_Template, 2, 0, "div", 0)(2, AddEditComponent_div_62_div_2_Template, 2, 0, "div", 0);
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
function AddEditComponent_span_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 29);
  }
}
var AddEditComponent = class _AddEditComponent {
  formBuilder;
  route;
  router;
  accountService;
  alertService;
  form;
  id;
  isAddMode;
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
    this.id = this.route.snapshot.params["id"];
    this.isAddMode = !this.id;
    this.form = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.minLength(6), this.isAddMode ? Validators.required : Validators.nullValidator]],
      confirmPassword: [""],
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      title: ["", Validators.required],
      role: ["", Validators.required],
      status: ["", Validators.required],
      acceptTerms: ["true"]
    }, {
      validator: MustMatch("password", "confirmPassword")
    });
    if (!this.isAddMode) {
      this.accountService.getById(this.id).pipe(first()).subscribe((x) => this.form.patchValue(x));
    }
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
    if (this.isAddMode) {
      this.createAccount();
    }
  }
  createAccount() {
    this.accountService.create(this.form.value).pipe(first()).subscribe({
      next: () => {
        this.alertService.success("Account created successfully", { keepAfterRouteChange: true });
        this.router.navigate(["../"], { relativeTo: this.route });
      },
      error: (error) => {
        this.alertService.error(error);
        this.loading = false;
      }
    });
  }
  static \u0275fac = function AddEditComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddEditComponent)(\u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AccountService), \u0275\u0275directiveInject(AlertService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddEditComponent, selectors: [["ng-component"]], standalone: false, decls: 69, vars: 37, consts: [[4, "ngIf"], [3, "ngSubmit", "formGroup"], [1, "form-row"], [1, "form-group", "col"], ["formControlName", "title", 1, "form-control", 3, "ngClass"], ["value", ""], ["value", "Mr.", "selected", ""], ["value", "Mrs."], ["value", "Ms."], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-group", "col-5"], ["type", "text", "formControlName", "firstname", 1, "form-control", 3, "ngClass"], ["type", "text", "formControlName", "lastname", 1, "form-control", 3, "ngClass"], [1, "form-group", "col-7"], ["type", "text", "formControlName", "email", 1, "form-control", 3, "ngClass"], ["formControlName", "role", 1, "form-control", 3, "ngClass"], ["value", "User", "selected", ""], ["value", "Admin"], ["formControlName", "status", 1, "form-control", 3, "ngClass"], ["value", "Active"], ["value", "InActive", "selected", ""], ["type", "password", "formControlName", "password", 1, "form-control", 3, "ngClass"], ["type", "password", "formControlName", "confirmPassword", 1, "form-control", 3, "ngClass"], [1, "form-group"], [1, "btn", "btn-primary"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], ["routerLink", "/admin/accounts", 1, "btn", "btn-link"], [1, "invalid-feedback"], [1, "pt-3"], [1, "spinner-border", "spinner-border-sm", "mr-1"]], template: function AddEditComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, AddEditComponent_h1_0_Template, 2, 0, "h1", 0)(1, AddEditComponent_h1_1_Template, 2, 0, "h1", 0);
      \u0275\u0275elementStart(2, "form", 1);
      \u0275\u0275listener("ngSubmit", function AddEditComponent_Template_form_ngSubmit_2_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "label");
      \u0275\u0275text(6, "Title");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "select", 4);
      \u0275\u0275element(8, "option", 5);
      \u0275\u0275elementStart(9, "option", 6);
      \u0275\u0275text(10, "Mr");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "option", 7);
      \u0275\u0275text(12, "Mrs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "option", 8);
      \u0275\u0275text(14, "Ms");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(15, AddEditComponent_div_15_Template, 2, 1, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 10)(17, "label");
      \u0275\u0275text(18, "First Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(19, "input", 11);
      \u0275\u0275template(20, AddEditComponent_div_20_Template, 2, 1, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 10)(22, "label");
      \u0275\u0275text(23, "Last Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "input", 12);
      \u0275\u0275template(25, AddEditComponent_div_25_Template, 2, 1, "div", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 2)(27, "div", 13)(28, "label");
      \u0275\u0275text(29, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(30, "input", 14);
      \u0275\u0275template(31, AddEditComponent_div_31_Template, 3, 2, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 3)(33, "label");
      \u0275\u0275text(34, "Role");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "select", 15);
      \u0275\u0275element(36, "option", 5);
      \u0275\u0275elementStart(37, "option", 16);
      \u0275\u0275text(38, "User");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "option", 17);
      \u0275\u0275text(40, "Admin");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(41, AddEditComponent_div_41_Template, 2, 1, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 3)(43, "label");
      \u0275\u0275text(44, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "select", 18)(46, "option", 19);
      \u0275\u0275text(47, "Active");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "option", 20);
      \u0275\u0275text(49, "InActive");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(50, AddEditComponent_div_50_Template, 2, 1, "div", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(51, AddEditComponent_div_51_Template, 5, 0, "div", 0);
      \u0275\u0275elementStart(52, "div", 2)(53, "div", 3)(54, "label");
      \u0275\u0275text(55, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(56, "input", 21);
      \u0275\u0275template(57, AddEditComponent_div_57_Template, 3, 2, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "div", 3)(59, "label");
      \u0275\u0275text(60, "Confirm Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(61, "input", 22);
      \u0275\u0275template(62, AddEditComponent_div_62_Template, 3, 2, "div", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "div", 23)(64, "button", 24);
      \u0275\u0275template(65, AddEditComponent_span_65_Template, 1, 0, "span", 25);
      \u0275\u0275text(66, " Save ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "a", 26);
      \u0275\u0275text(68, "Cancel");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isAddMode);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isAddMode);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(21, _c0, ctx.submitted && ctx.f.title.errors));
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.submitted && ctx.f.title.errors);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(23, _c0, ctx.submitted && ctx.f.firstname.errors));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitted && ctx.f.firstname.errors);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(25, _c0, ctx.submitted && ctx.f.lastname.errors));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitted && ctx.f.lastname.errors);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(27, _c0, ctx.submitted && ctx.f.email.errors));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitted && ctx.f.email.errors);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(29, _c0, ctx.submitted && ctx.f.role.errors));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.submitted && ctx.f.role.errors);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(31, _c0, ctx.submitted && ctx.f.status.errors));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.submitted && ctx.f.status.errors);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isAddMode);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(33, _c0, ctx.submitted && ctx.f.password.errors));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitted && ctx.f.password.errors);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(35, _c0, ctx.submitted && ctx.f.confirmPassword.errors));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitted && ctx.f.confirmPassword.errors);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.loading);
    }
  }, dependencies: [NgClass, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddEditComponent, [{
    type: Component,
    args: [{ standalone: false, template: `<h1 *ngIf="isAddMode">Create Account</h1>\r
<h1 *ngIf="!isAddMode">Edit Account</h1>\r
<form [formGroup]="form" (ngSubmit)="onSubmit()">\r
    <div class="form-row">\r
        <div class="form-group col">\r
            <label>Title</label>\r
            <select formControlName="title" class="form-control" [ngClass]="{ 'is-invalid': submitted && f.title.errors }">\r
                <option value=""></option>\r
                <option value="Mr." selected>Mr</option>\r
                <option value="Mrs.">Mrs</option>\r
                <option value="Ms.">Ms</option>\r
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
    <div class="form-row">\r
        <div class="form-group col-7">\r
            <label>Email</label>\r
            <input type="text" formControlName="email" class="form-control" [ngClass]="{ 'is-invalid': submitted && f.email.errors }" />\r
            <div *ngIf="submitted && f.email.errors" class="invalid-feedback">\r
                <div *ngIf="f.email.errors.required">Email is required</div>\r
                <div *ngIf="f.email.errors.email">Email must be a valid email address</div>\r
            </div>\r
        </div>\r
        <div class="form-group col">\r
            <label>Role</label>\r
            <select formControlName="role" class="form-control" [ngClass]="{ 'is-invalid': submitted && f.role.errors }">\r
                <option value="" ></option>\r
                <option value="User" selected>User</option>\r
                <option value="Admin">Admin</option>\r
            </select>\r
            <div *ngIf="submitted && f.role.errors" class="invalid-feedback">\r
                <div *ngIf="f.role.errors.required">Role is required</div>\r
            </div>\r
        </div>\r
        <div class="form-group col">\r
            <label>Status</label>\r
            <select formControlName="status" class="form-control" [ngClass]="{ 'is-invalid': submitted && f.status.errors }">\r
                <option value="Active">Active</option>\r
                <option value="InActive" selected>InActive</option>\r
            </select>\r
            <div *ngIf="submitted && f.status.errors" class="invalid-feedback">\r
                <div *ngIf="f.status.errors.required">Status is required</div>\r
            </div>\r
        </div>\r
    </div>\r
    <div *ngIf="!isAddMode">\r
        <h3 class="pt-3">Change Password</h3>\r
        <p>Leave blank to keep the same password</p>\r
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
    <div class="form-group">\r
        <button class="btn btn-primary">\r
            <span *ngIf="loading" class="spinner-border spinner-border-sm mr-1"></span>\r
            Save\r
        </button>\r
        <a routerLink="/admin/accounts" class="btn btn-link">Cancel</a>\r
    </div>\r
</form>` }]
  }], () => [{ type: UntypedFormBuilder }, { type: ActivatedRoute }, { type: Router }, { type: AccountService }, { type: AlertService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddEditComponent, { className: "AddEditComponent", filePath: "src/app/admin/accounts/add-edit.component.ts", lineNumber: 13 });
})();

// src/app/admin/accounts/accounts-routing.module.ts
var routes = [
  { path: "", component: ListComponent },
  { path: "add", component: AddEditComponent },
  { path: "edit/:id", component: AddEditComponent }
];
var AccountsRoutingModule = class _AccountsRoutingModule {
  static \u0275fac = function AccountsRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccountsRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AccountsRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountsRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/admin/accounts/accounts.module.ts
var AccountsModule = class _AccountsModule {
  static \u0275fac = function AccountsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccountsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AccountsModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    ReactiveFormsModule,
    AccountsRoutingModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountsModule, [{
    type: NgModule,
    args: [{
      imports: [
        CommonModule,
        ReactiveFormsModule,
        AccountsRoutingModule
      ],
      declarations: [
        ListComponent,
        AddEditComponent
      ]
    }]
  }], null, null);
})();
export {
  AccountsModule
};
//# sourceMappingURL=chunk-PHBA7AWF.js.map
