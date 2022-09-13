(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nft-user-user-module"],{

/***/ "./src/app/pages/nft/user/user.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/nft/user/user.component.ts ***!
  \**************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_assets_files_contract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/files/contract */ "./src/assets/files/contract.ts");
/* harmony import */ var src_assets_files_127cre_abi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/assets/files/127cre_abi */ "./src/assets/files/127cre_abi.js");
/* harmony import */ var src_assets_files_5511cre_abi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/files/5511cre_abi */ "./src/assets/files/5511cre_abi.js");
/* harmony import */ var src_assets_files_20cre_abi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/assets/files/20cre_abi */ "./src/assets/files/20cre_abi.js");
/* harmony import */ var src_assets_files_currencyType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/assets/files/currencyType */ "./src/assets/files/currencyType.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/common/services/api/data.service */ "./src/app/common/services/api/data.service.ts");
/* harmony import */ var src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/common/toaster/toaster.service */ "./src/app/common/toaster/toaster.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var src_app_common_services_metamask_nft_nft_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/common/services/metamask/nft/nft.service */ "./src/app/common/services/metamask/nft/nft.service.ts");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm2015/ngx-bootstrap-tabs.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
















function UserComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Collected ");
} }
function UserComponent_div_20_div_1_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 7);
} if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", item_r12.profilepicture ? item_r12.profilepicture : "assets/images/prof.png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function UserComponent_div_20_div_1_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 38);
} }
function UserComponent_div_20_div_1_img_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 7);
} if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", item_r12.ownerpicture ? item_r12.ownerpicture : "assets/images/prof1.png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function UserComponent_div_20_div_1_img_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 39);
} }
function UserComponent_div_20_div_1_div_21_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 43);
} if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", item_r12.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function UserComponent_div_20_div_1_div_21_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 44);
} }
function UserComponent_div_20_div_1_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserComponent_div_20_div_1_div_21_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r24.myFunc1(item_r12.itemId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UserComponent_div_20_div_1_div_21_img_2_Template, 1, 1, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UserComponent_div_20_div_1_div_21_img_3_Template, 1, 0, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r12.image != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r12.image == "");
} }
function UserComponent_div_20_div_1_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserComponent_div_20_div_1_div_22_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r28.myFunc1(item_r12.itemId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserComponent_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, UserComponent_div_20_div_1_img_5_Template, 1, 1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, UserComponent_div_20_div_1_img_6_Template, 1, 0, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Artist");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Artist");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, UserComponent_div_20_div_1_img_19_Template, 1, 1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, UserComponent_div_20_div_1_img_20_Template, 1, 0, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, UserComponent_div_20_div_1_div_21_Template, 4, 2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, UserComponent_div_20_div_1_div_22_Template, 3, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserComponent_div_20_div_1_Template_button_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32); const item_r12 = ctx.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r31.saleItemnew(item_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "sale now");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r12.profilepicture != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r12.profilepicture == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r12.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r12.ownername);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r12.ownerpicture != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r12.ownerpicture == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r12.type == "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r12.type != "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r12.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", item_r12.price, " ", item_r12.tocurrency, "");
} }
function UserComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserComponent_div_20_div_1_Template, 36, 11, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.owned);
} }
function UserComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No items collected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " On Sale ");
} }
function UserComponent_div_24_div_1_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 7);
} if (rf & 2) {
    const item_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", item_r34.profilepicture ? item_r34.profilepicture : "assets/images/prof.png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function UserComponent_div_24_div_1_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 38);
} }
function UserComponent_div_24_div_1_img_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 7);
} if (rf & 2) {
    const item_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", item_r34.ownerpicture ? item_r34.ownerpicture : "assets/images/prof1.png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function UserComponent_div_24_div_1_img_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 39);
} }
function UserComponent_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, UserComponent_div_24_div_1_img_5_Template, 1, 1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, UserComponent_div_24_div_1_img_6_Template, 1, 0, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Artist");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Artist");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, UserComponent_div_24_div_1_img_19_Template, 1, 1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, UserComponent_div_24_div_1_img_20_Template, 1, 0, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserComponent_div_24_div_1_Template_a_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r42); const item_r34 = ctx.$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r41.myFunc1(item_r34.itemId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Suppply");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r34.profilepicture != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r34.profilepicture == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r34.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r34.ownername);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r34.ownerpicture != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r34.ownerpicture == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r34.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", item_r34.price, " ", item_r34.currency, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r34.supply);
} }
function UserComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserComponent_div_24_div_1_Template, 38, 10, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.created);
} }
function UserComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No items found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Favourite ");
} }
function UserComponent_div_28_div_1_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 7);
} if (rf & 2) {
    const fav_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", fav_r44.creator_img ? ctx_r45.item.profilepicture : "assets/images/prof.png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function UserComponent_div_28_div_1_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 38);
} }
function UserComponent_div_28_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, UserComponent_div_28_div_1_img_6_Template, 1, 1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, UserComponent_div_28_div_1_img_7_Template, 1, 0, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Artist");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Artist");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fav_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", fav_r44.creator_img != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", fav_r44.creator_img == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](fav_r44.creator_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](fav_r44.owner_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", fav_r44.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](fav_r44.name);
} }
function UserComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserComponent_div_28_div_1_Template, 25, 6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r7.favorites);
} }
function UserComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No favorites found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserComponent_ng_template_30_div_28_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Type of Sale is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserComponent_ng_template_30_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserComponent_ng_template_30_div_28_div_1_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r49.errors.required);
} }
function UserComponent_ng_template_30_div_29_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Address is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserComponent_ng_template_30_div_29_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserComponent_ng_template_30_div_29_div_8_div_1_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r59.errors.required);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function UserComponent_ng_template_30_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "To User Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 76, 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UserComponent_ng_template_30_div_29_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r63); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r62.sItemObj.address = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, UserComponent_ng_template_30_div_29_div_8_Template, 2, 1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, _r48.submitted && _r59.invalid))("ngModel", ctx_r51.sItemObj.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r48.submitted && _r59.invalid);
} }
function UserComponent_ng_template_30_label_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Buy Price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserComponent_ng_template_30_label_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Reserved Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserComponent_ng_template_30_div_37_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Price is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserComponent_ng_template_30_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserComponent_ng_template_30_div_37_div_1_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r54.errors.required);
} }
function UserComponent_ng_template_30_button_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserComponent_ng_template_30_label_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserComponent_ng_template_30_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r66); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r65.modalRef == null ? null : ctx_r65.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Sale Your NFT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "form", 53, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function UserComponent_ng_template_30_Template_form_ngSubmit_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r66); const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _r48.form.valid && ctx_r67.onModalSubmit(_r48.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Choose Type of Sale ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "select", 61, 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function UserComponent_ng_template_30_Template_select_change_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r66); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r68.saleType($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Reserved Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "option", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Private Sale");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "option", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Auction Bid");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, UserComponent_ng_template_30_div_28_Template, 2, 1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, UserComponent_ng_template_30_div_29_Template, 9, 5, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, UserComponent_ng_template_30_label_31_Template, 4, 0, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, UserComponent_ng_template_30_label_33_Template, 2, 0, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "input", 69, 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UserComponent_ng_template_30_Template_input_ngModelChange_35_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r66); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r69.sItemObj.price = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, UserComponent_ng_template_30_div_37_Template, 2, 1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, UserComponent_ng_template_30_button_39_Template, 2, 0, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, UserComponent_ng_template_30_label_40_Template, 2, 0, "label", 73);
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
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21);
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](36);
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r48.submitted && _r49.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.saletype == "private");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.saletype != "fixed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.saletype == "fixed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, _r48.submitted && _r54.invalid))("ngModel", ctx_r10.sItemObj.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r48.submitted && _r54.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r10.msubmitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.msubmitted);
} }
class UserComponent {
    constructor(activatedRoute, route, service, toasterService, modalService, nftService) {
        this.activatedRoute = activatedRoute;
        this.route = route;
        this.service = service;
        this.toasterService = toasterService;
        this.modalService = modalService;
        this.nftService = nftService;
        this.profile = {};
        this.favorites = {};
        this.owned = {};
        this.created = {};
        this.favoriteslength = 0;
        this.userId = {};
        this.limit = 6;
        this.skip = 6;
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
        this.msubmitted = false;
        this.saletype = 'fixed';
        this.selectcurr = "";
        this.buycurr = "";
        this.buytokenaddr = "";
        this.publishData = {};
        this.submitted = false;
        this.privateitems = {};
    }
    ngOnInit() {
        this.service.isOverlay = false;
        this.endminDate = new Date();
        this.endmaxDate = new Date();
        this.endminDate.setDate(this.endminDate.getDate());
        this.endmaxDate.setDate(this.endmaxDate.getDate() + 7);
        this.getProfile();
        this.getCollections();
        this.getOnSale();
        this.getSaved();
        this.getCurrency();
        this.getOnSalePrivate();
    }
    getProfile() {
        this.service.postRequest("users/user", {}).subscribe((suc) => {
            if (suc.status) {
                this.profile = suc.data;
            }
            else {
                this.toasterService.show(suc.status, suc.msg);
                this.route.navigateByUrl('/market');
            }
        });
    }
    getCurrency() {
        this.service.postRequest('collection/getNftCurrency', {}).subscribe((success) => {
            let reponse = success;
            if (reponse.status) {
                this.currencies = reponse.data;
            }
            else {
                this.toasterService.show(false, reponse.msg);
            }
        });
    }
    getCollections() {
        this.service.postRequest("users/userCollected", { skip: 0, limit: this.limit }).subscribe((suc) => {
            let responseData = suc;
            if (responseData.status) {
                this.owned = responseData.data;
            }
        });
    }
    getOnSale() {
        this.service.postRequest("collection/userItems", { skip: 0, limit: this.limit }).subscribe((suc) => {
            let responseData = suc;
            if (responseData.status) {
                console.log("responseData.dataresponseData.data", responseData.data);
                this.created = responseData.data;
            }
        });
    }
    getOnSalePrivate() {
        this.service.postRequest("collection/getmyprivate", { skip: 0, limit: this.limit }).subscribe((suc) => {
            let responseData = suc;
            if (responseData.status) {
                this.privateitems = responseData.data;
            }
        });
    }
    getSaved() {
        this.service.postRequest('users/userfavorites', { skip: 0, limit: this.limit }).subscribe((res) => {
            if (res.status == true) {
                this.favorites = res.data;
            }
            else {
                this.toasterService.show(res.status, res.msg);
                this.route.navigateByUrl('/market');
            }
        });
    }
    myFunc(item_id) {
        this.route.navigate(['/item-details/'], { queryParams: { id: encodeURIComponent(item_id), "type": 0 } });
    }
    myFunc1(item_id) {
        this.route.navigate(['/item-details/'], { queryParams: { id: encodeURIComponent(item_id), "type": 1 } });
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
            this.route.navigateByUrl('market');
        }
    }
    saleItemnew(items) {
        if (items) {
            if (items.type == 'import') {
                let cobj = {
                    "contractid": items.contractId,
                };
                this.service.postRequest('users/getContract', cobj).subscribe((reqData) => {
                    if (reqData.status) {
                        let cdata = reqData.data;
                        this.apprToken = cdata.contract;
                        this.apprTokenABI = cdata.abi;
                        this.Offlinesalefn(this.apprToken, this.apprTokenABI, items);
                    }
                });
            }
            else {
                let account = this.service.metaDeatails.account;
                let currency = items.currency;
                this.apprToken = src_assets_files_currencyType__WEBPACK_IMPORTED_MODULE_6__["Sample"][0][currency].address;
                this.apprTokenId = src_assets_files_currencyType__WEBPACK_IMPORTED_MODULE_6__["Sample"][0][currency].tokenid;
                if (currency == 'ERC721') {
                    this.apprTokenABI = src_assets_files_127cre_abi__WEBPACK_IMPORTED_MODULE_3__["NFT_721_Token_ABI"];
                }
                else if (currency == 'WBNB') {
                    this.apprTokenABI = src_assets_files_5511cre_abi__WEBPACK_IMPORTED_MODULE_4__["NFT_1155_Token_ABI"];
                }
                else if (currency == 'ERC20') {
                    this.apprTokenABI = src_assets_files_20cre_abi__WEBPACK_IMPORTED_MODULE_5__["NFT_20_Token_ABI"];
                }
                this.Offlinesalefn(this.apprToken, this.apprTokenABI, items);
            }
        }
        else {
            this.toasterService.show(false, 'Something went wrong');
            this.route.navigateByUrl('market');
        }
    }
    Offlinesalefn(apprToken, apprTokenABI, itemData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (itemData.type == 'add') {
                var apprTokenABII = apprTokenABI;
            }
            else {
                var apprTokenABII = JSON.parse(apprTokenABI);
            }
            let account = this.service.metaDeatails.account;
            let token = src_assets_files_contract__WEBPACK_IMPORTED_MODULE_2__["ContractDetails"].nft_exchange_token;
            let approve = yield this.nftService.approveSellFun(apprToken, apprTokenABII, itemData.selltokenid, account);
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
    saleItem(itemId) {
        if (itemId) {
            this.service.postRequest("collection/getItem", { id: itemId }).subscribe((suc) => {
                let responseData = suc;
                if (responseData.status) {
                    this.sItem = responseData.data;
                }
            });
        }
        else {
            this.toasterService.show(false, 'Something went wrong');
            this.route.navigateByUrl('market');
        }
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
            this.submitted = true;
            this.msubmitted = true;
            this.service.isOverlay = true;
            let datas = values;
            var buycurr = 'WBNB' /*datas.buycurrency*/;
            var sellcurr = this.sItem.currency;
            let account = this.service.metaDeatails.account;
            if (!account) {
                this.toasterService.show(false, 'Please login with metamask');
                this.service.isOverlay = false;
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
                'sellassettype': src_assets_files_currencyType__WEBPACK_IMPORTED_MODULE_6__["Sample"][0][sellcurr].astype,
                'buytokenid': src_assets_files_currencyType__WEBPACK_IMPORTED_MODULE_6__["Sample"][0][buycurr].tokenid,
                'buytokenadr': src_assets_files_currencyType__WEBPACK_IMPORTED_MODULE_6__["Sample"][0][buycurr].address,
                'buyassettype': src_assets_files_currencyType__WEBPACK_IMPORTED_MODULE_6__["Sample"][0][buycurr].astype,
                'price': datas.price,
                'itemId': this.sItem.itemId,
                'startdate': (datas.sdate != "" && datas.sdate != null && datas.sdate != undefined) ? datas.sdate : "",
                'starttime': (datas.starttime != "" && datas.starttime != null && datas.starttime != undefined) ? datas.starttime : "",
                'enddate': (datas.endate != "" && datas.endate != null && datas.endate != undefined) ? datas.endate : "",
                'endtime': (datas.endtime != "" && datas.endtime != null && datas.endtime != undefined) ? datas.endtime : "",
            };
            this.publishData.saletype = this.saletype;
            this.publishData.itemid = this.sItem.itemId;
            this.publishData.edition = 1 /*datas.edition*/;
            this.publishData.house = this.sItem.house /*creator id*/;
            this.publishData.rent = this.sItem.rent /*owner id*/;
            this.service.filePostRequest('collection/updateItem', itemArr).subscribe((reqData) => {
                if (reqData.status) {
                    if (this.saletype == 'private') {
                        this.publishData.toprivate = (datas.address ? datas.address : "");
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
                    this.service.isOverlay = false;
                    this.toasterService.show(false, reqData.msg);
                }
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
                            this.service.isOverlay = false;
                            return this.toasterService.show(false, 'Item not found.');
                        }
                        let itemData = suc.data;
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
                                        this.service.isOverlay = false;
                                        return this.toasterService.show(false, "Please connect metamask");
                                    }
                                    let currency = itemData.currency;
                                    this.apprToken = src_assets_files_currencyType__WEBPACK_IMPORTED_MODULE_6__["Sample"][0][currency].address;
                                    this.apprTokenId = src_assets_files_currencyType__WEBPACK_IMPORTED_MODULE_6__["Sample"][0][currency].tokenid;
                                    if (currency == 'ERC721') {
                                        this.apprTokenABI = src_assets_files_127cre_abi__WEBPACK_IMPORTED_MODULE_3__["NFT_721_Token_ABI"];
                                    }
                                    else if (currency == 'WBNB') {
                                        this.apprTokenABI = src_assets_files_5511cre_abi__WEBPACK_IMPORTED_MODULE_4__["NFT_1155_Token_ABI"];
                                    }
                                    else if (currency == 'ERC20') {
                                        this.apprTokenABI = src_assets_files_20cre_abi__WEBPACK_IMPORTED_MODULE_5__["NFT_20_Token_ABI"];
                                    }
                                    this.contractPrivate(this.apprToken, this.apprTokenABI, itemData);
                                }
                            }
                            catch (error) {
                                this.service.isOverlay = false;
                                this.toasterService.show(false, error.message);
                            }
                        }))();
                    });
                }
                else {
                    this.service.isOverlay = false;
                    this.toasterService.show(false, 'No Such User Found');
                    return;
                }
            });
        }
    }
    fixedSale(itemId) {
        if (itemId) {
            this.service.postRequest("collection/getItem", { id: itemId }).subscribe((suc) => {
                if (!suc.status) {
                    this.service.isOverlay = false;
                    return this.toasterService.show(false, 'Item not found.');
                }
                let itemData = suc.data;
                (() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    try {
                        let account = this.service.metaDeatails.account;
                        if (!account) {
                            this.service.isOverlay = false;
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
                                    this.apprToken = cdata.contract;
                                    this.apprTokenABI = cdata.abi;
                                    this.contractFixed(this.apprToken, this.apprTokenABI, itemData);
                                }
                            });
                        }
                        else {
                            this.publishData.imported = 0;
                            this.publishData.contractId = "";
                            let currency = itemData.currency;
                            this.apprToken = src_assets_files_currencyType__WEBPACK_IMPORTED_MODULE_6__["Sample"][0][currency].address;
                            this.apprTokenId = src_assets_files_currencyType__WEBPACK_IMPORTED_MODULE_6__["Sample"][0][currency].tokenid;
                            if (currency == 'ERC721') {
                                this.apprTokenABI = src_assets_files_127cre_abi__WEBPACK_IMPORTED_MODULE_3__["NFT_721_Token_ABI"];
                            }
                            else if (currency == 'WBNB') {
                                this.apprTokenABI = src_assets_files_5511cre_abi__WEBPACK_IMPORTED_MODULE_4__["NFT_1155_Token_ABI"];
                            }
                            else if (currency == 'ERC20') {
                                this.apprTokenABI = src_assets_files_20cre_abi__WEBPACK_IMPORTED_MODULE_5__["NFT_20_Token_ABI"];
                            }
                            this.contractFixed(this.apprToken, this.apprTokenABI, itemData);
                        }
                    }
                    catch (error) {
                        this.service.isOverlay = false;
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
                    this.service.isOverlay = false;
                    return this.toasterService.show(false, 'Item not found.');
                }
                let itemData = suc.data;
                (() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    try {
                        let account = this.service.metaDeatails.account;
                        if (!account) {
                            this.service.isOverlay = false;
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
                            this.apprToken = src_assets_files_currencyType__WEBPACK_IMPORTED_MODULE_6__["Sample"][0][currency].address;
                            this.apprTokenId = src_assets_files_currencyType__WEBPACK_IMPORTED_MODULE_6__["Sample"][0][currency].tokenid;
                            if (currency == 'ERC721') {
                                this.apprTokenABI = src_assets_files_127cre_abi__WEBPACK_IMPORTED_MODULE_3__["NFT_721_Token_ABI"];
                            }
                            else if (currency == 'WBNB') {
                                this.apprTokenABI = src_assets_files_5511cre_abi__WEBPACK_IMPORTED_MODULE_4__["NFT_1155_Token_ABI"];
                            }
                            else if (currency == 'ERC20') {
                                this.apprTokenABI = src_assets_files_20cre_abi__WEBPACK_IMPORTED_MODULE_5__["NFT_20_Token_ABI"];
                            }
                            this.contractAuction(this.apprToken, this.apprTokenABI, itemData);
                        }
                    }
                    catch (error) {
                        this.service.isOverlay = false;
                        this.toasterService.show(false, error.message);
                    }
                }))();
            });
        }
    }
    contractFixed(apprToken, apprTokenABI, itemData) {
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
                    let bb = new Date();
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
                                this.route.navigateByUrl('/market');
                            }
                            else {
                                this.toasterService.show(result.status, result.msg);
                            }
                        });
                    }
                    else {
                        this.service.isOverlay = false;
                        this.toasterService.show(false, 'Unable to sell, please try again');
                    }
                    return;
                }
                else {
                    this.service.isOverlay = false;
                    this.toasterService.show(false, "Something went wrong, Please Try Again.");
                    this.route.navigateByUrl('/market');
                    return;
                }
                return;
            }
            catch (e) {
                this.toasterService.show(false, e);
                this.route.navigateByUrl('/market');
            }
        });
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
                    let bb = new Date();
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
                                this.route.navigateByUrl('market');
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
                    this.route.navigateByUrl('/market');
                    return;
                }
                return;
            }
            catch (e) {
            }
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
                    let bb = new Date();
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
                                this.route.navigateByUrl('market');
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
                    this.route.navigateByUrl('/market');
                    return;
                }
                return;
            }
            catch (e) {
            }
        });
    }
}
UserComponent.ɵfac = function UserComponent_Factory(t) { return new (t || UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_9__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_services_metamask_nft_nft_service__WEBPACK_IMPORTED_MODULE_11__["NftService"])); };
UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserComponent, selectors: [["app-user"]], decls: 32, vars: 13, consts: [[1, "row"], [1, "col-lg-12", "mb-5"], [1, "section-title", "text-center"], [1, "col-12", "user-profile-cnt"], [1, "cover-cnt"], [1, "profile-cnt", "d-flex", "justify-content-center"], [1, "profile-pic-cnt"], [3, "src"], [1, "edit", "cursor", 3, "routerLink"], [1, "fa", "fa-pencil"], [1, "copy-link"], [1, "col-12", "user-cnt"], ["id", "tab1"], ["tabHeading", ""], ["class", "row", 4, "ngIf"], ["id", "tab2"], ["id", "tab3"], ["Createcollection", ""], ["class", "col-md-12 col-lg-6 col-sm-12 col-xl-4", 4, "ngFor", "ngForOf"], [1, "col-md-12", "col-lg-6", "col-sm-12", "col-xl-4"], [1, "act-cnt"], [1, "act-head", "d-flex", "align-items-center", "justify-content-between", "px-2", "mb-3"], [1, "d-flex"], [1, "prof-pic-cnt", "mr-3"], [3, "src", 4, "ngIf"], ["src", "assets/images/prof.png", 4, "ngIf"], [1, "mb-0"], [1, "mr-3"], [1, "prof-pic-cnt"], ["src", "assets/images/prof1.png", 4, "ngIf"], [4, "ngIf"], [1, "act-head"], [1, "border-bottom"], [1, "row", "mt-2"], [1, "col-sm-6", "col-md-6", "col-lg-6", "text-center", "col-xl-6", "border-right"], [1, "mb-2"], [1, "col-sm-6", "col-md-6", "text-center", "col-lg-6", "col-xl-6"], [1, "btn", "default-btn", "type-btn", 3, "click"], ["src", "assets/images/prof.png"], ["src", "assets/images/prof1.png"], [1, "cursor", 3, "click"], ["class", "img-fluid w-100", 3, "src", 4, "ngIf"], ["src", "assets/images/market1.png", "class", "img-fluid w-100", 4, "ngIf"], [1, "img-fluid", "w-100", 3, "src"], ["src", "assets/images/market1.png", 1, "img-fluid", "w-100"], ["src", "assets/images/heart.png", 1, "heart-icon"], ["id", "Bidapp", 1, "modalPrimary", "md", "creat-collection"], [1, "modal-dialog", "modal-lg", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header", "border-bottom-0", "d-block"], ["type", "button", "data-dismiss", "modal", 1, "close", 3, "click"], [1, "modal-title", "section-title", "mb-0", "w-100", "text-center"], [1, "modal-body"], [3, "ngSubmit"], ["f1", "ngForm"], [1, "row", "justify-content-center", "align-items-start"], [1, "col-md-12", "col-sm-12", "col-lg-12", "col-xl-12"], [1, "blog-sec-cnt"], [1, "form-group", "mt-3"], ["for", "saletype1", 1, "pb-0", "font-16", "text-black", "fontweight-400", "mb-2"], [1, "text-danger"], ["name", "saletype1", "required", "", 1, "form-control", 3, "change"], ["saletype1", ""], ["value", "fixed"], ["value", "private"], ["value", "auction"], ["class", "invalid-feedback", 4, "ngIf"], ["class", "form-group mt-3 ", 4, "ngIf"], ["class", "pb-0 font-16 text-black fontweight-400 mb-2", "for", "yourName", 4, "ngIf"], ["type", "text", "placeholder", "Price", "name", "price", "required", "", 1, "form-control", "input-sec", "font-16", "fontweight-400", 3, "ngClass", "ngModel", "ngModelChange"], ["price", "ngModel"], [1, "text-center"], ["class", "btn fontweight-500 default-btn mt-4", 4, "ngIf"], ["class", "btn default-btn mt-4", 4, "ngIf"], [1, "invalid-feedback"], ["for", "address", 1, "pb-0", "font-16", "text-black", "fontweight-400", "mb-2"], ["type", "text", "placeholder", "Address", "name", "address", "required", "", 1, "form-control", "input-sec", "font-16", "fontweight-400", 3, "ngClass", "ngModel", "ngModelChange"], ["address", "ngModel"], ["for", "yourName", 1, "pb-0", "font-16", "text-black", "fontweight-400", "mb-2"], [1, "btn", "fontweight-500", "default-btn", "mt-4"], [1, "btn", "default-btn", "mt-4"]], template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "tabset");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "tab", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, UserComponent_ng_template_19_Template, 1, 0, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, UserComponent_div_20_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, UserComponent_div_21_Template, 2, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "tab", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, UserComponent_ng_template_23_Template, 1, 0, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, UserComponent_div_24_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, UserComponent_div_25_Template, 2, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "tab", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, UserComponent_ng_template_27_Template, 1, 0, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, UserComponent_div_28_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, UserComponent_div_29_Template, 2, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, UserComponent_ng_template_30_Template, 41, 11, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMapInterpolate1"]("background:url('", ctx.profile.profilepicture ? ctx.profile.profilepicture : "assets/images/mkt-prof7.png", "');");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.profile.profilepicture ? ctx.profile.profilepicture : "assets/images/mkt-prof7.png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/edit-profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.profile.username ? ctx.profile.username : "Unnamed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.profile.address ? ctx.profile.address : "0xd3a0...6833");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.owned.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.owned.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.created.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.created.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.favorites.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.favorites.length);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_12__["TabsetComponent"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_12__["TabDirective"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_12__["TabHeadingDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25mdC91c2VyL3VzZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-user',
                templateUrl: './user.component.html',
                styleUrls: ['./user.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"] }, { type: src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_9__["ToasterService"] }, { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["BsModalService"] }, { type: src_app_common_services_metamask_nft_nft_service__WEBPACK_IMPORTED_MODULE_11__["NftService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/nft/user/user.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/nft/user/user.module.ts ***!
  \***********************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.component */ "./src/app/pages/nft/user/user.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_bootstrap_tooltip___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/tooltip/ */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
/* harmony import */ var src_app_common_loader_loader_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/loader/loader.module */ "./src/app/common/loader/loader.module.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm2015/ngx-bootstrap-tabs.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/timepicker */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/timepicker/fesm2015/ngx-bootstrap-timepicker.js");


















const routes = [
    {
        path: "",
        component: _user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"],
    },
];
class UserModule {
}
UserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserModule });
UserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserModule_Factory(t) { return new (t || UserModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            src_app_common_loader_loader_module__WEBPACK_IMPORTED_MODULE_6__["LoaderModule"],
            ngx_bootstrap_tooltip___WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(),
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__["TabsModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_10__["TimepickerModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserModule, { declarations: [_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], src_app_common_loader_loader_module__WEBPACK_IMPORTED_MODULE_6__["LoaderModule"], ngx_bootstrap_tooltip___WEBPACK_IMPORTED_MODULE_5__["TooltipModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__["TabsModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__["BsDatepickerModule"], ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_10__["TimepickerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                    src_app_common_loader_loader_module__WEBPACK_IMPORTED_MODULE_6__["LoaderModule"],
                    ngx_bootstrap_tooltip___WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
                    ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(),
                    ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__["TabsModule"].forRoot(),
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__["BsDatepickerModule"].forRoot(),
                    ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_10__["TimepickerModule"].forRoot(),
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=nft-user-user-module.js.map