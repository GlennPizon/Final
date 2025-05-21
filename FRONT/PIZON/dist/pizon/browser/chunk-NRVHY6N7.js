import {
  BehaviorSubject,
  HttpClient,
  Injectable,
  NavigationStart,
  Router,
  Subject,
  __spreadProps,
  __spreadValues,
  filter,
  finalize,
  forkJoin,
  map,
  setClassMetadata,
  switchMap,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-IQD5Y6SM.js";

// src/environments/environment.ts
var environment = {
  production: false,
  apiUrl: "http://localhost:7000"
};

// src/app/_services/account.service.ts
var baseUrl = `${environment.apiUrl}/accounts`;
console.log("baseUrl", baseUrl);
console.log("environment.apiUrl", environment.apiUrl);
var AccountService = class _AccountService {
  router;
  http;
  accountSubject;
  account;
  constructor(router, http) {
    this.router = router;
    this.http = http;
    this.accountSubject = new BehaviorSubject(JSON.parse(localStorage.getItem("account") ?? "null"));
    this.account = this.accountSubject.asObservable();
  }
  get accountValue() {
    return this.accountSubject.value;
  }
  login(email, password) {
    return this.http.post(`${baseUrl}/authenticate`, { email, password }, { withCredentials: true }).pipe(map((account) => {
      this.accountSubject.next(account);
      this.startRefreshTokenTimer();
      return account;
    }));
  }
  logout() {
    this.http.post(`${baseUrl}/revoke-token`, {}, { withCredentials: true }).subscribe();
    this.stopRefreshTokenTimer();
    this.accountSubject.next(null);
    this.router.navigate(["/account/login"]);
  }
  refreshToken() {
    return this.http.post(`${baseUrl}/refresh-token`, {}, { withCredentials: true }).pipe(map((account) => {
      this.accountSubject.next(account);
      this.startRefreshTokenTimer();
      return account;
    }));
  }
  register(account) {
    return this.http.post(`${baseUrl}/register`, account);
  }
  /*verifyEmail(token: string) {
      return this.http.post(`${baseUrl}/verify-email`, { token });
  }*/
  forgotPassword(email) {
    return this.http.post(`${baseUrl}/forgot-password`, { email });
  }
  validateResetToken(token) {
    return this.http.post(`${baseUrl}/validate-reset-token`, { token });
  }
  resetPassword(token, password, confirmPassword) {
    return this.http.post(`${baseUrl}/reset-password`, { token, password, confirmPassword });
  }
  getAll() {
    return this.http.get(baseUrl);
  }
  getById(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(params) {
    return this.http.post(`${baseUrl}/create`, params);
  }
  update(id, params) {
    return this.http.put(`${baseUrl}/${id}`, params).pipe(map((account) => {
      if (account.id === this.accountValue.id) {
        account = __spreadValues(__spreadValues({}, this.accountValue), account);
        this.accountSubject.next(account);
      }
      return account;
    }));
  }
  delete(id) {
    return this.http.delete(`${baseUrl}/${id}`).pipe(finalize(() => {
      if (this.accountValue && id === this.accountValue.id) {
        this.logout();
      }
    }));
  }
  // helper methods
  refreshTokenTimeout;
  startRefreshTokenTimer() {
    if (this.accountValue && this.accountValue.jwtToken) {
      const jwtToken = JSON.parse(atob(this.accountValue.jwtToken.split(".")[1]));
      if (jwtToken && jwtToken.exp) {
        const expires = new Date(jwtToken.exp * 1e3);
        const timeout = expires.getTime() - Date.now() - 60 * 1e3;
        this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout);
      } else {
        console.error("Invalid JWT token or missing expiration time.");
        this.logout();
      }
    } else {
    }
  }
  stopRefreshTokenTimer() {
    clearTimeout(this.refreshTokenTimeout);
  }
  static \u0275fac = function AccountService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccountService)(\u0275\u0275inject(Router), \u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AccountService, factory: _AccountService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: Router }, { type: HttpClient }], null);
})();

// src/app/_models/alert.ts
var Alert = class {
  id;
  type;
  message;
  autoClose;
  keepAfterRouteChange;
  fade;
  constructor(id, type, message, autoClose = true, keepAfterRouteChange = false, fade = false) {
    this.id = id;
    this.type = type;
    this.message = message;
    this.autoClose = autoClose;
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.fade = fade;
  }
};

