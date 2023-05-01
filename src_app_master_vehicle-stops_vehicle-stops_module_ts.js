"use strict";
(self["webpackChunkvehicle_tracking_spa"] = self["webpackChunkvehicle_tracking_spa"] || []).push([["src_app_master_vehicle-stops_vehicle-stops_module_ts"],{

/***/ 1957:
/*!*****************************************************************!*\
  !*** ./src/app/master/vehicle-stops/vehicle-stops.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehicleStopsComponent": () => (/* binding */ VehicleStopsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_vechile_route_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/vechile-route.service */ 3541);
/* harmony import */ var src_app_shared_services_vechile_stops_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/vechile-stops.service */ 9486);
/* harmony import */ var src_app_shared_services_toastr_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/toastr-message.service */ 5504);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/toolbar */ 4575);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dialog */ 1837);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtext */ 9906);













function VehicleStopsComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Stop Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "p-sortIcon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function VehicleStopsComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td")(4, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VehicleStopsComponent_ng_template_23_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const vechileStops_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.fillForm(vechileStops_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td")(6, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VehicleStopsComponent_ng_template_23_Template_button_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const vechileStops_r2 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.delete(vechileStops_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const vechileStops_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](vechileStops_r2.name);
  }
}
const _c0 = function () {
  return {
    width: "30vw"
  };
};
const _c1 = function () {
  return {
    "960px": "75vw"
  };
};
class VehicleStopsComponent {
  constructor(fb, vechileRouteService, vechileStopsService, toastrService) {
    this.fb = fb;
    this.vechileRouteService = vechileRouteService;
    this.vechileStopsService = vechileStopsService;
    this.toastrService = toastrService;
    this.display = false;
    this.vechileRoutes = [];
    this.vechileStops = [];
    this.vechileStopForm = this.fb.group({
      id: [''],
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      routeId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
  }
  ngOnInit() {
    this.getVechileRoutes();
  }
  getVechileRoutes() {
    this.vechileRouteService.get().subscribe(response => {
      this.vechileRoutes = response;
      if (this.vechileRoutes.length) {
        this.routeId = this.vechileRoutes[0].id;
        this.getVechileStops();
      }
    });
  }
  getVechileStops() {
    this.vechileStopsService.get(this.routeId).subscribe(response => {
      this.vechileStops = response;
    });
  }
  updateData() {
    let temp = [...this.vechileStops];
    temp = JSON.parse(JSON.stringify(temp));
    this.vechileStops = temp;
  }
  showDialog() {
    this.display = true;
    this.vechileStopForm.reset();
  }
  add() {
    const data = this.vechileStopForm.value;
    if (!data.id) {
      delete data.id;
    }
    this.vechileStopsService.create(data).subscribe({
      next: response => {
        if (!!response.id) {
          this.vechileStops.push(response);
          this.updateData();
          this.toastrService.success('Vechile Stop Create Successfully.');
          this.display = false;
        }
      },
      error: () => {
        this.toastrService.error('Vechile Stop Create Failed.');
      }
    });
  }
  edit() {
    this.vechileStopsService.update(this.vechileStopForm.value).subscribe(response => {
      const data = this.vechileStopForm.value;
      const index = this.vechileStops.findIndex(i => i.id === data.id);
      this.vechileStops[index] = data;
      this.toastrService.success('Vechile Stop Updated Successfully.');
      this.display = false;
    });
  }
  onSubmit() {
    this.vechileStopForm.get('routeId')?.setValue(this.routeId);
    if (this.vechileStopForm.invalid) {
      return;
    }
    if (!this.vechileStopForm.value.id) {
      this.add();
    } else {
      this.edit();
    }
  }
  fillForm(vechileRoute) {
    this.display = true;
    this.vechileStopForm.patchValue(vechileRoute);
  }
  delete(id) {
    this.vechileStopsService.delete(id).subscribe(response => {
      const index = this.vechileStops.findIndex(i => i.id == id);
      this.vechileStops.splice(index, 1);
      this.toastrService.success('Vechile Stop Deleted Successfully.');
    });
  }
  close() {
    window.alert('Are u Sure Leave From');
    this.display = false;
  }
}
VehicleStopsComponent.ɵfac = function VehicleStopsComponent_Factory(t) {
  return new (t || VehicleStopsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_vechile_route_service__WEBPACK_IMPORTED_MODULE_0__.VechileRouteService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_vechile_stops_service__WEBPACK_IMPORTED_MODULE_1__.VechileStopsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_toastr_message_service__WEBPACK_IMPORTED_MODULE_2__.ToastrService));
};
VehicleStopsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: VehicleStopsComponent,
  selectors: [["app-vehicle-stops"]],
  decls: 24,
  vars: 13,
  consts: [[1, "grid"], [1, "col-12"], [1, "card"], [1, "p-toolbar-group-left", "flex", "flex-wrap"], [1, "p-toolbar-group-right"], ["optionLabel", "name", "optionValue", "id", 1, "pr-5", 3, "ngModel", "options", "ngModelChange", "onChange"], ["pButton", "", "type", "button", "label", "Add Vehicle Stops", 1, "p-button-outlined", 3, "click"], ["header", "VechileRoute Form", "showEffect", "fade", 3, "visible", "breakpoints", "visibleChange"], [3, "formGroup", "ngSubmit"], [1, "card", "p-fluid"], [1, "field", "col"], ["htmlFor", "name", 1, "mb-3", "font-semibold", "text-lg"], ["formControlName", "name", "pInputText", "", "id", "name", "placeholder", "name", "type", "text"], [1, "flex", "flex-row", "gap-4"], ["pButton", "", "pRipple", "", "type", "submit", "label", "Submit", 1, "p-button-outlined", 2, "width", "200px"], ["pButton", "", "pRipple", "", "type", "reset", "label", "Close", 1, "p-button-outlined", "p-button-danger", 2, "width", "200px", 3, "click"], [1, "card", "m-1"], [3, "value", "rows", "paginator", "rowHover"], ["pTemplate", "header"], ["pTemplate", "body"], ["pSortableColumn", "name", 2, "min-width", "70%"], ["pButton", "", "pRipple", "", "icon", "pi pi-pencil", 1, "p-button-rounded", "p-button-success", "mr-2", 3, "click"], ["pButton", "", "pRipple", "", "icon", "pi pi-trash", 1, "p-button-rounded", "p-button-warning", 3, "click"]],
  template: function VehicleStopsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "p-toolbar")(4, "div", 3)(5, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Vehicle Stops");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 4)(8, "p-dropdown", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function VehicleStopsComponent_Template_p_dropdown_ngModelChange_8_listener($event) {
        return ctx.routeId = $event;
      })("onChange", function VehicleStopsComponent_Template_p_dropdown_onChange_8_listener() {
        return ctx.getVechileStops();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VehicleStopsComponent_Template_button_click_9_listener() {
        return ctx.showDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p-dialog", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("visibleChange", function VehicleStopsComponent_Template_p_dialog_visibleChange_10_listener($event) {
        return ctx.display = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "form", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function VehicleStopsComponent_Template_form_ngSubmit_11_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 9)(13, "div", 10)(14, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Stop Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VehicleStopsComponent_Template_button_click_19_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 16)(21, "p-table", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, VehicleStopsComponent_ng_template_22_Template, 8, 0, "ng-template", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, VehicleStopsComponent_ng_template_23_Template, 7, 1, "ng-template", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.routeId)("options", ctx.vechileRoutes);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](11, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", ctx.display)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](12, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.vechileStopForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.vechileStops)("rows", 5)("paginator", true)("rowHover", true);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, primeng_toolbar__WEBPACK_IMPORTED_MODULE_5__.Toolbar, primeng_table__WEBPACK_IMPORTED_MODULE_6__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_6__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_6__.SortIcon, primeng_dialog__WEBPACK_IMPORTED_MODULE_8__.Dialog, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonDirective, primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__.Dropdown, primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__.InputText],
  encapsulation: 2
});

