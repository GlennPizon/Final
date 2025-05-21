import {
  Role
} from "./chunk-YJO6JCZO.js";
import {
  AuthGuard
} from "./chunk-PF5I5EEP.js";
import {
  AlertService,
  WorkflowService
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
  JsonPipe,
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
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IQD5Y6SM.js";

// src/app/workflows/list.component.ts
var _c0 = (a0) => ["/workflows", a0, "create"];
var _c1 = (a0, a1, a2) => ({ "badge badge-warning": a0, "badge badge-success": a1, "badge badge-danger": a2 });
function ListComponent_tr_18_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function ListComponent_tr_18_button_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const workflow_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateStatus(workflow_r2.id, "Approved"));
    });
    \u0275\u0275text(1, "Approve");
    \u0275\u0275elementEnd();
  }
}
function ListComponent_tr_18_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function ListComponent_tr_18_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const workflow_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateStatus(workflow_r2.id, "Rejected"));
    });
    \u0275\u0275text(1, "Reject");
    \u0275\u0275elementEnd();
  }
}
function ListComponent_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 9);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "json");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 7);
    \u0275\u0275template(13, ListComponent_tr_18_button_13_Template, 2, 0, "button", 10)(14, ListComponent_tr_18_button_14_Template, 2, 0, "button", 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const workflow_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(workflow_r2.type);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(12, _c1, workflow_r2.status === "Pending", workflow_r2.status === "Approved", workflow_r2.status === "Rejected"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(workflow_r2.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 7, workflow_r2.details));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 9, workflow_r2.createdAt, "medium"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", workflow_r2.status === "Pending");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", workflow_r2.status === "Pending");
  }
}
function ListComponent_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 14);
    \u0275\u0275text(2, "No workflows found");
    \u0275\u0275elementEnd()();
  }
}
var ListComponent = class _ListComponent {
  route;
  workflowService;
  alertService;
  employeeId;
  workflows = [];
  constructor(route, workflowService, alertService) {
    this.route = route;
    this.workflowService = workflowService;
    this.alertService = alertService;
  }
  ngOnInit() {
    this.employeeId = this.route.snapshot.params["employeeId"];
    this.workflowService.getByEmployeeId(this.employeeId).subscribe((workflows) => this.workflows = workflows);
  }
  updateStatus(id, status) {
    this.workflowService.updateStatus(id, status).subscribe({
      next: () => {
        this.alertService.success(`Workflow ${status} successfully`);
        this.workflowService.getByEmployeeId(this.employeeId).subscribe((workflows) => this.workflows = workflows);
      },
      error: (error) => this.alertService.error(error)
    });
  }
  static \u0275fac = function ListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ListComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(WorkflowService), \u0275\u0275directiveInject(AlertService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListComponent, selectors: [["ng-component"]], standalone: false, decls: 23, vars: 6, consts: [[1, "card"], [1, "card-header"], [1, "card-body"], [1, "table-responsive"], [1, "table", "table-striped"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "text-right"], [1, "btn", "btn-primary", 3, "routerLink"], [3, "ngClass"], ["class", "btn btn-sm btn-success mr-1", 3, "click", 4, "ngIf"], ["class", "btn btn-sm btn-danger", 3, "click", 4, "ngIf"], [1, "btn", "btn-sm", "btn-success", "mr-1", 3, "click"], [1, "btn", "btn-sm", "btn-danger", 3, "click"], ["colspan", "5", 1, "text-center"]], template: function ListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "table", 4)(6, "thead")(7, "tr")(8, "th");
      \u0275\u0275text(9, "Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "th");
      \u0275\u0275text(11, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "th");
      \u0275\u0275text(13, "Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "th");
      \u0275\u0275text(15, "Created");
      \u0275\u0275elementEnd();
      \u0275\u0275element(16, "th");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "tbody");
      \u0275\u0275template(18, ListComponent_tr_18_Template, 15, 16, "tr", 5)(19, ListComponent_tr_19_Template, 3, 0, "tr", 6);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "div", 7)(21, "a", 8);
      \u0275\u0275text(22, "Create Workflow");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("Workflows for Employee ", ctx.employeeId, "");
      \u0275\u0275advance(16);
      \u0275\u0275property("ngForOf", ctx.workflows);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !(ctx.workflows == null ? null : ctx.workflows.length));
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c0, ctx.employeeId));
    }
  }, dependencies: [NgClass, NgForOf, NgIf, RouterLink, JsonPipe, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListComponent, [{
    type: Component,
    args: [{ standalone: false, template: `\r
<div class="card">\r
    <h3 class="card-header">Workflows for Employee {{ employeeId }}</h3>\r
    <div class="card-body">\r
      <div class="table-responsive">\r
        <table class="table table-striped">\r
          <thead>\r
            <tr>\r
              <th>Type</th>\r
              <th>Status</th>\r
              <th>Details</th>\r
              <th>Created</th>\r
              <th></th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr *ngFor="let workflow of workflows">\r
              <td>{{ workflow.type }}</td>\r
              <td>\r
                <span [ngClass]="{\r
                  'badge badge-warning': workflow.status === 'Pending',\r
                  'badge badge-success': workflow.status === 'Approved',\r
                  'badge badge-danger': workflow.status === 'Rejected'\r
                }">{{ workflow.status }}</span>\r
              </td>\r
              <td>{{ workflow.details | json }}</td>\r
              <td>{{ workflow.createdAt | date:'medium' }}</td>\r
              <td class="text-right">\r
                <button *ngIf="workflow.status === 'Pending'" (click)="updateStatus(workflow.id, 'Approved')" class="btn btn-sm btn-success mr-1">Approve</button>\r
                <button *ngIf="workflow.status === 'Pending'" (click)="updateStatus(workflow.id, 'Rejected')" class="btn btn-sm btn-danger">Reject</button>\r
              </td>\r
            </tr>\r
            <tr *ngIf="!workflows?.length">\r
              <td colspan="5" class="text-center">No workflows found</td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>\r
      <div class="text-right">\r
        <a [routerLink]="['/workflows', employeeId, 'create']" class="btn btn-primary">Create Workflow</a>\r
      </div>\r
    </div>\r
  </div>\r
` }]
  }], () => [{ type: ActivatedRoute }, { type: WorkflowService }, { type: AlertService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListComponent, { className: "ListComponent", filePath: "src/app/workflows/list.component.ts", lineNumber: 11 });
})();

