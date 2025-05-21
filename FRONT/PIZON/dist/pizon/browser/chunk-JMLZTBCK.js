import {
  Role
} from "./chunk-YJO6JCZO.js";
import {
  AuthGuard
} from "./chunk-PF5I5EEP.js";
import {
  AlertService,
  DepartmentService
} from "./chunk-NRVHY6N7.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgClass,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  NgModule,
  ReactiveFormsModule,
  Router,
  RouterLink,
  RouterModule,
  Validators,
  setClassMetadata,
  ɵNgNoValidate,
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
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-IQD5Y6SM.js";

// src/app/departments/list.component.ts
var _c0 = (a0) => ["/departments/edit", a0];
function DepartmentListComponent_tr_18_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 14);
  }
}
function DepartmentListComponent_tr_18_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Delete");
    \u0275\u0275elementEnd();
  }
}
function DepartmentListComponent_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 9)(8, "a", 11);
    \u0275\u0275text(9, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 12);
    \u0275\u0275listener("click", function DepartmentListComponent_tr_18_Template_button_click_10_listener() {
      const dept_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteDepartment(dept_r2.id));
    });
    \u0275\u0275template(11, DepartmentListComponent_tr_18_span_11_Template, 1, 0, "span", 13)(12, DepartmentListComponent_tr_18_span_12_Template, 2, 0, "span", 8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const dept_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(dept_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(dept_r2.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(dept_r2.employeeCount || 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c0, dept_r2.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", dept_r2.isDeleting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", dept_r2.isDeleting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !dept_r2.isDeleting);
  }
}
function DepartmentListComponent_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 15);
    \u0275\u0275text(2, "No departments found");
    \u0275\u0275elementEnd()();
  }
}
var DepartmentListComponent = class _DepartmentListComponent {
  departmentService;
  departments = [];
  constructor(departmentService) {
    this.departmentService = departmentService;
  }
  ngOnInit() {
    this.departmentService.getAll().subscribe((depts) => this.departments = depts);
  }
  deleteDepartment(id) {
    const dept = this.departments.find((x) => x.id === id);
    dept.isDeleting = true;
    this.departmentService.delete(id).subscribe(() => this.departments = this.departments.filter((x) => x.id !== id));
  }
  static \u0275fac = function DepartmentListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DepartmentListComponent)(\u0275\u0275directiveInject(DepartmentService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DepartmentListComponent, selectors: [["ng-component"]], standalone: false, decls: 23, vars: 2, consts: [[1, "p-4"], [1, "container"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "table-responsive"], [1, "table", "table-striped"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "text-right"], ["routerLink", "/departments/add", 1, "btn", "btn-primary"], [1, "btn", "btn-sm", "btn-primary", "mr-1", 3, "routerLink"], [1, "btn", "btn-sm", "btn-danger", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm"], ["colspan", "3", 1, "text-center"]], template: function DepartmentListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
      \u0275\u0275text(4, "Departments");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "div", 5)(7, "table", 6)(8, "thead")(9, "tr")(10, "th");
      \u0275\u0275text(11, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "th");
      \u0275\u0275text(13, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "th");
      \u0275\u0275text(15, "Employee Count");
      \u0275\u0275elementEnd();
      \u0275\u0275element(16, "th");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "tbody");
      \u0275\u0275template(18, DepartmentListComponent_tr_18_Template, 13, 9, "tr", 7)(19, DepartmentListComponent_tr_19_Template, 3, 0, "tr", 8);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "div", 9)(21, "a", 10);
      \u0275\u0275text(22, "Add Department");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
      \u0275\u0275property("ngForOf", ctx.departments);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !(ctx.departments == null ? null : ctx.departments.length));
    }
  }, dependencies: [NgForOf, NgIf, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DepartmentListComponent, [{
    type: Component,
    args: [{ standalone: false, template: `<div class="p-4">\r
  <div class="container">\r
    <div class="card">\r
      <h3 class="card-header">Departments</h3>\r
      <div class="card-body">\r
        <div class="table-responsive">\r
          <table class="table table-striped">\r
            <thead>\r
              <tr>\r
                <th>Name</th>\r
                <th>Description</th>\r
                <th>Employee Count</th>\r
                <th></th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              <tr *ngFor="let dept of departments">\r
                <td>{{ dept.name }}</td>\r
                <td>{{ dept.description }}</td>\r
                <td>{{ dept.employeeCount || 0 }}</td> <!-- Show count, default to 0 if missing -->\r
                <td class="text-right">\r
                  <a [routerLink]="['/departments/edit', dept.id]" class="btn btn-sm btn-primary mr-1">Edit</a>\r
                  <button (click)="deleteDepartment(dept.id)" class="btn btn-sm btn-danger" [disabled]="dept.isDeleting">\r
                    <span *ngIf="dept.isDeleting" class="spinner-border spinner-border-sm"></span>\r
                    <span *ngIf="!dept.isDeleting">Delete</span>\r
                  </button>\r
                </td>\r
              </tr>\r
              <tr *ngIf="!departments?.length">\r
                <td colspan="3" class="text-center">No departments found</td>\r
              </tr>\r
            </tbody>\r
          </table>\r
        </div>\r
        <div class="text-right">\r
          <a routerLink="/departments/add" class="btn btn-primary">Add Department</a>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>` }]
  }], () => [{ type: DepartmentService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DepartmentListComponent, { className: "DepartmentListComponent", filePath: "src/app/departments/list.component.ts", lineNumber: 8 });
})();

