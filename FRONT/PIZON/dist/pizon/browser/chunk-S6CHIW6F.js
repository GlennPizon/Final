import {
  AlertService,
  EmployeeService,
  environment
} from "./chunk-NRVHY6N7.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  DefaultValueAccessor,
  FormArrayName,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
  HttpClient,
  Injectable,
  NgClass,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  NgModule,
  NgSelectOption,
  NumberValueAccessor,
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
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-IQD5Y6SM.js";

// src/app/requests/request.service.ts
var RequestService = class _RequestService {
  http;
  constructor(http) {
    this.http = http;
  }
  getAll() {
    return this.http.get(`${environment.apiUrl}/requests`);
  }
  getById(id) {
    return this.http.get(`${environment.apiUrl}/requests/${id}`);
  }
  create(request) {
    return this.http.post(`${environment.apiUrl}/requests`, request);
  }
  update(id, request) {
    return this.http.put(`${environment.apiUrl}/requests/${id}`, request);
  }
  delete(id) {
    return this.http.delete(`${environment.apiUrl}/requests/${id}`);
  }
  static \u0275fac = function RequestService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RequestService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RequestService, factory: _RequestService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequestService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/requests/list.component.ts
var _c0 = (a0, a1, a2) => ({ "bg-warning": a0, "bg-success": a1, "bg-danger": a2 });
function RequestsListComponent_tr_19_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1, "(Admin User)");
    \u0275\u0275elementEnd();
  }
}
function RequestsListComponent_tr_19_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1, "(Normal User)");
    \u0275\u0275elementEnd();
  }
}
function RequestsListComponent_tr_19_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", item_r2.name, " (x", item_r2.quantity, ") ");
  }
}
function RequestsListComponent_tr_19_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, " - ");
    \u0275\u0275elementEnd();
  }
}
function RequestsListComponent_tr_19_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 21);
  }
}
function RequestsListComponent_tr_19_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Delete");
    \u0275\u0275elementEnd();
  }
}
function RequestsListComponent_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275template(5, RequestsListComponent_tr_19_span_5_Template, 2, 0, "span", 12)(6, RequestsListComponent_tr_19_span_6_Template, 2, 0, "span", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275template(8, RequestsListComponent_tr_19_div_8_Template, 2, 2, "div", 8)(9, RequestsListComponent_tr_19_div_9_Template, 2, 0, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "span", 14);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "div", 15)(15, "a", 16);
    \u0275\u0275text(16, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 17);
    \u0275\u0275listener("click", function RequestsListComponent_tr_19_Template_button_click_17_listener() {
      const request_r3 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.deleteRequest(request_r3.id));
    });
    \u0275\u0275template(18, RequestsListComponent_tr_19_span_18_Template, 1, 0, "span", 18)(19, RequestsListComponent_tr_19_span_19_Template, 2, 0, "span", 9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const request_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(request_r3.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", request_r3.employee == null ? null : request_r3.employee.user == null ? null : request_r3.employee.user.email, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (request_r3.employee == null ? null : request_r3.employee.user == null ? null : request_r3.employee.user.role) === "Admin");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (request_r3.employee == null ? null : request_r3.employee.user == null ? null : request_r3.employee.user.role) === "User");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", request_r3.items);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !request_r3.items || request_r3.items.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(13, _c0, request_r3.status === "Pending", request_r3.status === "Approved", request_r3.status === "Rejected"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(request_r3.status);
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate1("routerLink", "edit/", request_r3.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", request_r3.isDeleting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", request_r3.isDeleting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !request_r3.isDeleting);
  }
}
function RequestsListComponent_tr_20_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "span", 25);
    \u0275\u0275elementEnd();
  }
}
function RequestsListComponent_tr_20_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, " No requests found ");
    \u0275\u0275elementEnd();
  }
}
function RequestsListComponent_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 22);
    \u0275\u0275template(2, RequestsListComponent_tr_20_div_2_Template, 2, 0, "div", 23)(3, RequestsListComponent_tr_20_div_3_Template, 2, 0, "div", 9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.loading);
  }
}
var RequestsListComponent = class _RequestsListComponent {
  requestService;
  alertService;
  requests = [];
  loading = false;
  constructor(requestService, alertService) {
    this.requestService = requestService;
    this.alertService = alertService;
  }
  ngOnInit() {
    this.loading = true;
    this.requestService.getAll().pipe(first()).subscribe({
      next: (requests) => {
        this.requests = requests;
        this.loading = false;
      },
      error: (error) => {
        this.alertService.error(error);
        this.loading = false;
      }
    });
  }
  deleteRequest(id) {
    const request = this.requests.find((x) => x.id === id);
    request.isDeleting = true;
    this.requestService.delete(id).pipe(first()).subscribe({
      next: () => {
        this.requests = this.requests.filter((x) => x.id !== id);
        this.alertService.success("Request deleted successfully");
      },
      error: (error) => {
        this.alertService.error(error);
        request.isDeleting = false;
      }
    });
  }
  static \u0275fac = function RequestsListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RequestsListComponent)(\u0275\u0275directiveInject(RequestService), \u0275\u0275directiveInject(AlertService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RequestsListComponent, selectors: [["app-requests-list"]], decls: 24, vars: 2, consts: [[1, "card"], [1, "card-header"], [1, "card-body"], [1, "table-responsive"], [1, "table", "table-striped"], [2, "width", "15%"], [2, "width", "25%"], [2, "width", "20%"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "text-end", "mt-3"], ["routerLink", "add", 1, "btn", "btn-primary"], ["class", "text-danger", 4, "ngIf"], ["class", "text-primary", 4, "ngIf"], [1, "badge", 3, "ngClass"], [1, "btn-group"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "btn", "btn-danger", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm", 4, "ngIf"], [1, "text-danger"], [1, "text-primary"], [1, "spinner-border", "spinner-border-sm"], ["colspan", "5", 1, "text-center"], ["class", "d-flex justify-content-center", 4, "ngIf"], [1, "d-flex", "justify-content-center"], [1, "spinner-border", "spinner-border-lg"]], template: function RequestsListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h4", 1);
      \u0275\u0275text(2, "REQUESTS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "table", 4)(6, "thead")(7, "tr")(8, "th", 5);
      \u0275\u0275text(9, "Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "th", 6);
      \u0275\u0275text(11, "Employee");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "th", 6);
      \u0275\u0275text(13, "Items");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "th", 5);
      \u0275\u0275text(15, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "th", 7);
      \u0275\u0275text(17, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "tbody");
      \u0275\u0275template(19, RequestsListComponent_tr_19_Template, 20, 17, "tr", 8)(20, RequestsListComponent_tr_20_Template, 4, 2, "tr", 9);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 10)(22, "a", 11);
      \u0275\u0275text(23, "Add Request");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(19);
      \u0275\u0275property("ngForOf", ctx.requests);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.requests || ctx.requests.length === 0);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequestsListComponent, [{
    type: Component,
    args: [{
      selector: "app-requests-list",
      standalone: true,
      imports: [CommonModule, RouterModule],
      template: `
    <div class="card">
      <h4 class="card-header">REQUESTS</h4>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th style="width: 15%">Type</th>
                <th style="width: 25%">Employee</th>
                <th style="width: 25%">Items</th>
                <th style="width: 15%">Status</th>
                <th style="width: 20%">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let request of requests">
                <td>{{ request.type }}</td>
                <td>{{ request.employee?.user?.email }}
                  <span *ngIf="request.employee?.user?.role === 'Admin'" class="text-danger">(Admin User)</span>
                  <span *ngIf="request.employee?.user?.role === 'User'" class="text-primary">(Normal User)</span>
                </td>
                <td>
                  <div *ngFor="let item of request.items">
                    {{ item.name }} (x{{ item.quantity }})
                  </div>
                  <div *ngIf="!request.items || request.items.length === 0">
                    -
                  </div>
                </td>
                <td>
                  <span class="badge" [ngClass]="{
                    'bg-warning': request.status === 'Pending',
                    'bg-success': request.status === 'Approved',
                    'bg-danger': request.status === 'Rejected'
                  }">{{ request.status }}</span>
                </td>
                <td>
                  <div class="btn-group">
                    <a routerLink="edit/{{request.id}}" class="btn btn-primary">Edit</a>
                    <button (click)="deleteRequest(request.id)" class="btn btn-danger" [disabled]="request.isDeleting">
                      <span *ngIf="request.isDeleting" class="spinner-border spinner-border-sm"></span>
                      <span *ngIf="!request.isDeleting">Delete</span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr *ngIf="!requests || requests.length === 0">
                <td colspan="5" class="text-center">
                  <div *ngIf="loading" class="d-flex justify-content-center">
                    <span class="spinner-border spinner-border-lg"></span>
                  </div>
                  <div *ngIf="!loading">
                    No requests found
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="text-end mt-3">
          <a routerLink="add" class="btn btn-primary">Add Request</a>
        </div>
      </div>
    </div>
  `
    }]
  }], () => [{ type: RequestService }, { type: AlertService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RequestsListComponent, { className: "RequestsListComponent", filePath: "src/app/requests/list.component.ts", lineNumber: 79 });
})();

