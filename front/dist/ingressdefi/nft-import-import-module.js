(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nft-import-import-module"],{

/***/ "./src/app/pages/nft/import/import.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/nft/import/import.component.ts ***!
  \******************************************************/
/*! exports provided: ImportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportComponent", function() { return ImportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/services/api/data.service */ "./src/app/common/services/api/data.service.ts");
/* harmony import */ var src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/toaster/toaster.service */ "./src/app/common/toaster/toaster.service.ts");
/* harmony import */ var src_app_common_services_metamask_nft_nft_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/services/metamask/nft/nft.service */ "./src/app/common/services/metamask/nft/nft.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











const _c0 = function (a0) { return { "is-invalid": a0 }; };
function ImportComponent_select_15_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ImportComponent_select_15_Template_select_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const net_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.onChangeNetwork(net_r5.currencyName); })("ngModelChange", function ImportComponent_select_15_Template_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.itemObj.network = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "select network type");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const net_r5 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.itemObj.network)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, ctx_r0.submitted && ctx_r0.f.network.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", net_r5.networkName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](net_r5.networkName);
} }
function ImportComponent_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Network Type is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ImportComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ImportComponent_div_16_div_1_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.f.network.errors.required);
} }
function ImportComponent_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Contract Address is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ImportComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ImportComponent_div_23_div_1_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.f.contractaddr.errors.required);
} }
function ImportComponent_button_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ImportComponent_label_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ImportComponent {
    constructor(activatedRoute, route, service, toasterService, nftService, formBuilder, modalService) {
        this.activatedRoute = activatedRoute;
        this.route = route;
        this.service = service;
        this.toasterService = toasterService;
        this.nftService = nftService;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.itemObj = {
            item_image: ''
        };
        this.submitted = false;
        this.msubmitted = false;
        this.upload = false;
        this.fileerr = false;
        this.tabsingle = true;
        this.saletype = 'fixed';
    }
    ngOnInit() {
        this.service.isOverlay = false;
        this.co_form = this.formBuilder.group({
            network: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            contractaddr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.itemObj.pagekey = this.activatedRoute.snapshot.queryParamMap.get('id');
        var collectionId = decodeURIComponent(this.itemObj.pagekey);
        this.pageKey = collectionId;
        this.getNetwork();
    }
    get f() { return this.co_form.controls; }
    onSubmit() {
        this.submitted = true;
        console.log('form submited', this.co_form.value);
        if (this.co_form.invalid) {
            this.service.isOverlay = false;
            return;
        }
        var account = this.service.metaDeatails.account;
        this.msubmitted = true;
        this.service.isOverlay = true;
        let datas = this.co_form.value;
        console.log(datas, 'datas');
        let addrr = (datas.contractaddr).trim();
        if ((addrr).length != 42) {
            this.submitted = false;
            this.msubmitted = false;
            this.service.isOverlay = false;
            return this.toasterService.show(false, "Invalid contract address");
        }
        let obj = {
            "account": account,
            "network": datas.network,
            "token_currency": this.itemObj.currency,
            "contract": addrr,
        };
        var that = this;
        this.service.postRequest('users/importcontract', obj).subscribe(function (reqData) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(reqData, 'reqData');
                if (reqData.status) {
                    var contractId = reqData.contractId;
                    var ABI = JSON.parse(reqData.data);
                    var userContract = new window.web3.eth.Contract(ABI, datas.contractaddr);
                    yield userContract.methods.name().call((err, res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        console.log(err, 'method name error');
                        let collectionObj = {
                            "name": res,
                        };
                        console.log(collectionObj, 'method name collectionObj');
                        that.service.postRequest('users/createCollection', collectionObj).subscribe(function (rData) {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                console.log(rData, 'rData');
                                if (rData.status) {
                                    that.onProcess(ABI, datas.contractaddr, rData.collectionId, contractId, that.itemObj.currency, datas.network);
                                }
                                else {
                                    that.msubmitted = false;
                                    that.service.isOverlay = false;
                                    that.toasterService.show(false, rData.msg);
                                }
                            });
                        });
                    }));
                }
                else {
                    this.msubmitted = false;
                    this.service.isOverlay = false;
                    this.toasterService.show(false, reqData.msg);
                }
            });
        });
    }
    onProcess(ABI, addr, collectionId, contractId, currency, network) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var account = this.service.metaDeatails.account;
            let verify = yield this.nftService.checkBal(addr, ABI, account);
            console.log("verify", verify);
            var that = this;
            if (verify.status && verify.result > 0) {
                var importstatus = false;
                for (let i = 0; i < verify.result; i++) {
                    console.log("Block statement execution no." + i);
                    let tokenOfOwner = yield that.nftService.tokenOfOwnerByIndex(addr, ABI, account, i.toString());
                    if (tokenOfOwner.status) {
                        console.log(tokenOfOwner, 'tokenOfOwner');
                        let tokenURI = yield that.nftService.tokenURI(addr, ABI, (tokenOfOwner.result).toString());
                        console.log(tokenURI, 'tokenURI');
                        console.log("tokenURI.statustokenURI.statustokenURI.status", tokenURI.status);
                        if (tokenURI.status) {
                            let params = {
                                "tokenuri": tokenURI.result,
                                "account": account,
                                "contract": addr,
                                "collectionId": collectionId,
                                "currency": currency,
                                "nftid": tokenOfOwner.result,
                                "network": network,
                                "contractId": contractId,
                            };
                            console.log(params, 'params');
                            yield that.service.postRequest('users/importobjectdata', params).subscribe((reqData) => {
                                if (reqData.status) {
                                    that.toasterService.show(true, "Successfully imported");
                                    importstatus = true;
                                    that.route.navigate(['user']);
                                }
                                else {
                                    that.submitted = false;
                                    that.msubmitted = false;
                                    that.service.isOverlay = false;
                                }
                            });
                        }
                        else {
                            that.submitted = false;
                            that.msubmitted = false;
                            that.service.isOverlay = false;
                            that.toasterService.show(false, "Sorry! Unable to get Token URI");
                            that.route.navigate(['user']);
                        }
                    }
                    else {
                        that.submitted = false;
                        that.msubmitted = false;
                        that.service.isOverlay = false;
                        that.toasterService.show(false, tokenOfOwner.message);
                    }
                }
                console.log(importstatus, 'importstatus');
                if (importstatus) {
                    that.submitted = false;
                    that.msubmitted = false;
                    that.service.isOverlay = false;
                    that.route.navigateByUrl('user');
                    that.service.isOverlay = false;
                    that.toasterService.show(true, 'Your NFT details imported Success');
                    that.route.navigateByUrl('user');
                }
                else {
                    that.submitted = false;
                    that.msubmitted = false;
                    that.service.isOverlay = false;
                    that.route.navigateByUrl('user');
                    that.service.isOverlay = false;
                    that.toasterService.show(false, "Sorry failed to import your nft details");
                    that.route.navigate(['user']);
                }
            }
            else {
                that.msubmitted = false;
                that.service.isOverlay = false;
                that.toasterService.show(false, "Sorry No nft available to your account");
                that.route.navigateByUrl('/user');
            }
        });
    }
    onChangeNetwork(curr) {
        this.itemObj.currency = curr;
    }
    getNetwork() {
        this.service.getRequest('users/getNetworks').subscribe((reqData) => {
            if (reqData.status) {
                this.network = reqData.data;
            }
        });
    }
}
ImportComponent.ɵfac = function ImportComponent_Factory(t) { return new (t || ImportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_services_metamask_nft_nft_service__WEBPACK_IMPORTED_MODULE_6__["NftService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"])); };
ImportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ImportComponent, selectors: [["app-import"]], decls: 27, vars: 10, consts: [[1, "digital-art-sec"], [1, "middle-section"], [1, "container", "tabpages-cnt"], [1, "row"], [1, "col-lg-12"], [1, "section-title", "text-left"], [3, "formGroup", "ngSubmit"], [1, "col-md-12", "col-sm-12", "col-lg-12", "col-xl-12"], [1, "form-group", "mt-4"], ["for", "network", 1, "pb-0", "font-16", "text-black", "fontweight-400", "mb-2"], [1, "text-danger"], ["class", "form-control", "formControlName", "network", "required", "", 3, "ngModel", "ngClass", "change", "ngModelChange", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "name", 1, "pb-0", "font-16", "text-black", "fontweight-400", "mb-2"], ["type", "text", "formControlName", "contractaddr", "placeholder", "0x...sdf3", "required", "", 1, "form-control", "input-sec", "font-16", "fontweight-400", 3, "ngModel", "ngClass", "ngModelChange"], [1, "text-left"], ["class", "btn default-btn mt-4", "data-toggle", "modal", 4, "ngIf"], ["class", "btn default-btn mt-4", 4, "ngIf"], ["formControlName", "network", "required", "", 1, "form-control", 3, "ngModel", "ngClass", "change", "ngModelChange"], ["value", ""], [3, "value"], [1, "invalid-feedback"], [4, "ngIf"], ["data-toggle", "modal", 1, "btn", "default-btn", "mt-4"], [1, "btn", "default-btn", "mt-4"]], template: function ImportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Create New Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ImportComponent_Template_form_ngSubmit_7_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Choose Type of Network ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ImportComponent_select_15_Template, 5, 6, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ImportComponent_div_16_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Contract Address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ImportComponent_Template_input_ngModelChange_22_listener($event) { return ctx.itemObj.contractaddr = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ImportComponent_div_23_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, ImportComponent_button_25_Template, 2, 0, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, ImportComponent_label_26_Template, 2, 0, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.co_form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.network);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.f.network.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.itemObj.contractaddr)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, ctx.submitted && ctx.f.contractaddr.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.f.contractaddr.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.msubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.msubmitted);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25mdC9pbXBvcnQvaW1wb3J0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ImportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-import',
                templateUrl: './import.component.html',
                styleUrls: ['./import.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }, { type: src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"] }, { type: src_app_common_services_metamask_nft_nft_service__WEBPACK_IMPORTED_MODULE_6__["NftService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/nft/import/import.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/nft/import/import.module.ts ***!
  \***************************************************/
/*! exports provided: ImportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportModule", function() { return ImportModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _import_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./import.component */ "./src/app/pages/nft/import/import.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_bootstrap_tooltip___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/tooltip/ */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
/* harmony import */ var src_app_common_loader_loader_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/loader/loader.module */ "./src/app/common/loader/loader.module.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");












const routes = [
    {
        path: "",
        component: _import_component__WEBPACK_IMPORTED_MODULE_3__["ImportComponent"],
    },
];
class ImportModule {
}
ImportModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ImportModule });
ImportModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ImportModule_Factory(t) { return new (t || ImportModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            src_app_common_loader_loader_module__WEBPACK_IMPORTED_MODULE_6__["LoaderModule"],
            ngx_bootstrap_tooltip___WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ImportModule, { declarations: [_import_component__WEBPACK_IMPORTED_MODULE_3__["ImportComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], src_app_common_loader_loader_module__WEBPACK_IMPORTED_MODULE_6__["LoaderModule"], ngx_bootstrap_tooltip___WEBPACK_IMPORTED_MODULE_5__["TooltipModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImportModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_import_component__WEBPACK_IMPORTED_MODULE_3__["ImportComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                    src_app_common_loader_loader_module__WEBPACK_IMPORTED_MODULE_6__["LoaderModule"],
                    ngx_bootstrap_tooltip___WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
                    ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(),
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=nft-import-import-module.js.map