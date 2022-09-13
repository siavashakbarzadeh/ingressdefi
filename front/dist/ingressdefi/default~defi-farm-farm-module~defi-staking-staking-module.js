(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~defi-farm-farm-module~defi-staking-staking-module"],{

/***/ "./src/app/pages/defi/staking2/staking2.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/defi/staking2/staking2.component.ts ***!
  \***********************************************************/
/*! exports provided: Staking2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Staking2Component", function() { return Staking2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/services/api/data.service */ "./src/app/common/services/api/data.service.ts");
/* harmony import */ var src_app_common_services_metamask_stake_stake_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/services/metamask/stake/stake.service */ "./src/app/common/services/metamask/stake/stake.service.ts");
/* harmony import */ var src_app_common_services_metamask_common_metamask_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/services/metamask/common/metamask.service */ "./src/app/common/services/metamask/common/metamask.service.ts");
/* harmony import */ var src_app_common_services_metamask_common_contract_common_contract_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/services/metamask/common-contract/common-contract.service */ "./src/app/common/services/metamask/common-contract/common-contract.service.ts");
/* harmony import */ var src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/toaster/toaster.service */ "./src/app/common/toaster/toaster.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function Staking2Component_small_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Enter Within Staked Amount : ", ctx_r0.stakingPair.avilableStakeAmount ? ctx_r0.stakingPair.avilableStakeAmount : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, 0, ctx_r0.dataService.fixNumber), " ");
} }
function Staking2Component_small_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Enter Within Staked Amount : ", ctx_r1.stakingPair.staked_amount ? ctx_r1.stakingPair.staked_amount : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, 0, ctx_r1.dataService.fixNumber), " ");
} }
class Staking2Component {
    constructor(dataService, stakeService, metamaskService, commonContractService, toasterService, changeDetectorRef) {
        this.dataService = dataService;
        this.stakeService = stakeService;
        this.metamaskService = metamaskService;
        this.commonContractService = commonContractService;
        this.toasterService = toasterService;
        this.changeDetectorRef = changeDetectorRef;
        this.stakingPair = {};
        this.goBack = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isUnstakeAvailable = false;
        this.isClaimAvailable = false;
        this.isStakeAvailable = false;
        this.istoUnstakeAmountValid = true;
        this.isTostakeAmountValid = true;
        this.metaCallCommonFunction();
        this.dataService.accountsChanged.subscribe((suc) => {
            this.cancel();
        });
    }
    ngOnInit() {
        this.getPolledPairs();
    }
    getReferrerReward(txId) {
        this.stakeService.GetReferrerReward(txId).then((suc) => {
            console.log(suc, "_________ suc");
            let apiData = {};
        });
    }
    cancel() {
        this.goBack.emit(true);
    }
    metaCallCommonFunction() { }
    getPolledPairs() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(this.stakingPair, "stakingPair");
            yield this.setPairBalance(this.stakingPair.pair_address).then((suc) => {
                this.stakingPair.avilableStakeAmount = suc.balance;
                this.stakingPair.avilableStakeAmountRaw = suc.rawbalance;
                this.stakingPair.toStakeAmount = this.stakingPair.avilableStakeAmount;
                console.log(suc.balance, 'suc.balance');
                if (+suc.balance > 0) {
                    this.isStakeAvailable = true;
                }
                else {
                    this.isStakeAvailable = false;
                }
            });
            yield this.getRewardAmount(this.stakingPair.poolId).then((suc) => {
                console.log(suc, "___________ suc");
                this.stakingPair.reward_amount = suc;
                if (+suc > 0) {
                    this.isClaimAvailable = true;
                }
                else {
                    this.isClaimAvailable = false;
                }
            });
            yield this.getStakedAmount().then((suc) => {
                this.stakingPair.staked_amount = suc.amount;
                this.stakingPair.staked_amountRaw = suc.amountRaw;
                this.stakingPair.toUnstakeAmount = suc.amount;
                if (+suc.amount > 0) {
                    this.isUnstakeAvailable = true;
                }
                else {
                    this.isUnstakeAvailable = false;
                }
            });
            setTimeout(() => {
                this.changeDetectorRef.detectChanges();
            });
        });
    }
    checkValidAmount(type) {
        if (type == "stake") {
            if (this.stakingPair.avilableStakeAmount < this.stakingPair.toStakeAmount) {
                this.isTostakeAmountValid = false;
            }
            else {
                this.isTostakeAmountValid = true;
            }
        }
        else {
            if (this.stakingPair.staked_amount < this.stakingPair.toUnstakeAmount) {
                this.istoUnstakeAmountValid = false;
            }
            else {
                this.istoUnstakeAmountValid = true;
            }
        }
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
    getStakedAmount() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.stakeService
                .GetStakedamount(this.stakingPair.poolId)
                .then((suc) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (suc.status) {
                    let staked_amount = yield window.web3.utils.fromWei(suc.amount.toString(), "ether");
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
            yield this.metamaskService.checkChainIdCall();
            this.stakeApprove(stakingPairObj);
        });
    }
    stakeApprove(stakingPairObj) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // {"useraddress":"0x6eC4E4103c1527517Dd954521F0cAFd0A20B5928","poolId":"1","pairAddress":"0x44f4e7eca81cc9ab195e5e6d6fb4b5b0285dbd8b","rewardAddress":"0x64762410c8747f06fad63de242ab632cf8980ac453a1b8dbc55d87987ec1d25b","status":"Completed","amount":"2.59375"}
            let stakeAmountRaw = yield window.web3.utils.toWei(this.stakingPair.toStakeAmount.toString(), "ether");
            this.dataService.isOverlay = true;
            this.dataService.changeDetector.emit(true);
            this.stakeService
                .ApproveFunction(stakingPairObj.pair_address, stakeAmountRaw.toString())
                .then((suc) => {
                if (suc.status) {
                    this.stakeService
                        .StakeFunction(stakingPairObj.poolId.toString(), stakeAmountRaw.toString())
                        .then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        console.log(result, "-------- result");
                        if (result.status) {
                            let stakedData = {
                                userAddress: this.dataService.metaDeatails.account,
                                poolId: stakingPairObj.poolId,
                                pairAddress: stakingPairObj.pair_address,
                                rewardAddress: stakingPairObj.rewardedaddress,
                                txId: result.result.transactionHash,
                                status: "Completed",
                                amount: stakingPairObj.toStakeAmount,
                            };
                            this.stakeApiCall(stakedData, "deposit/createDeposit");
                            this.toasterService.show(true, "Staked Successfully");
                        }
                        else {
                            this.dataService.isOverlay = false;
                            this.dataService.changeDetector.emit(true);
                        }
                    }))
                        .catch((err) => {
                        this.dataService.isOverlay = false;
                        this.dataService.changeDetector.emit(true);
                    });
                }
                else {
                    this.dataService.isOverlay = false;
                    this.dataService.changeDetector.emit(true);
                    this.toasterService.show(false, suc.message);
                }
            })
                .catch((err) => {
                this.dataService.isOverlay = false;
                this.dataService.changeDetector.emit(true);
                this.toasterService.show(false, err.error);
            });
        });
    }
    unstake(stakingPairObj) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dataService.isOverlay = true;
            this.dataService.changeDetector.emit(true);
            let unstakeAmountRaw = yield window.web3.utils.toWei(this.stakingPair.toUnstakeAmount.toString(), "ether");
            this.stakeService
                .UnstakeFunction(stakingPairObj.poolId, unstakeAmountRaw)
                .then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(result, "-------- result");
                // 0xe2f82ead275502035c5bf5b9fdd5a6f8b7b9aa5c99b0055593278bb4bfb1a881
                // 0xb46eb92e5bcb1c08351b77ffb7b061c5b0af7c425a799d1d7572da00759f2713
                if (result.status) {
                    console.log("result ---------->", result);
                    let stakedData = {
                        userAddress: this.dataService.metaDeatails.account,
                        poolId: stakingPairObj.poolId,
                        pairAddress: stakingPairObj.pair_address,
                        txId: result.result.transactionHash,
                        status: "Completed",
                        amount: stakingPairObj.toUnstakeAmount,
                    };
                    this.stakeApiCall(stakedData, "withdraw/createwithdraw");
                    let stakedDataToClaim = {
                        userAddress: this.dataService.metaDeatails.account,
                        poolId: stakingPairObj.poolId,
                        pairAddress: stakingPairObj.pair_address,
                        txId: result.result.transactionHash,
                        status: "Completed",
                        amount: stakingPairObj.reward_amount,
                        pair: stakingPairObj.pair,
                    };
                    this.stakeApiCall(stakedDataToClaim, "harvest/createHarvest");
                    this.toasterService.show(true, "Unstaked Successfully");
                }
                else {
                    this.dataService.isOverlay = false;
                    this.dataService.changeDetector.emit(true);
                }
            }))
                .catch((err) => {
                this.dataService.isOverlay = false;
                this.dataService.changeDetector.emit(true);
            });
        });
    }
    calimeReward(stakingPairObj) {
        this.dataService.isOverlay = true;
        this.dataService.changeDetector.emit(true);
        this.stakeService
            .HarvestFunction(stakingPairObj.poolId)
            .then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(result, "-------- result");
            // 0x66f0041e6fa2dffcc4f4bdc1dbb04ccd5ec1eac155f23f213751a99640d2fabe
            if (result.status) {
                let stakedData = {
                    userAddress: this.dataService.metaDeatails.account,
                    poolId: stakingPairObj.poolId,
                    pairAddress: stakingPairObj.pair_address,
                    txId: result.result.transactionHash,
                    status: "Completed",
                    amount: stakingPairObj.reward_amount,
                    pair: stakingPairObj.pair,
                };
                this.stakeApiCall(stakedData, "harvest/createHarvest");
                this.toasterService.show(true, "Claimed Successfully");
            }
            else {
                this.dataService.isOverlay = false;
                this.dataService.changeDetector.emit(true);
            }
        }))
            .catch((err) => {
            console.log("______________", "yes");
            this.dataService.isOverlay = false;
            this.dataService.changeDetector.emit(true);
        });
    }
    stakeApiCall(stakedData, apiUrl) {
        this.dataService.postRequest(apiUrl, stakedData).subscribe((suc) => {
            if (suc.status) {
                this.getPolledPairs();
                this.commonContractService.getGovernanceTokenBalance();
                this.dataService.isOverlay = false;
                this.dataService.changeDetector.emit(true);
            }
        });
    }
}
Staking2Component.ɵfac = function Staking2Component_Factory(t) { return new (t || Staking2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_services_metamask_stake_stake_service__WEBPACK_IMPORTED_MODULE_3__["StakeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_services_metamask_common_metamask_service__WEBPACK_IMPORTED_MODULE_4__["MetamaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_services_metamask_common_contract_common_contract_service__WEBPACK_IMPORTED_MODULE_5__["CommonContractService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_6__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
Staking2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: Staking2Component, selectors: [["app-staking2"]], inputs: { stakingPair: "stakingPair" }, outputs: { goBack: "goBack" }, decls: 60, vars: 21, consts: [[1, "row"], [1, "col-xl-8", "col-lg-12", "col-md-12", "col-12"], [1, "card", "cardborder", "stakingbox", "stackingboxinner"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "mr-2"], ["type", "button", 1, "text-decoration-none", "acircleLink", 3, "click"], ["src", "assets/images/right-arrow.png", 2, "transform", "rotate(180deg)"], [1, "stackboxTit"], [1, "d-flex", "align-items-center", "farmboxTit", "mb-4"], [1, ""], [1, "ml-auto", "text-primary"], ["name", "toStakeAmount", "placeholder", "0.0", "type", "number", 1, "form-control", 3, "ngModel", "disabled", "paste", "ngModelChange", "keyup"], ["class", "err-msg", 4, "ngIf"], ["name", "toUnstakeAmount", "placeholder", "0.0", "type", "number", 1, "form-control", 3, "ngModel", "disabled", "paste", "ngModelChange", "keyup"], [1, "d-flex", "farmboxTit", "mb-4"], [1, "text-center", "mb-2"], [1, "fs-12"], [1, "text-center"], ["type", "button", 1, "btn", "default-btn", "btn-block", 3, "disabled", "click"], [1, "col-xl-4", "col-lg-12", "col-md-12", "col-12"], [1, "card", "mycard", "graybgcard", "stakingbox", "stackingboxinner"], [1, "card-body", "p-2"], [1, "d-flex", "justify-content-center", "flex-column", "text-left"], [1, "farmsboxTxt"], [1, "farmboxTit", "rightsideVal"], [1, "farmboxTit"], [1, "farmsboxTxt", "mt-1"], [1, "farmboxTit", "fs-18", "mb-2"], [1, "err-msg"]], template: function Staking2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Staking2Component_Template_button_click_6_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "STAKE & FARM");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Total Staked (LP Tokens)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("paste", function Staking2Component_Template_input_paste_16_listener($event) { return $event.preventDefault(); })("ngModelChange", function Staking2Component_Template_input_ngModelChange_16_listener($event) { return ctx.stakingPair.toStakeAmount = $event; })("keyup", function Staking2Component_Template_input_keyup_16_listener() { return ctx.checkValidAmount("stake"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, Staking2Component_small_17_Template, 3, 4, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Total Withdraw (LP Tokens)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("paste", function Staking2Component_Template_input_paste_23_listener($event) { return $event.preventDefault(); })("ngModelChange", function Staking2Component_Template_input_ngModelChange_23_listener($event) { return ctx.stakingPair.toUnstakeAmount = $event; })("keyup", function Staking2Component_Template_input_keyup_23_listener() { return ctx.checkValidAmount("unstake"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, Staking2Component_small_24_Template, 3, 4, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](30, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Staking2Component_Template_button_click_35_listener() { return ctx.stake(ctx.stakingPair); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Stake");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Staking2Component_Template_button_click_37_listener() { return ctx.unstake(ctx.stakingPair); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Withdraw & Claim");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Staking2Component_Template_button_click_39_listener() { return ctx.calimeReward(ctx.stakingPair); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Claim");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " Available to Stake (LP Tokens) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.stakingPair.toStakeAmount)("disabled", !ctx.isStakeAvailable);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isTostakeAmountValid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.stakingPair.toUnstakeAmount)("disabled", !ctx.isUnstakeAvailable);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.istoUnstakeAmountValid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Reward Amount (", ctx.dataService.projectDetails.tokenName, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.stakingPair.reward_amount ? ctx.stakingPair.reward_amount : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](30, 18, 0, ctx.dataService.fixNumber));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("When you withdraw. the contract will automatically claim ", ctx.dataService.projectDetails.tokenName, " on your behalf! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.isStakeAvailable || !ctx.isTostakeAmountValid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.isUnstakeAvailable || !ctx.istoUnstakeAmountValid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.isClaimAvailable);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.stakingPair.avilableStakeAmount, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx.stakingPair.fromCurrency, " - ", ctx.stakingPair.toCurrency, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.dataService.projectDetails.tokenName, " Balance(Since Last Claim) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.dataService.metaDeatails.governanceTokenBalance, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.dataService.projectDetails.tokenName, " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DecimalPipe"]], styles: [".stackingboxinner[_ngcontent-%COMP%] {\n  padding: 15px;\n  height: calc(100% - 40px);\n}\n\n.stackboxTit[_ngcontent-%COMP%] {\n  color: #7a766a;\n  font-size: 22px;\n  font-weight: 700;\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n\n.rightsideVal[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n\n\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n\n\ninput[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n\n.err-msg[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGVmaS9zdGFraW5nMi9zdGFraW5nMi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtBQUdGOztBQURBLGdDQUFBOztBQUNBOztFQUVFLHdCQUFBO0VBQ0EsU0FBQTtBQUlGOztBQURBLFlBQUE7O0FBQ0E7RUFDRSwwQkFBQTtBQUlGOztBQURBO0VBQ0UsZUFBQTtFQUNBLFVBQUE7QUFJRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RlZmkvc3Rha2luZzIvc3Rha2luZzIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhY2tpbmdib3hpbm5lciB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNDBweCk7XG59XG4uc3RhY2tib3hUaXQge1xuICBjb2xvcjogIzdhNzY2YTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5yaWdodHNpZGVWYWwge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4vKiBDaHJvbWUsIFNhZmFyaSwgRWRnZSwgT3BlcmEgKi9cbmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cblxuLyogRmlyZWZveCAqL1xuaW5wdXRbdHlwZT1cIm51bWJlclwiXSB7XG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xufVxuXG4uZXJyLW1zZyB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6IHJlZDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Staking2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-staking2",
                templateUrl: "./staking2.component.html",
                styleUrls: ["./staking2.component.scss"],
            }]
    }], function () { return [{ type: src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }, { type: src_app_common_services_metamask_stake_stake_service__WEBPACK_IMPORTED_MODULE_3__["StakeService"] }, { type: src_app_common_services_metamask_common_metamask_service__WEBPACK_IMPORTED_MODULE_4__["MetamaskService"] }, { type: src_app_common_services_metamask_common_contract_common_contract_service__WEBPACK_IMPORTED_MODULE_5__["CommonContractService"] }, { type: src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_6__["ToasterService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { stakingPair: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], goBack: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/defi/staking2/staking2.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/defi/staking2/staking2.module.ts ***!
  \********************************************************/
/*! exports provided: Staking2Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Staking2Module", function() { return Staking2Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _staking2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./staking2.component */ "./src/app/pages/defi/staking2/staking2.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






class Staking2Module {
}
Staking2Module.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Staking2Module });
Staking2Module.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Staking2Module_Factory(t) { return new (t || Staking2Module)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Staking2Module, { declarations: [_staking2_component__WEBPACK_IMPORTED_MODULE_3__["Staking2Component"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_staking2_component__WEBPACK_IMPORTED_MODULE_3__["Staking2Component"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Staking2Module, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_staking2_component__WEBPACK_IMPORTED_MODULE_3__["Staking2Component"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                exports: [_staking2_component__WEBPACK_IMPORTED_MODULE_3__["Staking2Component"]],
                entryComponents: [_staking2_component__WEBPACK_IMPORTED_MODULE_3__["Staking2Component"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=default~defi-farm-farm-module~defi-staking-staking-module.js.map