// src/app/requests/form.component.ts
var _c02 = (a0) => ({ "is-invalid": a0 });
function RequestsFormComponent_option_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r1 = ctx.$implicit;
    \u0275\u0275property("value", type_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(type_r1);
  }
}
function RequestsFormComponent_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Type is required");
    \u0275\u0275elementEnd();
  }
}
function RequestsFormComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275template(1, RequestsFormComponent_div_12_div_1_Template, 2, 0, "div", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.f["type"] == null ? null : ctx_r1.f["type"].errors["required"]);
  }
}
function RequestsFormComponent_option_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const employee_r3 = ctx.$implicit;
    \u0275\u0275property("value", employee_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", employee_r3.user == null ? null : employee_r3.user.email, " (", employee_r3.id, ") ");
  }
}
function RequestsFormComponent_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Employee is required");
    \u0275\u0275elementEnd();
  }
}
function RequestsFormComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275template(1, RequestsFormComponent_div_20_div_1_Template, 2, 0, "div", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.f["employeeId"] == null ? null : ctx_r1.f["employeeId"].errors["required"]);
  }
}
function RequestsFormComponent_div_21_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const status_r4 = ctx.$implicit;
    \u0275\u0275property("value", status_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(status_r4);
  }
}
function RequestsFormComponent_div_21_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Status is required");
    \u0275\u0275elementEnd();
  }
}
function RequestsFormComponent_div_21_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275template(1, RequestsFormComponent_div_21_div_6_div_1_Template, 2, 0, "div", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.f["status"] == null ? null : ctx_r1.f["status"].errors["required"]);
  }
}
function RequestsFormComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 5);
    \u0275\u0275text(2, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 6)(4, "select", 21);
    \u0275\u0275template(5, RequestsFormComponent_div_21_option_5_Template, 2, 2, "option", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, RequestsFormComponent_div_21_div_6_Template, 2, 1, "div", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c02, ctx_r1.submitted && (ctx_r1.f["status"] == null ? null : ctx_r1.f["status"].errors)));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.statusOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.submitted && (ctx_r1.f["status"] == null ? null : ctx_r1.f["status"].errors));
  }
}
function RequestsFormComponent_div_22_tbody_12_tr_1_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Name is required");
    \u0275\u0275elementEnd();
  }
}
function RequestsFormComponent_div_22_tbody_12_tr_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275template(1, RequestsFormComponent_div_22_tbody_12_tr_1_div_3_div_1_Template, 2, 0, "div", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    const itemForm_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", itemForm_r7 == null ? null : (tmp_6_0 = itemForm_r7.get("name")) == null ? null : tmp_6_0.errors["required"]);
  }
}
function RequestsFormComponent_div_22_tbody_12_tr_1_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Quantity is required");
    \u0275\u0275elementEnd();
  }
}
function RequestsFormComponent_div_22_tbody_12_tr_1_div_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Quantity must be at least 1");
    \u0275\u0275elementEnd();
  }
}
function RequestsFormComponent_div_22_tbody_12_tr_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275template(1, RequestsFormComponent_div_22_tbody_12_tr_1_div_6_div_1_Template, 2, 0, "div", 20)(2, RequestsFormComponent_div_22_tbody_12_tr_1_div_6_div_2_Template, 2, 0, "div", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    const itemForm_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", itemForm_r7 == null ? null : (tmp_6_0 = itemForm_r7.get("quantity")) == null ? null : tmp_6_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", itemForm_r7 == null ? null : (tmp_7_0 = itemForm_r7.get("quantity")) == null ? null : tmp_7_0.errors["min"]);
  }
}
function RequestsFormComponent_div_22_tbody_12_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 32)(1, "td");
    \u0275\u0275element(2, "input", 33);
    \u0275\u0275template(3, RequestsFormComponent_div_22_tbody_12_tr_1_div_3_Template, 2, 1, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275element(5, "input", 34);
    \u0275\u0275template(6, RequestsFormComponent_div_22_tbody_12_tr_1_div_6_Template, 3, 2, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 35)(8, "button", 36);
    \u0275\u0275listener("click", function RequestsFormComponent_div_22_tbody_12_tr_1_Template_button_click_8_listener() {
      const i_r8 = \u0275\u0275restoreView(_r6).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeItem(i_r8));
    });
    \u0275\u0275text(9, "Remove");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    const itemForm_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("formGroupName", i_r8);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c02, ctx_r1.submitted && (itemForm_r7 == null ? null : (tmp_6_0 = itemForm_r7.get("name")) == null ? null : tmp_6_0.errors)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.submitted && (itemForm_r7 == null ? null : (tmp_7_0 = itemForm_r7.get("name")) == null ? null : tmp_7_0.errors));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(7, _c02, ctx_r1.submitted && (itemForm_r7 == null ? null : (tmp_8_0 = itemForm_r7.get("quantity")) == null ? null : tmp_8_0.errors)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.submitted && (itemForm_r7 == null ? null : (tmp_9_0 = itemForm_r7.get("quantity")) == null ? null : tmp_9_0.errors));
  }
}
function RequestsFormComponent_div_22_tbody_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tbody", 30);
    \u0275\u0275template(1, RequestsFormComponent_div_22_tbody_12_tr_1_Template, 10, 9, "tr", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.itemsArray.controls);
  }
}
function RequestsFormComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "label", 23);
    \u0275\u0275text(2, "Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 24)(4, "table", 25)(5, "thead")(6, "tr")(7, "th", 26);
    \u0275\u0275text(8, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 26);
    \u0275\u0275text(10, "Quantity");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "th", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, RequestsFormComponent_div_22_tbody_12_Template, 2, 1, "tbody", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 29)(14, "button", 17);
    \u0275\u0275listener("click", function RequestsFormComponent_div_22_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addItem());
    });
    \u0275\u0275text(15, "Add Item");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275property("ngIf", ctx_r1.itemsArray.controls.length > 0);
  }
}
function RequestsFormComponent_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 37);
  }
}
var RequestsFormComponent = class _RequestsFormComponent {
  formBuilder;
  route;
  router;
  requestService;
  employeeService;
  alertService;
  form;
  id;
  isAddMode;
  loading = false;
  submitted = false;
  employees = [];
  requestTypes = ["Equipment", "Resources", "Leave"];
  statusOptions = ["Pending", "Approved", "Rejected"];
  itemRequiredTypes = ["Equipment", "Resources"];
  constructor(formBuilder, route, router, requestService, employeeService, alertService) {
    this.formBuilder = formBuilder;
    this.route = route;
    this.router = router;
    this.requestService = requestService;
    this.employeeService = employeeService;
    this.alertService = alertService;
  }
  ngOnInit() {
    this.id = Number(this.route.snapshot.params["id"]);
    this.isAddMode = !this.id;
    this.employeeService.getAll().pipe(first()).subscribe({
      next: (employees) => this.employees = employees,
      error: (error) => this.alertService.error(error)
    });
    this.form = this.formBuilder.group({
      type: ["", Validators.required],
      employeeId: ["", Validators.required],
      status: [{ value: "Pending", disabled: this.isAddMode }, Validators.required],
      items: this.formBuilder.array([])
    });
    this.form.get("type")?.valueChanges.subscribe((type) => this.clearItemsIfNecessary(type));
    if (!this.isAddMode) {
      this.loadRequestData();
    }
  }
  clearItemsIfNecessary(type) {
    if (!this.itemRequiredTypes.includes(type)) {
      this.itemsArray.clear();
    }
  }
  loadRequestData() {
    this.loading = true;
    this.requestService.getById(this.id).pipe(first()).subscribe({
      next: (request) => {
        this.form.patchValue({
          type: request.type,
          employeeId: request.employeeId,
          status: request.status
        });
        this.itemsArray.clear();
        if (this.itemRequiredTypes.includes(request.type) && request.items) {
          request.items.forEach((item) => this.addItem(item));
        }
        this.loading = false;
      },
      error: (error) => {
        this.alertService.error(error);
        this.loading = false;
      }
    });
  }
  showItemsSection() {
    return this.itemRequiredTypes.includes(this.form.value["type"]);
  }
  get f() {
    return this.form.controls;
  }
  get itemsArray() {
    return this.form.get("items");
  }
  addItem(item = { name: "", quantity: 1 }) {
    this.itemsArray.push(this.formBuilder.group({
      name: [item.name, Validators.required],
      quantity: [item.quantity, [Validators.required, Validators.min(1)]]
    }));
  }
  removeItem(index) {
    this.itemsArray.removeAt(index);
  }
  onSubmit() {
    this.submitted = true;
    this.alertService.clear();
    if (this.form.invalid)
      return;
    const type = this.form.value["type"];
    if (this.itemRequiredTypes.includes(type) && this.itemsArray.length === 0) {
      this.alertService.error(`Please add at least one item for the ${type.toLowerCase()} request`);
      return;
    }
    this.loading = true;
    this.isAddMode ? this.createRequest() : this.updateRequest();
  }
  onCancel() {
    this.router.navigate([this.isAddMode ? "../" : "../../"], { relativeTo: this.route });
  }
  createRequest() {
    this.requestService.create(this.form.getRawValue()).pipe(first()).subscribe({
      next: () => {
        this.alertService.success("Request added successfully", { keepAfterRouteChange: true });
        this.router.navigate(["../"], { relativeTo: this.route });
      },
      error: (error) => {
        this.alertService.error(error);
        this.loading = false;
      }
    });
  }
  updateRequest() {
    this.requestService.update(this.id, this.form.getRawValue()).pipe(first()).subscribe({
      next: () => {
        this.alertService.success("Request updated successfully", { keepAfterRouteChange: true });
        this.router.navigate(["../../"], { relativeTo: this.route });
      },
      error: (error) => {
        this.alertService.error(error);
        this.loading = false;
      }
    });
  }
  static \u0275fac = function RequestsFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RequestsFormComponent)(\u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(RequestService), \u0275\u0275directiveInject(EmployeeService), \u0275\u0275directiveInject(AlertService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RequestsFormComponent, selectors: [["app-requests-form"]], decls: 29, vars: 16, consts: [[1, "card"], [1, "card-header"], [1, "card-body"], [3, "ngSubmit", "formGroup"], [1, "mb-3", "row"], [1, "col-sm-2", "col-form-label"], [1, "col-sm-10"], ["formControlName", "type", 1, "form-select", 3, "ngClass"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "employeeId", 1, "form-select", 3, "ngClass"], ["class", "mb-3 row", 4, "ngIf"], ["class", "mb-4", 4, "ngIf"], [1, "d-flex", "justify-content-center", "mt-4"], [1, "btn", "btn-primary", "me-2", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [3, "value"], [1, "invalid-feedback"], [4, "ngIf"], ["formControlName", "status", 1, "form-select", 3, "ngClass"], [1, "mb-4"], [1, "col-form-label"], [1, "table-responsive"], [1, "table", "table-borderless"], [2, "width", "45%"], [2, "width", "10%"], ["formArrayName", "items", 4, "ngIf"], [1, "d-flex", "justify-content-start", "mb-3"], ["formArrayName", "items"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [3, "formGroupName"], ["type", "text", "formControlName", "name", 1, "form-control", 3, "ngClass"], ["type", "number", "formControlName", "quantity", 1, "form-control", 3, "ngClass"], [1, "text-center"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "spinner-border", "spinner-border-sm", "me-1"]], template: function RequestsFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h4", 1);
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2)(4, "form", 3);
      \u0275\u0275listener("ngSubmit", function RequestsFormComponent_Template_form_ngSubmit_4_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(5, "div", 4)(6, "label", 5);
      \u0275\u0275text(7, "Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 6)(9, "select", 7);
      \u0275\u0275element(10, "option", 8);
      \u0275\u0275template(11, RequestsFormComponent_option_11_Template, 2, 2, "option", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275template(12, RequestsFormComponent_div_12_Template, 2, 1, "div", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 4)(14, "label", 5);
      \u0275\u0275text(15, "Employee");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 6)(17, "select", 11);
      \u0275\u0275element(18, "option", 8);
      \u0275\u0275template(19, RequestsFormComponent_option_19_Template, 2, 3, "option", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275template(20, RequestsFormComponent_div_20_Template, 2, 1, "div", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(21, RequestsFormComponent_div_21_Template, 7, 5, "div", 12)(22, RequestsFormComponent_div_22_Template, 16, 1, "div", 13);
      \u0275\u0275elementStart(23, "div", 14)(24, "button", 15);
      \u0275\u0275template(25, RequestsFormComponent_span_25_Template, 1, 0, "span", 16);
      \u0275\u0275text(26, " Save ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "button", 17);
      \u0275\u0275listener("click", function RequestsFormComponent_Template_button_click_27_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275text(28, "Cancel");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isAddMode ? "ADD REQUEST" : "EDIT REQUEST");
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(12, _c02, ctx.submitted && (ctx.f["type"] == null ? null : ctx.f["type"].errors)));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.requestTypes);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitted && (ctx.f["type"] == null ? null : ctx.f["type"].errors));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(14, _c02, ctx.submitted && (ctx.f["employeeId"] == null ? null : ctx.f["employeeId"].errors)));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.employees);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitted && (ctx.f["employeeId"] == null ? null : ctx.f["employeeId"].errors));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isAddMode);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showItemsSection());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormGroupName, FormArrayName, RouterModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequestsFormComponent, [{
    type: Component,
    args: [{ selector: "app-requests-form", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterModule], template: `<div class="card">\r
    <h4 class="card-header">{{ isAddMode ? 'ADD REQUEST' : 'EDIT REQUEST' }}</h4>\r
    <div class="card-body">\r
        <form [formGroup]="form" (ngSubmit)="onSubmit()">\r
            <!-- Type Selection -->\r
            <div class="mb-3 row">\r
                <label class="col-sm-2 col-form-label">Type</label>\r
                <div class="col-sm-10">\r
                    <select formControlName="type" class="form-select"\r
                        [ngClass]="{ 'is-invalid': submitted && f['type']?.errors }">\r
                        <option value=""></option>\r
                        <option *ngFor="let type of requestTypes" [value]="type">{{ type }}</option>\r
                    </select>\r
                    <div *ngIf="submitted && f['type']?.errors" class="invalid-feedback">\r
                        <div *ngIf="f['type']?.errors['required']">Type is required</div>\r
                    </div>\r
                </div>\r
            </div>\r
\r
            <!-- Employee Selection -->\r
            <div class="mb-3 row">\r
                <label class="col-sm-2 col-form-label">Employee</label>\r
                <div class="col-sm-10">\r
                    <select formControlName="employeeId" class="form-select"\r
                        [ngClass]="{ 'is-invalid': submitted && f['employeeId']?.errors }">\r
                        <option value=""></option>\r
                        <option *ngFor="let employee of employees" [value]="employee.id">\r
                            {{ employee.user?.email }} ({{ employee.id }})\r
                        </option>\r
                    </select>\r
                    <div *ngIf="submitted && f['employeeId']?.errors" class="invalid-feedback">\r
                        <div *ngIf="f['employeeId']?.errors['required']">Employee is required</div>\r
                    </div>\r
                </div>\r
            </div>\r
\r
            <!-- Status Selection (Only in Edit Mode) -->\r
            <div *ngIf="!isAddMode" class="mb-3 row">\r
                <label class="col-sm-2 col-form-label">Status</label>\r
                <div class="col-sm-10">\r
                    <select formControlName="status" class="form-select"\r
                        [ngClass]="{ 'is-invalid': submitted && f['status']?.errors }">\r
                        <option *ngFor="let status of statusOptions" [value]="status">{{ status }}</option>\r
                    </select>\r
                    <div *ngIf="submitted && f['status']?.errors" class="invalid-feedback">\r
                        <div *ngIf="f['status']?.errors['required']">Status is required</div>\r
                    </div>\r
                </div>\r
            </div>\r
\r
            <!-- Items Section (Only for Equipment & Resources) -->\r
            <div class="mb-4" *ngIf="showItemsSection()">\r
                <label class="col-form-label">Items</label>\r
                <div class="table-responsive">\r
                    <table class="table table-borderless">\r
                        <thead>\r
                            <tr>\r
                                <th style="width: 45%">Name</th>\r
                                <th style="width: 45%">Quantity</th>\r
                                <th style="width: 10%"></th>\r
                            </tr>\r
                        </thead>\r
                        <tbody *ngIf="itemsArray.controls.length > 0" formArrayName="items">\r
                            <tr *ngFor="let itemForm of itemsArray.controls; let i = index" [formGroupName]="i">\r
                                <td>\r
                                    <input type="text" formControlName="name" class="form-control"\r
                                        [ngClass]="{ 'is-invalid': submitted && itemForm?.get('name')?.errors }" />\r
                                    <div *ngIf="submitted && itemForm?.get('name')?.errors" class="invalid-feedback">\r
                                        <div *ngIf="itemForm?.get('name')?.errors['required']">Name is required</div>\r
                                    </div>\r
                                </td>\r
                                <td>\r
                                    <input type="number" formControlName="quantity" class="form-control"\r
                                        [ngClass]="{ 'is-invalid': submitted && itemForm?.get('quantity')?.errors }" />\r
                                    <div *ngIf="submitted && itemForm?.get('quantity')?.errors" class="invalid-feedback">\r
                                        <div *ngIf="itemForm?.get('quantity')?.errors['required']">Quantity is required</div>\r
                                        <div *ngIf="itemForm?.get('quantity')?.errors['min']">Quantity must be at least 1</div>\r
                                    </div>\r
                                </td>\r
                                <td class="text-center">\r
                                    <button type="button" class="btn btn-danger" (click)="removeItem(i)">Remove</button>\r
                                </td>\r
                            </tr>\r
                        </tbody>\r
                    </table>\r
                </div>\r
                <div class="d-flex justify-content-start mb-3">\r
                    <button type="button" class="btn btn-secondary" (click)="addItem()">Add Item</button>\r
                </div>\r
            </div>\r
\r
            <!-- Action Buttons -->\r
            <div class="d-flex justify-content-center mt-4">\r
                <button [disabled]="loading" class="btn btn-primary me-2">\r
                    <span *ngIf="loading" class="spinner-border spinner-border-sm me-1"></span>\r
                    Save\r
                </button>\r
                <button type="button" (click)="onCancel()" class="btn btn-secondary">Cancel</button>\r
            </div>\r
        </form>\r
    </div>\r
</div>\r
` }]
  }], () => [{ type: UntypedFormBuilder }, { type: ActivatedRoute }, { type: Router }, { type: RequestService }, { type: EmployeeService }, { type: AlertService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RequestsFormComponent, { className: "RequestsFormComponent", filePath: "src/app/requests/form.component.ts", lineNumber: 18 });
})();

// src/app/requests/request.module.ts
var routes = [
  { path: "", component: RequestsListComponent },
  { path: "add", component: RequestsFormComponent },
  { path: "edit/:id", component: RequestsFormComponent }
];
var RequestsModule = class _RequestsModule {
  static \u0275fac = function RequestsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RequestsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _RequestsModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    RouterModule.forChild(routes),
    RequestsListComponent,
    RequestsFormComponent
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequestsModule, [{
    type: NgModule,
    args: [{
      imports: [
        RouterModule.forChild(routes),
        RequestsListComponent,
        RequestsFormComponent
      ]
    }]
  }], null, null);
})();
export {
  RequestsModule
};
//# sourceMappingURL=chunk-S6CHIW6F.js.map