/***/ }),

/***/ 4979:
/*!**************************************************************!*\
  !*** ./src/app/master/vehicle-stops/vehicle-stops.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehicleStopsModule": () => (/* binding */ VehicleStopsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _vehicle_stops_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vehicle-stops.component */ 1957);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/dialog */ 1837);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtextarea */ 1102);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/paginator */ 2722);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/toolbar */ 4575);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/tag */ 3042);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/toast */ 9129);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
















const routes = [{
  path: '',
  component: _vehicle_stops_component__WEBPACK_IMPORTED_MODULE_0__.VehicleStopsComponent
}];
class VehicleStopsModule {}
VehicleStopsModule.ɵfac = function VehicleStopsModule_Factory(t) {
  return new (t || VehicleStopsModule)();
};
VehicleStopsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: VehicleStopsModule
});
VehicleStopsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_5__.ToolbarModule, primeng_table__WEBPACK_IMPORTED_MODULE_6__.TableModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_7__.DialogModule, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonModule, primeng_paginator__WEBPACK_IMPORTED_MODULE_9__.PaginatorModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__.InputTextModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_11__.InputTextareaModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__.DropdownModule, primeng_table__WEBPACK_IMPORTED_MODULE_6__.TableModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_5__.ToolbarModule, primeng_tag__WEBPACK_IMPORTED_MODULE_13__.TagModule, primeng_toast__WEBPACK_IMPORTED_MODULE_14__.ToastModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](VehicleStopsModule, {
    declarations: [_vehicle_stops_component__WEBPACK_IMPORTED_MODULE_0__.VehicleStopsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_5__.ToolbarModule, primeng_table__WEBPACK_IMPORTED_MODULE_6__.TableModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_7__.DialogModule, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonModule, primeng_paginator__WEBPACK_IMPORTED_MODULE_9__.PaginatorModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__.InputTextModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_11__.InputTextareaModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__.DropdownModule, primeng_table__WEBPACK_IMPORTED_MODULE_6__.TableModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_5__.ToolbarModule, primeng_tag__WEBPACK_IMPORTED_MODULE_13__.TagModule, primeng_toast__WEBPACK_IMPORTED_MODULE_14__.ToastModule]
  });
})();