// src/app/workflows/create.component.ts
var _c02 = (a0) => ({ "is-invalid": a0 });
var _c12 = (a0) => ["/workflows", a0];
function WorkflowCreateComponent_div_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Type is required");
    \u0275\u0275elementEnd();
  }
}
function WorkflowCreateComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275template(1, WorkflowCreateComponent_div_17_div_1_Template, 2, 0, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f["type"].errors["required"]);
  }
}
function WorkflowCreateComponent_div_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Invalid JSON format");
    \u0275\u0275elementEnd();
  }
}
function WorkflowCreateComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275template(1, WorkflowCreateComponent_div_22_div_1_Template, 2, 0, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f["details"].errors["required"]);
  }
}
var WorkflowCreateComponent = class _WorkflowCreateComponent {
  formBuilder;
  route;
  router;
  workflowService;
  alertService;
  form;
  employeeId;
  constructor(formBuilder, route, router, workflowService, alertService) {
    this.formBuilder = formBuilder;
    this.route = route;
    this.router = router;
    this.workflowService = workflowService;
    this.alertService = alertService;
  }
  ngOnInit() {
    this.employeeId = Number(this.route.snapshot.params["employeeId"]);
    this.form = this.formBuilder.group({
      type: ["", Validators.required],
      details: [""]
    });
  }
  get f() {
    return this.form.controls;
  }
  onSubmit() {
    if (this.form.invalid)
      return;
    const workflow = {
      employeeId: this.employeeId,
      type: this.form.value["type"],
      // Use bracket notation for safe access
      details: this.form.value["details"] || "{}"
      // Ensure valid JSON format
    };
    this.workflowService.create(workflow).subscribe({
      next: () => {
        this.alertService.success("Workflow created successfully", { keepAfterRouteChange: true });
        this.router.navigate(["/workflows", this.employeeId]);
      },
      error: (error) => this.alertService.error(error)
    });
  }
  static \u0275fac = function WorkflowCreateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WorkflowCreateComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(WorkflowService), \u0275\u0275directiveInject(AlertService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WorkflowCreateComponent, selectors: [["ng-component"]], standalone: false, decls: 28, vars: 13, consts: [[1, "card"], [1, "card-header"], [1, "card-body"], [3, "ngSubmit", "formGroup"], [1, "form-group"], ["formControlName", "type", 1, "form-control", 3, "ngClass"], ["value", ""], ["value", "Onboarding"], ["value", "DepartmentChange"], ["value", "Termination"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "details", 1, "form-control", 3, "ngClass"], [1, "text-center"], ["type", "submit", 1, "btn", "btn-primary", "mr-1", 3, "disabled"], [1, "btn", "btn-secondary", 3, "routerLink"], [1, "invalid-feedback"], [4, "ngIf"]], template: function WorkflowCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
      \u0275\u0275text(2, "Create Workflow");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2)(4, "form", 3);
      \u0275\u0275listener("ngSubmit", function WorkflowCreateComponent_Template_form_ngSubmit_4_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(5, "div", 4)(6, "label");
      \u0275\u0275text(7, "Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "select", 5)(9, "option", 6);
      \u0275\u0275text(10, "Select Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "option", 7);
      \u0275\u0275text(12, "Onboarding");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "option", 8);
      \u0275\u0275text(14, "Department Change");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "option", 9);
      \u0275\u0275text(16, "Termination");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(17, WorkflowCreateComponent_div_17_Template, 2, 1, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 4)(19, "label");
      \u0275\u0275text(20, "Details (JSON)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(21, "textarea", 11);
      \u0275\u0275template(22, WorkflowCreateComponent_div_22_Template, 2, 1, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 12)(24, "button", 13);
      \u0275\u0275text(25, "Create");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "a", 14);
      \u0275\u0275text(27, "Cancel");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(7, _c02, ctx.f["type"].touched && ctx.f["type"].errors));
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.f["type"].touched && ctx.f["type"].errors);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(9, _c02, ctx.f["details"].touched && ctx.f["details"].errors));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.f["details"].touched && ctx.f["details"].errors);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.form.invalid);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c12, ctx.employeeId));
    }
  }, dependencies: [NgClass, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WorkflowCreateComponent, [{
    type: Component,
    args: [{ standalone: false, template: `<div class="card">\r
    <h3 class="card-header">Create Workflow</h3>\r
    <div class="card-body">\r
        <form [formGroup]="form" (ngSubmit)="onSubmit()">\r
            <div class="form-group">\r
                <label>Type</label>\r
                <select formControlName="type" class="form-control" \r
                        [ngClass]="{ 'is-invalid': f['type'].touched && f['type'].errors }">\r
                    <option value="">Select Type</option>\r
                    <option value="Onboarding">Onboarding</option>\r
                    <option value="DepartmentChange">Department Change</option>\r
                    <option value="Termination">Termination</option>\r
                </select>\r
                <div *ngIf="f['type'].touched && f['type'].errors" class="invalid-feedback">\r
                    <div *ngIf="f['type'].errors['required']">Type is required</div>\r
                </div>\r
            </div>\r
            <div class="form-group">\r
                <label>Details (JSON)</label>\r
                <textarea formControlName="details" class="form-control" \r
                          [ngClass]="{ 'is-invalid': f['details'].touched && f['details'].errors }"></textarea>\r
                <div *ngIf="f['details'].touched && f['details'].errors" class="invalid-feedback">\r
                    <div *ngIf="f['details'].errors['required']">Invalid JSON format</div>\r
                </div>\r
            </div>\r
            <div class="text-center">\r
                <button type="submit" class="btn btn-primary mr-1" [disabled]="form.invalid">Create</button>\r
                <a [routerLink]="['/workflows', employeeId]" class="btn btn-secondary">Cancel</a>\r
            </div>\r
        </form>\r
    </div>\r
</div>\r
` }]
  }], () => [{ type: FormBuilder }, { type: ActivatedRoute }, { type: Router }, { type: WorkflowService }, { type: AlertService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WorkflowCreateComponent, { className: "WorkflowCreateComponent", filePath: "src/app/workflows/create.component.ts", lineNumber: 11 });
})();

// src/app/workflows/workflows-routing.module.ts
var routes = [
  {
    path: ":employeeId",
    component: ListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ":employeeId/create",
    component: WorkflowCreateComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  }
];
var WorkflowsRoutingModule = class _WorkflowsRoutingModule {
  static \u0275fac = function WorkflowsRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WorkflowsRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _WorkflowsRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WorkflowsRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/workflows/workflows.module.ts
var WorkflowsModule = class _WorkflowsModule {
  static \u0275fac = function WorkflowsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WorkflowsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _WorkflowsModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    ReactiveFormsModule,
    WorkflowsRoutingModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WorkflowsModule, [{
    type: NgModule,
    args: [{
      imports: [
        CommonModule,
        ReactiveFormsModule,
        WorkflowsRoutingModule
      ],
      declarations: [
        ListComponent,
        WorkflowCreateComponent
      ]
    }]
  }], null, null);
})();
export {
  WorkflowsModule
};
//# sourceMappingURL=chunk-YVQCM3GO.js.map
