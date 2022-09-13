(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["defi-farm-farm-module"],{

/***/ "./src/app/common/footer/footer.service.ts":
/*!*************************************************!*\
  !*** ./src/app/common/footer/footer.service.ts ***!
  \*************************************************/
/*! exports provided: FooterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterService", function() { return FooterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_assets_files_contract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/files/contract */ "./src/assets/files/contract.ts");
/* harmony import */ var src_assets_files_router_abi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/assets/files/router_abi */ "./src/assets/files/router_abi.ts");
/* harmony import */ var src_app_common_services_metamask_swap_swap_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/services/metamask/swap/swap.service */ "./src/app/common/services/metamask/swap/swap.service.ts");






let wethaddress = src_assets_files_contract__WEBPACK_IMPORTED_MODULE_2__["ContractDetails"].WBNB_contract;
class FooterService {
    // pair_address = "0xe6ad2b0d3a211db4c3ca35ab883a6781dc91f10e"; // GLP_BNB
    constructor(swapservice) {
        this.swapservice = swapservice;
        this.pricePoolShare = {};
        this.swapformorder = true;
        this.fromCurrency_address = src_assets_files_contract__WEBPACK_IMPORTED_MODULE_2__["ContractDetails"].governance_token_contract;
        this.fromCurrency_decimal = 18;
        this.toCurrency_decimal = 18;
        // this.getPricePoolshare();
    }
    getPricePoolshare() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let amount_value = 1;
            let amountIn;
            let path_s = [this.fromCurrency_address, wethaddress]; // array values
            if (this.fromCurrency_decimal == 18) {
                amountIn = window.web3.utils.toWei(amount_value.toString(), "ether");
            }
            else {
                let decimal = Math.pow(10, this.fromCurrency_decimal);
                amountIn = (amount_value * decimal).toFixed(4);
            }
            return this.swapservice
                .getAmountsOutOld(src_assets_files_contract__WEBPACK_IMPORTED_MODULE_2__["ContractDetails"].router_contract, src_assets_files_router_abi__WEBPACK_IMPORTED_MODULE_3__["RouterAbi"], amountIn, path_s)
                .then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log("getAmountsIn ---->", result);
                if (result.status) {
                    if (this.toCurrency_decimal == 18) {
                        this.pricePoolShare.to_amount = (result.resultamount[1] / 1000000000000000000).toFixed(4);
                    }
                    else {
                        let decimal = Math.pow(10, this.toCurrency_decimal);
                        this.pricePoolShare.to_amount = (result.resultamount[1] / decimal).toFixed(4);
                    }
                    console.log("this.pricePoolShare.to_amount ---->", this.pricePoolShare.to_amount);
                    return this.pricePoolShare.to_amount;
                }
                else {
                    this.pricePoolShare.to_amount = 0.0;
                    return this.pricePoolShare.to_amount;
                }
            }))
                .catch((error) => {
                this.pricePoolShare.to_amount = (0).toFixed(4);
                return this.pricePoolShare.to_amount;
            });
            // let amountOut;
            // if (this.toCurrency_decimal == 18) {
            //   amountOut = window.web3.utils.toWei(amount_value.toString(), "ether");
            // } else {
            //   let decimal = Math.pow(10, this.toCurrency_decimal);
            //   amountOut = amount_value / decimal;
            // }
            // this.swapservice
            //   .getAmountsInOld(
            //     ContractDetails.router_contract,
            //     RouterAbi,
            //     amountOut,
            //     path_s
            //   )
            //   .then(async (result) => {
            //     console.log("getAmountsOut ---->", result);
            //     if (result.status) {
            //       // new
            //       if (this.fromCurrency_decimal == 18) {
            //         this.pricePoolShare.from_amount = (
            //           result.resultamount[0] / 1000000000000000000
            //         ).toFixed(4);
            //       } else {
            //         let decimal = Math.pow(10, this.fromCurrency_decimal);
            //         this.pricePoolShare.from_amount = (
            //           result.resultamount[0] / decimal
            //         ).toFixed(4);
            //       }
            //       // new
            //       console.log(
            //         "this.pricePoolShare.from_amount ---->",
            //         this.pricePoolShare.from_amount
            //       );
            //     } else {
            //       this.pricePoolShare.from_amount = 0.0;
            //     }
            //   })
            //   .catch((error) => {
            //     this.pricePoolShare.from_amount = 0.0;
            //   });
        });
    }
}
FooterService.ɵfac = function FooterService_Factory(t) { return new (t || FooterService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_common_services_metamask_swap_swap_service__WEBPACK_IMPORTED_MODULE_4__["SwapService"])); };
FooterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FooterService, factory: FooterService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FooterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: src_app_common_services_metamask_swap_swap_service__WEBPACK_IMPORTED_MODULE_4__["SwapService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/defi/farm/farm.component.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/defi/farm/farm.component.ts ***!
  \***************************************************/
/*! exports provided: FarmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmComponent", function() { return FarmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_assets_files_contract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/files/contract */ "./src/assets/files/contract.ts");
/* harmony import */ var src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/services/api/data.service */ "./src/app/common/services/api/data.service.ts");
/* harmony import */ var src_app_common_services_metamask_stake_stake_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/services/metamask/stake/stake.service */ "./src/app/common/services/metamask/stake/stake.service.ts");
/* harmony import */ var src_app_common_services_metamask_common_metamask_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/services/metamask/common/metamask.service */ "./src/app/common/services/metamask/common/metamask.service.ts");
/* harmony import */ var src_app_common_services_metamask_common_contract_common_contract_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/services/metamask/common-contract/common-contract.service */ "./src/app/common/services/metamask/common-contract/common-contract.service.ts");
/* harmony import */ var src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common/toaster/toaster.service */ "./src/app/common/toaster/toaster.service.ts");
/* harmony import */ var src_app_common_footer_footer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/common/footer/footer.service */ "./src/app/common/footer/footer.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _staking2_staking2_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../staking2/staking2.component */ "./src/app/pages/defi/staking2/staking2.component.ts");














