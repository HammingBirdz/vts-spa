"use strict";
(self["webpackChunkvehicle_tracking_spa"] = self["webpackChunkvehicle_tracking_spa"] || []).push([["src_app_mapping_driver-vechile-mapping_driver-vehicle-mapping_module_ts"],{

/***/ 3598:
/*!************************************************************************************!*\
  !*** ./src/app/mapping/driver-vechile-mapping/driver-vehicle-mapping.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriverVehicleMappingComponent": () => (/* binding */ DriverVehicleMappingComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 1640);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/user.service */ 8613);
/* harmony import */ var src_app_shared_services_vehicle_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/vehicle.service */ 1535);
/* harmony import */ var src_app_shared_services_vechile_route_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/vechile-route.service */ 3541);
/* harmony import */ var src_app_shared_services_driver_vechile_mappings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/driver-vechile-mappings.service */ 7492);
/* harmony import */ var src_app_shared_services_toastr_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/toastr-message.service */ 5504);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/toolbar */ 4575);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dialog */ 1837);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/checkbox */ 749);

















function DriverVehicleMappingComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Latitude");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "p-sortIcon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Logitude");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "p-sortIcon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "IsActive");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "p-sortIcon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function DriverVehicleMappingComponent_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td")(8, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DriverVehicleMappingComponent_ng_template_42_Template_button_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const drivervechile_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.fillForm(drivervechile_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td")(10, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DriverVehicleMappingComponent_ng_template_42_Template_button_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const drivervechile_r2 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r5.delete(drivervechile_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const drivervechile_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](drivervechile_r2.pageName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](drivervechile_r2.menuOrder);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](drivervechile_r2.isActive);
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
class DriverVehicleMappingComponent {
  constructor(fb, userService, vehicleService, vechileRouteService, driverVechileMappingsService, toastrService) {
    this.fb = fb;
    this.userService = userService;
    this.vehicleService = vehicleService;
    this.vechileRouteService = vechileRouteService;
    this.driverVechileMappingsService = driverVechileMappingsService;
    this.toastrService = toastrService;
    this.drivers = [];
    this.vehicles = [];
    this.vechileRoutes = [];
    this.driverVehicles = [];
    this.display = false;
    this.driverVehicleForm = this.fb.group({
      id: [''],
      vechileId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      routeId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      latitude: [''],
      logitude: [''],
      userId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      isActive: ['true', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
    });
  }
  ngOnInit() {
    this.loadData();
  }
  loadData() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.forkJoin)([this.userService.getDriverList(this.userService.selectedInstitutionId), this.vehicleService.get(this.userService.selectedInstitutionId), this.vechileRouteService.get(), this.driverVechileMappingsService.get()]).subscribe(([drivers, vehicles, routes, driverVechiles]) => {
      this.drivers = drivers;
      this.vehicles = vehicles;
      this.vechileRoutes = routes;
      this.driverVehicles = driverVechiles;
    });
  }
  showDialog() {
    this.display = true;
    this.driverVehicleForm.reset();
  }
  updateData() {
    let temp = [...this.driverVehicles];
    temp = JSON.parse(JSON.stringify(temp));
    this.driverVehicles = temp;
  }
  add() {
    const data = this.driverVehicleForm.value;
    if (!data.id) {
      delete data.id;
    }
    this.driverVechileMappingsService.create(data).subscribe({
      next: response => {
        if (!!response.id) {
          this.driverVehicles.push(response);
          this.updateData();
          this.toastrService.success('Driver Vechiles Create Successfully.');
          this.display = false;
        }
      },
      error: () => {
        this.toastrService.error('Driver Vechiles Create Failed.');
      }
    });
  }
  edit() {
    this.driverVechileMappingsService.update(this.driverVehicleForm.value).subscribe(response => {
      const data = this.driverVehicleForm.value;
      const index = this.driverVehicles.findIndex(i => i.id === data.id);
      this.driverVehicles[index] = data;
      this.toastrService.success('Driver Vechiles Updated Successfully.');
      this.display = false;
    });
  }
  onSubmit() {
    if (this.driverVehicleForm.invalid) {
      return;
    }
    if (!this.driverVehicleForm.value.id) {
      this.add();
    } else {
      this.edit();
    }
  }
  fillForm(drivervechile) {
    this.display = true;
    this.driverVehicleForm.patchValue(drivervechile);
  }
  delete(id) {
    this.driverVechileMappingsService.delete(id).subscribe(response => {
      const index = this.driverVehicles.findIndex(i => i.id == id);
      this.driverVehicles.splice(index, 1);
      this.toastrService.error('Driver Vechiles Deleted Successfully.');
    });
  }
  close() {
    window.alert('Are u Sure Leave From');
    this.display = false;
  }
}
DriverVehicleMappingComponent.ɵfac = function DriverVehicleMappingComponent_Factory(t) {
  return new (t || DriverVehicleMappingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_vehicle_service__WEBPACK_IMPORTED_MODULE_1__.VehicleService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_vechile_route_service__WEBPACK_IMPORTED_MODULE_2__.VechileRouteService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_driver_vechile_mappings_service__WEBPACK_IMPORTED_MODULE_3__.DriverVechileMappingsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_toastr_message_service__WEBPACK_IMPORTED_MODULE_4__.ToastrService));
};
DriverVehicleMappingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: DriverVehicleMappingComponent,
  selectors: [["app-driver-vehicle-mapping"]],
  decls: 43,
  vars: 15,
  consts: [[1, "grid"], [1, "col-12"], [1, "card"], [1, "p-toolbar-group-left", "flex", "flex-wrap"], [1, "p-toolbar-group-right"], ["pButton", "", "type", "button", "label", "Add Driver Vechile Map", 1, "p-button-outlined", 3, "click"], ["header", "Driver Vechile Mapping Form", "showEffect", "fade", 3, "visible", "breakpoints", "visibleChange"], [3, "formGroup", "ngSubmit"], [1, "card", "p-fluid"], [1, "field", "col"], ["htmlFor", "role", 1, "mb-3", "font-semibold", "text-lg"], ["formControlName", "vechileId", "optionLabel", "number", "optionValue", "id", 1, "pr-5", 3, "options"], ["formControlName", "userId", "optionLabel", "userName", "optionValue", "id", 1, "pr-5", 3, "options"], ["formControlName", "routeId", "optionLabel", "name", "optionValue", "id", 1, "pr-5", 3, "options"], ["htmlFor", "latitude", 1, "mb-3", "font-semibold", "text-lg"], ["formControlName", "latitude", "pInputText", "", "id", "latitude", "placeholder", "Latitude", "type", "number"], ["htmlFor", "logitude", 1, "mb-3", "font-semibold", "text-lg"], ["formControlName", "logitude", "pInputText", "", "id", "logitude", "placeholder", "Logitude", "type", "number"], ["name", "group1", "formControlName", "isActive", "inputId", "isActive", 3, "binary"], ["for", "isActive", 1, "ml-3", "mb-1", "font-semibold", "text-lg"], [1, "flex", "flex-row", "gap-4"], ["pButton", "", "pRipple", "", "type", "submit", "label", "Submit", 1, "p-button-outlined", 2, "width", "200px"], ["pButton", "", "pRipple", "", "type", "reset", "label", "Close", 1, "p-button-outlined", "p-button-danger", 2, "width", "200px", 3, "click"], [1, "card", "m-1"], [3, "value", "rows", "paginator", "rowHover"], ["pTemplate", "header"], ["pTemplate", "body"], ["pSortableColumn", "latitude", 2, "min-width", "7rem"], ["pSortableColumn", "logitude", 2, "min-width", "7rem"], ["pSortableColumn", "isActive", 2, "min-width", "7rem"], ["pButton", "", "pRipple", "", "icon", "pi pi-pencil", 1, "p-button-rounded", "p-button-success", "mr-2", 3, "click"], ["pButton", "", "pRipple", "", "icon", "pi pi-trash", 1, "p-button-rounded", "p-button-warning", 3, "click"]],
  template: function DriverVehicleMappingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "p-toolbar")(4, "div", 3)(5, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Driver Vechile Mapping");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 4)(8, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DriverVehicleMappingComponent_Template_button_click_8_listener() {
        return ctx.showDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "p-dialog", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("visibleChange", function DriverVehicleMappingComponent_Template_p_dialog_visibleChange_9_listener($event) {
        return ctx.display = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "form", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function DriverVehicleMappingComponent_Template_form_ngSubmit_10_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 8)(12, "div", 9)(13, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Vehicles");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "p-dropdown", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 9)(17, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Drivers");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "p-dropdown", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 9)(21, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Routes");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "p-dropdown", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 9)(25, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Latitude");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 9)(29, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Logitude");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](33, "p-checkbox", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Is Active");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DriverVehicleMappingComponent_Template_button_click_38_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 23)(40, "p-table", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, DriverVehicleMappingComponent_ng_template_41_Template, 14, 0, "ng-template", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, DriverVehicleMappingComponent_ng_template_42_Template, 11, 3, "ng-template", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](13, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("visible", ctx.display)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](14, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.driverVehicleForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("options", ctx.vehicles);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("options", ctx.drivers);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("options", ctx.vechileRoutes);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("binary", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.driverVehicles)("rows", 5)("paginator", true)("rowHover", true);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, primeng_toolbar__WEBPACK_IMPORTED_MODULE_8__.Toolbar, primeng_table__WEBPACK_IMPORTED_MODULE_9__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_10__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_9__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_9__.SortIcon, primeng_dialog__WEBPACK_IMPORTED_MODULE_11__.Dialog, primeng_button__WEBPACK_IMPORTED_MODULE_12__.ButtonDirective, primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__.Dropdown, primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__.InputText, primeng_checkbox__WEBPACK_IMPORTED_MODULE_15__.Checkbox],
  encapsulation: 2
});