// src/app/_services/alert.service.ts
var AlertService = class _AlertService {
  router;
  subject = new Subject();
  keepAfterRouteChange = false;
  routerSubscription;
  constructor(router) {
    this.router = router;
    this.routerSubscription = this.router.events.pipe(filter((event) => event instanceof NavigationStart)).subscribe(() => {
      if (this.keepAfterRouteChange) {
        this.keepAfterRouteChange = false;
      } else {
        this.clear();
      }
    });
  }
  getAlert() {
    return this.subject.asObservable();
  }
  success(message, options) {
    this.alert(__spreadProps(__spreadValues({}, options), { type: "success", message }));
  }
  error(message, options) {
    this.alert(__spreadProps(__spreadValues({}, options), { type: "error", message }));
  }
  info(message, options) {
    this.alert(__spreadProps(__spreadValues({}, options), { type: "info", message }));
  }
  warn(message, options) {
    this.alert(__spreadProps(__spreadValues({}, options), { type: "warning", message }));
  }
  alert(alert) {
    if (!alert.type || !alert.message) {
      throw new Error("Alert type and message are required");
    }
    const fullAlert = new Alert(this.uniqueId(), alert.type, alert.message, alert.autoClose ?? true, alert.keepAfterRouteChange ?? false, alert.fade ?? false);
    this.keepAfterRouteChange = fullAlert.keepAfterRouteChange;
    this.subject.next(fullAlert);
  }
  clear() {
    this.subject.next(null);
  }
  uniqueId() {
    return crypto.randomUUID?.() ?? Math.random().toString(36).substring(2, 9);
  }
  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
  static \u0275fac = function AlertService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AlertService)(\u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AlertService, factory: _AlertService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlertService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: Router }], null);
})();

// src/app/_services/department.service.ts
var DepartmentService = class _DepartmentService {
  http;
  constructor(http) {
    this.http = http;
  }
  getAll() {
    return this.http.get(`${environment.apiUrl}/departments`);
  }
  getById(id) {
    return this.http.get(`${environment.apiUrl}/departments/${id}`);
  }
  create(department) {
    return this.http.post(`${environment.apiUrl}/departments`, department);
  }
  update(id, department) {
    return this.http.put(`${environment.apiUrl}/departments/${id}`, department);
  }
  delete(id) {
    return this.http.delete(`${environment.apiUrl}/departments/${id}`);
  }
  static \u0275fac = function DepartmentService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DepartmentService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DepartmentService, factory: _DepartmentService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DepartmentService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/_services/workflow.service.ts
var WorkflowService = class _WorkflowService {
  http;
  constructor(http) {
    this.http = http;
  }
  getByEmployeeId(employeeId) {
    return this.http.get(`${environment.apiUrl}/workflows/employee/${employeeId}`);
  }
  create(workflow) {
    return this.http.post(`${environment.apiUrl}/workflows`, workflow);
  }
  updateStatus(id, status) {
    return this.http.put(`${environment.apiUrl}/workflows/${id}/status`, { status });
  }
  static \u0275fac = function WorkflowService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WorkflowService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WorkflowService, factory: _WorkflowService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WorkflowService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/_services/workflow-track.service.ts
var WorkflowTrack = class _WorkflowTrack {
  workflowService;
  accountService;
  constructor(workflowService, accountService) {
    this.workflowService = workflowService;
    this.accountService = accountService;
  }
  /**
   * Track department change in workflow
   */
  trackDepartmentChange(employeeId, oldDepartmentId, newDepartmentId, oldDeptName, newDeptName) {
    const currentUser = this.accountService.accountValue;
    const changedBy = currentUser ? currentUser.email : "System";
    const timestamp = (/* @__PURE__ */ new Date()).toLocaleString();
    const details = `Employee's department changed from ${oldDeptName} (ID: ${oldDepartmentId}) to ${newDeptName} (ID: ${newDepartmentId}) by ${changedBy} on ${timestamp}`;
    const workflow = {
      employeeId,
      type: "DepartmentChange",
      details
    };
    return this.workflowService.create(workflow);
  }
  /**
   * Track request submission in workflow
   */
  trackRequestSubmission(employeeId, requestId, requestType) {
    const currentUser = this.accountService.accountValue;
    const createdBy = currentUser ? currentUser.email : "System";
    const timestamp = (/* @__PURE__ */ new Date()).toLocaleString();
    const details = `New ${requestType} request (ID: ${requestId}) created by ${createdBy} on ${timestamp}`;
    const workflow = {
      employeeId,
      type: "RequestSubmission",
      details
    };
    return this.workflowService.create(workflow);
  }
  /**
   * Track request status update in workflow
   */
  trackRequestStatusChange(employeeId, requestId, oldStatus, newStatus, requestType) {
    const currentUser = this.accountService.accountValue;
    const changedBy = currentUser ? currentUser.email : "System";
    const timestamp = (/* @__PURE__ */ new Date()).toLocaleString();
    const details = `${requestType} request (ID: ${requestId}) status changed from ${oldStatus} to ${newStatus} by ${changedBy} on ${timestamp}`;
    const workflow = {
      employeeId,
      type: "RequestStatusChange",
      details
    };
    return this.workflowService.create(workflow);
  }
  static \u0275fac = function WorkflowTrack_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WorkflowTrack)(\u0275\u0275inject(WorkflowService), \u0275\u0275inject(AccountService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WorkflowTrack, factory: _WorkflowTrack.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WorkflowTrack, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: WorkflowService }, { type: AccountService }], null);
})();

