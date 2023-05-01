"use strict";
(self["webpackChunkvehicle_tracking_spa"] = self["webpackChunkvehicle_tracking_spa"] || []).push([["src_app_master_vehicle_vehicle_module_ts"],{

/***/ 234:
/*!*****************************************************!*\
  !*** ./src/app/master/vehicle/vehicle.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehicleComponent": () => (/* binding */ VehicleComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_vehicle_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/vehicle.service */ 1535);
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/user.service */ 8613);
/* harmony import */ var src_app_shared_services_toastr_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/toastr-message.service */ 5504);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/toolbar */ 4575);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dialog */ 1837);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtext */ 9906);












function VehicleComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Vehicle Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "p-sortIcon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Identification Lable");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "p-sortIcon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Identification Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "p-sortIcon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function VehicleComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td")(8, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VehicleComponent_ng_template_30_Template_button_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const vechile_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.fillForm(vechile_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td")(10, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VehicleComponent_ng_template_30_Template_button_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const vechile_r2 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.deleteVechile(vechile_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const vechile_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](vechile_r2.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](vechile_r2.identificationLable);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](vechile_r2.identificationValue);
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
class VehicleComponent {
  constructor(fb, vehicleService, userService, toastrService) {
    this.fb = fb;
    this.vehicleService = vehicleService;
    this.userService = userService;
    this.toastrService = toastrService;
    this.display = false;
    this.vehicles = [];
    this.vehicleForm = this.fb.group({
      id: [''],
      institutionId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      identificationLable: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      identificationValue: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
  }
  ngOnInit() {
    this.getVehicle();
  }
  getVehicle() {
    this.vehicleService.get(this.userService.selectedInstitutionId).subscribe(response => {
      this.vehicles = response;
    });
  }
  updateData() {
    let temp = [...this.vehicles];
    temp = JSON.parse(JSON.stringify(temp));
    this.vehicles = temp;
  }
  add() {
    const data = this.vehicleForm.value;
    if (!data.id) {
      delete data.id;
    }
    this.vehicleService.create(data).subscribe({
      next: response => {
        if (!!response.id) {
          this.vehicles.push(response);
          this.updateData();
          this.toastrService.success('Vechiles Create Successfully.');
          this.display = false;
        }
      },
      error: () => {
        this.toastrService.error('Vechiles Create Failed.');
      }
    });
  }
  edit() {
    this.vehicleService.update(this.vehicleForm.value).subscribe(response => {
      const data = this.vehicleForm.value;
      const index = this.vehicles.findIndex(i => i.id === data.id);
      this.vehicles[index] = data;
      this.toastrService.success('Vechiles Updated Successfully.');
      this.display = false;
    });
  }
  showDialog() {
    this.display = true;
    this.vehicleForm.reset();
    this.vehicleForm.get('institutionId')?.setValue(this.userService.selectedInstitutionId);
  }
  onSubmit() {
    if (this.vehicleForm.invalid) {
      return;
    }
    if (!this.vehicleForm.value.id) {
      this.add();
    } else {
      this.edit();
    }
  }
  fillForm(vechile) {
    this.display = true;
    this.vehicleForm.patchValue(vechile);
  }
  deleteVechile(id) {
    this.vehicleService.delete(id).subscribe(response => {
      const index = this.vehicles.findIndex(i => i.id == id);
      this.vehicles.splice(index, 1);
      this.toastrService.success('Vechiles Deleted Successfully.');
    });
  }
  close() {
    window.alert('Are u Sure Leave From');
    this.display = false;
  }
}
VehicleComponent.ɵfac = function VehicleComponent_Factory(t) {
  return new (t || VehicleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_vehicle_service__WEBPACK_IMPORTED_MODULE_0__.VehicleService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_toastr_message_service__WEBPACK_IMPORTED_MODULE_2__.ToastrService));
};
VehicleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: VehicleComponent,
  selectors: [["app-vehicle"]],
  decls: 31,
  vars: 11,
  consts: [[1, "grid"], [1, "col-12"], [1, "card"], [1, "p-toolbar-group-left", "flex", "flex-wrap"], [1, "p-toolbar-group-right"], ["pButton", "", "type", "button", "label", "Add Vechile", 1, "p-button-outlined", "ml-5", 3, "click"], ["header", "Vechile Form", "showEffect", "fade", 3, "visible", "breakpoints", "visibleChange"], [3, "formGroup", "ngSubmit"], [1, "card", "p-fluid"], [1, "field", "col"], ["htmlFor", "number", 1, "mb-3", "font-semibold", "text-lg"], ["formControlName", "number", "pInputText", "", "id", "number", "placeholder", "Vehicle Number", "type", "text"], ["htmlFor", "identificationLable", 1, "mb-3", "font-semibold", "text-lg"], ["formControlName", "identificationLable", "placeholder", "Identification Lable", "pInputText", "", "id", "identificationLable", "type", "text"], ["htmlFor", "identificationValue", 1, "mb-3", "font-semibold", "text-lg"], ["formControlName", "identificationValue", "placeholder", "Identification Value", "pInputText", "", "id", "identificationValue", "type", "text"], [1, "flex", "flex-row", "gap-4"], ["pButton", "", "pRipple", "", "type", "submit", "label", "Submit", 1, "p-button-outlined", 2, "width", "200px"], ["pButton", "", "pRipple", "", "type", "reset", "label", "Close", 1, "p-button-outlined", "p-button-danger", 2, "width", "200px", 3, "click"], [1, "card", "m-1"], [3, "value", "rows", "paginator", "rowHover"], ["pTemplate", "header"], ["pTemplate", "body"], ["pSortableColumn", "number", 2, "min-width", "7rem"], ["pSortableColumn", "identificationLable", 2, "min-width", "7rem"], ["pSortableColumn", "identificationValue", 2, "min-width", "7rem"], ["pButton", "", "pRipple", "", "icon", "pi pi-pencil", 1, "p-button-rounded", "p-button-success", "mr-2", 3, "click"], ["pButton", "", "pRipple", "", "icon", "pi pi-trash", 1, "p-button-rounded", "p-button-warning", 3, "click"]],
  template: function VehicleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "p-toolbar")(4, "div", 3)(5, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Vehicles");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 4)(8, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VehicleComponent_Template_button_click_8_listener() {
        return ctx.showDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p-dialog", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("visibleChange", function VehicleComponent_Template_p_dialog_visibleChange_9_listener($event) {
        return ctx.display = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "form", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function VehicleComponent_Template_form_ngSubmit_10_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8)(12, "div", 9)(13, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Vehicle Number");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 9)(17, "label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Identification Lable");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 9)(21, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Identification Value");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VehicleComponent_Template_button_click_26_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 19)(28, "p-table", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, VehicleComponent_ng_template_29_Template, 14, 0, "ng-template", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, VehicleComponent_ng_template_30_Template, 11, 3, "ng-template", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](9, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", ctx.display)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](10, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.vehicleForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.vehicles)("rows", 5)("paginator", true)("rowHover", true);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, primeng_toolbar__WEBPACK_IMPORTED_MODULE_5__.Toolbar, primeng_table__WEBPACK_IMPORTED_MODULE_6__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_6__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_6__.SortIcon, primeng_dialog__WEBPACK_IMPORTED_MODULE_8__.Dialog, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__.InputText],
  encapsulation: 2
});

