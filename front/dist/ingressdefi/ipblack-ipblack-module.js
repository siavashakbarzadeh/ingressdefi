(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ipblack-ipblack-module"],{

/***/ "./src/app/ipblack/ipblack-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/ipblack/ipblack-routing.module.ts ***!
  \***************************************************/
/*! exports provided: IpblackRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpblackRoutingModule", function() { return IpblackRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ipblack_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ipblack.component */ "./src/app/ipblack/ipblack.component.ts");





const routes = [{ path: '', component: _ipblack_component__WEBPACK_IMPORTED_MODULE_2__["IpblackComponent"] }];
class IpblackRoutingModule {
}
IpblackRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: IpblackRoutingModule });
IpblackRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function IpblackRoutingModule_Factory(t) { return new (t || IpblackRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IpblackRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IpblackRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/ipblack/ipblack.component.ts":
/*!**********************************************!*\
  !*** ./src/app/ipblack/ipblack.component.ts ***!
  \**********************************************/
/*! exports provided: IpblackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpblackComponent", function() { return IpblackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _common_services_api_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/services/api/data.service */ "./src/app/common/services/api/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function IpblackComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Your IP Was Blocked ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Oops! You're lost.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Further details contact admin.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class IpblackComponent {
    constructor(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.isIpBlocked = false;
        this.getIp();
    }
    getIp() {
        this.dataService
            .postRequest("admin/chkipaddress", {})
            .subscribe((resData) => {
            if (resData.status == true) {
                this.isIpBlocked = true;
                localStorage.clear();
            }
            else {
                this.router.navigate(["/"]);
            }
        });
    }
    ngOnInit() { }
}
IpblackComponent.ɵfac = function IpblackComponent_Factory(t) { return new (t || IpblackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
IpblackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IpblackComponent, selectors: [["app-ipblack"]], decls: 1, vars: 1, consts: [["class", "all-center", 4, "ngIf"], [1, "all-center"], [1, "container"], [1, "row"], [1, "col-12"], [1, "font-big", "m-0"], [1, "pt-3"], [1, "text-muted"]], template: function IpblackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, IpblackComponent_div_0_Template, 12, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isIpBlocked);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".all-center[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 100vh !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXBibGFjay9pcGJsYWNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2lwYmxhY2svaXBibGFjay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGwtY2VudGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IpblackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-ipblack",
                templateUrl: "./ipblack.component.html",
                styleUrls: ["./ipblack.component.scss"],
            }]
    }], function () { return [{ type: _common_services_api_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/ipblack/ipblack.module.ts":
/*!*******************************************!*\
  !*** ./src/app/ipblack/ipblack.module.ts ***!
  \*******************************************/
/*! exports provided: IpblackModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpblackModule", function() { return IpblackModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ipblack_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ipblack-routing.module */ "./src/app/ipblack/ipblack-routing.module.ts");
/* harmony import */ var _ipblack_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ipblack.component */ "./src/app/ipblack/ipblack.component.ts");





class IpblackModule {
}
IpblackModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: IpblackModule });
IpblackModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function IpblackModule_Factory(t) { return new (t || IpblackModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ipblack_routing_module__WEBPACK_IMPORTED_MODULE_2__["IpblackRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IpblackModule, { declarations: [_ipblack_component__WEBPACK_IMPORTED_MODULE_3__["IpblackComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ipblack_routing_module__WEBPACK_IMPORTED_MODULE_2__["IpblackRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IpblackModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_ipblack_component__WEBPACK_IMPORTED_MODULE_3__["IpblackComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ipblack_routing_module__WEBPACK_IMPORTED_MODULE_2__["IpblackRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=ipblack-ipblack-module.js.map