// src/app/departments/add-edit.component.ts
var _c02 = (a0) => ({ "is-invalid": a0 });
function DepartmentAddEditComponent_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Name is required");
    \u0275\u0275elementEnd();
  }
}
function DepartmentAddEditComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275template(1, DepartmentAddEditComponent_div_11_div_1_Template, 2, 0, "div", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f.name.errors.required);
  }
}
var DepartmentAddEditComponent = class _DepartmentAddEditComponent {
  formBuilder;
  route;
  router;
  departmentService;
  alertService;
  form;
  id;
  isAddMode;
  constructor(formBuilder, route, router, departmentService, alertService) {
    this.formBuilder = formBuilder;
    this.route = route;
    this.router = router;
    this.departmentService = departmentService;
    this.alertService = alertService;
  }
  ngOnInit() {
    this.id = Number(this.route.snapshot.params["id"]);
    this.isAddMode = !this.id;
    this.form = this.formBuilder.group({
      name: ["", Validators.required],
      description: [""]
    });
    if (!this.isAddMode) {
      this.departmentService.getById(this.id).subscribe((dept) => this.form.patchValue(dept));
    }
  }
  get f() {
    return this.form.controls;
  }
  onSubmit() {
    if (this.form.invalid)
      return;
    if (this.isAddMode) {
      this.createDepartment();
    } else {
      this.updateDepartment();
    }
  }
  createDepartment() {
    this.departmentService.create(this.form.value).subscribe({
      next: () => {
        this.alertService.success("Department created successfully", { keepAfterRouteChange: true });
        this.router.navigate(["/departments"]);
      },
      error: (error) => this.alertService.error(error)
    });
  }
  updateDepartment() {
    this.departmentService.update(this.id, this.form.value).subscribe({
      next: () => {
        this.alertService.success("Department updated successfully", { keepAfterRouteChange: true });
        this.router.navigate(["/departments"]);
      },
      error: (error) => this.alertService.error(error)
    });
  }
  static \u0275fac = function DepartmentAddEditComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DepartmentAddEditComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(DepartmentService), \u0275\u0275directiveInject(AlertService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DepartmentAddEditComponent, selectors: [["ng-component"]], standalone: false, decls: 21, vars: 7, consts: [[1, "p-4"], [1, "container"], [1, "card"], [1, "card-header"], [1, "card-body"], [3, "ngSubmit", "formGroup"], [1, "form-group"], ["type", "text", "formControlName", "name", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "description", 1, "form-control"], [1, "text-center"], ["type", "submit", 1, "btn", "btn-primary", "mr-1", 3, "disabled"], ["routerLink", "/departments", 1, "btn", "btn-secondary"], [1, "invalid-feedback"], [4, "ngIf"]], template: function DepartmentAddEditComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "form", 5);
      \u0275\u0275listener("ngSubmit", function DepartmentAddEditComponent_Template_form_ngSubmit_6_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(7, "div", 6)(8, "label");
      \u0275\u0275text(9, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(10, "input", 7);
      \u0275\u0275template(11, DepartmentAddEditComponent_div_11_Template, 2, 1, "div", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 6)(13, "label");
      \u0275\u0275text(14, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275element(15, "textarea", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 10)(17, "button", 11);
      \u0275\u0275text(18, "Save");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "a", 12);
      \u0275\u0275text(20, "Cancel");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.isAddMode ? "Add Department" : "Edit Department");
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c02, ctx.f.name.touched && ctx.f.name.errors));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.f.name.touched && ctx.f.name.errors);
      \u0275\u0275advance(6);
      \u0275\u0275property("disabled", ctx.form.invalid);
    }
  }, dependencies: [NgClass, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DepartmentAddEditComponent, [{
    type: Component,
    args: [{ standalone: false, template: `\r
<div class="p-4">\r
  <div class="container">\r
    <div class="card">\r
      <h3 class="card-header">{{ isAddMode ? 'Add Department' : 'Edit Department' }}</h3>\r
      <div class="card-body">\r
        <form [formGroup]="form" (ngSubmit)="onSubmit()">\r
          <div class="form-group">\r
            <label>Name</label>\r
            <input type="text" formControlName="name" class="form-control" [ngClass]="{ 'is-invalid': f.name.touched && f.name.errors }">\r
            <div *ngIf="f.name.touched && f.name.errors" class="invalid-feedback">\r
              <div *ngIf="f.name.errors.required">Name is required</div>\r
            </div>\r
          </div>\r
          <div class="form-group">\r
            <label>Description</label>\r
            <textarea formControlName="description" class="form-control"></textarea>\r
          </div>\r
          <div class="text-center">\r
            <button type="submit" class="btn btn-primary mr-1" [disabled]="form.invalid">Save</button>\r
            <a routerLink="/departments" class="btn btn-secondary">Cancel</a>\r
          </div>\r
        </form>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
` }]
  }], () => [{ type: FormBuilder }, { type: ActivatedRoute }, { type: Router }, { type: DepartmentService }, { type: AlertService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DepartmentAddEditComponent, { className: "DepartmentAddEditComponent", filePath: "src/app/departments/add-edit.component.ts", lineNumber: 11 });
})();

// src/app/departments/departments-routing.module.ts
var routes = [
  {
    path: "",
    component: DepartmentListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "add",
    component: DepartmentAddEditComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: "edit/:id",
    component: DepartmentAddEditComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  }
];
var DepartmentsRoutingModule = class _DepartmentsRoutingModule {
  static \u0275fac = function DepartmentsRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DepartmentsRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DepartmentsRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DepartmentsRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/departments/departments.module.ts
var DepartmentsModule = class _DepartmentsModule {
  static \u0275fac = function DepartmentsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DepartmentsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DepartmentsModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    ReactiveFormsModule,
    DepartmentsRoutingModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DepartmentsModule, [{
    type: NgModule,
    args: [{
      imports: [
        CommonModule,
        ReactiveFormsModule,
        DepartmentsRoutingModule
      ],
      declarations: [
        DepartmentListComponent,
        DepartmentAddEditComponent
      ]
    }]
  }], null, null);
})();
export {
  DepartmentsModule
};
//# sourceMappingURL=chunk-JMLZTBCK.js.map