/***/ }),

/***/ 6900:
/*!**************************************************!*\
  !*** ./src/app/master/vehicle/vehicle.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehicleModule": () => (/* binding */ VehicleModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _vehicle_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vehicle.component */ 234);
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
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/multiselect */ 850);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/tag */ 3042);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/toast */ 9129);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);

















const routes = [{
  path: '',
  component: _vehicle_component__WEBPACK_IMPORTED_MODULE_0__.VehicleComponent
}];
class VehicleModule {}
VehicleModule.ɵfac = function VehicleModule_Factory(t) {
  return new (t || VehicleModule)();
};
VehicleModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: VehicleModule
});
VehicleModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_5__.ToolbarModule, primeng_table__WEBPACK_IMPORTED_MODULE_6__.TableModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_7__.DialogModule, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonModule, primeng_paginator__WEBPACK_IMPORTED_MODULE_9__.PaginatorModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__.InputTextModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_11__.InputTextareaModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__.DropdownModule, primeng_multiselect__WEBPACK_IMPORTED_MODULE_13__.MultiSelectModule, primeng_tag__WEBPACK_IMPORTED_MODULE_14__.TagModule, primeng_toast__WEBPACK_IMPORTED_MODULE_15__.ToastModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](VehicleModule, {
    declarations: [_vehicle_component__WEBPACK_IMPORTED_MODULE_0__.VehicleComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_5__.ToolbarModule, primeng_table__WEBPACK_IMPORTED_MODULE_6__.TableModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_7__.DialogModule, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonModule, primeng_paginator__WEBPACK_IMPORTED_MODULE_9__.PaginatorModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__.InputTextModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_11__.InputTextareaModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__.DropdownModule, primeng_multiselect__WEBPACK_IMPORTED_MODULE_13__.MultiSelectModule, primeng_tag__WEBPACK_IMPORTED_MODULE_14__.TagModule, primeng_toast__WEBPACK_IMPORTED_MODULE_15__.ToastModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_master_vehicle_vehicle_module_ts.js.map