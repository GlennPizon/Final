import {
  Role
} from "./chunk-YJO6JCZO.js";
import {
  AuthGuard
} from "./chunk-PF5I5EEP.js";
import {
  AccountService,
  AlertService,
  DepartmentService,
  EmployeeService
} from "./chunk-NRVHY6N7.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  DatePipe,
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
  NgSelectOption,
  ReactiveFormsModule,
  Router,
  RouterLink,
  RouterModule,
  SelectControlValueAccessor,
  Validators,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-IQD5Y6SM.js";

// src/app/employees/list.component.ts
var _c0 = (a0) => ["/employees/edit", a0];
var _c1 = (a0) => ["/workflows", a0];
function ListComponent_tr_23_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 13);
  }
}
function ListComponent_tr_23_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Delete");
    \u0275\u0275elementEnd();
  }
}
function ListComponent_tr_23_Template(rf, ctx) {
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
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 8)(15, "div", 9)(16, "a", 10);
    \u0275\u0275text(17, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "a", 10);
    \u0275\u0275text(19, "Workflows");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 11);
    \u0275\u0275listener("click", function ListComponent_tr_23_Template_button_click_20_listener() {
      const employee_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteEmployee(employee_r2.id));
    });
    \u0275\u0275template(21, ListComponent_tr_23_span_21_Template, 1, 0, "span", 12)(22, ListComponent_tr_23_span_22_Template, 2, 0, "span", 7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const employee_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(employee_r2.employeeId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(employee_r2.user == null ? null : employee_r2.user.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(employee_r2.position);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(employee_r2.department == null ? null : employee_r2.department.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 11, employee_r2.hireDate, "mediumDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(employee_r2.status);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(14, _c0, employee_r2.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(16, _c1, employee_r2.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", employee_r2.isDeleting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", employee_r2.isDeleting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !employee_r2.isDeleting);
  }
}
function ListComponent_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 14);
    \u0275\u0275text(2, "No employees found");
    \u0275\u0275elementEnd()();
  }
}
var ListComponent = class _ListComponent {
  employeeService;
  employees = [];
  constructor(employeeService) {
    this.employeeService = employeeService;
  }
  ngOnInit() {
    this.employeeService.getAll().subscribe((employees) => this.employees = employees);
  }
  deleteEmployee(id) {
    const employee = this.employees.find((x) => x.id === id);
    employee.isDeleting = true;
    this.employeeService.delete(id).subscribe(() => this.employees = this.employees.filter((x) => x.id !== id));
  }
  static \u0275fac = function ListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ListComponent)(\u0275\u0275directiveInject(EmployeeService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListComponent, selectors: [["ng-component"]], standalone: false, decls: 25, vars: 2, consts: [[1, "p-4"], [1, "container"], ["routerLink", "add", 1, "btn", "btn-sm", "btn-success", "mb-2"], [1, "table", "table-striped"], [2, "width", "10%"], [2, "width", "20%"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "text-right"], [2, "display", "flex", "gap", "0.5rem", "justify-content", "flex-end"], [1, "btn", "btn-sm", "btn-primary", "mr-1", 3, "routerLink"], [1, "btn", "btn-sm", "btn-danger", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm"], ["colspan", "7", 1, "text-center"]], template: function ListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Employees");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "a", 2);
      \u0275\u0275text(5, "Add Employee");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "table", 3)(7, "thead")(8, "tr")(9, "th", 4);
      \u0275\u0275text(10, "Employee ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "th", 5);
      \u0275\u0275text(12, "User");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "th", 5);
      \u0275\u0275text(14, "Position");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "th", 5);
      \u0275\u0275text(16, "Department");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "th", 4);
      \u0275\u0275text(18, "Hire Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "th", 4);
      \u0275\u0275text(20, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(21, "th", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "tbody");
      \u0275\u0275template(23, ListComponent_tr_23_Template, 23, 18, "tr", 6)(24, ListComponent_tr_24_Template, 3, 0, "tr", 7);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(23);
      \u0275\u0275property("ngForOf", ctx.employees);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !(ctx.employees == null ? null : ctx.employees.length));
    }
  }, dependencies: [NgForOf, NgIf, RouterLink, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListComponent, [{
    type: Component,
    args: [{ standalone: false, template: `<div class="p-4">\r
  <div class="container">\r
    <h1>Employees</h1>\r
    <a routerLink="add" class="btn btn-sm btn-success mb-2">Add Employee</a>\r
      <table class="table table-striped">\r
          <thead>\r
              <tr>\r
                  <th style="width:10%">Employee ID</th>\r
                  <th style="width:20%">User</th>\r
                  <th style="width:20%">Position</th>\r
                  <th style="width:20%">Department</th>\r
                  <th style="width:10%">Hire Date</th>\r
                  <th style="width:10%">Status</th>\r
                  <th style="width:10%"></th>\r
              </tr>\r
          </thead>\r
          <tbody>\r
            <tr *ngFor="let employee of employees">\r
              <td>{{ employee.employeeId }}</td>\r
              <td>{{ employee.user?.email }}</td>\r
              <td>{{ employee.position }}</td>\r
              <td>{{ employee.department?.name }}</td>\r
              <td>{{ employee.hireDate | date:'mediumDate' }}</td>\r
              <td>{{ employee.status }}</td>\r
              <td class="text-right">\r
                <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">\r
                  <a [routerLink]="['/employees/edit', employee.id]" class="btn btn-sm btn-primary mr-1">Edit</a>\r
                  <a [routerLink]="['/workflows', employee.id]" class="btn btn-sm btn-primary mr-1">Workflows</a>\r
                  <button (click)="deleteEmployee(employee.id)" class="btn btn-sm btn-danger" [disabled]="employee.isDeleting">\r
                    <span *ngIf="employee.isDeleting" class="spinner-border spinner-border-sm"></span>\r
                    <span *ngIf="!employee.isDeleting">Delete</span>\r
                  </button>\r
              </div>\r
              </td>\r
            </tr>\r
            <tr *ngIf="!employees?.length">\r
              <td colspan="7" class="text-center">No employees found</td>\r
            </tr>\r
          </tbody>\r
      </table>\r
  </div>\r
</div>\r
\r
<!-- <div class="card">\r
    <h3 class="card-header">Employees</h3>\r
    <div class="card-body">\r
      <div class="table-responsive">\r
        <table class="table table-striped">\r
          <thead>\r
            <tr>\r
              <th>Employee ID</th>\r
              <th>User</th>\r
              <th>Position</th>\r
              <th>Department</th>\r
              <th>Hire Date</th>\r
              <th>Status</th>\r
              <th></th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr *ngFor="let employee of employees">\r
              <td>{{ employee.employeeId }}</td>\r
              <td>{{ employee.user?.email }}</td>\r
              <td>{{ employee.position }}</td>\r
              <td>{{ employee.department?.name }}</td>\r
              <td>{{ employee.hireDate | date:'mediumDate' }}</td>\r
              <td>{{ employee.status }}</td>\r
              <td class="text-right">\r
                <a [routerLink]="['/employees/edit', employee.id]" class="btn btn-sm btn-primary mr-1">Edit</a>\r
                <button (click)="deleteEmployee(employee.id)" class="btn btn-sm btn-danger" [disabled]="employee.isDeleting">\r
                  <span *ngIf="employee.isDeleting" class="spinner-border spinner-border-sm"></span>\r
                  <span *ngIf="!employee.isDeleting">Delete</span>\r
                </button>\r
              </td>\r
            </tr>\r
            <tr *ngIf="!employees?.length">\r
              <td colspan="7" class="text-center">No employees found</td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>\r
      <div class="text-right">\r
        <a routerLink="/employees/add" class="btn btn-primary">Add Employee</a>\r
      </div>\r
    </div>\r
</div> -->` }]
  }], () => [{ type: EmployeeService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListComponent, { className: "ListComponent", filePath: "src/app/employees/list.component.ts", lineNumber: 8 });
})();

