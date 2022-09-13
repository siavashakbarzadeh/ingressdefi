(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["defi-dashboard-dashboard-module"],{

/***/ "./src/app/pages/defi/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/defi/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_assets_files_contract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/files/contract */ "./src/assets/files/contract.ts");
/* harmony import */ var src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/services/api/data.service */ "./src/app/common/services/api/data.service.ts");
/* harmony import */ var src_app_common_services_metamask_common_metamask_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/services/metamask/common/metamask.service */ "./src/app/common/services/metamask/common/metamask.service.ts");
/* harmony import */ var src_app_common_services_metamask_common_contract_common_contract_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/services/metamask/common-contract/common-contract.service */ "./src/app/common/services/metamask/common-contract/common-contract.service.ts");
/* harmony import */ var src_app_common_services_metamask_stake_stake_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/services/metamask/stake/stake.service */ "./src/app/common/services/metamask/stake/stake.service.ts");
/* harmony import */ var src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common/toaster/toaster.service */ "./src/app/common/toaster/toaster.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











function DashboardComponent_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Unlock Wallet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function DashboardComponent_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Approve ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
class DashboardComponent {
    constructor(dataService, metamaskService, commonContractService, stakeService, toasterService, router) {
        this.dataService = dataService;
        this.metamaskService = metamaskService;
        this.commonContractService = commonContractService;
        this.stakeService = stakeService;
        this.toasterService = toasterService;
        this.router = router;
        this.stakingPairs = [];
        this.Homepagevariable = {
            governanceTokenHarvset: 0,
        };
        this.profile = {};
        this.collection = {};
        this.governanceTokenBalance = 0;
        this.governanceTokenSupply = 0;
        this.metaCallCommonFunction();
    }
    ngOnInit() {
        this.countCollection();
        this.countNFT();
    }
    metaCallCommonFunction() {
        //  After Check
        this.dataService.isMetaReady.subscribe((suc) => {
            if (suc) {
                this.getPolledPairs();
                this.getGovernanceTokenBalance();
                this.getTotalsupply();
            }
        });
        //  Before Check
        if (this.dataService.metaDeatails.isMetaLogin) {
            this.getPolledPairs();
            this.getGovernanceTokenBalance();
            this.getTotalsupply();
        }
    }
    goto(value) {
        this.router.navigateByUrl("/" + value);
    }
    getPolledPairs() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("yes heheheheheheheeh");
            this.Homepagevariable.governanceTokenHarvset = 0;
            this.dataService.getRequest("farming/getPooledPairs").subscribe((suc) => {
                let responseData = suc;
                if (responseData.status) {
                    this.stakingPairs = responseData.data;
                    let get_farmpairdata = responseData.data;
                    let governanceTokenHarvset = 0;
                    get_farmpairdata.map((items) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        this.stakeService
                            .GetRewardamount(items.poolId)
                            .then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            console.log("______________ result", "resultresult", result);
                            if (result.status) {
                                governanceTokenHarvset = window.web3.utils.fromWei(result.result.toString(), "ether");
                                this.Homepagevariable.governanceTokenHarvset =
                                    +this.Homepagevariable.governanceTokenHarvset + +governanceTokenHarvset;
                            }
                            else {
                                this.Homepagevariable.governanceTokenHarvset =
                                    +this.Homepagevariable.governanceTokenHarvset + 0;
                            }
                        }))
                            .catch((error) => {
                            this.Homepagevariable.governanceTokenHarvset =
                                +this.Homepagevariable.governanceTokenHarvset + 0;
                            console.log(" gettvlvalue error 2---->", error);
                        });
                        this.Homepagevariable.governanceTokenHarvset = 0;
                    }));
                }
            });
        });
    }
    getGovernanceTokenBalance() {
        this.commonContractService
            .GetTokenbalance(src_assets_files_contract__WEBPACK_IMPORTED_MODULE_2__["ContractDetails"].governance_token_contract)
            .then((suc) => {
            if (suc.balance) {
                this.governanceTokenBalance = suc.balance;
            }
            else {
                this.governanceTokenBalance = 0;
            }
        });
    }
    getTotalsupply() {
        this.commonContractService
            .GetTotalSupply(src_assets_files_contract__WEBPACK_IMPORTED_MODULE_2__["ContractDetails"].governance_token_contract)
            .then((suc) => {
            if (suc.totalsupply) {
                this.governanceTokenSupply = suc.totalsupply;
            }
            else {
                this.governanceTokenSupply = 0;
            }
        });
    }
    countNFT() {
        this.dataService.getRequest("collection/userNft").subscribe((suc) => {
            if (suc.status) {
                this.profile.count = suc.data;
            }
            else {
                this.profile.count = 0;
            }
        });
    }
    countCollection() {
        this.dataService.getRequest("collection/countCollection").subscribe((suc) => {
            if (suc.status) {
                this.collection.count = suc.data;
            }
            else {
                this.collection.count = 0;
            }
        });
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_services_metamask_common_metamask_service__WEBPACK_IMPORTED_MODULE_4__["MetamaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_services_metamask_common_contract_common_contract_service__WEBPACK_IMPORTED_MODULE_5__["CommonContractService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_services_metamask_stake_stake_service__WEBPACK_IMPORTED_MODULE_6__["StakeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_7__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 45, vars: 20, consts: [[1, "row"], [1, "col-md-6", "col-lg-4"], [1, "card", "grey-cnt"], [1, "card-body"], [1, "cardcontent"], [1, "cardcakevalue"], [1, "LockedTxt"], [1, "fas", "fa-lock-alt"], [1, "row", "justify-content-center", "mt-4"], [1, "col-lg-10", "col-md-12", "col-12"], ["type", "button", 1, "btn", "default-btn", "btn-block", 3, "click"], [4, "ngIf"], [1, "cardtit"], [1, "row", "align-items-center"], [1, "col-sm"], [1, "lefttxt"], [1, "col-sm", "text-right"], [1, "rgttxt"], [1, "col-md-6", "col-lg-4", "cursor", 3, "routerLink"], [1, "heading", "text-right"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Farms & Staking");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\u00A0Locked ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\u00A0Locked ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_22_listener() { return ctx.goto("staking"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, DashboardComponent_ng_container_23_Template, 2, 0, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, DashboardComponent_ng_container_24_Template, 2, 0, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](37, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Total Collected");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "h3", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx.dataService.projectDetails.tokenName, " to Harvest : ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](9, 11, ctx.Homepagevariable.governanceTokenHarvset, ctx.dataService.fixNumber), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx.dataService.projectDetails.tokenName, " in Wallet : ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](16, 14, ctx.governanceTokenBalance, ctx.dataService.fixNumber), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.dataService.metaDeatails.isMetaLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dataService.metaDeatails.isMetaLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.dataService.projectDetails.tokenName, " Stats ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Total ", ctx.dataService.projectDetails.tokenName, " Supply");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](37, 17, ctx.governanceTokenSupply, ctx.dataService.fixNumber));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/user");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.profile.count);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RlZmkvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css']
            }]
    }], function () { return [{ type: src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }, { type: src_app_common_services_metamask_common_metamask_service__WEBPACK_IMPORTED_MODULE_4__["MetamaskService"] }, { type: src_app_common_services_metamask_common_contract_common_contract_service__WEBPACK_IMPORTED_MODULE_5__["CommonContractService"] }, { type: src_app_common_services_metamask_stake_stake_service__WEBPACK_IMPORTED_MODULE_6__["StakeService"] }, { type: src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_7__["ToasterService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/defi/dashboard/dashboard.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/defi/dashboard/dashboard.module.ts ***!
  \**********************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/pages/defi/dashboard/dashboard.component.ts");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm2015/ngx-bootstrap-tabs.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/collapse/fesm2015/ngx-bootstrap-collapse.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_bootstrap_tooltip___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/tooltip/ */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
/* harmony import */ var src_app_common_loader_loader_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/common/loader/loader.module */ "./src/app/common/loader/loader.module.ts");














const routes = [
    {
        path: "",
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
    },
];
class DashboardModule {
}
DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardModule_Factory(t) { return new (t || DashboardModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            src_app_common_loader_loader_module__WEBPACK_IMPORTED_MODULE_8__["LoaderModule"],
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__["TabsModule"].forRoot(),
            ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_5__["CollapseModule"].forRoot(),
            ngx_bootstrap_tooltip___WEBPACK_IMPORTED_MODULE_7__["TooltipModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], src_app_common_loader_loader_module__WEBPACK_IMPORTED_MODULE_8__["LoaderModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__["TabsModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_5__["CollapseModule"], ngx_bootstrap_tooltip___WEBPACK_IMPORTED_MODULE_7__["TooltipModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                    src_app_common_loader_loader_module__WEBPACK_IMPORTED_MODULE_8__["LoaderModule"],
                    ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__["TabsModule"].forRoot(),
                    ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_5__["CollapseModule"].forRoot(),
                    ngx_bootstrap_tooltip___WEBPACK_IMPORTED_MODULE_7__["TooltipModule"].forRoot(),
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=defi-dashboard-dashboard-module.js.map