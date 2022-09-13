(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nft-items-items-module"],{

/***/ "./src/app/pages/nft/items/items.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/nft/items/items.component.ts ***!
  \****************************************************/
/*! exports provided: ItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsComponent", function() { return ItemsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_assets_files_contract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/files/contract */ "./src/assets/files/contract.ts");
/* harmony import */ var src_assets_files_nft_abi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/assets/files/nft_abi */ "./src/assets/files/nft_abi.ts");
/* harmony import */ var src_assets_files_127cre_abi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/files/127cre_abi */ "./src/assets/files/127cre_abi.js");
/* harmony import */ var src_assets_files_5511cre_abi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/assets/files/5511cre_abi */ "./src/assets/files/5511cre_abi.js");
/* harmony import */ var src_assets_files_20cre_abi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/assets/files/20cre_abi */ "./src/assets/files/20cre_abi.js");
/* harmony import */ var src_assets_files_currencyType__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/assets/files/currencyType */ "./src/assets/files/currencyType.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/common/services/api/data.service */ "./src/app/common/services/api/data.service.ts");
/* harmony import */ var src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/common/toaster/toaster.service */ "./src/app/common/toaster/toaster.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var src_app_common_services_metamask_nft_nft_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/common/services/metamask/nft/nft.service */ "./src/app/common/services/metamask/nft/nft.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/timepicker */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/timepicker/fesm2015/ngx-bootstrap-timepicker.js");


















function ItemsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Click here");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " import your NFT's");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Create New Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ItemsComponent_div_8_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.myFunc(ctx_r6.pageKey); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Import Contract");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/import");
} }
function ItemsComponent_div_9_div_1_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Sold");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ItemsComponent_div_9_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", item_r9.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ItemsComponent_div_9_div_1_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ItemsComponent_div_9_div_1_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ItemsComponent_div_9_div_1_div_21_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r16.saleItemnew(item_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "sale now");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ItemsComponent_div_9_div_1_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ItemsComponent_div_9_div_1_div_22_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r19.saleItemnew(item_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "sale now");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ItemsComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ItemsComponent_div_9_div_1_p_10_Template, 2, 0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ItemsComponent_div_9_div_1_div_11_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ItemsComponent_div_9_div_1_div_12_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h3", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ItemsComponent_div_9_div_1_div_21_Template, 3, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ItemsComponent_div_9_div_1_div_22_Template, 3, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r9.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r9.salestatus == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r9.type == "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r9.type != "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", item_r9.price, " ", item_r9.tocurrency, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r9.admin_mint != "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r9.type != "add");
} }
function ItemsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ItemsComponent_div_9_div_1_Template, 23, 9, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.items);
} }
function ItemsComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ItemsComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.loadmore(ctx_r22.skip); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Load more");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ItemsComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No Item Created. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ItemsComponent_ng_template_13_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Bids placed during an auction cannot be withdrawn. By placing a bid you indicate that you have read and agree to the Auction Terms of Use");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Current Bid");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "0.1 ETH (~$242)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ItemsComponent_ng_template_13_h5_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h5", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "OLIVER CROMWELL - AI \"AFTER");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ItemsComponent_ng_template_13_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Total Bit Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "0 BNB");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Your Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h3", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "0 BNB");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ItemsComponent_ng_template_13_div_31_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Type of Sale is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ItemsComponent_ng_template_13_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ItemsComponent_ng_template_13_div_31_div_1_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r28.errors.required);
} }
function ItemsComponent_ng_template_13_div_32_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Address is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ItemsComponent_ng_template_13_div_32_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ItemsComponent_ng_template_13_div_32_div_8_div_1_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r51.errors.required);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function ItemsComponent_ng_template_13_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "To User Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 100, 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ItemsComponent_ng_template_13_div_32_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r54.sItemObj.address = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ItemsComponent_ng_template_13_div_32_div_8_Template, 2, 1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, _r24.submitted && _r51.invalid))("ngModel", ctx_r30.sItemObj.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r24.submitted && _r51.invalid);
} }
function ItemsComponent_ng_template_13_option_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const curr_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", curr_r56.currencyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](curr_r56.currencyName);
} }
function ItemsComponent_ng_template_13_div_42_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Type of Sale is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ItemsComponent_ng_template_13_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ItemsComponent_ng_template_13_div_42_div_1_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r31.errors.required);
} }
function ItemsComponent_ng_template_13_div_51_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "NFT Id is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ItemsComponent_ng_template_13_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ItemsComponent_ng_template_13_div_51_div_1_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r34.errors.required);
} }
function ItemsComponent_ng_template_13_option_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const curr_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", curr_r59.currencyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](curr_r59.currencyName);
} }
function ItemsComponent_ng_template_13_div_61_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Choose Buy Token Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ItemsComponent_ng_template_13_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ItemsComponent_ng_template_13_div_61_div_1_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r36.errors.required);
} }
function ItemsComponent_ng_template_13_label_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Buy Price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ItemsComponent_ng_template_13_label_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Reserved Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ItemsComponent_ng_template_13_div_69_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Price is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ItemsComponent_ng_template_13_div_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ItemsComponent_ng_template_13_div_69_div_1_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r41.errors.required);
} }
function ItemsComponent_ng_template_13_div_70_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Start Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 104, 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ItemsComponent_ng_template_13_div_70_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r63.selectDate($event, "from"); })("ngModelChange", function ItemsComponent_ng_template_13_div_70_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r65.selectedFromDate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "timepicker", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ItemsComponent_ng_template_13_div_70_Template_timepicker_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r66.starttime = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, _r24.submitted && _r62.invalid))("minDate", ctx_r43.startminDate)("maxDate", ctx_r43.startmaxDate)("ngModel", ctx_r43.selectedFromDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r43.starttime);
} }
function ItemsComponent_ng_template_13_div_90_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Supply is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ItemsComponent_ng_template_13_div_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ItemsComponent_ng_template_13_div_90_div_1_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r45.errors.required);
} }
function ItemsComponent_ng_template_13_div_91_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Supply is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ItemsComponent_ng_template_13_div_91_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ItemsComponent_ng_template_13_div_91_div_10_div_1_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r68.errors.required);
} }
function ItemsComponent_ng_template_13_div_91_Template(rf, ctx) { if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "You must bid at least ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "0.11 BNB (~$266) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 109, 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ItemsComponent_ng_template_13_div_91_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r72); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r71.sItemObj.bid = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ItemsComponent_ng_template_13_div_91_div_10_Template, 2, 1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, _r24.submitted && _r68.invalid))("ngModel", ctx_r47.sItemObj.bid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r24.submitted && _r68.invalid);
} }
function ItemsComponent_ng_template_13_button_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Submit Bid");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ItemsComponent_ng_template_13_label_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c1 = function () { return { isAnimated: true, dateInputFormat: "YYYY-MM-DD" }; };
function ItemsComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ItemsComponent_ng_template_13_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r74); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r73.modalRef == null ? null : ctx_r73.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Sale Your Creation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "form", 46, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ItemsComponent_ng_template_13_Template_form_ngSubmit_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r74); const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _r24.form.valid && ctx_r75.onModalSubmit(_r24.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ItemsComponent_ng_template_13_div_14_Template, 9, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ItemsComponent_ng_template_13_h5_15_Template, 2, 0, "h5", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ItemsComponent_ng_template_13_div_16_Template, 15, 0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Choose Type of Sale ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "select", 56, 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ItemsComponent_ng_template_13_Template_select_change_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r74); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r76.saleType($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Reserved Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Private Sale");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Auction Bid");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, ItemsComponent_ng_template_13_div_31_Template, 2, 1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, ItemsComponent_ng_template_13_div_32_Template, 9, 5, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Sell Token");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "select", 64, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ItemsComponent_ng_template_13_Template_select_ngModelChange_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r74); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r77.sItemObj.currency = $event; })("change", function ItemsComponent_ng_template_13_Template_select_change_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r74); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r78.changeCurr($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Select Currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, ItemsComponent_ng_template_13_option_41_Template, 2, 2, "option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, ItemsComponent_ng_template_13_div_42_Template, 2, 1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "NFT Id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "input", 69, 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ItemsComponent_ng_template_13_Template_input_ngModelChange_49_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r74); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r79.sItemObj.nftid = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, ItemsComponent_ng_template_13_div_51_Template, 2, 1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Buy Token");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "select", 71, 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ItemsComponent_ng_template_13_Template_select_ngModelChange_56_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r74); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r80.sItemObj.tocurrency = $event; })("change", function ItemsComponent_ng_template_13_Template_select_change_56_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r74); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r81.changeBuyCurr($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Select Currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, ItemsComponent_ng_template_13_option_60_Template, 2, 2, "option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](61, ItemsComponent_ng_template_13_div_61_Template, 2, 1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, ItemsComponent_ng_template_13_label_63_Template, 4, 0, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, ItemsComponent_ng_template_13_label_65_Template, 2, 0, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "input", 74, 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ItemsComponent_ng_template_13_Template_input_ngModelChange_67_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r74); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r82.sItemObj.price = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, ItemsComponent_ng_template_13_div_69_Template, 2, 1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](70, ItemsComponent_ng_template_13_div_70_Template, 9, 7, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Expiry Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "input", 77, 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ItemsComponent_ng_template_13_Template_input_ngModelChange_77_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r74); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r83.selectDate($event, "end"); })("ngModelChange", function ItemsComponent_ng_template_13_Template_input_ngModelChange_77_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r74); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r84.selectedEndDate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "timepicker", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ItemsComponent_ng_template_13_Template_timepicker_ngModelChange_79_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r74); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r85.endtime = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Supply ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "The number of copies that can be minted. No gas cost to you! Quantities above one coming soon. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "input", 81, 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ItemsComponent_ng_template_13_Template_input_ngModelChange_88_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r74); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r86.sItemObj.supply = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](90, ItemsComponent_ng_template_13_div_90_Template, 2, 1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](91, ItemsComponent_ng_template_13_div_91_Template, 11, 5, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](93, ItemsComponent_ng_template_13_button_93_Template, 2, 0, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](94, ItemsComponent_ng_template_13_label_94_Template, 2, 0, "label", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](24);
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](38);
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](50);
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](57);
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](68);
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](78);
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](89);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.saletype == "auction");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.saletype == "auction");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.saletype == "auction");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r24.submitted && _r28.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.saletype == "private");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r5.sItemObj.currency);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.currencies);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r24.submitted && _r31.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](33, _c0, _r24.submitted && _r34.invalid))("ngModel", ctx_r5.sItemObj.nftid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r24.submitted && _r34.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r5.sItemObj.tocurrency);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.currencies);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r24.submitted && _r36.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.saletype != "fixed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.saletype == "fixed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](35, _c0, _r24.submitted && _r41.invalid))("ngModel", ctx_r5.sItemObj.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r24.submitted && _r41.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.saletype == "auction");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minDate", ctx_r5.endminDate)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](37, _c0, _r24.submitted && _r44.invalid))("maxDate", ctx_r5.endmaxDate)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](39, _c1))("ngModel", ctx_r5.selectedEndDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r5.endtime);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r5.sItem.objtype)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](40, _c0, _r24.submitted && _r45.invalid))("ngModel", ctx_r5.sItemObj.supply);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r24.submitted && _r45.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.saletype == "auction");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r5.msubmitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.msubmitted);
} }
class ItemsComponent {
    constructor(activatedRoute, route, service, toasterService, modalService, nftService) {
        this.activatedRoute = activatedRoute;
        this.route = route;
        this.service = service;
        this.toasterService = toasterService;
        this.modalService = modalService;
        this.nftService = nftService;
        this.bsValue = new Date();
        this.maxDate = new Date();
        this.minDate = new Date();
        this.starttime = new Date();
        this.endtime = new Date();
        this.startDate = new Date();
        this.endDate = new Date();
        this.apprToken = {};
        this.apprTokenId = {};
        this.apprTokenABI = {};
        this.token = localStorage.getItem("Game-Token");
        this.itemObj = {};
        this.items = [];
        this.sItem = {};
        this.sItemObj = {};
        this.limit = 6;
        this.skip = 6;
        this.msubmitted = false;
        this.saletype = 'fixed';
        this.selectcurr = "";
        this.buycurr = "";
        this.buytokenaddr = "";
        this.publishData = {};
        this.submitted = false;
    }
    ngOnInit() {
        this.endminDate = new Date();
        this.endmaxDate = new Date();
        this.endminDate.setDate(this.endminDate.getDate());
        this.endmaxDate.setDate(this.endmaxDate.getDate() + 7);
        this.itemObj.pagekey = this.activatedRoute.snapshot.queryParamMap.get('id');
        var collectionId = decodeURIComponent(this.itemObj.pagekey);
        this.pageKey = collectionId;
        this.getItems(collectionId);
        this.getCurrency();
    }
    openModal(template) {
        if (this.sItem.item_name != '' && this.sItem.description != '' && this.sItem.item_image != '') {
            var modRef = true;
        }
        else {
            var modRef = false;
        }
        if (modRef) {
            this.modalRef = this.modalService.show(template);
        }
    }
    getItems(collectionId) {
        if (collectionId) {
            this.service.postRequest("collection/getItems", { id: collectionId, skip: 0, limit: this.limit }).subscribe((suc) => {
                let responseData = suc;
                if (responseData.status) {
                    this.items = responseData.data;
                }
            });
        }
        else {
            this.toasterService.show(false, 'Something went wrong');
            this.route.navigate(['collection']);
        }
    }
    saleItem(itemId) {
        console.log(itemId);
        if (itemId) {
            this.service.postRequest("collection/getItem", { id: itemId }).subscribe((suc) => {
                let responseData = suc;
                if (responseData.status) {
                    this.sItem = responseData.data;
                    console.log(this.sItem, 'getItem');
                    console.log(responseData.data, 'responseData');
                }
            });
        }
        else {
            this.toasterService.show(false, 'Something went wrong');
            this.route.navigate(['collection']);
        }
    }
    getCurrency() {
        this.service.postRequest('collection/getNftCurrency', {}).subscribe((success) => {
            let reponse = success;
            if (reponse.status) {
                this.currencies = reponse.data;
                console.log("this.currenciesthis.currenciesthis.currencies", this.currencies);
            }
            else {
                this.toasterService.show(false, reponse.msg);
            }
        });
    }
    myFunc(cid) {
        this.route.navigate(['/create-item'], { queryParams: { id: encodeURIComponent(cid) } });
    }
    loadmore(skip) {
        this.service.postRequest('collection/getItems', { id: this.pageKey, skip: this.skip, limit: this.limit }).subscribe((res) => {
            this.items.push(...res.data);
            this.skip = this.skip + this.limit;
        });
    }
    saleType(val) {
        this.saletype = val;
        if (val == 'auction') {
            this.startminDate = new Date();
            this.startmaxDate = new Date();
            this.startminDate.setDate(this.startminDate.getDate());
            this.startmaxDate.setDate(this.startmaxDate.getDate() + 30);
            this.endminDate.setDate(this.endminDate.getDate() + 7);
            this.endmaxDate.setDate(this.endminDate.getDate() + 7);
        }
        else {
            this.endminDate = new Date();
            this.endmaxDate = new Date();
            this.endminDate.setDate(this.endminDate.getDate());
            this.endmaxDate.setDate(this.endmaxDate.getDate() + 7);
        }
    }
    changeCurr(val) {
        this.selectcurr = val;
    }
    changeBuyCurr(val) {
        this.buycurr = val;
    }
    selectDate(val, opt) {
        console.log('selected', val);
        if (opt == 'from') {
            this.selectedFromDate = val;
            this.endminDate = new Date();
            this.endmaxDate = new Date();
            this.endmaxDate.setDate(val.getDate() + 1);
            this.endmaxDate.setDate(val.getDate() + 7);
        }
        else {
            this.selectedEndDate = val;
            this.startminDate = new Date();
            this.startmaxDate = new Date();
            this.startminDate.setDate(this.selectedEndDate.getDate() - 7);
            this.startmaxDate.setDate(this.selectedEndDate.getDate() - 1);
        }
    }
    onModalSubmit(values) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log("Sample[0]Sample[0]Sample[0]",Sample[0])
            this.submitted = true;
            this.msubmitted = true;
            let datas = values;
            var buycurr = 'WBNB'; //datas.buycurrency;
            var sellcurr = 'ERC721'; //this.sItem.currency;
            console.log(this.sItem, 'values');
            let account = this.service.metaDeatails.account;
            if (!account) {
                this.toasterService.show(false, 'Please login with metamask');
                return;
            }
            let itemArr = {
                'bid': (datas.bid ? datas.bid : ""),
                'supply': (this.sItem.objtype != 'single' && this.sItem.objtype != '' && datas.supply != undefined && datas.supply != "") ? datas.supply : 1,
                'toprivate': (datas.address ? datas.address : ""),
                'saletype': this.saletype,
                'currency': this.sItem.currency,
                'tocurrency': buycurr,
                'sellnftid': this.sItem.selltokenid,
                'sellnftaddr': this.sItem.selltoken,
                'sellassettype': src_assets_files_currencyType__WEBPACK_IMPORTED_MODULE_7__["Sample"][0][sellcurr].astype,
                'buytokenid': src_assets_files_currencyType__WEBPACK_IMPORTED_MODULE_7__["Sample"][0][buycurr].tokenid,
                'buytokenadr': src_assets_files_currencyType__WEBPACK_IMPORTED_MODULE_7__["Sample"][0][buycurr].address,
                'buyassettype': src_assets_files_currencyType__WEBPACK_IMPORTED_MODULE_7__["Sample"][0][buycurr].astype,
                'price': datas.price,
                'itemId': this.sItem.itemId,
                'startdate': datas.sdate,
                'starttime': datas.starttime,
                'enddate': datas.endate,
                'endtime': datas.endtime,
            };
            /* console.log(itemArr, 'itemArr');
             return false;*/
            this.publishData.saletype = this.saletype;
            this.publishData.itemid = this.sItem.itemId;
            this.publishData.edition = 1 /*datas.edition*/;
            this.publishData.house = this.sItem.house /*creator id*/;
            this.publishData.rent = this.sItem.rent /*owner id*/;
            this.service.filePostRequest('collection/updateItem', itemArr).subscribe((reqData) => {
                if (reqData.status) {
                    console.log('reqData', this.saletype);
                    if (this.saletype == 'private') {
                        this.privatesale(datas.address, this.sItem.itemId);
                    }
                    else if (this.saletype == 'fixed') {
                        this.fixedSale(this.sItem.itemId);
                    }
                    else {
                        this.auctionSale(this.sItem.itemId);
                    }
                    this.modalRef.hide();
                }
                else {
                    this.toasterService.show(false, reqData.msg);
                }
                this.route.navigate(['collection']);
            });
        });
    }
    privatesale(address, itemId) {
        if (address && itemId) {
            var Data = { 'address': address };
            this.service.postRequest('checkuser', Data).subscribe((result) => {
                if (result.status) {
                    this.service.postRequest("collection/getItem", { id: itemId }).subscribe((suc) => {
                        if (!suc.status) {
                            return this.toasterService.show(false, 'Item not found.');
                        }
                        let itemData = suc.data;
                        console.log(itemData, 'itemDataaaaa');
                        (() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            try {
                                if (itemData.imported == 1) {
                                    let cobj = {
                                        "contractid": itemData.contractId,
                                    };
                                    this.publishData.imported = 1;
                                    this.publishData.contractId = itemData.contractId;
                                    yield this.service.postRequest('users/getContract', cobj).subscribe((reqData) => {
                                        if (reqData.status) {
                                            let cdata = reqData.data;
                                            console.log(cdata.contract, 'cdata.contract');
                                            console.log(cdata.abi, 'cdata.abi');
                                            this.apprToken = cdata.contract;
                                            this.apprTokenABI = cdata.abi;
                                            this.contractPrivate(this.apprToken, this.apprTokenABI, itemData);
                                        }
                                    });
                                }
                                else {
                                    this.publishData.imported = 0;
                                    this.publishData.contractId = "";
                                    let account = this.service.metaDeatails.account;
                                    if (!account) {
                                        return this.toasterService.show(false, "Please connect metamask");
                                    }
                                    let currency = itemData.currency;
                                    this.apprToken = src_assets_files_currencyType__WEBPACK_IMPORTED_MODULE_7__["Sample"][0][currency].address;
                                    this.apprTokenId = src_assets_files_currencyType__WEBPACK_IMPORTED_MODULE_7__["Sample"][0][currency].tokenid;
                                    if (currency == 'ERC721') {
                                        this.apprTokenABI = src_assets_files_127cre_abi__WEBPACK_IMPORTED_MODULE_4__["NFT_721_Token_ABI"];
                                    }
                                    else if (currency == 'WBNB') {
                                        this.apprTokenABI = src_assets_files_5511cre_abi__WEBPACK_IMPORTED_MODULE_5__["NFT_1155_Token_ABI"];
                                    }
                                    else if (currency == 'ERC20') {
                                        this.apprTokenABI = src_assets_files_20cre_abi__WEBPACK_IMPORTED_MODULE_6__["NFT_20_Token_ABI"];
                                    }
                                    this.contractPrivate(this.apprToken, this.apprTokenABI, itemData);
                                }
                            }
                            catch (error) {
                                this.toasterService.show(false, error.message);
                            }
                        }))();
                    });
                }
                else {
                    this.toasterService.show(false, 'No Such User Found');
                    return;
                }
            });
        }
    }
    /* fixedSale(itemId) {
       if (itemId) {
         this.service.postRequest("collection/getItem", { id: itemId }).subscribe((suc: any) => {
           if (!suc.status) {
             return this.toasterService.show(false, 'Item not found.');
           }
           let itemData = suc.data;
           console.log(itemData, 'itemDataaaaa1');
           (async() => {
               try {
   
                   let account = this.service.metaDeatails.account;
                   if (!account) {
                     return this.toasterService.show(false, "Please connect metamask");
                   }
                   
                   if (itemData.imported == 1) {
                     let cobj = {
                       "contractid": itemData.contractId,
                     }
                     this.publishData.imported = 1;
                     this.publishData.contractId = itemData.contractId;
                     await this.service.postRequest('users/getContract', cobj).subscribe((reqData: any) => {
                       if (reqData.status) {
                         let cdata = reqData.data;
                         console.log(cdata.contract, 'cdata.contract');
                         console.log(cdata.abi, 'cdata.abi');
                         this.apprToken = cdata.contract;
                         this.apprTokenABI = cdata.abi;
                         this.contractFixed(this.apprToken, this.apprTokenABI, itemData);
                       }
                     })
                   }
                   else {
   
   
   
                       this.publishData.imported = 0;
                       this.publishData.contractId = "";
                       let currency = itemData.currency;
                       currency = 'ERC721';
                       this.apprToken = Sample[0][currency].address;
                       this.apprTokenId = Sample[0][currency].tokenid;
   
   
   
                       if (currency == 'ERC721') {
                         this.apprTokenABI = NFT_721_Token_ABI;
                       }
                       else if(currency == 'WBNB') {
                         this.apprTokenABI = NFT_1155_Token_ABI;
                       }
                       else if(currency == 'ERC20') {
                         this.apprTokenABI = NFT_20_Token_ABI;
                       }
   
                       this.contractFixed(this.apprToken, this.apprTokenABI, itemData);
                   }
               }
               catch (error) {
                   this.toasterService.show(false, error.message);
               }
          }) ()
         });
       }
     }*/
    fixedSale(itemId) {
        if (itemId) {
            this.service.postRequest("collection/getItem", { id: itemId }).subscribe((suc) => {
                if (!suc.status) {
                    return this.toasterService.show(false, 'Item not found.');
                }
                let itemData = suc.data;
                (() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    try {
                        let account = this.service.metaDeatails.account;
                        if (!account) {
                            return this.toasterService.show(false, "Please connect metamask");
                        }
                        let token = src_assets_files_contract__WEBPACK_IMPORTED_MODULE_2__["ContractDetails"].nft_exchange_token;
                        let token_abi = src_assets_files_nft_abi__WEBPACK_IMPORTED_MODULE_3__["NftExchangeAbi"];
                        let currency = itemData.currency;
                        this.apprToken = src_assets_files_currencyType__WEBPACK_IMPORTED_MODULE_7__["Sample"][0][currency].address;
                        this.apprTokenId = src_assets_files_currencyType__WEBPACK_IMPORTED_MODULE_7__["Sample"][0][currency].tokenid;
                        if (currency == 'ERC721') {
                            this.apprTokenABI = src_assets_files_127cre_abi__WEBPACK_IMPORTED_MODULE_4__["NFT_721_Token_ABI"];
                        }
                        else if (currency == 'WBNB') {
                            this.apprTokenABI = src_assets_files_5511cre_abi__WEBPACK_IMPORTED_MODULE_5__["NFT_1155_Token_ABI"];
                        }
                        else if (currency == 'ERC20') {
                            this.apprTokenABI = src_assets_files_20cre_abi__WEBPACK_IMPORTED_MODULE_6__["NFT_20_Token_ABI"];
                        }
                        let verify = yield this.nftService.verifyOwner(this.apprToken, this.apprTokenABI, itemData.selltokenid);
                        if (verify.result != account) {
                            this.toasterService.show(false, 'Invalid Owner Address, Please Verify Metamask Address');
                            return;
                        }
                        let approve = yield this.nftService.approveSellFun(this.apprToken, this.apprTokenABI, itemData.selltokenid, account);
                        if (approve.result) {
                            window.web3 = window.web3.currentProvider;
                            window.web3 = new window.Web3(window.ethereum);
                            let exchangeContract = new window.web3.eth.Contract(token_abi, token);
                            let pub_price = yield this.nftService.getweiValue(itemData.price);
                            let bb = new Date(itemData.enddate);
                            let salt = Math.floor((Math.random() * ((new Date()).getTime())));
                            let order = [[account, ["0x76dbb555c3bb4d985e93567670093f68bf12bca8", itemData.selltokenid, "1"], ["0xae13d989dac2f0debff460ac112a837c89baa7cd", (0.1e18).toString(), "0"]], (itemData.spid).toString(), (0.1e18).toString(), '40', salt.toString(), (bb.getTime()).toString(), '1'];
                            // let order = [['0xc84928f94462F530a83A8D8E8e1FF4851255b335', [ContractDetails.nft_exchange_token, '1', 0], [ContractDetails.nft_exchange_token, '1', 1]], 1, 0.e18, 40, 1, n, 0];
                            let orderHash = yield this.nftService.orderHash(order);
                            let sig1 = yield window.web3.eth.personal.sign(orderHash.result, account, '');
                            let r = sig1.slice(0, 66);
                            let s = '0x' + sig1.slice(66, 130);
                            let v = '0x' + sig1.slice(130, 132);
                            let SellergetVRS = [v, r, s];
                            if (orderHash && SellergetVRS) {
                                let contractData = { order: order, vrs: SellergetVRS };
                                this.publishData.sellorder = contractData;
                                this.service.postRequest('collection/fixedsale', this.publishData).subscribe((result) => {
                                    if (result.status) {
                                        this.toasterService.show(result.status, result.msg);
                                        this.route.navigate(['collection']);
                                    }
                                    else {
                                        this.toasterService.show(result.status, result.msg);
                                    }
                                });
                            }
                            else {
                                this.toasterService.show(false, 'Unable to sell, please try again');
                            }
                            return;
                        }
                        else {
                            this.toasterService.show(false, "Something went wrong, Please Try Again.");
                            this.route.navigate(['/collection']);
                            return;
                        }
                        return;
                    }
                    catch (error) {
                        this.toasterService.show(false, error.message);
                    }
                }))();
            });
        }
    }
    auctionSale(itemId) {
        if (itemId) {
            this.service.postRequest("collection/getItem", { id: itemId }).subscribe((suc) => {
                if (!suc.status) {
                    return this.toasterService.show(false, 'Item not found.');
                }
                let itemData = suc.data;
                console.log(itemData, 'itemDataaaaa2');
                (() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    try {
                        let account = this.service.metaDeatails.account;
                        if (!account) {
                            return this.toasterService.show(false, "Please connect metamask");
                        }
                        if (itemData.imported == 1) {
                            let cobj = {
                                "contractid": itemData.contractId,
                            };
                            this.publishData.imported = 1;
                            this.publishData.contractId = itemData.contractId;
                            yield this.service.postRequest('users/getContract', cobj).subscribe((reqData) => {
                                if (reqData.status) {
                                    let cdata = reqData.data;
                                    console.log(cdata.contract, 'cdata.contract');
                                    console.log(cdata.abi, 'cdata.abi');
                                    this.apprToken = cdata.contract;
                                    this.apprTokenABI = cdata.abi;
                                    this.contractAuction(this.apprToken, this.apprTokenABI, itemData);
                                }
                            });
                        }
                        else {
                            this.publishData.imported = 0;
                            this.publishData.contractId = "";
                            let currency = itemData.currency;
                            this.apprToken = src_assets_files_currencyType__WEBPACK_IMPORTED_MODULE_7__["Sample"][0][currency].address;
                            this.apprTokenId = src_assets_files_currencyType__WEBPACK_IMPORTED_MODULE_7__["Sample"][0][currency].tokenid;
                            if (currency == 'ERC721') {
                                this.apprTokenABI = src_assets_files_127cre_abi__WEBPACK_IMPORTED_MODULE_4__["NFT_721_Token_ABI"];
                            }
                            else if (currency == 'WBNB') {
                                this.apprTokenABI = src_assets_files_5511cre_abi__WEBPACK_IMPORTED_MODULE_5__["NFT_1155_Token_ABI"];
                            }
                            else if (currency == 'ERC20') {
                                this.apprTokenABI = src_assets_files_20cre_abi__WEBPACK_IMPORTED_MODULE_6__["NFT_20_Token_ABI"];
                            }
                            this.contractAuction(this.apprToken, this.apprTokenABI, itemData);
                        }
                    }
                    catch (error) {
                        this.toasterService.show(false, error.message);
                    }
                }))();
            });
        }
    }
    contractFixed(apprToken, apprTokenABI, itemData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("itemDataitemDataitemDataitemData", itemData);
            return false;
            try {
                let apprTokenABII = JSON.parse(apprTokenABI);
                let account = this.service.metaDeatails.account;
                let token = src_assets_files_contract__WEBPACK_IMPORTED_MODULE_2__["ContractDetails"].nft_exchange_token;
                /*let verify = await this.nftService.verifyOwner(apprToken, apprTokenABII, itemData.selltokenid);
                if (verify.result != account) {
                  this.toasterService.show(false, 'Invalid Owner Address, Please Verify Metamask Address');
                  return;
                }*/
                let approve = yield this.nftService.approveSellFun(apprToken, apprTokenABII, itemData.selltokenid, account);
                if (approve.result) {
                    window.web3 = window.web3.currentProvider;
                    window.web3 = new window.Web3(window.ethereum);
                    let pub_price = yield this.nftService.getweiValue(itemData.price);
                    let bb = new Date(itemData.enddate);
                    let salt = Math.floor((Math.random() * ((new Date()).getTime())));
                    let order = [[account, [apprToken, itemData.selltokenid, "1"], ["0xae13d989dac2f0debff460ac112a837c89baa7cd", (itemData.price * 1e18).toString(), "0"]], (itemData.spid).toString(), (itemData.price * 1e18).toString(), '40', salt.toString(), (bb.getTime()).toString(), '2'];
                    // let order = [['0xc84928f94462F530a83A8D8E8e1FF4851255b335', [ContractDetails.nft_exchange_token, '1', 0], [ContractDetails.nft_exchange_token, '1', 1]], 1, 0.e18, 40, 1, n, 0];
                    let orderHash = yield this.nftService.orderHash(order);
                    let sig1 = yield window.web3.eth.personal.sign(orderHash.result, account, '');
                    let r = sig1.slice(0, 66);
                    let s = '0x' + sig1.slice(66, 130);
                    let v = '0x' + sig1.slice(130, 132);
                    let SellergetVRS = [v, r, s];
                    if (orderHash && SellergetVRS) {
                        let contractData = { order: order, vrs: SellergetVRS };
                        this.publishData.sellorder = contractData;
                        this.service.postRequest('collection/fixedsale', this.publishData).subscribe((result) => {
                            if (result.status) {
                                this.toasterService.show(result.status, result.msg);
                                this.route.navigate(['collection']);
                            }
                            else {
                                this.toasterService.show(result.status, result.msg);
                            }
                        });
                    }
                    else {
                        this.toasterService.show(false, 'Unable to sell, please try again');
                    }
                    return;
                }
                else {
                    this.toasterService.show(false, "Something went wrong, Please Try Again.");
                    this.route.navigate(['/collection']);
                    return;
                }
                return;
            }
            catch (e) {
                this.toasterService.show(false, e);
                this.route.navigate(['/collection']);
            }
        });
    }
    saleItemnew(items) {
        if (items) {
            let account = this.service.metaDeatails.account;
            let currency = items.currency;
            console.log("Sample[0][currency].address", src_assets_files_currencyType__WEBPACK_IMPORTED_MODULE_7__["Sample"][0][currency].address);
            this.apprToken = src_assets_files_currencyType__WEBPACK_IMPORTED_MODULE_7__["Sample"][0][currency].address;
            this.apprTokenId = src_assets_files_currencyType__WEBPACK_IMPORTED_MODULE_7__["Sample"][0][currency].tokenid;
            if (currency == 'ERC721') {
                this.apprTokenABI = src_assets_files_127cre_abi__WEBPACK_IMPORTED_MODULE_4__["NFT_721_Token_ABI"];
            }
            else if (currency == 'WBNB') {
                this.apprTokenABI = src_assets_files_5511cre_abi__WEBPACK_IMPORTED_MODULE_5__["NFT_1155_Token_ABI"];
            }
            else if (currency == 'ERC20') {
                this.apprTokenABI = src_assets_files_20cre_abi__WEBPACK_IMPORTED_MODULE_6__["NFT_20_Token_ABI"];
            }
            this.Offlinesalefn(this.apprToken, this.apprTokenABI, items);
        }
        else {
            this.toasterService.show(false, 'Something went wrong');
            this.route.navigateByUrl('market');
        }
    }
    contractAuction(apprToken, apprTokenABI, itemData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let apprTokenABII = JSON.parse(apprTokenABI);
                let account = this.service.metaDeatails.account;
                let token = src_assets_files_contract__WEBPACK_IMPORTED_MODULE_2__["ContractDetails"].nft_exchange_token;
                /*let verify = await this.nftService.verifyOwner(apprToken, apprTokenABII, itemData.selltokenid);
                if (verify.result != account) {
                  this.toasterService.show(false, 'Invalid Owner Address, Please Verify Metamask Address');
                  return;
                }*/
                let approve = yield this.nftService.approveSellFun(apprToken, apprTokenABII, itemData.selltokenid, account);
                if (approve.result) {
                    window.web3 = window.web3.currentProvider;
                    window.web3 = new window.Web3(window.ethereum);
                    let pub_price = yield this.nftService.getweiValue(itemData.price);
                    let bb = new Date(itemData.enddate);
                    let salt = Math.floor((Math.random() * ((new Date()).getTime())));
                    let order = [[account, [apprToken, itemData.selltokenid, "1"], ["0xae13d989dac2f0debff460ac112a837c89baa7cd", (itemData.price * 1e18).toString(), "0"]], (itemData.spid).toString(), (itemData.price * 1e18).toString(), '40', salt.toString(), (bb.getTime()).toString(), '3'];
                    // let order = [['0xc84928f94462F530a83A8D8E8e1FF4851255b335', [ContractDetails.nft_exchange_token, '1', 0], [ContractDetails.nft_exchange_token, '1', 1]], 1, 0.e18, 40, 1, n, 0];
                    let orderHash = yield this.nftService.orderHash(order);
                    let sig1 = yield window.web3.eth.personal.sign(orderHash.result, account, '');
                    let r = sig1.slice(0, 66);
                    let s = '0x' + sig1.slice(66, 130);
                    let v = '0x' + sig1.slice(130, 132);
                    let SellergetVRS = [v, r, s];
                    if (orderHash && SellergetVRS) {
                        let contractData = { order: order, vrs: SellergetVRS };
                        this.publishData.sellorder = contractData;
                        this.service.postRequest('collection/privatesale', this.publishData).subscribe((result) => {
                            if (result.status) {
                                this.toasterService.show(result.status, result.msg);
                                this.route.navigate(['collection']);
                            }
                            else {
                                this.toasterService.show(result.status, result.msg);
                            }
                        });
                    }
                    else {
                        this.toasterService.show(false, 'Unable to sell, please try again');
                    }
                    return;
                }
                else {
                    this.toasterService.show(false, "Something went wrong, Please Try Again.");
                    this.route.navigate(['/collection']);
                    return;
                }
                return;
            }
            catch (e) {
            }
        });
    }
    Offlinesalefn(apprToken, apprTokenABI, itemData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("apprTokenABIIapprTokenABII0", apprTokenABI);
            //   let apprTokenABII = JSON.parse(apprTokenABI);
            let account = this.service.metaDeatails.account;
            let token = src_assets_files_contract__WEBPACK_IMPORTED_MODULE_2__["ContractDetails"].nft_exchange_token;
            /*let verify = await this.nftService.verifyOwner(apprToken, apprTokenABII, itemData.selltokenid);
            if (verify.result != account) {
              this.toasterService.show(false, 'Invalid Owner Address, Please Verify Metamask Address');
              return;
            }*/
            let approve = yield this.nftService.approveSellFun(apprToken, apprTokenABI, itemData.selltokenid, account);
            if (approve.result) {
                window.web3 = window.web3.currentProvider;
                window.web3 = new window.Web3(window.ethereum);
                let pub_price = yield this.nftService.getweiValue(itemData.price);
                // let bb = new Date(itemData.enddate); 
                var expiryTime = yield window.web3.eth.getBlockNumber();
                var bb = Number(expiryTime) + Number(10);
                let dead_time = 15 * 60000;
                let date = new Date();
                let timestamp = date.getTime();
                let deadline = timestamp + dead_time;
                let salt = Math.floor((Math.random() * ((new Date()).getTime())));
                let order = [[account, [apprToken, itemData.selltokenid, "1"], ["0xae13d989dac2f0debff460ac112a837c89baa7cd", (itemData.price * 1e18).toString(), "0"]], (itemData.spid).toString(), (itemData.price * 1e18).toString(), '40', salt.toString(), deadline, '1'];
                // let order = [['0xc84928f94462F530a83A8D8E8e1FF4851255b335', [ContractDetails.nft_exchange_token, '1', 0], [ContractDetails.nft_exchange_token, '1', 1]], 1, 0.e18, 40, 1, n, 0];
                let orderHash = yield this.nftService.orderHash(order);
                let sig1 = yield window.web3.eth.personal.sign(orderHash.result, account, '');
                let r = sig1.slice(0, 66);
                let s = '0x' + sig1.slice(66, 130);
                let v = '0x' + sig1.slice(130, 132);
                let SellergetVRS = [v, r, s];
                if (orderHash && SellergetVRS) {
                    let contractData = { order: order, vrs: SellergetVRS };
                    var sellorder = contractData;
                    this.service.postRequest("collection/offlinesale", { id: itemData.itemId, "sellorder": contractData }).subscribe((suc) => {
                        let responseData = suc;
                        if (responseData.status) {
                            this.sItem = responseData.data;
                            this.toasterService.show(true, responseData.msg);
                        }
                        else {
                            this.toasterService.show(false, responseData.msg);
                        }
                        this.route.navigateByUrl('market');
                    });
                }
                else {
                    this.toasterService.show(false, 'Unable to sell, please try again');
                }
                return;
            }
            else {
                this.toasterService.show(false, "Something went wrong, Please Try Again.");
                this.route.navigate(['/collection']);
                return;
            }
            return;
        });
    }
    contractPrivate(apprToken, apprTokenABI, itemData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let apprTokenABII = JSON.parse(apprTokenABI);
                let account = this.service.metaDeatails.account;
                let token = src_assets_files_contract__WEBPACK_IMPORTED_MODULE_2__["ContractDetails"].nft_exchange_token;
                /*let verify = await this.nftService.verifyOwner(apprToken, apprTokenABII, itemData.selltokenid);
                if (verify.result != account) {
                  this.toasterService.show(false, 'Invalid Owner Address, Please Verify Metamask Address');
                  return;
                }*/
                let approve = yield this.nftService.approveSellFun(apprToken, apprTokenABII, itemData.selltokenid, account);
                if (approve.result) {
                    window.web3 = window.web3.currentProvider;
                    window.web3 = new window.Web3(window.ethereum);
                    let pub_price = yield this.nftService.getweiValue(itemData.price);
                    let bb = new Date(itemData.enddate);
                    let salt = Math.floor((Math.random() * ((new Date()).getTime())));
                    let order = [[account, [apprToken, itemData.selltokenid, "1"], ["0xae13d989dac2f0debff460ac112a837c89baa7cd", (itemData.price * 1e18).toString(), "0"]], (itemData.spid).toString(), (itemData.price * 1e18).toString(), '40', salt.toString(), (bb.getTime()).toString(), '1'];
                    // let order = [['0xc84928f94462F530a83A8D8E8e1FF4851255b335', [ContractDetails.nft_exchange_token, '1', 0], [ContractDetails.nft_exchange_token, '1', 1]], 1, 0.e18, 40, 1, n, 0];
                    let orderHash = yield this.nftService.orderHash(order);
                    let sig1 = yield window.web3.eth.personal.sign(orderHash.result, account, '');
                    let r = sig1.slice(0, 66);
                    let s = '0x' + sig1.slice(66, 130);
                    let v = '0x' + sig1.slice(130, 132);
                    let SellergetVRS = [v, r, s];
                    if (orderHash && SellergetVRS) {
                        let contractData = { order: order, vrs: SellergetVRS };
                        this.publishData.sellorder = contractData;
                        this.service.postRequest('collection/privatesale', this.publishData).subscribe((result) => {
                            if (result.status) {
                                this.toasterService.show(result.status, result.msg);
                                this.route.navigate(['collection']);
                            }
                            else {
                                this.toasterService.show(result.status, result.msg);
                            }
                        });
                    }
                    else {
                        this.toasterService.show(false, 'Unable to sell, please try again');
                    }
                    return;
                }
                else {
                    this.toasterService.show(false, "Something went wrong, Please Try Again.");
                    this.route.navigate(['/collection']);
                    return;
                }
                return;
            }
            catch (e) {
            }
        });
    }
}
ItemsComponent.ɵfac = function ItemsComponent_Factory(t) { return new (t || ItemsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_10__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_services_metamask_nft_nft_service__WEBPACK_IMPORTED_MODULE_12__["NftService"])); };
ItemsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ItemsComponent, selectors: [["app-items"]], decls: 15, vars: 4, consts: [[1, "tabpages-cnt"], [1, "row"], [1, "col-lg-12"], [1, "section-title"], [1, "col-md-12", "col-lg-12"], [1, "card", "grey-cnt"], [1, "card-body"], ["class", "row", 4, "ngIf"], ["class", "row collection-block", 4, "ngIf"], ["class", "btn default-btn mt-4", 3, "click", 4, "ngIf"], ["class", "col-md-12 col-lg-12 text-center", 4, "ngIf"], ["Createcollection", ""], [1, "col-md-6", "col-sm-12"], [3, "routerLink"], [3, "click"], [1, "btn", "default-btn"], ["routerLink", "/import"], [1, "row", "collection-block"], ["class", "col-md-12 col-lg-6 col-sm-12 col-xl-4", 4, "ngFor", "ngForOf"], [1, "col-md-12", "col-lg-6", "col-sm-12", "col-xl-4"], [1, "act-cnt"], [1, "act-head", "d-flex", "align-items-center", "justify-content-between", "px-2"], [1, "d-flex"], [1, "mb-0"], ["class", "text-danger", 4, "ngIf"], [4, "ngIf"], [1, "act-head"], [1, "border-bottom"], [1, "row", "mt-2"], [1, "col-sm-6", "col-md-6", "col-lg-6", "text-center", "col-xl-6", "border-right"], [1, "mb-2"], ["class", "col-sm-6 col-md-6 text-center col-lg-6 col-xl-6", 4, "ngIf"], [1, "text-danger"], [1, "img-fluid", "w-100", 3, "src"], ["src", "assets/images/market1.png", 1, "img-fluid", "w-100"], [1, "col-sm-6", "col-md-6", "text-center", "col-lg-6", "col-xl-6"], [1, "btn", "default-btn", "type-btn", 3, "click"], [1, "btn", "default-btn", "mt-4", 3, "click"], [1, "col-md-12", "col-lg-12", "text-center"], ["id", "Bidapp", 1, "modalPrimary", "md", "creat-collection"], [1, "modal-dialog", "modal-lg", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header", "border-bottom-0", "d-block"], ["type", "button", "data-dismiss", "modal", 1, "close", 3, "click"], [1, "modal-title", "section-title", "mb-0", "w-100", "text-center"], [1, "modal-body"], [3, "ngSubmit"], ["f1", "ngForm"], [1, "row", "justify-content-center", "align-items-start"], [1, "col-md-12", "col-sm-12", "col-lg-12", "col-xl-12"], [1, "blog-sec-cnt"], ["class", "d-lg-flex align-items-center", 4, "ngIf"], ["class", "font-16 fontweight-500 mt-4 text-black mb-2", 4, "ngIf"], ["class", "row tabpages-cnt p-0 w-auto", 4, "ngIf"], [1, "form-group", "mt-3"], ["for", "saletype1", 1, "pb-0", "font-16", "text-black", "fontweight-400", "mb-2"], ["name", "saletype1", "required", "", 1, "form-control", 3, "change"], ["saletype1", ""], ["value", "fixed"], ["value", "private"], ["value", "auction"], ["class", "invalid-feedback", 4, "ngIf"], ["class", "form-group mt-3 ", 4, "ngIf"], ["for", "currency", 1, "pb-0", "font-16", "text-black", "fontweight-400", "mb-2"], ["name", "currency", "required", "", 3, "ngModel", "ngModelChange", "change"], ["currecy", "ngModel"], ["selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "yourName", 1, "pb-0", "font-16", "text-black", "fontweight-400", "mb-2"], ["type", "text", "placeholder", "NFT Id", "name", "nftid", "required", "", 1, "form-control", "input-sec", "font-16", "fontweight-400", 3, "ngClass", "ngModel", "ngModelChange"], ["nftid", "ngModel"], ["name", "buycurrency", "required", "", 3, "ngModel", "ngModelChange", "change"], ["buycurrency", ""], ["class", "pb-0 font-16 text-black fontweight-400 mb-2", "for", "yourName", 4, "ngIf"], ["type", "text", "placeholder", "Price", "name", "price", "required", "", 1, "form-control", "input-sec", "font-16", "fontweight-400", 3, "ngClass", "ngModel", "ngModelChange"], ["price", "ngModel"], ["for", "endate", 1, "pb-0", "font-16", "text-black", "fontweight-400", "mb-2"], ["type", "text", "bsDatepicker", "", "placeholder", "DD-MM-YYYY", "name", "endate", "required", "", 1, "form-control", 3, "minDate", "ngClass", "maxDate", "bsConfig", "ngModel", "ngModelChange"], ["endate", "ngModel"], ["name", "endtime", 3, "ngModel", "ngModelChange"], [1, "mb-3", "pb-0", "font-16", "fontweight-400", "mb-2"], ["type", "text", "placeholder", "1", "name", "supply", "required", "", 1, "form-control", "input-sec", "font-16", "fontweight-400", 3, "disabled", "ngClass", "ngModel", "ngModelChange"], ["supply", "ngModel"], ["class", "form-group mt-3", 4, "ngIf"], [1, "text-center"], ["class", "btn fontweight-500 default-btn mt-4", "type", "submit", 4, "ngIf"], ["class", "btn default-btn mt-4", 4, "ngIf"], [1, "d-lg-flex", "align-items-center"], ["src", "images/app1.png", 1, "img-fluid", "mr-3"], [1, "text-left"], [1, "font-16", "fontweight-500", "text-black", "mt-2", "mb-4"], [1, "font-16", "fontweight-500", "text-black", "mb-2"], [1, "font-28", "font-weight-bold", "text-black", "mb-0"], [1, "font-16", "fontweight-500", "mt-4", "text-black", "mb-2"], [1, "row", "tabpages-cnt", "p-0", "w-auto"], [1, "col-md-6", "col-sm-6", "col-xl-4", "col-lg-6", "mt-3"], [1, "card", "grey-cnt", "text-center"], [1, "font-16", "fontweight-500"], [1, "invalid-feedback"], ["for", "address", 1, "pb-0", "font-16", "text-black", "fontweight-400", "mb-2"], ["type", "text", "placeholder", "Address", "name", "address", "required", "", 1, "form-control", "input-sec", "font-16", "fontweight-400", 3, "ngClass", "ngModel", "ngModelChange"], ["address", "ngModel"], [3, "value"], ["for", "sdate", 1, "pb-0", "font-16", "text-black", "fontweight-400", "mb-2"], ["type", "text", "bsDatepicker", "", "placeholder", "DD-MM-YYYY", "name", "sdate", "required", "", 1, "form-control", "input-sec", "font-16", "fontweight-400", 3, "ngClass", "minDate", "maxDate", "ngModel", "ngModelChange"], ["sdate", "ngModel"], ["name", "starttime", 3, "ngModel", "ngModelChange"], [1, "d-flex", "justify-content-between", "bid-block"], ["for", "yourName", 1, "mb-0", "pb-0", "font-18", "font-weight-bold", "text-black", "mb-2"], ["type", "text", "placeholder", "Place your Bid", "name", "bid", 1, "form-control", "input-sec", "font-16", "fontweight-400", 3, "ngClass", "ngModel", "ngModelChange"], ["bid", "ngModel"], ["type", "submit", 1, "btn", "fontweight-500", "default-btn", "mt-4"], [1, "btn", "default-btn", "mt-4"]], template: function ItemsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Your Artworks Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ItemsComponent_div_8_Template, 14, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ItemsComponent_div_9_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ItemsComponent_button_10_Template, 2, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ItemsComponent_div_12_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ItemsComponent_ng_template_13_Template, 95, 42, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.service.metaDeatails == null ? null : ctx.service.metaDeatails.accountShort);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.items.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.items.length > 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.items.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__["BsDatepickerInputDirective"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__["BsDatepickerDirective"], ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_16__["TimepickerComponent"]], styles: [".salebtn[_ngcontent-%COMP%] {\n\tpadding: 1px 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmZ0L2l0ZW1zL2l0ZW1zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxnQkFBZ0I7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9uZnQvaXRlbXMvaXRlbXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zYWxlYnRuIHtcblx0cGFkZGluZzogMXB4IDFweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ItemsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-items',
                templateUrl: './items.component.html',
                styleUrls: ['./items.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"] }, { type: src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_10__["ToasterService"] }, { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__["BsModalService"] }, { type: src_app_common_services_metamask_nft_nft_service__WEBPACK_IMPORTED_MODULE_12__["NftService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/nft/items/items.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/nft/items/items.module.ts ***!
  \*************************************************/
/*! exports provided: ItemsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsModule", function() { return ItemsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _items_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./items.component */ "./src/app/pages/nft/items/items.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_bootstrap_tooltip___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/tooltip/ */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
/* harmony import */ var src_app_common_loader_loader_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/loader/loader.module */ "./src/app/common/loader/loader.module.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/timepicker */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/timepicker/fesm2015/ngx-bootstrap-timepicker.js");
















// import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
const routes = [
    {
        path: "",
        component: _items_component__WEBPACK_IMPORTED_MODULE_3__["ItemsComponent"],
    },
];
class ItemsModule {
}
ItemsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ItemsModule });
ItemsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ItemsModule_Factory(t) { return new (t || ItemsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            src_app_common_loader_loader_module__WEBPACK_IMPORTED_MODULE_6__["LoaderModule"],
            ngx_bootstrap_tooltip___WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_9__["TimepickerModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ItemsModule, { declarations: [_items_component__WEBPACK_IMPORTED_MODULE_3__["ItemsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], src_app_common_loader_loader_module__WEBPACK_IMPORTED_MODULE_6__["LoaderModule"], ngx_bootstrap_tooltip___WEBPACK_IMPORTED_MODULE_5__["TooltipModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"], ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_9__["TimepickerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_items_component__WEBPACK_IMPORTED_MODULE_3__["ItemsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                    src_app_common_loader_loader_module__WEBPACK_IMPORTED_MODULE_6__["LoaderModule"],
                    ngx_bootstrap_tooltip___WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
                    ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(),
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"].forRoot(),
                    ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_9__["TimepickerModule"].forRoot(),
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=nft-items-items-module.js.map