/***/ }),

/***/ 9486:
/*!**********************************************************!*\
  !*** ./src/app/shared/services/vechile-stops.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VechileStopsService": () => (/* binding */ VechileStopsService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class VechileStopsService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/api/VechileStops`;
  }
  get(routeId) {
    return this.http.get(`${this.apiUrl}?routeId=${routeId}`);
  }
  getById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  create(vehicleStop) {
    return this.http.post(this.apiUrl, vehicleStop);
  }
  update(vehicleStop) {
    return this.http.put(`${this.apiUrl}/${vehicleStop.id}`, vehicleStop);
  }
  delete(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
VechileStopsService.ɵfac = function VechileStopsService_Factory(t) {
  return new (t || VechileStopsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
VechileStopsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: VechileStopsService,
  factory: VechileStopsService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1102:
/*!*****************************************************************!*\
  !*** ./node_modules/primeng/fesm2020/primeng-inputtextarea.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputTextarea": () => (/* binding */ InputTextarea),
/* harmony export */   "InputTextareaModule": () => (/* binding */ InputTextareaModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);




class InputTextarea {
  constructor(el, ngModel, control, cd) {
    this.el = el;
    this.ngModel = ngModel;
    this.control = control;
    this.cd = cd;
    this.onResize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  ngOnInit() {
    if (this.ngModel) {
      this.ngModelSubscription = this.ngModel.valueChanges.subscribe(() => {
        this.updateState();
      });
    }
    if (this.control) {
      this.ngControlSubscription = this.control.valueChanges.subscribe(() => {
        this.updateState();
      });
    }
  }
  ngAfterViewInit() {
    if (this.autoResize) this.resize();
    this.updateFilledState();
    this.cd.detectChanges();
  }
  onInput(e) {
    this.updateState();
  }
  updateFilledState() {
    this.filled = this.el.nativeElement.value && this.el.nativeElement.value.length;
  }
  onFocus(e) {
    if (this.autoResize) {
      this.resize(e);
    }
  }
  onBlur(e) {
    if (this.autoResize) {
      this.resize(e);
    }
  }
  resize(event) {
    this.el.nativeElement.style.height = 'auto';
    this.el.nativeElement.style.height = this.el.nativeElement.scrollHeight + 'px';
    if (parseFloat(this.el.nativeElement.style.height) >= parseFloat(this.el.nativeElement.style.maxHeight)) {
      this.el.nativeElement.style.overflowY = 'scroll';
      this.el.nativeElement.style.height = this.el.nativeElement.style.maxHeight;
    } else {
      this.el.nativeElement.style.overflow = 'hidden';
    }
    this.onResize.emit(event || {});
  }
  updateState() {
    this.updateFilledState();
    if (this.autoResize) {
      this.resize();
    }
  }
  ngOnDestroy() {
    if (this.ngModelSubscription) {
      this.ngModelSubscription.unsubscribe();
    }
    if (this.ngControlSubscription) {
      this.ngControlSubscription.unsubscribe();
    }
  }
}
InputTextarea.ɵfac = function InputTextarea_Factory(t) {
  return new (t || InputTextarea)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControl, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};
InputTextarea.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: InputTextarea,
  selectors: [["", "pInputTextarea", ""]],
  hostAttrs: [1, "p-inputtextarea", "p-inputtext", "p-component", "p-element"],
  hostVars: 4,
  hostBindings: function InputTextarea_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function InputTextarea_input_HostBindingHandler($event) {
        return ctx.onInput($event);
      })("focus", function InputTextarea_focus_HostBindingHandler($event) {
        return ctx.onFocus($event);
      })("blur", function InputTextarea_blur_HostBindingHandler($event) {
        return ctx.onBlur($event);
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-filled", ctx.filled)("p-inputtextarea-resizable", ctx.autoResize);
    }
  },
  inputs: {
    autoResize: "autoResize"
  },
  outputs: {
    onResize: "onResize"
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputTextarea, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[pInputTextarea]',
      host: {
        class: 'p-inputtextarea p-inputtext p-component p-element',
        '[class.p-filled]': 'filled',
        '[class.p-inputtextarea-resizable]': 'autoResize'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControl,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    autoResize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onResize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['input', ['$event']]
    }],
    onFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['focus', ['$event']]
    }],
    onBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['blur', ['$event']]
    }]
  });
})();
class InputTextareaModule {}
InputTextareaModule.ɵfac = function InputTextareaModule_Factory(t) {
  return new (t || InputTextareaModule)();
};
InputTextareaModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: InputTextareaModule
});
InputTextareaModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputTextareaModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
      exports: [InputTextarea],
      declarations: [InputTextarea]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-inputtextarea.mjs.map

/***/ })

}]);
//# sourceMappingURL=src_app_master_vehicle-stops_vehicle-stops_module_ts.js.map