const _c0 = ["top"];
function FarmComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FarmComponent_div_13_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Not to yet Poll Id Created to Farm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FarmComponent_div_13_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No staked Pair Found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FarmComponent_div_13_div_4_div_1_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Unlock Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FarmComponent_div_13_div_4_div_1_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Approve");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FarmComponent_div_13_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "APR: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FarmComponent_div_13_div_4_div_1_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const stakingPairObj_r9 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r13.stake(stakingPairObj_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Harvest ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Total Earned");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Deposit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Total Liquidity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](34, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FarmComponent_div_13_div_4_div_1_Template_a_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r15.dataService.openBscScan(ctx_r15.master_stake_address); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "View on Scan");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FarmComponent_div_13_div_4_div_1_Template_button_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const stakingPairObj_r9 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r16.stake(stakingPairObj_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, FarmComponent_div_13_div_4_div_1_div_39_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, FarmComponent_div_13_div_4_div_1_div_40_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stakingPairObj_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !stakingPairObj_r9.staked_staus && ctx_r8.isStakedOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", stakingPairObj_r9.fromCurrency, " - ", stakingPairObj_r9.toCurrency, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", stakingPairObj_r9.aprPercentage ? stakingPairObj_r9.aprPercentage : "0", "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r8.dataService.projectDetails.tokenName, " Earned ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", stakingPairObj_r9.reward_amount ? stakingPairObj_r9.reward_amount : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](19, 13, "0", "1.4-4"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !stakingPairObj_r9.isClaimAvailable);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", stakingPairObj_r9.fromCurrency, " - ", stakingPairObj_r9.toCurrency, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", stakingPairObj_r9.totalLiqudity ? stakingPairObj_r9.totalLiqudity : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](34, 16, "0", "1.4-4"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !stakingPairObj_r9.isStakeAvailable && ctx_r8.dataService.metaDeatails.isMetaLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r8.dataService.metaDeatails.isMetaLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.dataService.metaDeatails.isMetaLogin);
} }
function FarmComponent_div_13_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FarmComponent_div_13_div_4_div_1_Template, 41, 19, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.stakingPairs);
} }
function FarmComponent_div_13_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Not to yet Poll Id Created to Farm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FarmComponent_div_13_div_7_div_1_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Unlock Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FarmComponent_div_13_div_7_div_1_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Approve");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FarmComponent_div_13_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Core ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "40x");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "APR: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FarmComponent_div_13_div_7_div_1_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const stakingPairObj_r18 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r22.stake(stakingPairObj_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Harvest ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Total Earned");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Deposit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Total Liquidity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](40, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FarmComponent_div_13_div_7_div_1_Template_a_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r24.dataService.openBscScan(ctx_r24.master_stake_address); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "View on Scan");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FarmComponent_div_13_div_7_div_1_Template_button_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const stakingPairObj_r18 = ctx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r25.stake(stakingPairObj_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, FarmComponent_div_13_div_7_div_1_div_45_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, FarmComponent_div_13_div_7_div_1_div_46_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stakingPairObj_r18 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", stakingPairObj_r18.fromCurrency, " - ", stakingPairObj_r18.toCurrency, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", stakingPairObj_r18.aprPercentage ? stakingPairObj_r18.aprPercentage : "0", "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r17.dataService.projectDetails.tokenName, " Earned ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", stakingPairObj_r18.reward_amount ? stakingPairObj_r18.reward_amount : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](25, 12, "0", "1.4-4"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !stakingPairObj_r18.isClaimAvailable);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", stakingPairObj_r18.fromCurrency, " - ", stakingPairObj_r18.toCurrency, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", stakingPairObj_r18.totalLiqudity ? stakingPairObj_r18.totalLiqudity : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](40, 15, "0", "1.4-4"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !stakingPairObj_r18.isStakeAvailable && ctx_r17.dataService.metaDeatails.isMetaLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r17.dataService.metaDeatails.isMetaLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r17.dataService.metaDeatails.isMetaLogin);
} }
function FarmComponent_div_13_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FarmComponent_div_13_div_7_div_1_Template, 47, 18, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r7.stakingPairs);
} }
function FarmComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, FarmComponent_div_13_div_2_Template, 3, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, FarmComponent_div_13_div_3_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, FarmComponent_div_13_div_4_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, FarmComponent_div_13_div_6_Template, 3, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, FarmComponent_div_13_div_7_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.stakingPairs.length == 0 && !ctx_r1.isgetPolledPairsLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.stackedLength == 0 && ctx_r1.isStakedOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.isgetPolledPairsLoading && ctx_r1.stakingPairs.length != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.stakingPairs.length == 0 && !ctx_r1.isgetPolledPairsLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.isgetPolledPairsLoading && ctx_r1.stakingPairs.length != 0);
} }
function FarmComponent_app_staking2_14_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-staking2", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("goBack", function FarmComponent_app_staking2_14_Template_app_staking2_goBack_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r26.getBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stakingPair", ctx_r2.stakingPairSingleObj);
} }
class FarmComponent {
    constructor(dataService, stakeService, metamaskService, commonContractService, toasterService, changeDetectorRef, footerService) {
        this.dataService = dataService;
        this.stakeService = stakeService;
        this.metamaskService = metamaskService;
        this.commonContractService = commonContractService;
        this.toasterService = toasterService;
        this.changeDetectorRef = changeDetectorRef;
        this.footerService = footerService;
        this.isCollapsed = false;
        this.stakingPairs = [];
        this.stakingPairsDatas = [];
        this.isCollapseds = [];
        this.isSingleStake = false;
        this.isStakeAvailable = false;
        this.isClaimAvailable = false;
        this.isgetPolledPairsLoading = true;
        // Filter
        this.isStakedOnly = false;
        this.stackedLength = 0;
        this.isTable = true;
        this.master_stake_address = src_assets_files_contract__WEBPACK_IMPORTED_MODULE_2__["ContractDetails"].master_stake_address;
    }
    ngOnInit() {
        this.getPolledPairs();
    }
    filter(type) {
        if (type == "stakedOnly") {
            this.stackedLength = this.stakingPairs.filter(function (item) {
                console.log(item, 'type');
                return item.staked_staus == true;
            }).length;
        }
    }
    changeView(type) {
        console.log(type, "typetype");
        if (type == "table") {
            this.isTable = true;
        }
        else {
            this.isTable = false;
        }
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
    toTop() {
        // window.scroll(0, 0);
        this.top.nativeElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
        });
    }
    getBack() {
        console.log('getBack called');
        this.isSingleStake = false;
        this.changeDetectorRef.detectChanges();
    }
    isCollapsedOpen() {
        console.log("ue");
        this.isCollapsed = true;
        this.changeDetectorRef.detectChanges();
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
    getAprCalculation(poolId, priceOfToken) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // APR =(Price of Token * No.of Rewards<poolInfo> * 365 )
            return this.stakeService.GetPoolInfo(poolId).then((suc) => {
                if (suc.status) {
                    console.log(suc, "____________________________________________________________ sucess");
                    let noReward = +suc.share * +suc.allocPoint;
                    let per = priceOfToken * noReward * 365;
                    return per.toFixed(2);
                }
            });
        });
    }
    metaFunctions() {
        this.stakingPairs.map((item) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.setPairBalance(item.pair_address).then((suc) => {
                item.avilableStakeAmount = suc.balance;
                item.avilableStakeAmountRaw = suc.rawbalance;
                if (+suc.balance > 0) {
                    item.isStakeAvailable = true;
                }
                else {
                    item.isStakeAvailable = false;
                }
            });
            yield this.getRewardAmount(item.poolId).then((suc) => {
                item.reward_amount = suc;
                if (+suc > 0) {
                    item.isClaimAvailable = true;
                }
                else {
                    item.isClaimAvailable = false;
                }
            });
            yield this.getStakedAmount(item.poolId).then((suc) => {
                item.staked_amount = suc.amount;
                item.staked_amountRaw = suc.amountRaw;
                if (+suc.amount > 0) {
                    item.staked_staus = true;
                }
                else {
                    item.staked_staus = false;
                }
            });
            yield this.footerService.getPricePoolshare().then((suc) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(suc, "+++++++++++++++++++++++++++++++++ suc");
                yield this.getAprCalculation(item.poolId, suc).then((percentage) => {
                    item.aprPercentage = percentage;
                });
            }));
            yield this.getTotalSupply(item.pair_address).then((suc) => {
                item.totalLiqudity = suc;
            });
            this.changeDetectorRef.detectChanges();
        }));
        this.changeDetectorRef.detectChanges();
    }
    getTotalSupply(contractAddress) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.commonContractService
                .GetTotalSupply(contractAddress)
                .then((suc) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (suc.status) {
                    return suc.totalsupply;
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
    setPairBalance(pair_address) {
        return this.commonContractService
            .GetTokenbalance(pair_address)
            .then((suc) => {
            if (suc.status) {
                return suc;
            }
            else {
                return 0.0;
            }
        });
    }
    getRewardAmount(poolId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.stakeService
                .GetRewardamount(poolId)
                .then((suc) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (suc.status) {
                    let reward_amount = yield window.web3.utils.fromWei(suc.result.toString(), "ether");
                    return reward_amount;
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
    getStakedAmount(poolId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.stakeService
                .GetStakedamount(poolId)
                .then((suc) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (suc.status) {
                    let staked_amount = yield window.web3.utils.fromWei(suc.amount.toString(), "ether");
                    console.log(staked_amount, "staked_amount");
                    let stakeData = {
                        amountRaw: suc.amount,
                        amount: staked_amount,
                    };
                    return stakeData;
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
                    console.log(this.stakingPairSingleObj, 'this.isChainId');
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
FarmComponent.ɵfac = function FarmComponent_Factory(t) { return new (t || FarmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_services_metamask_stake_stake_service__WEBPACK_IMPORTED_MODULE_4__["StakeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_services_metamask_common_metamask_service__WEBPACK_IMPORTED_MODULE_5__["MetamaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_services_metamask_common_contract_common_contract_service__WEBPACK_IMPORTED_MODULE_6__["CommonContractService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_7__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_footer_footer_service__WEBPACK_IMPORTED_MODULE_8__["FooterService"])); };
FarmComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FarmComponent, selectors: [["app-farm"]], viewQuery: function FarmComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.top = _t.first);
    } }, decls: 15, vars: 5, consts: [[1, "tabpages-cnt", "farm-block"], [1, "section-title"], [1, "text-center", "font-20", "fontweight-400"], [1, "row", "mt-5"], [1, "col-md-6", "col-sm-12", "col-xl-3", "col-lg-6", "mb-2", "text-xl-right", "toggle"], [1, "switch"], ["type", "checkbox", "id", "switch1", "name", "isStakedOnly", 3, "ngModel", "ngModelChange"], [1, "slider", "round"], ["for", "switch1", 1, "text-black", "font-18", "pl-2", "pt-1", "fontweight-400", "align-top"], ["class", "tab-content", 4, "ngIf"], ["class", "tab-content ", "id", "myTabContent", 4, "ngIf"], [3, "stakingPair", "goBack", 4, "ngIf"], [1, "tab-content"], ["id", "myTabContent", 1, "tab-content"], ["id", "home", "role", "tabpanel", "aria-labelledby", "home-tab", 1, "tab-pane", "fade", "show", "active"], ["class", "row mt-4", 4, "ngIf"], ["class", "col-xl-12 col-lg-12 col-md-12 col-12 text-center font-weight-bold ", 4, "ngIf"], ["id", "profile", "role", "tabpanel", "aria-labelledby", "profile-tab", 1, "tab-pane", "fade"], [1, "row", "mt-4"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-12", "text-center", "font-weight-bold"], ["class", "col-lg-6 col-sm-12 col-xl-4 col-md-12", 3, "hidden", 4, "ngFor", "ngForOf"], [1, "col-lg-6", "col-sm-12", "col-xl-4", "col-md-12", 3, "hidden"], [1, "card", "grey-cnt", "stake-cnt"], [1, "card-body"], [1, "text-black", "font-20", "fontweight-700", "mb-3"], [1, "d-sm-flex", "justify-content-between", "mb-4"], [1, "d-flex", "align-items-start", "mb-2"], ["src", "assets/images/eth-icon.png", 1, "img-fluid", "mr-2"], ["src", "assets/images/bnb-icon.png", 1, "img-fluid"], [1, "d-flex", "justify-content-between"], [1, "text-black", "font-14", "fontweight-400"], [1, "d-flex", "justify-content-between", "mt-3", "align-items-center"], [1, "btn", "bg-white", "min-width-auto", "font-14", "px-2", "py-1", 3, "disabled", "click"], [1, "text-left", "font-16", "mt-3", "font-weight-bold"], [1, "text-black", "font-14", "font-weight-bold"], ["routerLink", "", "target", "_blank", 1, "fontweight-400", "text-black", "text-underline", 3, "click"], [1, "w-100", "mt-3"], [1, "btn", "default-btn", "btn-block", "font-16", 3, "disabled", "click"], [4, "ngIf"], ["class", "col-lg-6 col-sm-12 col-xl-4 col-md-12", 4, "ngFor", "ngForOf"], [1, "col-lg-6", "col-sm-12", "col-xl-4", "col-md-12"], [1, "d-flex", "align-items-center"], [1, "btn", "default-btn", "min-width-auto", "font-14", "px-2", "py-1", "mr-1"], ["src", "assets/images/farm1.png"], [1, "bg-white", "font-14", "font-weight-bold", "p-2", "mb-0"], [3, "stakingPair", "goBack"]], template: function FarmComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Farming");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FarmComponent_Template_input_ngModelChange_8_listener($event) { return ctx.isStakedOnly = $event; })("ngModelChange", function FarmComponent_Template_input_ngModelChange_8_listener() { return ctx.filter("stakedOnly"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Staked Only");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, FarmComponent_div_12_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, FarmComponent_div_13_Template, 8, 5, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, FarmComponent_app_staking2_14_Template, 1, 1, "app-staking2", 11);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Liquidity providers earn a 0.0% fee on all traders proportional to their share of the pool ", ctx.dataService.projectDetails.tokenName, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.isStakedOnly);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isgetPolledPairsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isSingleStake && !ctx.isgetPolledPairsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isSingleStake);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLinkWithHref"], _staking2_staking2_component__WEBPACK_IMPORTED_MODULE_12__["Staking2Component"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RlZmkvZmFybS9mYXJtLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FarmComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-farm',
                templateUrl: './farm.component.html',
                styleUrls: ['./farm.component.css']
            }]
    }], function () { return [{ type: src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }, { type: src_app_common_services_metamask_stake_stake_service__WEBPACK_IMPORTED_MODULE_4__["StakeService"] }, { type: src_app_common_services_metamask_common_metamask_service__WEBPACK_IMPORTED_MODULE_5__["MetamaskService"] }, { type: src_app_common_services_metamask_common_contract_common_contract_service__WEBPACK_IMPORTED_MODULE_6__["CommonContractService"] }, { type: src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_7__["ToasterService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: src_app_common_footer_footer_service__WEBPACK_IMPORTED_MODULE_8__["FooterService"] }]; }, { "top": [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["top", { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/defi/farm/farm.module.ts":
/*!************************************************!*\
  !*** ./src/app/pages/defi/farm/farm.module.ts ***!
  \************************************************/
/*! exports provided: FarmModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmModule", function() { return FarmModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _farm_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./farm.component */ "./src/app/pages/defi/farm/farm.component.ts");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm2015/ngx-bootstrap-tabs.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/collapse/fesm2015/ngx-bootstrap-collapse.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_bootstrap_tooltip___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/tooltip/ */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
/* harmony import */ var src_app_common_loader_loader_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/common/loader/loader.module */ "./src/app/common/loader/loader.module.ts");
/* harmony import */ var _staking2_staking2_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../staking2/staking2.module */ "./src/app/pages/defi/staking2/staking2.module.ts");















const routes = [
    {
        path: "",
        component: _farm_component__WEBPACK_IMPORTED_MODULE_3__["FarmComponent"],
    },
];
class FarmModule {
}
FarmModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FarmModule });
FarmModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FarmModule_Factory(t) { return new (t || FarmModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _staking2_staking2_module__WEBPACK_IMPORTED_MODULE_9__["Staking2Module"],
            src_app_common_loader_loader_module__WEBPACK_IMPORTED_MODULE_8__["LoaderModule"],
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__["TabsModule"].forRoot(),
            ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_5__["CollapseModule"].forRoot(),
            ngx_bootstrap_tooltip___WEBPACK_IMPORTED_MODULE_7__["TooltipModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FarmModule, { declarations: [_farm_component__WEBPACK_IMPORTED_MODULE_3__["FarmComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _staking2_staking2_module__WEBPACK_IMPORTED_MODULE_9__["Staking2Module"],
        src_app_common_loader_loader_module__WEBPACK_IMPORTED_MODULE_8__["LoaderModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__["TabsModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_5__["CollapseModule"], ngx_bootstrap_tooltip___WEBPACK_IMPORTED_MODULE_7__["TooltipModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FarmModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_farm_component__WEBPACK_IMPORTED_MODULE_3__["FarmComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                    _staking2_staking2_module__WEBPACK_IMPORTED_MODULE_9__["Staking2Module"],
                    src_app_common_loader_loader_module__WEBPACK_IMPORTED_MODULE_8__["LoaderModule"],
                    ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__["TabsModule"].forRoot(),
                    ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_5__["CollapseModule"].forRoot(),
                    ngx_bootstrap_tooltip___WEBPACK_IMPORTED_MODULE_7__["TooltipModule"].forRoot(),
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=defi-farm-farm-module.js.map