// src/app/employees/add-edit.component.ts
var _c02 = (a0) => ({ "is-invalid": a0 });
function AddEditComponent_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Employee ID is required");
    \u0275\u0275elementEnd();
  }
}
function AddEditComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275template(1, AddEditComponent_div_9_div_1_Template, 2, 0, "div", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f.employeeId.errors.required);
  }
}
function AddEditComponent_option_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r2 = ctx.$implicit;
    \u0275\u0275property("value", user_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(user_r2.email);
  }
}
function AddEditComponent_div_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "User is required");
    \u0275\u0275elementEnd();
  }
}
function AddEditComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275template(1, AddEditComponent_div_17_div_1_Template, 2, 0, "div", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f.accountId.errors.required);
  }
}
function AddEditComponent_div_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Position is required");
    \u0275\u0275elementEnd();
  }
}
function AddEditComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275template(1, AddEditComponent_div_22_div_1_Template, 2, 0, "div", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f.position.errors.required);
  }
}
function AddEditComponent_option_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dept_r3 = ctx.$implicit;
    \u0275\u0275property("value", dept_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(dept_r3.name);
  }
}
function AddEditComponent_div_30_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Department is required");
    \u0275\u0275elementEnd();
  }
}
function AddEditComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275template(1, AddEditComponent_div_30_div_1_Template, 2, 0, "div", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f.departmentId.errors.required);
  }
}
function AddEditComponent_div_35_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Hire Date is required");
    \u0275\u0275elementEnd();
  }
}
function AddEditComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275template(1, AddEditComponent_div_35_div_1_Template, 2, 0, "div", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f.hireDate.errors.required);
  }
}
function AddEditComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label");
    \u0275\u0275text(2, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 20)(4, "option", 21);
    \u0275\u0275text(5, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "option", 22);
    \u0275\u0275text(7, "Inactive");
    \u0275\u0275elementEnd()()();
  }
}
var AddEditComponent = class _AddEditComponent {
  formBuilder;
  route;
  router;
  employeeService;
  accountService;
  departmentService;
  alertService;
  form;
  id;
  isAddMode;
  users = [];
  departments = [];
  constructor(formBuilder, route, router, employeeService, accountService, departmentService, alertService) {
    this.formBuilder = formBuilder;
    this.route = route;
    this.router = router;
    this.employeeService = employeeService;
    this.accountService = accountService;
    this.departmentService = departmentService;
    this.alertService = alertService;
  }
  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.isAddMode = !this.id;
    this.form = this.formBuilder.group({
      employeeId: ["", Validators.required],
      accountId: ["", Validators.required],
      departmentId: ["", Validators.required],
      position: ["", Validators.required],
      hireDate: ["", Validators.required],
      status: ["Active"]
    });
    this.accountService.getAll().subscribe((users) => this.users = users);
    this.departmentService.getAll().subscribe((depts) => this.departments = depts);
    if (!this.isAddMode) {
      this.employeeService.getById(this.id).subscribe((employee) => this.form.patchValue(employee));
    }
  }
  get f() {
    return this.form.controls;
  }
  onSubmit() {
    if (this.form.invalid)
      return;
    if (this.isAddMode) {
      this.createEmployee();
    } else {
      this.updateEmployee();
    }
  }
  createEmployee() {
    this.employeeService.create(this.form.value).subscribe({
      next: () => {
        this.alertService.success("Employee created successfully", { keepAfterRouteChange: true });
        this.router.navigate(["/employees"]);
      },
      error: (error) => this.alertService.error(error)
    });
  }
  updateEmployee() {
    this.employeeService.update(this.id, this.form.value).subscribe({
      next: () => {
        this.alertService.success("Employee updated successfully", { keepAfterRouteChange: true });
        this.router.navigate(["/employees"]);
      },
      error: (error) => this.alertService.error(error)
    });
  }
  static \u0275fac = function AddEditComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddEditComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(EmployeeService), \u0275\u0275directiveInject(AccountService), \u0275\u0275directiveInject(DepartmentService), \u0275\u0275directiveInject(AlertService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddEditComponent, selectors: [["ng-component"]], standalone: false, decls: 42, vars: 26, consts: [[1, "card"], [1, "card-header"], [1, "card-body"], [3, "ngSubmit", "formGroup"], [1, "form-group"], ["type", "text", "formControlName", "employeeId", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "accountId", 1, "form-control", 3, "ngClass"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "position", 1, "form-control", 3, "ngClass"], ["formControlName", "departmentId", 1, "form-control", 3, "ngClass"], ["type", "date", "formControlName", "hireDate", 1, "form-control", 3, "ngClass"], ["class", "form-group", 4, "ngIf"], [1, "text-center"], ["type", "submit", 1, "btn", "btn-primary", "mr-1", 3, "disabled"], ["routerLink", "/employees", 1, "btn", "btn-secondary"], [1, "invalid-feedback"], [4, "ngIf"], [3, "value"], ["formControlName", "status", 1, "form-control"], ["value", "Active"], ["value", "Inactive"]], template: function AddEditComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2)(4, "form", 3);
      \u0275\u0275listener("ngSubmit", function AddEditComponent_Template_form_ngSubmit_4_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(5, "div", 4)(6, "label");
      \u0275\u0275text(7, "Employee ID");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "input", 5);
      \u0275\u0275template(9, AddEditComponent_div_9_Template, 2, 1, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 4)(11, "label");
      \u0275\u0275text(12, "User");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "select", 7)(14, "option", 8);
      \u0275\u0275text(15, "Select User");
      \u0275\u0275elementEnd();
      \u0275\u0275template(16, AddEditComponent_option_16_Template, 2, 2, "option", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275template(17, AddEditComponent_div_17_Template, 2, 1, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 4)(19, "label");
      \u0275\u0275text(20, "Position");
      \u0275\u0275elementEnd();
      \u0275\u0275element(21, "input", 10);
      \u0275\u0275template(22, AddEditComponent_div_22_Template, 2, 1, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 4)(24, "label");
      \u0275\u0275text(25, "Department");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "select", 11)(27, "option", 8);
      \u0275\u0275text(28, "Select Department");
      \u0275\u0275elementEnd();
      \u0275\u0275template(29, AddEditComponent_option_29_Template, 2, 2, "option", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275template(30, AddEditComponent_div_30_Template, 2, 1, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 4)(32, "label");
      \u0275\u0275text(33, "Hire Date");
      \u0275\u0275elementEnd();
      \u0275\u0275element(34, "input", 12);
      \u0275\u0275template(35, AddEditComponent_div_35_Template, 2, 1, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275template(36, AddEditComponent_div_36_Template, 8, 0, "div", 13);
      \u0275\u0275elementStart(37, "div", 14)(38, "button", 15);
      \u0275\u0275text(39, "Save");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "a", 16);
      \u0275\u0275text(41, "Cancel");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isAddMode ? "Add Employee" : "Edit Employee");
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(16, _c02, ctx.f.employeeId.touched && ctx.f.employeeId.errors));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.f.employeeId.touched && ctx.f.employeeId.errors);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(18, _c02, ctx.f.accountId.touched && ctx.f.accountId.errors));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.users);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.f.accountId.touched && ctx.f.accountId.errors);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(20, _c02, ctx.f.position.touched && ctx.f.position.errors));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.f.position.touched && ctx.f.position.errors);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(22, _c02, ctx.f.departmentId.touched && ctx.f.departmentId.errors));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.departments);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.f.departmentId.touched && ctx.f.departmentId.errors);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(24, _c02, ctx.f.hireDate.touched && ctx.f.hireDate.errors));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.f.hireDate.touched && ctx.f.hireDate.errors);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isAddMode);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.form.invalid);
    }
  }, dependencies: [NgClass, NgForOf, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddEditComponent, [{
    type: Component,
    args: [{ standalone: false, template: `<div class="card">\r
    <h3 class="card-header">{{ isAddMode ? 'Add Employee' : 'Edit Employee' }}</h3>\r
    <div class="card-body">\r
      <form [formGroup]="form" (ngSubmit)="onSubmit()">\r
        <div class="form-group">\r
          <label>Employee ID</label>\r
          <input type="text" formControlName="employeeId" class="form-control" [ngClass]="{ 'is-invalid': f.employeeId.touched && f.employeeId.errors }">\r
          <div *ngIf="f.employeeId.touched && f.employeeId.errors" class="invalid-feedback">\r
            <div *ngIf="f.employeeId.errors.required">Employee ID is required</div>\r
          </div>\r
        </div>\r
        <div class="form-group">\r
          <label>User</label>\r
          <select formControlName="accountId" class="form-control" [ngClass]="{ 'is-invalid': f.accountId.touched && f.accountId.errors }">\r
            <option value="">Select User</option>\r
            <option *ngFor="let user of users" [value]="user.id">{{ user.email }}</option>\r
          </select>\r
          <div *ngIf="f.accountId.touched && f.accountId.errors" class="invalid-feedback">\r
            <div *ngIf="f.accountId.errors.required">User is required</div>\r
          </div>\r
        </div>\r
        <div class="form-group">\r
          <label>Position</label>\r
          <input type="text" formControlName="position" class="form-control" [ngClass]="{ 'is-invalid': f.position.touched && f.position.errors }">\r
          <div *ngIf="f.position.touched && f.position.errors" class="invalid-feedback">\r
            <div *ngIf="f.position.errors.required">Position is required</div>\r
          </div>\r
        </div>\r
        <div class="form-group">\r
          <label>Department</label>\r
          <select formControlName="departmentId" class="form-control" [ngClass]="{ 'is-invalid': f.departmentId.touched && f.departmentId.errors }">\r
            <option value="">Select Department</option>\r
            <option *ngFor="let dept of departments" [value]="dept.id">{{ dept.name }}</option>\r
          </select>\r
          <div *ngIf="f.departmentId.touched && f.departmentId.errors" class="invalid-feedback">\r
            <div *ngIf="f.departmentId.errors.required">Department is required</div>\r
          </div>\r
        </div>\r
        <div class="form-group">\r
          <label>Hire Date</label>\r
          <input type="date" formControlName="hireDate" class="form-control" [ngClass]="{ 'is-invalid': f.hireDate.touched && f.hireDate.errors }">\r
          <div *ngIf="f.hireDate.touched && f.hireDate.errors" class="invalid-feedback">\r
            <div *ngIf="f.hireDate.errors.required">Hire Date is required</div>\r
          </div>\r
        </div>\r
        <div class="form-group" *ngIf="!isAddMode">\r
          <label>Status</label>\r
          <select formControlName="status" class="form-control">\r
            <option value="Active">Active</option>\r
            <option value="Inactive">Inactive</option>\r
          </select>\r
        </div>\r
        <div class="text-center">\r
          <button type="submit" class="btn btn-primary mr-1" [disabled]="form.invalid">Save</button>\r
          <a routerLink="/employees" class="btn btn-secondary">Cancel</a>\r
        </div>\r
      </form>\r
    </div>\r
  </div>` }]
  }], () => [{ type: FormBuilder }, { type: ActivatedRoute }, { type: Router }, { type: EmployeeService }, { type: AccountService }, { type: DepartmentService }, { type: AlertService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddEditComponent, { className: "AddEditComponent", filePath: "src/app/employees/add-edit.component.ts", lineNumber: 13 });
})();

// src/app/employees/employees-routing.module.ts
var routes = [
  {
    path: "",
    component: ListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "add",
    component: AddEditComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: "edit/:id",
    component: AddEditComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  }
];
var EmployeesRoutingModule = class _EmployeesRoutingModule {
  static \u0275fac = function EmployeesRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmployeesRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _EmployeesRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmployeesRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/employees/employees.module.ts
var EmployeesModule = class _EmployeesModule {
  static \u0275fac = function EmployeesModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmployeesModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _EmployeesModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    ReactiveFormsModule,
    EmployeesRoutingModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmployeesModule, [{
    type: NgModule,
    args: [{
      imports: [
        CommonModule,
        ReactiveFormsModule,
        EmployeesRoutingModule
      ],
      declarations: [
        ListComponent,
        AddEditComponent
      ]
    }]
  }], null, null);
})();
export {
  EmployeesModule
};
//# sourceMappingURL=chunk-LZZHUMZO.js.map
