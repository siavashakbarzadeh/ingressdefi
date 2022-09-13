(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nft-create-item-create-item-module"],{

/***/ "./src/app/pages/nft/create-item/create-item.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/nft/create-item/create-item.component.ts ***!
  \****************************************************************/
/*! exports provided: CreateItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateItemComponent", function() { return CreateItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/services/api/data.service */ "./src/app/common/services/api/data.service.ts");
/* harmony import */ var src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/toaster/toaster.service */ "./src/app/common/toaster/toaster.service.ts");
/* harmony import */ var src_app_common_services_metamask_nft_nft_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/services/metamask/nft/nft.service */ "./src/app/common/services/metamask/nft/nft.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function CreateItemComponent_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Item Image is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateItemComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateItemComponent_div_23_div_1_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.item_img.errors.required);
} }
function CreateItemComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please Upload Valid File.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateItemComponent_div_31_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Item Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateItemComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateItemComponent_div_31_div_1_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.item_name.errors.required);
} }
function CreateItemComponent_div_48_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Item Description is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateItemComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateItemComponent_div_48_div_1_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.f.description.errors.required);
} }
function CreateItemComponent_div_60_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Item Price is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateItemComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateItemComponent_div_60_div_1_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.f.price.errors.required);
} }
function CreateItemComponent_button_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateItemComponent_label_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class CreateItemComponent {
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
        this.co_form = this.formBuilder.group({
            item_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            item_img: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            caddress: [""],
        });
        this.itemObj.pagekey = this.activatedRoute.snapshot.queryParamMap.get('id');
        var collectionId = decodeURIComponent(this.itemObj.pagekey);
        this.pageKey = collectionId;
        this.getCollection(collectionId);
    }
    get f() { return this.co_form.controls; }
    changeTab(type) {
        console.log(type, 'tab type');
        this.tabsingle = (type == 'single') ? true : false;
    }
    saleType(val) {
        console.log(val, 'sale');
        this.saletype = val;
        console.log(this.saletype, 'sale');
    }
    quantities() {
        return this.co_form.get("properties");
    }
    newQuantity() {
        return this.formBuilder.group({
            name: '',
            value: '',
        });
    }
    addQuantity() {
        this.quantities().push(this.newQuantity());
    }
    removeQuantity(i) {
        this.quantities().removeAt(i);
    }
    quantities1() {
        return this.co_form.get("stats");
    }
    newQuantity1() {
        return this.formBuilder.group({
            name: '',
            value: '',
        });
    }
    addQuantity1() {
        this.quantities1().push(this.newQuantity1());
    }
    removeQuantity1(i) {
        this.quantities1().removeAt(i);
    }
    getCollection(collectionId) {
        if (collectionId) {
            this.service.postRequest('collection/findCollection', { id: collectionId }).subscribe((success) => {
                let reponseData = success;
                if (reponseData.status) {
                }
                else {
                    this.toasterService.show(false, reponseData.msg);
                }
            });
        }
        else {
            this.toasterService.show(false, 'Something went wrong');
            this.route.navigate(['collection']);
        }
    }
    onChanged(event) {
        let reader = new FileReader();
        const name = event.target.name;
        const file = event.target.files[0];
        let typeFile = event.target.files[0].type;
        let file_size = event.target.files[0].size / 720 / 720;
        if (typeFile != "image/png" && typeFile != "image/jpg" && typeFile != "image/jpeg") {
            this.fileerr = true;
            return;
        }
        if (file_size >= 2) {
            this.fileerr = true;
            return;
        }
        reader.onload = (e) => {
            var img = new Image();
            img.src = e.target.result;
            this.itemObj.image = e.target.result;
        };
        this.fileerr = false;
        this.upload = true;
        reader.readAsDataURL(file);
        this.itemObj.item_image = file;
    }
    onSubmit() {
        this.submitted = true;
        console.log('form submited', this.co_form.value);
        if (this.co_form.invalid) {
            return;
        }
        this.msubmitted = true;
        let datas = this.co_form.value;
        console.log(datas, 'datas');
        const formData = new FormData();
        if (datas.properties != undefined && datas.properties.length) {
            console.log('yes properties');
            var propaToS = JSON.stringify(Object.assign({}, datas.properties));
            formData.append('properties', propaToS);
        }
        if (datas.stats != undefined && datas.stats.length) {
            console.log('yes stats');
            var StatsaToS = JSON.stringify(Object.assign({}, datas.stats));
            formData.append('stats', StatsaToS);
        }
        this.itemObj.caddress = this.service.metaDeatails.account;
        formData.append('collectionId', this.pageKey);
        formData.append('name', this.itemObj.item_name);
        formData.append('description', this.itemObj.description);
        formData.append('external_link', this.itemObj.external_link);
        formData.append('metadata', this.itemObj.metadata);
        formData.append('content', this.itemObj.content);
        formData.append('price', this.itemObj.price);
        formData.append('objtype', (this.tabsingle == true) ? 'single' : 'multiple');
        if (typeof this.itemObj.item_image['name'] != 'undefined' && typeof this.itemObj.item_image['name'] != undefined) {
            formData.append('item_img', this.itemObj.item_image);
        }
        else {
            formData.append('item_img', this.itemObj.item_image);
        }
        var add = this.service.metaDeatails.account;
        this.itemObj.caddress = this.service.metaDeatails.account;
        console.log(this.service.metaDeatails.account, "++++ this.service.metaDeatails.account");
        formData.append('caddress', this.itemObj.caddress);
        console.log(formData, "}}}}}}}} formData");
        // formData.append('caddress': this.service.metaDeatails.account );
        console.log("this.service.metaDeatails.accountthis.service.metaDeatails.accountthis.service.metaDeatails.account", this.service.metaDeatails.account);
        //this.itemArr = formData;
        //this.itemArr.push({'caddress':this.service.metaDeatails.account});
        // this.itemArr.push({"caddress": this.itemObj.caddress});
        //this.itemArr.caddress  =  this.service.metaDeatails.account; 
        this.service.filePostRequest('collection/createItem', formData).subscribe((reqData) => {
            console.log(reqData, 'reqData');
            if (reqData.status) {
                console.log('before nft service call');
                /*this.nftService.GetTokenURI(reqData.allowed).then((suc: any) => {
                  console.log(suc, 'nftservice suc');
                });*/
                console.log('after nft service call');
                this.toasterService.show(true, reqData.msg);
            }
            else {
                this.toasterService.show(false, reqData.msg);
            }
            this.route.navigate(['collection']);
        });
    }
}
CreateItemComponent.ɵfac = function CreateItemComponent_Factory(t) { return new (t || CreateItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_services_metamask_nft_nft_service__WEBPACK_IMPORTED_MODULE_5__["NftService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"])); };
CreateItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateItemComponent, selectors: [["app-create-item"]], decls: 65, vars: 26, consts: [[1, "digital-art-sec"], [1, "middle-section"], [1, "container", "tabpages-cnt"], [1, "row"], [1, "col-lg-12"], [1, "section-title", "text-left"], [1, "text-center"], [1, "nav", "nav-tabs", "tab-cnt"], [3, "formGroup", "ngSubmit"], [1, "col-md-12", "col-sm-12", "col-lg-12", "col-xl-12"], [1, "form-group"], ["for", "logo", 1, "mb-0", "pb-0", "font-16", "text-black", "fontweight-400", "mb-2", "text-black"], [1, "text-danger"], ["for", "logo", 1, "mb-0", "pb-0", "font-14", "mb-4", "text-black", "fontweight-400", "text-black"], [1, "mt-2"], ["for", "file-upload", 1, "custom-file-upload", "d-xl-flex", "d-lg-flex", "align-items-center"], ["alt", "customFile", 1, "cursor-pointer", "w-100-res", 3, "src"], ["id", "file-upload", "formControlName", "item_img", "name", "item_img", "type", "file", "accept", ".jpg,.jpeg,.png", "required", "", 2, "display", "none", 3, "ngClass", "change"], ["class", "invalid-feedback", 4, "ngIf"], ["class", "text-danger", 4, "ngIf"], [1, "form-group", "mt-4"], ["for", "name", 1, "pb-0", "font-16", "text-black", "fontweight-400", "mb-2"], ["type", "text", "formControlName", "item_name", "placeholder", "Item Name", "required", "", 1, "form-control", "input-sec", "font-16", "fontweight-400", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "yourName", 1, "mb-2", "pb-0", "font-16", "text-black", "fontweight-400"], [1, "mb-3", "pb-0", "font-16", "fontweight-400", "mb-2"], ["type", "text", "formControlName", "external_link", "placeholder", "https://yoursite.io/item/123", 1, "form-control", "input-sec", "font-16", "fontweight-400", 3, "ngModel", "ngModelChange"], ["type", "text", "formControlName", "description", "placeholder", "Provide a detailed description of your item.", "required", "", 1, "form-control", "input-sec", "font-16", "fontweight-400", 3, "ngModel", "ngClass", "ngModelChange"], ["type", "text", "formControlName", "price", "placeholder", "Price", "required", "", 1, "form-control", "input-sec", "font-16", "fontweight-400", 3, "ngModel", "ngClass", "ngModelChange"], ["type", "hidden", "formControlName", "caddress", "value", "0", 1, "form-control", "input-sec", "font-16", "fontweight-400", 3, "ngModel", "ngModelChange"], [1, "text-left"], ["class", "btn default-btn mt-4", "data-toggle", "modal", 4, "ngIf"], ["class", "btn default-btn mt-4", 4, "ngIf"], [1, "invalid-feedback"], [4, "ngIf"], ["data-toggle", "modal", 1, "btn", "default-btn", "mt-4"], [1, "btn", "default-btn", "mt-4"]], template: function CreateItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Create New Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CreateItemComponent_Template_form_ngSubmit_9_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Choose Image ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "File Types supported JPG,JPEG,PNG,GIF max 100 MB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateItemComponent_Template_input_change_22_listener($event) { return ctx.onChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CreateItemComponent_div_23_Template, 2, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CreateItemComponent_div_24_Template, 2, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateItemComponent_Template_input_ngModelChange_30_listener($event) { return ctx.itemObj.item_name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, CreateItemComponent_div_31_Template, 2, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "External Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "It Will Include a link to this URL on this item detail page so that user can click ti learn more about it you are welcome to link to your own webpage with move details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateItemComponent_Template_input_ngModelChange_38_listener($event) { return ctx.itemObj.external_link = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "The description will be included on the item's detail page underneath its image. Markdown syntax is supported. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateItemComponent_Template_input_ngModelChange_47_listener($event) { return ctx.itemObj.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, CreateItemComponent_div_48_Template, 2, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Pricce (BNB).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateItemComponent_Template_input_ngModelChange_59_listener($event) { return ctx.itemObj.price = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, CreateItemComponent_div_60_Template, 2, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateItemComponent_Template_input_ngModelChange_61_listener($event) { return ctx.itemObj.caddress = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, CreateItemComponent_button_63_Template, 2, 0, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, CreateItemComponent_label_64_Template, 2, 0, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.co_form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.itemObj.image ? ctx.itemObj.image : "assets/images/img-upload1.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, ctx.submitted && ctx.f.item_img.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.item_img.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fileerr);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.itemObj.item_name)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, ctx.submitted && ctx.f.item_name.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.item_name.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.itemObj.external_link);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.itemObj.description)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c0, ctx.submitted && ctx.f.description.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.description.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.itemObj.price)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c0, ctx.submitted && ctx.f.price.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.price.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.itemObj.caddress);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.msubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.msubmitted);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25mdC9jcmVhdGUtaXRlbS9jcmVhdGUtaXRlbS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-item',
                templateUrl: './create-item.component.html',
                styleUrls: ['./create-item.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }, { type: src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"] }, { type: src_app_common_services_metamask_nft_nft_service__WEBPACK_IMPORTED_MODULE_5__["NftService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/nft/create-item/create-item.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/nft/create-item/create-item.module.ts ***!
  \*************************************************************/
/*! exports provided: CreateItemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateItemModule", function() { return CreateItemModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _create_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-item.component */ "./src/app/pages/nft/create-item/create-item.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_bootstrap_tooltip___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/tooltip/ */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
/* harmony import */ var src_app_common_loader_loader_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/loader/loader.module */ "./src/app/common/loader/loader.module.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");












const routes = [
    {
        path: "",
        component: _create_item_component__WEBPACK_IMPORTED_MODULE_3__["CreateItemComponent"],
    },
];
class CreateItemModule {
}
CreateItemModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CreateItemModule });
CreateItemModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CreateItemModule_Factory(t) { return new (t || CreateItemModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            src_app_common_loader_loader_module__WEBPACK_IMPORTED_MODULE_6__["LoaderModule"],
            ngx_bootstrap_tooltip___WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CreateItemModule, { declarations: [_create_item_component__WEBPACK_IMPORTED_MODULE_3__["CreateItemComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], src_app_common_loader_loader_module__WEBPACK_IMPORTED_MODULE_6__["LoaderModule"], ngx_bootstrap_tooltip___WEBPACK_IMPORTED_MODULE_5__["TooltipModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateItemModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_create_item_component__WEBPACK_IMPORTED_MODULE_3__["CreateItemComponent"]],
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
//# sourceMappingURL=nft-create-item-create-item-module.js.map