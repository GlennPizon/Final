import {
  CommonModule,
  Component,
  NgModule,
  ReactiveFormsModule,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-IQD5Y6SM.js";

// src/app/admin/subnav.component.ts
var SubNavComponent = class _SubNavComponent {
  static \u0275fac = function SubNavComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SubNavComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SubNavComponent, selectors: [["ng-component"]], standalone: false, decls: 4, vars: 0, consts: [[1, "admin-nav", "navbar", "navbar-expand", "navbar-light"], [1, "navbar-nav"], ["routerLink", "/admin/accounts", "routerLinkActive", "active", 1, "nav-item", "nav-link"]], template: function SubNavComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "a", 2);
      \u0275\u0275text(3, "Accounts");
      \u0275\u0275elementEnd()()();
    }
  }, dependencies: [RouterLink, RouterLinkActive], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SubNavComponent, [{
    type: Component,
    args: [{ standalone: false, template: '<nav class="admin-nav navbar navbar-expand navbar-light">\r\n    <div class="navbar-nav">\r\n        <a routerLink="/admin/accounts" routerLinkActive="active" class="nav-item nav-link">Accounts</a>\r\n        <!-- <a routerLink="/employees" routerLinkActive="active" class="nav-item nav-link">Employees</a>\r\n        <a routerLink="/departments" routerLinkActive="active" class="nav-item nav-link">Departments</a> -->\r\n    </div>\r\n</nav>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SubNavComponent, { className: "SubNavComponent", filePath: "src/app/admin/subnav.component.ts", lineNumber: 8 });
})();

// src/app/admin/layout.component.ts
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutComponent, { className: "LayoutComponent", filePath: "src/app/admin/layout.component.ts", lineNumber: 8 });
})();

// src/app/admin/overview.component.ts
var OverviewComponent = class _OverviewComponent {
  static \u0275fac = function OverviewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OverviewComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OverviewComponent, selectors: [["ng-component"]], standalone: false, decls: 9, vars: 0, consts: [[1, "p-4"], [1, "container"], ["routerLink", "accounts"]], template: function OverviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p");
      \u0275\u0275text(5, "This section can only be accessed by administrators.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p")(7, "a", 2);
      \u0275\u0275text(8, "Manage Accounts");
      \u0275\u0275elementEnd()()()();
    }
  }, dependencies: [RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverviewComponent, [{
    type: Component,
    args: [{ standalone: false, template: '\r\n\uFEFF<div class="p-4">\r\n    <div class="container">\r\n        <h1>Admin</h1>\r\n        <p>This section can only be accessed by administrators.</p>\r\n        <p><a routerLink="accounts">Manage Accounts</a></p>\r\n        <!-- <p><a routerLink="/employees">Manage Employees</a></p>\r\n        <p><a routerLink="/departments">Manage Departments</a></p> -->\r\n    </div>\r\n</div>\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OverviewComponent, { className: "OverviewComponent", filePath: "src/app/admin/overview.component.ts", lineNumber: 7 });
})();

// src/app/admin/admin-routing.module.ts
var accountsModule = () => import("./chunk-PHBA7AWF.js").then((x) => x.AccountsModule);
var routes = [
  { path: "", component: SubNavComponent, outlet: "subnav" },
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "", component: OverviewComponent },
      { path: "accounts", loadChildren: accountsModule }
    ]
  }
];
var AdminRoutingModule = class _AdminRoutingModule {
  static \u0275fac = function AdminRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AdminRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/admin/admin.module.ts
var AdminModule = class _AdminModule {
  static \u0275fac = function AdminModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AdminModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminModule, [{
    type: NgModule,
    args: [{
      imports: [
        CommonModule,
        ReactiveFormsModule,
        AdminRoutingModule
      ],
      declarations: [
        SubNavComponent,
        LayoutComponent,
        OverviewComponent
      ]
    }]
  }], null, null);
})();
export {
  AdminModule
};
//# sourceMappingURL=chunk-644K3WAG.js.map
