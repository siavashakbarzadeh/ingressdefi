(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["defi-staking-staking-module"],{

/***/ "./src/app/common/loader/loader.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/loader/loader.component.ts ***!
  \***************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LoaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(); };
LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], decls: 4, vars: 0, consts: [[1, "waveload"], [1, "dot"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loader',
                templateUrl: './loader.component.html',
                styleUrls: ['./loader.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/common/loader/loader.module.ts":
/*!************************************************!*\
  !*** ./src/app/common/loader/loader.module.ts ***!
  \************************************************/
/*! exports provided: LoaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderModule", function() { return LoaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader.component */ "./src/app/common/loader/loader.component.ts");




class LoaderModule {
}
LoaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoaderModule });
LoaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoaderModule_Factory(t) { return new (t || LoaderModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoaderModule, { declarations: [_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                exports: [_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"]],
                entryComponents: [_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/defi/staking/staking.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/defi/staking/staking.component.ts ***!
  \*********************************************************/
/*! exports provided: StakingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StakingComponent", function() { return StakingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/services/api/data.service */ "./src/app/common/services/api/data.service.ts");
/* harmony import */ var src_app_common_services_metamask_stake_stake_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/services/metamask/stake/stake.service */ "./src/app/common/services/metamask/stake/stake.service.ts");
/* harmony import */ var src_app_common_services_metamask_common_metamask_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/services/metamask/common/metamask.service */ "./src/app/common/services/metamask/common/metamask.service.ts");
/* harmony import */ var src_app_common_services_metamask_common_contract_common_contract_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/services/metamask/common-contract/common-contract.service */ "./src/app/common/services/metamask/common-contract/common-contract.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _staking2_staking2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../staking2/staking2.component */ "./src/app/pages/defi/staking2/staking2.component.ts");










function StakingComponent_div_4_ng_container_1_div_1_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Unlock Wallet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function StakingComponent_div_4_ng_container_1_div_1_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Stake ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function StakingComponent_div_4_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "` ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Total Staking");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h3", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StakingComponent_div_4_ng_container_1_div_1_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const stakingPairObj_r5 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r8.stake(stakingPairObj_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, StakingComponent_div_4_ng_container_1_div_1_ng_container_17_Template, 2, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, StakingComponent_div_4_ng_container_1_div_1_ng_container_18_Template, 2, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stakingPairObj_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", stakingPairObj_r5.fromCurrency, "-", stakingPairObj_r5.toCurrency, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](14, 5, stakingPairObj_r5.staked_amount, ctx_r4.dataService.fixNumber));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r4.dataService.metaDeatails.isMetaLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.dataService.metaDeatails.isMetaLogin);
} }
function StakingComponent_div_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, StakingComponent_div_4_ng_container_1_div_1_Template, 19, 8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.stakingPairs);
} }
function StakingComponent_div_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Not yet Pool Id Created to stake ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function StakingComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, StakingComponent_div_4_ng_container_1_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, StakingComponent_div_4_ng_container_2_Template, 3, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.stakingPairs.length != 0 && !ctx_r0.isgetPolledPairsLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.stakingPairs.length == 0 && !ctx_r0.isgetPolledPairsLoading);
} }
function StakingComponent_app_staking2_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-staking2", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("goBack", function StakingComponent_app_staking2_6_Template_app_staking2_goBack_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.isSingleStake = !ctx_r10.isSingleStake; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stakingPair", ctx_r1.stakingPairSingleObj);
} }
class StakingComponent {
    constructor(dataService, stakeService, metamaskService, commonContractService, changeDetectorRef, router) {
        this.dataService = dataService;
        this.stakeService = stakeService;
        this.metamaskService = metamaskService;
        this.commonContractService = commonContractService;
        this.changeDetectorRef = changeDetectorRef;
        this.router = router;
        this.stakingPairs = [];
        this.stakingPairsDatas = [];
        this.isSingleStake = false;
        this.isgetPolledPairsLoading = true;
    }
    ngOnInit() {
        this.getPolledPairs();
    }
    getPolledPairs() {
        this.isgetPolledPairsLoading = true;
        this.dataService.getRequest("farming/getPooledPairs").subscribe((suc) => {
            let responseData = suc;
            if (responseData.status) {
                this.stakingPairs = responseData.data;
                this.metaCallCommonFunction();
            }
            this.isgetPolledPairsLoading = false;
        });
    }
    metaCallCommonFunction() {
        //  After Check
        this.dataService.isMetaReady.subscribe((suc) => {
            if (suc) {
                this.metaFunctions();
            }
        });
        //  Before Check
        if (this.dataService.metaDeatails.isMetaLogin) {
            this.metaFunctions();
        }
    }
    metaFunctions() {
        this.stakingPairs.map((item) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.getStakedAmount(item.poolId).then((suc) => {
                item.staked_amount = suc;
            });
        }));
        this.changeDetectorRef.detectChanges();
    }
    getStakedAmount(poolId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.stakeService
                .GetStakedamount(poolId)
                .then((suc) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (suc.status) {
                    let staked_amount = yield window.web3.utils.fromWei(suc.amount.toString(), "ether");
                    return staked_amount;
                }
                else {
                    return 0.0;
                }
            }))
                .catch((err) => {
                console.log("reward false");
            });
        });
    }
    stake(stakingPairObj) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.dataService.metaDeatails.isMetaLogin) {
                let isChainId = yield this.metamaskService.checkChainIdCall();
                if (isChainId) {
                    this.stakingPairSingleObj = stakingPairObj;
                    this.isSingleStake = true;
                    this.changeDetectorRef.detectChanges();
                }
            }
            else {
                this.dataService.showWalletList.emit(true);
                return;
            }
        });
    }
}
StakingComponent.ɵfac = function StakingComponent_Factory(t) { return new (t || StakingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_services_metamask_stake_stake_service__WEBPACK_IMPORTED_MODULE_3__["StakeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_services_metamask_common_metamask_service__WEBPACK_IMPORTED_MODULE_4__["MetamaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_services_metamask_common_contract_common_contract_service__WEBPACK_IMPORTED_MODULE_5__["CommonContractService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
StakingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StakingComponent, selectors: [["app-staking"]], decls: 7, vars: 2, consts: [[1, "section-title"], [1, "text-center"], ["class", "row", 4, "ngIf"], [1, "row"], [3, "stakingPair", "goBack", 4, "ngIf"], [4, "ngIf"], ["class", "col-lg-4", 4, "ngFor", "ngForOf"], [1, "col-lg-4"], [1, "card", "grey-cnt", "stake-cnt"], [1, "card-body"], [1, "d-sm-flex", "justify-content-between", "mb-4"], [1, "d-flex", "align-items-start"], ["src", "assets/images/eth-icon.png", 1, "img-fluid", "mr-2"], ["src", "assets/images/bnb-icon.png", 1, "img-fluid"], [1, "w-100", "mt-3"], [1, "btn", "default-btn", "btn-block", 3, "click"], [1, "mx-auto"], [3, "stakingPair", "goBack"]], template: function StakingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Staking");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Stake token to earn new tokens. You can claim and unstake at any time. Rewards are calculated per block.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, StakingComponent_div_4_Template, 3, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, StakingComponent_app_staking2_6_Template, 1, 1, "app-staking2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isSingleStake);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isSingleStake);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _staking2_staking2_component__WEBPACK_IMPORTED_MODULE_8__["Staking2Component"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RlZmkvc3Rha2luZy9zdGFraW5nLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StakingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-staking',
                templateUrl: './staking.component.html',
                styleUrls: ['./staking.component.css']
            }]
    }], function () { return [{ type: src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }, { type: src_app_common_services_metamask_stake_stake_service__WEBPACK_IMPORTED_MODULE_3__["StakeService"] }, { type: src_app_common_services_metamask_common_metamask_service__WEBPACK_IMPORTED_MODULE_4__["MetamaskService"] }, { type: src_app_common_services_metamask_common_contract_common_contract_service__WEBPACK_IMPORTED_MODULE_5__["CommonContractService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/defi/staking/staking.module.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/defi/staking/staking.module.ts ***!
  \******************************************************/
/*! exports provided: StakingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StakingModule", function() { return StakingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _staking_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./staking.component */ "./src/app/pages/defi/staking/staking.component.ts");
/* harmony import */ var _staking2_staking2_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../staking2/staking2.module */ "./src/app/pages/defi/staking2/staking2.module.ts");
/* harmony import */ var src_app_common_loader_loader_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/loader/loader.module */ "./src/app/common/loader/loader.module.ts");








const routes = [
    {
        path: "",
        component: _staking_component__WEBPACK_IMPORTED_MODULE_3__["StakingComponent"],
    },
];
class StakingModule {
}
StakingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StakingModule });
StakingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StakingModule_Factory(t) { return new (t || StakingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _staking2_staking2_module__WEBPACK_IMPORTED_MODULE_4__["Staking2Module"],
            src_app_common_loader_loader_module__WEBPACK_IMPORTED_MODULE_5__["LoaderModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StakingModule, { declarations: [_staking_component__WEBPACK_IMPORTED_MODULE_3__["StakingComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _staking2_staking2_module__WEBPACK_IMPORTED_MODULE_4__["Staking2Module"],
        src_app_common_loader_loader_module__WEBPACK_IMPORTED_MODULE_5__["LoaderModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StakingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_staking_component__WEBPACK_IMPORTED_MODULE_3__["StakingComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _staking2_staking2_module__WEBPACK_IMPORTED_MODULE_4__["Staking2Module"],
                    src_app_common_loader_loader_module__WEBPACK_IMPORTED_MODULE_5__["LoaderModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=defi-staking-staking-module.js.map