// src/app/_services/employee.service.ts
var EmployeeService = class _EmployeeService {
  http;
  workflowTrackerService;
  departmentService;
  constructor(http, workflowTrackerService, departmentService) {
    this.http = http;
    this.workflowTrackerService = workflowTrackerService;
    this.departmentService = departmentService;
  }
  getAll() {
    return this.http.get(`${environment.apiUrl}/employees`);
  }
  getById(id) {
    return this.http.get(`${environment.apiUrl}/employees/${id}`);
  }
  create(employee) {
    return this.http.post(`${environment.apiUrl}/employees`, employee);
  }
  update(id, employee) {
    return this.getById(id).pipe(switchMap((currentEmployee) => {
      if (currentEmployee.departmentId !== employee.departmentId) {
        return forkJoin({
          oldDept: this.departmentService.getById(currentEmployee.departmentId),
          newDept: this.departmentService.getById(employee.departmentId)
        }).pipe(switchMap((depts) => {
          this.workflowTrackerService.trackDepartmentChange(id, currentEmployee.departmentId, employee.departmentId, depts.oldDept.name, depts.newDept.name).subscribe({
            error: (error) => console.error("Error tracking department change:", error)
          });
          return this.http.put(`${environment.apiUrl}/employees/${id}`, employee);
        }));
      } else {
        return this.http.put(`${environment.apiUrl}/employees/${id}`, employee);
      }
    }));
  }
  delete(id) {
    return this.http.delete(`${environment.apiUrl}/employees/${id}`);
  }
  static \u0275fac = function EmployeeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmployeeService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(WorkflowTrack), \u0275\u0275inject(DepartmentService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EmployeeService, factory: _EmployeeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmployeeService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }, { type: WorkflowTrack }, { type: DepartmentService }], null);
})();

// src/app/_services/request.service.ts
var RequestService = class _RequestService {
  http;
  workflowTrackerService;
  constructor(http, workflowTrackerService) {
    this.http = http;
    this.workflowTrackerService = workflowTrackerService;
  }
  getAll() {
    return this.http.get(`${environment.apiUrl}/requests`);
  }
  getById(id) {
    return this.http.get(`${environment.apiUrl}/requests/${id}`);
  }
  create(request) {
    return this.http.post(`${environment.apiUrl}/requests`, request).pipe(
      // After the request is created successfully, track it
      tap((createdRequest) => {
        if (createdRequest && createdRequest.id && createdRequest.employeeId) {
          this.workflowTrackerService.trackRequestSubmission(createdRequest.employeeId, createdRequest.id, createdRequest.type).subscribe({
            next: () => console.log("Workflow updated for new request"),
            error: (error) => console.error("Error tracking request submission:", error)
          });
        } else {
          console.error("Cannot track request submission: Missing data in created request", createdRequest);
        }
      })
    );
  }
  update(id, request) {
    return this.getById(id).pipe(switchMap((currentRequest) => {
      if (currentRequest.status !== request.status) {
        this.workflowTrackerService.trackRequestStatusChange(request.employeeId, id, currentRequest.status, request.status, request.type).subscribe({
          next: () => console.log("Workflow updated for status change"),
          error: (error) => console.error("Error tracking status change:", error)
        });
      }
      return this.http.put(`${environment.apiUrl}/requests/${id}`, request);
    }));
  }
  delete(id) {
    return this.http.delete(`${environment.apiUrl}/requests/${id}`);
  }
  static \u0275fac = function RequestService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RequestService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(WorkflowTrack));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RequestService, factory: _RequestService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequestService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }, { type: WorkflowTrack }], null);
})();

export {
  environment,
  AccountService,
  AlertService,
  DepartmentService,
  WorkflowService,
  EmployeeService
};
//# sourceMappingURL=chunk-NRVHY6N7.js.map