/***/ }),

/***/ 9669:
/*!*********************************************************************************!*\
  !*** ./src/app/mapping/driver-vechile-mapping/driver-vehicle-mapping.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriverVechileMappingModule": () => (/* binding */ DriverVechileMappingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/toolbar */ 4575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/dialog */ 1837);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/paginator */ 2722);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtextarea */ 1102);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/checkbox */ 749);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/tag */ 3042);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/toast */ 9129);
/* harmony import */ var _driver_vehicle_mapping_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./driver-vehicle-mapping.component */ 3598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);

















const routes = [{
  path: '',
  component: _driver_vehicle_mapping_component__WEBPACK_IMPORTED_MODULE_0__.DriverVehicleMappingComponent
}];
class DriverVechileMappingModule {}
DriverVechileMappingModule.ɵfac = function DriverVechileMappingModule_Factory(t) {
  return new (t || DriverVechileMappingModule)();
};
DriverVechileMappingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: DriverVechileMappingModule
});
DriverVechileMappingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_5__.ToolbarModule, primeng_table__WEBPACK_IMPORTED_MODULE_6__.TableModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_7__.DialogModule, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonModule, primeng_paginator__WEBPACK_IMPORTED_MODULE_9__.PaginatorModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__.InputTextModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_11__.InputTextareaModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__.DropdownModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_13__.CheckboxModule, primeng_tag__WEBPACK_IMPORTED_MODULE_14__.TagModule, primeng_toast__WEBPACK_IMPORTED_MODULE_15__.ToastModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DriverVechileMappingModule, {
    declarations: [_driver_vehicle_mapping_component__WEBPACK_IMPORTED_MODULE_0__.DriverVehicleMappingComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_5__.ToolbarModule, primeng_table__WEBPACK_IMPORTED_MODULE_6__.TableModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_7__.DialogModule, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonModule, primeng_paginator__WEBPACK_IMPORTED_MODULE_9__.PaginatorModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__.InputTextModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_11__.InputTextareaModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__.DropdownModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_13__.CheckboxModule, primeng_tag__WEBPACK_IMPORTED_MODULE_14__.TagModule, primeng_toast__WEBPACK_IMPORTED_MODULE_15__.ToastModule]
  });
})();

/***/ }),

/***/ 7492:
/*!********************************************************************!*\
  !*** ./src/app/shared/services/driver-vechile-mappings.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriverVechileMappingsService": () => (/* binding */ DriverVechileMappingsService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class DriverVechileMappingsService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/api/UserVechileMappings`;
  }
  get() {
    return this.http.get(this.apiUrl);
  }
  getById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  create(driverVechileMapping) {
    return this.http.post(this.apiUrl, driverVechileMapping);
  }
  update(driverVechileMapping) {
    return this.http.put(`${this.apiUrl}/${driverVechileMapping.id}`, driverVechileMapping);
  }
  delete(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  updateLocation(id, latitude, longitude) {
    return this.http.put(`${this.apiUrl}/${id}/${latitude}/${longitude}`, {});
  }
}
DriverVechileMappingsService.ɵfac = function DriverVechileMappingsService_Factory(t) {
  return new (t || DriverVechileMappingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
DriverVechileMappingsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: DriverVechileMappingsService,
  factory: DriverVechileMappingsService.ɵfac,
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
//# sourceMappingURL=src_app_mapping_driver-vechile-mapping_driver-vehicle-mapping_module_ts.js.map