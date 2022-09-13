(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _pages_nft_userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/nft/userprofile/userprofile.component */ "./src/app/pages/nft/userprofile/userprofile.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/privacy/privacy.component */ "./src/app/pages/privacy/privacy.component.ts");
/* harmony import */ var _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/blog/blog.component */ "./src/app/pages/blog/blog.component.ts");
/* harmony import */ var _pages_blogdetails_blogdetails_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/blogdetails/blogdetails.component */ "./src/app/pages/blogdetails/blogdetails.component.ts");










const routes = [
    /*{
      path: environment.baseUrl + '/auth',
      loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    },*/
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    {
        path: "",
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./pages/pages.module */ "./src/app/pages/pages.module.ts")).then((m) => m.PagesModule),
    },
    /*{
      path: '404',
      loadChildren: () =>
        import('./pagenotfound/pagenotfound.module').then(
          (m) => m.PagenotfoundModule
        ),
    },*/
    { path: 'ipblock', loadChildren: () => __webpack_require__.e(/*! import() | ipblack-ipblack-module */ "ipblack-ipblack-module").then(__webpack_require__.bind(null, /*! ./ipblack/ipblack.module */ "./src/app/ipblack/ipblack.module.ts")).then(m => m.IpblackModule) },
    { path: 'privacy', component: _pages_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_5__["PrivacyComponent"] },
    { path: 'blogs', component: _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_6__["BlogComponent"] },
    { path: 'blog-details', component: _pages_blogdetails_blogdetails_component__WEBPACK_IMPORTED_MODULE_7__["BlogdetailsComponent"] },
    { path: 'userprofile/:userName', component: _pages_nft_userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_0__["UserprofileComponent"] },
];
/*const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'activity', component: ActivityComponent},
  {path: 'collection', component: CollectionComponent},
  {path: 'create-item', component: CreateItemComponent},
  {path: 'farm', component: FarmComponent},
  {path: 'feature', component: FeatureComponent},
  {path: 'login', component: LoginComponent},
  {path: 'login-address', component: LoginAddressComponent},
  {path: 'market', component: MarketComponent},
  {path: 'market-detail', component: MarketDetailComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'reference-links', component: ReferenceLinksComponent},
  {path: 'search', component: SearchComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'staking', component: StakingComponent},
  {path: 'staking2', component: Staking2Component},
  {path: 'top-collectors', component: TopCollectorsComponent},
  {path: 'trade', component: TradeComponent},
  {path: 'mainpage', component: MainpageComponent},
  ];*/
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes), _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes), _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _common_services_api_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/services/api/data.service */ "./src/app/common/services/api/data.service.ts");
/* harmony import */ var _common_services_metamask_common_metamask_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/services/metamask/common/metamask.service */ "./src/app/common/services/metamask/common/metamask.service.ts");
/* harmony import */ var _common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/toaster/toaster.service */ "./src/app/common/toaster/toaster.service.ts");
/* harmony import */ var _common_services_metamask_common_contract_common_contract_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/services/metamask/common-contract/common-contract.service */ "./src/app/common/services/metamask/common-contract/common-contract.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_common_toaster_toaster_container_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/common/toaster/toaster-container.component */ "./src/app/common/toaster/toaster-container.component.ts");













function AppComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-toaster-container");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
const _c0 = function (a0) { return { "is-open": a0 }; };
class AppComponent {
    constructor(document, dataService, metaMaskService, toasterService, changeDetectorRef, commonContractService, meta, title, router) {
        this.document = document;
        this.dataService = dataService;
        this.metaMaskService = metaMaskService;
        this.toasterService = toasterService;
        this.changeDetectorRef = changeDetectorRef;
        this.commonContractService = commonContractService;
        this.meta = meta;
        this.title = title;
        this.router = router;
        // title = 'ingressdefi';
        this.isLoginPermit = false;
        this.isIpValid = false;
        this.getIp();
        this.onActivate();
    }
    onWindowScroll() {
        if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
            document.getElementsByTagName("body")[0].classList.add("navbgset");
        }
        else {
            document.getElementsByTagName("body")[0].classList.remove("navbgset");
        }
    }
    onActivate() {
        window.scrollTo(0, 0);
    }
    allowToSite() {
        this.checkChainId();
        this.accountChange();
        this.netWorkChange();
        this.mainChanges();
        this.metaCallCommonFunction();
    }
    getIp() {
        this.dataService
            .postRequest("admin/chkipaddress", {})
            .subscribe((resData) => {
            this.isIpValid = true;
            if (resData.status == true) {
                this.router.navigate(["ipblock"]);
                // localStorage.clear();
            }
            else {
                this.allowToSite();
            }
        });
    }
    metaCallCommonFunction() {
        //  After Check
        this.dataService.isMetaReady.subscribe((suc) => {
            if (suc) {
                this.commonContractService.getGovernanceTokenBalance();
                setTimeout(() => {
                    this.changeDetectorRef.detectChanges();
                }, 100);
            }
        });
        //  Before Check
        if (this.dataService.metaDeatails.isMetaLogin) {
            this.commonContractService.getGovernanceTokenBalance();
            setTimeout(() => {
                this.changeDetectorRef.detectChanges();
            }, 100);
        }
    }
    ngOnInit() {
        let isLoginPermit = localStorage.getItem("isLoginPermit");
        this.connectionMetaMask();
        if (isLoginPermit) {
            this.isLoginPermit = true;
            // this.connectionMetaMask();
        }
        this.siteSettings();
    }
    mainChanges() {
        this.dataService.changeDetector.subscribe((suc) => {
            // console.log(suc, "____________________ suc");
            this.changeDetectorRef.detectChanges();
        });
    }
    accountChange() {
        let accountChange = this.dataService.accountsChanged.subscribe((suc) => {
            // console.log(suc, "_____________ suc");
            this.connectionMetaMask();
        });
    }
    netWorkChange() {
        this.dataService.networkChanged.subscribe((suc) => {
            let responseData = suc;
            if (responseData == src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].chainid) {
            }
            else {
                this.dataService.metaLogout();
                this.toasterService.show(false, "Change Your Network To Biance mainnet");
                this.changeDetectorRef.detectChanges();
                setTimeout(() => {
                    this.changeDetectorRef.detectChanges();
                }, 3000);
            }
        });
    }
    checkChainId() {
        this.metaMaskService.checkChainId().then((suc) => {
            let responseData = suc;
            // console.log(responseData, "_________ sucess");
            if (responseData.status) {
            }
            else {
                this.metaMaskService.addNetwork().then((suc) => {
                    // console.log(suc, "_________ sucess");
                });
            }
        });
    }
    connectionMetaMask() {
        this.metaMaskService.connectMetaMask().then((suc) => {
            let responseData = suc;
            // console.log(this.dataService.metaDeatails.account, " this.dataService.metaDeatails.account");
            if (!responseData.status) {
                this.toasterService.show(false, responseData.message);
                setTimeout(() => {
                    this.changeDetectorRef.detectChanges();
                }, 3000);
            }
            else {
                this.GetEbalance();
            }
            this.changeDetectorRef.detectChanges();
        });
    }
    GetEbalance() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.metaMaskService
                .GetEbalance()
                .then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                // console.log(result, "result");
                if (result.status) {
                    this.dataService.metaDeatails.balance = result.balance;
                    console.log(this.dataService.metaDeatails.balance);
                }
                else {
                }
                this.changeDetectorRef.detectChanges();
            }))
                .catch((error) => { });
        });
    }
    siteSettings() {
        this.dataService.getRequest("get_site").subscribe((suc) => {
            if (suc.status) {
                this.dataService.siteData = suc.data;
                this.setSeo();
                this.changeDetectorRef.detectChanges();
            }
        });
    }
    setSeo() {
        this.meta.addTags([
            { name: "description", content: this.dataService.siteData.site_name },
            { name: "author", content: this.dataService.siteData.site_name },
            { name: "keywords", content: this.dataService.siteData.site_name },
        ]);
        this.setTitle(this.dataService.siteData.site_name);
        this.addNode();
    }
    setTitle(newTitle) {
        this.title.setTitle(newTitle);
    }
    addNode() {
        var linkElement = document.createElement("link");
        linkElement.setAttribute("id", this.dataService.siteData.site_name);
        linkElement.setAttribute("rel", "icon");
        linkElement.setAttribute("type", 'image/png"');
        linkElement.setAttribute("href", "/assets/images/favicon.png");
        document.head.appendChild(linkElement);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_common_services_metamask_common_metamask_service__WEBPACK_IMPORTED_MODULE_5__["MetamaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_6__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_common_services_metamask_common_contract_common_contract_service__WEBPACK_IMPORTED_MODULE_7__["CommonContractService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function AppComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, decls: 6, vars: 4, consts: [[1, "overlay", "overlayFull", "is-open", 3, "ngClass"], [1, "overlay-msg"], [1, "waviy"], [4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Please wait, your request is processing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AppComponent_ng_container_5_Template, 3, 0, "ng-container", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, ctx.dataService.isOverlay));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isIpValid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterOutlet"], src_app_common_toaster_toaster_container_component__WEBPACK_IMPORTED_MODULE_10__["ToasterContainerComponent"]], styles: [".overlayFull[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 9999;\n  width: 100%;\n  height: 100%;\n  background: rgba(154,46,255,11%);\n  opacity: 0;\n  visibility: hidden;\n  transition: 0.3s linear;\n  transform: translateY(-100%);\n}\n\n.overlayFull.is-open[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  transform: translateY(0);\n}\n\n.overlay-msg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 5%;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  color: #fffefb;\n  align-items: flex-start;\n  background: #a0791a;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm92ZXJsYXlGdWxsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDk5OTk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTU0LDQ2LDI1NSwxMSUpO1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IDAuM3MgbGluZWFyO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xufVxuXG4ub3ZlcmxheUZ1bGwuaXMtb3BlbiB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbn1cblxuLm92ZXJsYXktbXNnIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmZWZiO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgYmFja2dyb3VuZDogI2EwNzkxYTtcbiAgcGFkZGluZzogMTBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }] }, { type: _common_services_api_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }, { type: _common_services_metamask_common_metamask_service__WEBPACK_IMPORTED_MODULE_5__["MetamaskService"] }, { type: _common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_6__["ToasterService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _common_services_metamask_common_contract_common_contract_service__WEBPACK_IMPORTED_MODULE_7__["CommonContractService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Meta"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }]; }, { onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ["window:scroll"]
        }] }); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _pages_nft_userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/nft/userprofile/userprofile.component */ "./src/app/pages/nft/userprofile/userprofile.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _common_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/header/header.component */ "./src/app/common/header/header.component.ts");
/* harmony import */ var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/footer/footer.component */ "./src/app/common/footer/footer.component.ts");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm2015/ngx-bootstrap-tabs.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/privacy/privacy.component */ "./src/app/pages/privacy/privacy.component.ts");
/* harmony import */ var _pages_login_address_login_address_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/login-address/login-address.component */ "./src/app/pages/login-address/login-address.component.ts");
/* harmony import */ var _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/blog/blog.component */ "./src/app/pages/blog/blog.component.ts");
/* harmony import */ var _pages_blogdetails_blogdetails_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/blogdetails/blogdetails.component */ "./src/app/pages/blogdetails/blogdetails.component.ts");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/pages.module */ "./src/app/pages/pages.module.ts");










// import { LayoutComponent } from './layout/layout.component';













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _pages_pages_module__WEBPACK_IMPORTED_MODULE_19__["PagesModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_1__["NgxPaginationModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(),
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_12__["TabsModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
        _common_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
        _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
        // FarmComponent,
        _pages_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
        _pages_login_address_login_address_component__WEBPACK_IMPORTED_MODULE_16__["LoginAddressComponent"],
        _pages_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_15__["PrivacyComponent"],
        _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_17__["BlogComponent"],
        _pages_blogdetails_blogdetails_component__WEBPACK_IMPORTED_MODULE_18__["BlogdetailsComponent"],
        _pages_nft_userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_0__["UserprofileComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _pages_pages_module__WEBPACK_IMPORTED_MODULE_19__["PagesModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_1__["NgxPaginationModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_12__["TabsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                    _common_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                    _pages_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                    _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                    // FarmComponent,
                    _pages_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                    _pages_login_address_login_address_component__WEBPACK_IMPORTED_MODULE_16__["LoginAddressComponent"],
                    _pages_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_15__["PrivacyComponent"],
                    _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_17__["BlogComponent"],
                    _pages_blogdetails_blogdetails_component__WEBPACK_IMPORTED_MODULE_18__["BlogdetailsComponent"],
                    _pages_nft_userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_0__["UserprofileComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _pages_pages_module__WEBPACK_IMPORTED_MODULE_19__["PagesModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_1__["NgxPaginationModule"],
                    ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(),
                    ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_12__["TabsModule"].forRoot()
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _common_services_api_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/services/api/data.service */ "./src/app/common/services/api/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/toaster/toaster.service */ "./src/app/common/toaster/toaster.service.ts");






class AuthGuard {
    constructor(dataService, route, toasterService) {
        this.dataService = dataService;
        this.route = route;
        this.toasterService = toasterService;
    }
    canActivate(next, state) {
        return this.dataService.checkProfile().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(res => {
            if (res.success == 1) {
                return true;
            }
            else if (res.success == 2) {
                this.toasterService.show(false, 'Please fill your profile details');
                this.route.navigate(['edit-profile']);
                return false;
            }
            else if (res.success == 3) {
                this.route.navigate(['/']);
                return false;
            }
            else {
                return false;
            }
        }));
        // return true;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _common_services_api_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/common/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/services/api/data.service */ "./src/app/common/services/api/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class FooterComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.footer = {};
    }
    ngOnInit() {
        this.dataService.footerContent.subscribe((response) => {
            this.footer = response;
        });
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 58, vars: 3, consts: [[1, "footer-sec"], [1, "container"], [1, "row"], [1, "col-lg-3"], ["src", "assets/images/logo.png", 1, "img-fluid", "mb-4"], [1, "footer-heading"], ["href", ""], [3, "routerLink"], [1, "col-lg-12", "d-flex", "justify-content-center", "copyrights-cnt"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Community");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Editorial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Discord");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Help center");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Join Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Become a Creator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Become a User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Legal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Community Guidelines");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Terms Of Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Report Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\u00A9 2021 ingress defi Networks, Inc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.footer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/blogs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/privacy");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return [{ type: src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/common/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_assets_files_contract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/files/contract */ "./src/assets/files/contract.ts");
/* harmony import */ var src_app_common_services_metamask_common_metamask_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/services/metamask/common/metamask.service */ "./src/app/common/services/metamask/common/metamask.service.ts");
/* harmony import */ var src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/toaster/toaster.service */ "./src/app/common/toaster/toaster.service.ts");
/* harmony import */ var src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/services/api/data.service */ "./src/app/common/services/api/data.service.ts");
/* harmony import */ var src_app_common_services_metamask_common_contract_common_contract_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/services/metamask/common-contract/common-contract.service */ "./src/app/common/services/metamask/common-contract/common-contract.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");


// import WalletConnectQRCodeModal from "@walletconnect/qrcode-modal";










const _c0 = ["connectModal"];
const _c1 = ["template"];
function HeaderComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Dashboard ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/dashboard");
} }
function HeaderComponent_li_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Bal ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 1, ctx_r1.balance, "1.4-4"), " ");
} }
function HeaderComponent_li_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.accountShort, " ");
} }
function HeaderComponent_li_24_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_li_24_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_25_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_li_25_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](27); return ctx_r11.openModal(_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Sign In");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Connect Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_ng_template_26_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.modalRef == null ? null : ctx_r13.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h3", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_ng_template_26_Template_h3_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Login Your Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_ng_template_26_Template_a_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.connctEwallet("metamask", "login"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h5", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "MetaMask");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_ng_template_26_Template_a_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.connctEwallet("trustwallet", "login"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h5", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Wallet Connect");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_ng_template_26_Template_a_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.connctEwallet("binanceconnect", "login"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h5", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Binance Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_ng_template_26_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](29); ctx_r19.modalRef == null ? null : ctx_r19.modalRef.hide(); return ctx_r19.openModal(_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Create an Account? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_ng_template_28_div_30_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_ng_template_28_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HeaderComponent_ng_template_28_div_30_div_1_Template, 2, 0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r20.username.errors.required);
} }
function HeaderComponent_ng_template_28_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Username Already Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_ng_template_28_div_40_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_ng_template_28_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HeaderComponent_ng_template_28_div_40_div_1_Template, 2, 0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r20.auth.errors.required);
} }
function HeaderComponent_ng_template_28_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Mail Id Already Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_ng_template_28_button_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r20.invalid || !ctx_r27.cansubmit);
} }
function HeaderComponent_ng_template_28_label_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_ng_template_28_ng_template_50_Template(rf, ctx) { }
const _c2 = function (a0) { return { "has-error": a0 }; };
function HeaderComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Connect Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_ng_template_28_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r32.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h3", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Create an Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "form", 37, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function HeaderComponent_ng_template_28_Template_form_ngSubmit_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33); const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r34.onSubmit(_r20.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " User Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "input", 43, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focusout", function HeaderComponent_ng_template_28_Template_input_focusout_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r35.checkUsername($event.target.value); })("ngModelChange", function HeaderComponent_ng_template_28_Template_input_ngModelChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r36.username = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, HeaderComponent_ng_template_28_div_30_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, HeaderComponent_ng_template_28_div_31_Template, 3, 0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "input", 47, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focusout", function HeaderComponent_ng_template_28_Template_input_focusout_38_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r37.checkUsermail($event.target.value); })("ngModelChange", function HeaderComponent_ng_template_28_Template_input_ngModelChange_38_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r38.auth = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, HeaderComponent_ng_template_28_div_40_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, HeaderComponent_ng_template_28_div_41_Template, 3, 0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, HeaderComponent_ng_template_28_button_45_Template, 2, 1, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, HeaderComponent_ng_template_28_label_46_Template, 2, 0, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_ng_template_28_Template_button_click_48_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](27); ctx_r39.modalRef == null ? null : ctx_r39.modalRef.hide(); return ctx_r39.openModal(_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Login? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, HeaderComponent_ng_template_28_ng_template_50_Template, 0, 0, "ng-template");
} if (rf & 2) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](29);
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](39);
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r8.dataService.metaDeatails == null ? null : ctx_r8.dataService.metaDeatails.account, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r8.username)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c2, ctx_r8.submitted && ctx_r8.ngForm.controls.username.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.submitted && _r20.bid.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r21.valid && !ctx_r8.uname);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c2, ctx_r8.submitted && ctx_r8.ngForm.controls.auth.errors))("ngModel", ctx_r8.auth);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.submitted && _r20.auth.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r24.valid && !ctx_r8.mail);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r8.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.submitted);
} }
class HeaderComponent {
    constructor(metamaskService, toasterService, dataService, commonContractService, modalService, router, changeDetectorRef) {
        this.metamaskService = metamaskService;
        this.toasterService = toasterService;
        this.dataService = dataService;
        this.commonContractService = commonContractService;
        this.modalService = modalService;
        this.router = router;
        this.changeDetectorRef = changeDetectorRef;
        this.openMenu = true;
        this.isCollapsed = true;
        this.isMobile = false;
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.mobileWidth = 768;
        this.submitted = false;
        this.mail = true;
        this.uname = true;
        this.cansubmit = false;
        this.editObj = {};
        this.wallets = [
            {
                name: "Meta Mask",
                img: "assets/images/wallet1.png",
                id: "metamask",
            },
            {
                name: "Trust Wallet",
                img: "assets/images/wallet2.png",
                id: "trustwallet",
            },
            {
                name: "Math Wallet",
                img: "assets/images/wallet3.png",
                id: "mathwallet",
            },
            {
                name: "Wallet Connect",
                img: "assets/images/wallet4.png",
                id: "walletconnect",
            },
            {
                name: "Binance Chain Wallet",
                img: "assets/images/wallet5.png",
                id: "binanceconnect",
            },
        ];
        this.dataService.modelSignup.subscribe((suc) => {
            this.openModal(this.template);
        });
    }
    ngOnInit() {
        this.dataService.isOverlay = false;
        this.isLogin = localStorage.getItem('Game-Token');
        this.isMobile = this.width < this.mobileWidth;
        const bodycls = document.getElementsByTagName("body")[0];
        if (this.isMobile === true) {
            bodycls.classList.remove("menuopen");
            bodycls.classList.remove("menuopencollapse");
            bodycls.classList.add("mobmenuclose");
            this.openMenu = false;
        }
        else {
            this.openMenu = true;
            bodycls.classList.remove("mobmenumpen");
            bodycls.classList.remove("mobmenuclose");
            bodycls.classList.add("menuopen");
        }
        // this.getGovernanceTokenBalance();
        if (this.isLogin) {
            console.log('logged in', this.dataService.metaDeatails.accountShort);
            this.accountShort = this.dataService.metaDeatails.accountShort;
            this.balance = this.dataService.metaDeatails.balance;
        }
        else {
            console.log('not logged in');
        }
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template);
    }
    openBsc() {
        this.dataService.openBscScan(this.dataService.metaDeatails.account);
    }
    copyAddress() {
        let copyText = this.dataService.metaDeatails.account.toString();
        let selBox = document.createElement("textarea");
        selBox.style.position = "fixed";
        selBox.style.left = "0";
        selBox.style.top = "0";
        selBox.style.opacity = "0";
        selBox.value = copyText;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand("copy");
        document.body.removeChild(selBox);
        this.toasterService.show(true, "Address Copied !");
    }
    logout() {
        this.dataService.metaLogout();
        // this.modalRef.hide();
        localStorage.clear();
        sessionStorage.clear();
        // this.router.navigateByUrl("/");
        location.reload();
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
    menuToggle() {
        const bodycls = document.getElementsByTagName("body")[0];
        this.openMenu = !this.openMenu;
        if (this.isMobile === false) {
            //desktop menu
            if (this.openMenu == true) {
                bodycls.classList.add("menuopen");
                bodycls.classList.remove("menuopencollapse");
            }
            else {
                bodycls.classList.add("menuopencollapse");
                bodycls.classList.remove("menuopen");
            }
        }
        else {
            //mobile menu
            if (this.openMenu == true) {
                bodycls.classList.add("mobmenumpen");
                bodycls.classList.remove("mobmenuclose");
            }
            else {
                bodycls.classList.add("mobmenuclose");
                bodycls.classList.remove("mobmenumpen");
            }
        }
    }
    onWindowResize(event) {
        this.width = event.target.innerWidth;
        this.height = event.target.innerHeight;
        this.isMobile = this.width < this.mobileWidth;
        const bodycls = document.getElementsByTagName("body")[0];
        if (this.isMobile === true) {
            bodycls.classList.remove("menuopen");
            bodycls.classList.remove("menuopencollapse");
            bodycls.classList.add("mobmenuclose");
            this.openMenu = false;
        }
        else {
            this.openMenu = true;
            bodycls.classList.remove("mobmenumpen");
            bodycls.classList.remove("mobmenuclose");
            bodycls.classList.add("menuopen");
        }
    }
    connctEwallet(walletname, type) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dataService.isOverlay = true;
            switch (walletname) {
                case "metamask":
                    sessionStorage.setItem("Wallettype", "metamask");
                    localStorage.setItem("Wallettype", "metamask");
                    true;
                    window.web3 = window.web3.currentProvider;
                    window.web3 = new window.Web3(window.ethereum);
                    // code block
                    break;
                case "trustwallet":
                    sessionStorage.setItem("Wallettype", "trustwallet");
                    localStorage.setItem("Wallettype", "trustwallet");
                    /* window.web3 = window.web3.currentProvider;
                     window.web3 = new window.Web3(window.ethereum);*/
                    const WalletConnectProvider = window.WalletConnectProvider.default;
                    // e8e762395a9efa832e0efe9c2c71f82b
                    var providerType = new WalletConnectProvider({
                        infuraId: "70d5d454064e41b9af24a64296e22c89",
                        rpc: { 97: "https://data-seed-prebsc-1-s1.binance.org:8545/" },
                    });
                    sessionStorage.setItem("Wallettype", "walletconnect");
                    localStorage.setItem("Wallettype", "walletconnect");
                    window.web3 = new window.Web3(providerType);
                    // code block
                    break;
                case "mathwallet":
                    sessionStorage.setItem("Wallettype", "mathwallet");
                    localStorage.setItem("Wallettype", "mathwallet");
                    window.web3 = window.web3.currentProvider;
                    window.web3 = new window.Web3(window.ethereum);
                    // code block
                    break;
                case "walletconnect":
                    // this.connector = new WalletConnect({
                    //   bridge: "https://bridge.walletconnect.org" // Required
                    // });
                    sessionStorage.setItem("Wallettype", "walletconnect");
                    localStorage.setItem("Wallettype", "walletconnect");
                    window.web3 = window.web3.currentProvider;
                    window.web3 = new window.Web3(window.ethereum);
                    // code block
                    break;
                case "binanceconnect":
                    sessionStorage.setItem("Wallettype", "binanceconnect");
                    localStorage.setItem("Wallettype", "binanceconnect");
                    // await BinanceChain.enable();
                    window.web3 = new window.Web3(window.BinanceChain);
                    // code block
                    break;
                default:
                // code block
            }
            if (walletname == "metamask") {
                /*  this.metamaskService.connectMetaMask("clicked").then((suc) => {
              let responseData: any = suc;
              this.toaster.success(responseData.message);
              if (responseData.status) {
              this.GetANTNbalance();
              sessionStorage.setItem("isMetaLogin", "true");
              this.connectModal.hide();
              }
              });*/
                // return false;
                this.metamaskService.connectMetaMask("clicked").then((suc) => {
                    let responseData = suc;
                    if (responseData.status) {
                        if (type == 'login') {
                            this.dataService.postRequest('users/checksignin', { key: this.dataService.metaDeatails.account }).subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                if (res.status) {
                                    localStorage.setItem("Game-Token", res.gametoken);
                                    this.toasterService.show(res.status, res.message);
                                    yield this.GetEbalance();
                                    this.accountShort = this.dataService.metaDeatails.accountShort;
                                    this.balance = this.dataService.metaDeatails.balance;
                                    sessionStorage.setItem("isMetaLogin", "true");
                                    this.dataService.isOverlay = false;
                                    this.modalRef.hide();
                                    this.closeAllModals();
                                    this.changeDetectorRef.detectChanges();
                                }
                                else {
                                    this.dataService.isOverlay = false;
                                    this.toasterService.show(false, 'Invalid User Address. Please Signup');
                                }
                            }));
                        }
                    }
                });
            }
            else if (walletname == "binanceconnect") {
                this.metamaskService.connectMetaMask("clicked").then((suc) => {
                    let responseData = suc;
                    if (responseData.status) {
                        if (type == 'login') {
                            this.dataService.postRequest('users/checksignin', { key: this.dataService.metaDeatails.account }).subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                if (res.status) {
                                    localStorage.setItem("Game-Token", res.gametoken);
                                    this.toasterService.show(res.status, res.message);
                                    yield this.GetEbalance();
                                    this.accountShort = this.dataService.metaDeatails.accountShort;
                                    this.balance = this.dataService.metaDeatails.balance;
                                    sessionStorage.setItem("isMetaLogin", "true");
                                    this.dataService.isOverlay = false;
                                    this.modalRef.hide();
                                    this.closeAllModals();
                                    this.changeDetectorRef.detectChanges();
                                }
                                else {
                                    this.dataService.isOverlay = false;
                                    this.toasterService.show(false, 'Invalid User Address. Please Signup');
                                }
                            }));
                        }
                    }
                });
            }
            else {
                providerType.enable().then((accounts) => {
                    this.dataService.metaDeatails.account = accounts[0];
                    this.GetEbalance();
                    this.balance = this.dataService.metaDeatails.balance;
                    let first = accounts[0].substring(0, 3);
                    let last = accounts[0].substring(38, 42);
                    this.dataService.metaDeatails.accountShort = `${first}...${last}`;
                    this.dataService.metaDeatails.isMetaLogin = true;
                    this.dataService.isMetaReady.emit(true);
                    this.accountShort = this.dataService.metaDeatails.accountShort;
                    localStorage.setItem("isLoginPermit", "true");
                    this.dataService.postRequest('users/checksignin', { key: this.dataService.metaDeatails.account }).subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        if (res.status) {
                            localStorage.setItem("Game-Token", res.gametoken);
                            this.toasterService.show(res.status, res.message);
                            yield this.GetEbalance();
                            this.accountShort = this.dataService.metaDeatails.accountShort;
                            this.balance = this.dataService.metaDeatails.balance;
                            sessionStorage.setItem("isMetaLogin", "true");
                            this.dataService.isOverlay = false;
                            this.modalRef.hide();
                            this.closeAllModals();
                            this.changeDetectorRef.detectChanges();
                        }
                        else {
                            this.dataService.isOverlay = false;
                            this.toasterService.show(false, 'Invalid User Address. Please Signup');
                        }
                    }));
                });
            }
        });
    }
    onSubmit(val) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let obj = {};
            this.dataService.isOverlay = true;
            if (!this.dataService.metaDeatails.account) {
                this.metamaskService.connectMetaMask("clicked").then((suc) => {
                    let responseData = suc;
                    if (responseData.status) {
                        obj = {
                            'auth': val.auth,
                            'username': val.username,
                            'address': this.dataService.metaDeatails.account
                        };
                    }
                    else {
                        this.dataService.isOverlay = false;
                        this.toasterService.show(responseData.status, responseData.message);
                    }
                });
            }
            else {
                obj = {
                    'auth': val.auth,
                    'username': val.username,
                    'address': this.dataService.metaDeatails.account
                };
                // this.toasterService.show(false, 'Something went wrong, Please Try again.');
            }
            console.log(obj, 'check obj');
            this.dataService.postRequest('users/createProfile', obj).subscribe((res) => {
                if (res.status) {
                    localStorage.setItem("Game-Token", res.gametoken);
                    this.toasterService.show(res.status, res.message);
                    this.GetEbalance();
                    this.accountShort = this.dataService.metaDeatails.accountShort;
                    this.balance = this.dataService.metaDeatails.balance;
                    sessionStorage.setItem("isMetaLogin", "true");
                    this.dataService.isOverlay = false;
                    this.modalRef.hide();
                    this.closeAllModals();
                }
                else {
                    this.dataService.isOverlay = false;
                    this.toasterService.show(res.status, res.message);
                }
            });
        });
    }
    checkUsername(val) {
        this.dataService.postRequest('users/checkuserData', { 'username': val }).subscribe((res) => {
            if (res.status) {
                this.uname = true;
                this.cansubmit = true;
                console.log('true..', this.uname);
            }
            else {
                this.uname = false;
                this.cansubmit = false;
                console.log('false..', this.uname);
            }
        });
    }
    checkUsermail(val) {
        this.dataService.postRequest('users/checkuserData', { 'auth': val }).subscribe((res) => {
            if (res.status) {
                this.mail = true;
                this.cansubmit = true;
            }
            else {
                this.mail = false;
                this.cansubmit = false;
            }
        });
    }
    GetEbalance() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.metamaskService
                .GetEbalance()
                .then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (result.status) {
                    this.dataService.metaDeatails.balance = result.balance;
                    this.router.navigate(["dashboard"]);
                    this.dataService.activeUrl('dashboard');
                }
                else {
                }
            }))
                .catch((error) => { });
        });
    }
    closeAllModals() {
        for (let i = 1; i <= this.modalService.getModalsCount(); i++) {
            this.modalService.hide();
        }
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_services_metamask_common_metamask_service__WEBPACK_IMPORTED_MODULE_3__["MetamaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_services_metamask_common_contract_common_contract_service__WEBPACK_IMPORTED_MODULE_6__["CommonContractService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], viewQuery: function HeaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.connectModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
    } }, decls: 30, vars: 10, consts: [[1, "navbar", "navbar-expand-lg", "fixed-top", "home-header"], [1, "navbar-brand", 3, "routerLink"], ["src", "assets/images/logo.png", 1, "img-fluid"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarTogglerDemo02", "aria-controls", "navbarTogglerDemo02", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], ["src", "assets/images/toggler-icon.png", 1, "img-fluid"], ["id", "navbarTogglerDemo02", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto", "mt-2", "mt-lg-0"], ["class", "nav-item", 4, "ngIf"], [1, "nav-item", "active"], [1, "nav-link", 3, "routerLink"], [1, "sr-only"], [1, "nav-item"], ["template", ""], ["template1", ""], [1, "nav-link", 3, "routerLink", "click"], ["href", "#", "data-toggle", "modal", 1, "nav-link", 3, "click"], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "btn-close", "close", "pull-right", 3, "click"], ["aria-hidden", "true", 1, "visually-hidden"], [1, "modal-body"], [1, ""], [1, "middle-section"], [1, "container", "d-flex", "justify-content-center", "align-items-center", "p-0"], [1, "row", "justify-content-center", "align-items-start"], [1, "col-dm-12", "col-sm-12", "col-lg-12", "text-center", "mt-4", "col-xl-12"], ["src", "assets/images/symbol-logo.png"], [1, "font-41", "font-weight-bold", "text-color", "mt-3", "pb-4", 3, "click"], [1, "col-md-12", "col-lg-12", "col-sm-12", "col-xl-12", "p-0", "text-center", "d-flex", "justify-content-center", "align-items-center"], ["routerLink", "", 1, "border", "radius15", "p-4", "mb-3", "w-100", 3, "click"], ["src", "assets/images/login1.png", 1, "mb-3"], [1, "text-color", "font-weight-bold", "font-16", "mb-0"], ["src", "assets/images/img_2.png", 1, "mb-3"], [1, "container", "d-flex", "justify-content-center", "align-items-center"], [1, "font-41", "font-weight-bold", "text-color", "mt-3"], [1, "border", "radius15", "p-4", "mb-3", "w-100"], [1, "row"], [3, "ngSubmit"], ["f", "ngForm"], [1, "col-md-12"], [1, "edit-bar"], [1, "form-group", "text-left"], [1, "form-group"], ["type", "text", "placeholder", "", "name", "username", "required", "", 1, "form-control", "input-sec", "h-43", "font-16", "fontweight-400", 3, "ngModel", "ngClass", "focusout", "ngModelChange"], ["u", "ngModel"], ["class", "invalid-feedback", 4, "ngIf"], ["class", "text-danger", 4, "ngIf"], ["type", "text", "placeholder", "", "name", "auth", "pattern", "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+.[a-z]{2,3}", "required", "", 1, "form-control", "input-sec", "h-43", "font-16", "fontweight-400", 3, "ngClass", "ngModel", "focusout", "ngModelChange"], ["m", "ngModel"], [1, "d-flex"], ["class", "btn default-btn min-width-auto px-5 py-2 mt-1", 3, "disabled", 4, "ngIf"], ["class", "btn default-btn mt-4", 4, "ngIf"], [1, "invalid-feedback"], [4, "ngIf"], [1, "text-danger"], [1, "btn", "default-btn", "min-width-auto", "px-5", "py-2", "mt-1", 3, "disabled"], [1, "btn", "default-btn", "mt-4"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, HeaderComponent_li_7_Template, 3, 1, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Market ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, HeaderComponent_li_22_Template, 4, 4, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, HeaderComponent_li_23_Template, 3, 1, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, HeaderComponent_li_24_Template, 3, 0, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, HeaderComponent_li_25_Template, 3, 0, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, HeaderComponent_ng_template_26_Template, 32, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, HeaderComponent_ng_template_28_Template, 51, 15, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.accountShort);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/market");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/features");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.balance);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.accountShort);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLogin);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["PatternValidator"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: src_app_common_services_metamask_common_metamask_service__WEBPACK_IMPORTED_MODULE_3__["MetamaskService"] }, { type: src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"] }, { type: src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }, { type: src_app_common_services_metamask_common_contract_common_contract_service__WEBPACK_IMPORTED_MODULE_6__["CommonContractService"] }, { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { connectModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["connectModal", { static: false }]
        }], template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["template", { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/common/inner-footer/inner-footer.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/common/inner-footer/inner-footer.component.ts ***!
  \***************************************************************/
/*! exports provided: InnerFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InnerFooterComponent", function() { return InnerFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class InnerFooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
InnerFooterComponent.ɵfac = function InnerFooterComponent_Factory(t) { return new (t || InnerFooterComponent)(); };
InnerFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InnerFooterComponent, selectors: [["app-inner-footer"]], decls: 6, vars: 0, consts: [[1, "footer-sec", "pt-0"], [1, "container"], [1, "row"], [1, "col-lg-12", "d-flex", "justify-content-center", "copyrights-cnt"]], template: function InnerFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00A9 2021 ingress defi Networks, Inc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9pbm5lci1mb290ZXIvaW5uZXItZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InnerFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-inner-footer',
                templateUrl: './inner-footer.component.html',
                styleUrls: ['./inner-footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/common/inner-footer/inner-footer.module.ts":
/*!************************************************************!*\
  !*** ./src/app/common/inner-footer/inner-footer.module.ts ***!
  \************************************************************/
/*! exports provided: InnerFooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InnerFooterModule", function() { return InnerFooterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _inner_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inner-footer.component */ "./src/app/common/inner-footer/inner-footer.component.ts");




class InnerFooterModule {
}
InnerFooterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InnerFooterModule });
InnerFooterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InnerFooterModule_Factory(t) { return new (t || InnerFooterModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InnerFooterModule, { declarations: [_inner_footer_component__WEBPACK_IMPORTED_MODULE_2__["InnerFooterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_inner_footer_component__WEBPACK_IMPORTED_MODULE_2__["InnerFooterComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InnerFooterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_inner_footer_component__WEBPACK_IMPORTED_MODULE_2__["InnerFooterComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                exports: [_inner_footer_component__WEBPACK_IMPORTED_MODULE_2__["InnerFooterComponent"]],
                entryComponents: [_inner_footer_component__WEBPACK_IMPORTED_MODULE_2__["InnerFooterComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/common/inner-header/inner-header.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/common/inner-header/inner-header.component.ts ***!
  \***************************************************************/
/*! exports provided: InnerHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InnerHeaderComponent", function() { return InnerHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_assets_files_contract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/files/contract */ "./src/assets/files/contract.ts");
/* harmony import */ var src_app_common_services_metamask_common_metamask_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/services/metamask/common/metamask.service */ "./src/app/common/services/metamask/common/metamask.service.ts");
/* harmony import */ var src_app_common_services_metamask_common_contract_common_contract_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/services/metamask/common-contract/common-contract.service */ "./src/app/common/services/metamask/common-contract/common-contract.service.ts");
/* harmony import */ var src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/services/api/data.service */ "./src/app/common/services/api/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common/toaster/toaster.service */ "./src/app/common/toaster/toaster.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











const _c0 = ["connectModal"];
function InnerHeaderComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Dashboard ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/dashboard");
} }
function InnerHeaderComponent_li_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Bal ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 1, ctx_r1.dataService.metaDeatails == null ? null : ctx_r1.dataService.metaDeatails.balance, "1.4-4"), " ");
} }
function InnerHeaderComponent_li_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.dataService.metaDeatails == null ? null : ctx_r2.dataService.metaDeatails.accountShort, " ");
} }
function InnerHeaderComponent_li_25_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InnerHeaderComponent_li_25_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class InnerHeaderComponent {
    constructor(metamaskService, commonContractService, dataService, router, toasterService, modalService) {
        /*	if (!this.isLogin) {
                this.toasterService.show(false, 'Please login to continue');
                this.router.navigate(['/']);
            }
            else {*/
        this.metamaskService = metamaskService;
        this.commonContractService = commonContractService;
        this.dataService = dataService;
        this.router = router;
        this.toasterService = toasterService;
        this.modalService = modalService;
        this.siteObj = {};
        this.isLogin = localStorage.getItem('Game-Token');
        this.accountShort = "";
        this.balance = "";
        this.dataService.showWalletList.subscribe((suc) => {
            if (suc) {
                this.modalRef = this.connectModal.show();
            }
        });
        this.dataService.isMetaReady.subscribe((suc) => {
            if (suc) {
                this.getGovernanceTokenBalance();
                this.GetEbalance();
            }
            else {
            }
        });
        this.dataService.accountsChanged.subscribe((suc) => {
            if (suc) {
                this.getGovernanceTokenBalance();
                this.GetEbalance();
            }
        });
        //}
    }
    ngOnInit() {
        // this.getGovernanceTokenBalance();
        this.siteSettings();
        if (this.isLogin) {
            this.accountShort = this.dataService.metaDeatails.accountShort;
            this.balance = this.dataService.metaDeatails.balance;
        }
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
    GetEbalance() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.metamaskService
                .GetEbalance()
                .then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(result, "result");
                if (result.status) {
                    this.dataService.metaDeatails.balance = result.balance;
                }
                else {
                }
            }))
                .catch((error) => { });
        });
    }
    connctEwallet(walletname) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('walletname', walletname);
            switch (walletname) {
                case "metamask":
                    sessionStorage.setItem("Wallettype", "metamask");
                    localStorage.setItem("Wallettype", "metamask");
                    window.web3 = window.web3.currentProvider;
                    window.web3 = new window.Web3(window.ethereum);
                    // code block
                    break;
                case "trustwallet":
                    sessionStorage.setItem("Wallettype", "trustwallet");
                    localStorage.setItem("Wallettype", "trustwallet");
                    window.web3 = window.web3.currentProvider;
                    window.web3 = new window.Web3(window.ethereum);
                    // code block
                    break;
                case "mathwallet":
                    sessionStorage.setItem("Wallettype", "mathwallet");
                    localStorage.setItem("Wallettype", "mathwallet");
                    window.web3 = window.web3.currentProvider;
                    window.web3 = new window.Web3(window.ethereum);
                    // code block
                    break;
                case "walletconnect":
                    // this.connector = new WalletConnect({
                    //   bridge: "https://bridge.walletconnect.org" // Required
                    // });
                    sessionStorage.setItem("Wallettype", "walletconnect");
                    localStorage.setItem("Wallettype", "walletconnect");
                    window.web3 = window.web3.currentProvider;
                    window.web3 = new window.Web3(window.ethereum);
                    // code block
                    break;
                case "binanceconnect":
                    sessionStorage.setItem("Wallettype", "binanceconnect");
                    localStorage.setItem("Wallettype", "binanceconnect");
                    // await BinanceChain.enable();
                    window.web3 = new window.Web3(window.BinanceChain);
                    // code block
                    break;
                default:
                // code block
            }
            // return false;
            this.metamaskService.connectMetaMask("clicked").then((suc) => {
                let responseData = suc;
                this.toasterService.show(responseData.status, responseData.message);
                if (responseData.status) {
                    this.dataService.postRequest('users/createProfile', { key: this.dataService.metaDeatails.account }).subscribe((res) => {
                        if (res.status) {
                            localStorage.setItem("Game-Token", res.gametoken);
                            this.toasterService.show(res.status, res.message);
                            this.GetEbalance();
                            sessionStorage.setItem("isMetaLogin", "true");
                            this.modalRef.hide();
                        }
                    });
                }
            });
        });
    }
    siteSettings() {
        this.dataService.getRequest('admin/siteinform').subscribe((suc) => {
            this.siteObj = suc.data;
        });
    }
    logout() {
        this.dataService.metaLogout();
        localStorage.clear();
        this.router.navigateByUrl("/");
    }
}
InnerHeaderComponent.ɵfac = function InnerHeaderComponent_Factory(t) { return new (t || InnerHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_services_metamask_common_metamask_service__WEBPACK_IMPORTED_MODULE_3__["MetamaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_services_metamask_common_contract_common_contract_service__WEBPACK_IMPORTED_MODULE_4__["CommonContractService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_7__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalService"])); };
InnerHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: InnerHeaderComponent, selectors: [["app-inner-header"]], viewQuery: function InnerHeaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.connectModal = _t.first);
    } }, decls: 55, vars: 9, consts: [[1, "navbar", "navbar-expand-lg", "fixed-top", "header"], [1, "navbar-brand", 3, "routerLink"], ["src", "assets/images/logo.png", 1, "img-fluid"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarTogglerDemo02", "aria-controls", "navbarTogglerDemo02", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["src", "assets/images/toggler-icon2.png", 1, "img-fluid"], ["id", "navbarTogglerDemo02", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto", "mt-2", "mt-lg-0"], ["class", "nav-item", 4, "ngIf"], [1, "nav-item", "active"], [1, "nav-link", 3, "routerLink"], [1, "sr-only"], [1, "nav-item"], ["bsModal", "", "role", "dialog", "aria-labelledby", "dialog-static-name", 1, "modal", "fade", "mymodal"], ["connectModal", "bs-modal"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "btn-close", "close", "pull-right", 3, "click"], ["aria-hidden", "true", 1, "visually-hidden"], [1, "modal-body"], [1, ""], [1, "middle-section"], [1, "container", "d-flex", "justify-content-center", "align-items-center"], [1, "row", "justify-content-center", "align-items-start"], [1, "col-dm-12", "col-sm-12", "col-lg-12", "text-center", "mt-4", "col-xl-12"], ["src", "assets/images/symbol-logo.png"], [1, "font-41", "font-weight-bold", "text-color", "mt-3", 3, "click"], [1, "col-md-6", "col-lg-6", "col-sm-6", "col-xl-6", "text-center", "d-flex", "justify-content-center", "align-items-center"], [1, "border", "radius15", "p-4", "mb-3", "w-100", 3, "click"], ["src", "assets/images/login1.png", 1, "mb-4"], [1, "text-color", "font-weight-bold", "font-16", "mb-0"], [1, "border", "radius15", "p-4", "w-100", 3, "click"], ["src", "assets/images/login2.png", 1, "mb-4"], [1, "nav-link", 3, "routerLink", "click"]], template: function InnerHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, InnerHeaderComponent_li_8_Template, 3, 1, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Market ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, InnerHeaderComponent_li_23_Template, 4, 4, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, InnerHeaderComponent_li_24_Template, 3, 1, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, InnerHeaderComponent_li_25_Template, 3, 0, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Connect Wallet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InnerHeaderComponent_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](27); return _r4.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "h3", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InnerHeaderComponent_Template_h3_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](27); return _r4.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Create a Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InnerHeaderComponent_Template_a_click_46_listener() { return ctx.connctEwallet("metamask"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "MetaMask");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InnerHeaderComponent_Template_a_click_51_listener() { return ctx.connctEwallet("binanceconnect"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "BNB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dataService.metaDeatails == null ? null : ctx.dataService.metaDeatails.accountShort);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/market");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/features");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dataService.metaDeatails == null ? null : ctx.dataService.metaDeatails.balance);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dataService.metaDeatails == null ? null : ctx.dataService.metaDeatails.accountShort);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dataService.metaDeatails == null ? null : ctx.dataService.metaDeatails.accountShort);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9pbm5lci1oZWFkZXIvaW5uZXItaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InnerHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-inner-header',
                templateUrl: './inner-header.component.html',
                styleUrls: ['./inner-header.component.css']
            }]
    }], function () { return [{ type: src_app_common_services_metamask_common_metamask_service__WEBPACK_IMPORTED_MODULE_3__["MetamaskService"] }, { type: src_app_common_services_metamask_common_contract_common_contract_service__WEBPACK_IMPORTED_MODULE_4__["CommonContractService"] }, { type: src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_7__["ToasterService"] }, { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalService"] }]; }, { connectModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["connectModal", { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/common/inner-header/inner-header.module.ts":
/*!************************************************************!*\
  !*** ./src/app/common/inner-header/inner-header.module.ts ***!
  \************************************************************/
/*! exports provided: InnerHeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InnerHeaderModule", function() { return InnerHeaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _inner_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inner-header.component */ "./src/app/common/inner-header/inner-header.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/collapse/fesm2015/ngx-bootstrap-collapse.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");









class InnerHeaderModule {
}
InnerHeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InnerHeaderModule });
InnerHeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InnerHeaderModule_Factory(t) { return new (t || InnerHeaderModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalModule"].forRoot(), ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_4__["CollapseModule"].forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InnerHeaderModule, { declarations: [_inner_header_component__WEBPACK_IMPORTED_MODULE_2__["InnerHeaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_4__["CollapseModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]], exports: [_inner_header_component__WEBPACK_IMPORTED_MODULE_2__["InnerHeaderComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InnerHeaderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_inner_header_component__WEBPACK_IMPORTED_MODULE_2__["InnerHeaderComponent"],],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalModule"].forRoot(), ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_4__["CollapseModule"].forRoot(),
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
                exports: [_inner_header_component__WEBPACK_IMPORTED_MODULE_2__["InnerHeaderComponent"]],
                entryComponents: [_inner_header_component__WEBPACK_IMPORTED_MODULE_2__["InnerHeaderComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/common/services/api/data.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/common/services/api/data.service.ts ***!
  \*****************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");








class DataService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.metaDeatails = {
            account: "",
            isMetaLogin: false,
            balance: "",
            accountShort: "",
            governanceTokenBalance: "",
        };
        this.projectDetails = {
            name: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].projectName,
            tokenName: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].tokenName,
        };
        this.isGoerli = false;
        this.isMetaExtension = true;
        this.REST_API_SERVER = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
        this.dateTime = "yyyy-MM-dd H:mm:ss";
        this.isOverlay = false;
        this.isMetaLogin = false;
        this.maintean = true; //dafault true , because check first maintain api
        this.userBlock = false;
        this.fixNumber = "1.4-8";
        this.isMainLoader = true;
        this.urlSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.actUrl = this.urlSource.asObservable();
        this.isLoginCheck = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isMetaLoginCheck = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isNetworkChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.changeDetector = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showWalletList = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.accountsChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // MetaMask Account Changed
        this.networkChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // MetaMask Network Changed
        this.isMetaReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // MetaMask Network Changed
        this.footerContent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.modelSignup = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.explorerLink = "https://bscscan.com/";
        // this.token = localStorage.getItem("Game-Token");
    }
    activeUrl(uri) {
        this.urlSource.next(uri);
    }
    metaLogout() {
        this.metaDeatails = {
            account: "",
            isMetaLogin: false,
            balance: "",
            accountShort: "",
            governanceTokenBalance: "",
        };
        this.isMetaReady.emit(false);
    }
    openAddress() { }
    handleError(error) {
        let errorMessage = "Unknown error!";
        if (error.error instanceof ErrorEvent) {
            // Client-side errors
            errorMessage = `Error: ${error.error.message}`;
        }
        else {
            // Server-side errors
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        // window.alert(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    }
    sendGetRequest() {
        this.token = localStorage.getItem("Game-Token");
        return this.httpClient
            .get(this.REST_API_SERVER)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    postRequestLogin(url, requestData) {
        this.token = localStorage.getItem("Game-Token");
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set("cache-control", "no-cache")
            .set("content-type", "application/json")
            .set("Authorization", "Bearer " + this.token);
        return this.httpClient
            .post(this.REST_API_SERVER + url, requestData, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    postRequest(url, requestData) {
        this.token = localStorage.getItem("Game-Token");
        // console.log(this.token, 'this.token');
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set("cache-control", "no-cache")
            .set("content-type", "application/json")
            .set("Authorization", "Bearer " + this.token);
        return this.httpClient
            .post(this.REST_API_SERVER + url, requestData, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    postBiconomy(url, requestData) {
        this.token = localStorage.getItem("Game-Token");
        // api-key-old = kM39iFoMc.cfa138e6-ed25-44db-ac85-177077da8f31
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set("Content-Type", "application/json;charset=utf-8")
            .set("x-api-key", "kM39iFoMc.cfa138e6-ed25-44db-ac85-177077da8f31");
        return this.httpClient
            .post(url, requestData, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    filePostRequest(url, requestData) {
        this.token = localStorage.getItem("Game-Token");
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set("cache-control", "no-cache")
            .set("Authorization", "Bearer " + this.token);
        return this.httpClient
            .post(this.REST_API_SERVER + url, requestData, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getRequest(url) {
        this.token = localStorage.getItem("Game-Token");
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set("cache-control", "no-cache")
            .set("content-type", "application/json")
            .set("Authorization", "Bearer " + this.token);
        return this.httpClient
            .get(this.REST_API_SERVER + url, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    metaCheck() {
        let locaValue = localStorage.getItem("account");
        let localLogin = localStorage.getItem("Game-Token");
        if (!localLogin) {
            localStorage.removeItem("account");
        }
        // this.metaService.getAccount().then((suc) => {
        //   console.log(suc);
        // });
        if (locaValue) {
            this.isMetaLogin = true;
            return true;
        }
        else {
            return false;
        }
    }
    metaProcess() {
        window.addEventListener("beforeunload", (event) => {
            if (this.isOverlay)
                event.returnValue = `You have unsaved changes, leave anyway?`;
        });
    }
    openEtherscan(transctionId) {
        let url = "https://goerli.etherscan.io/tx/" + transctionId;
        window.open(url, "_blank");
    }
    openBscScan(address) {
        // https://bscscan.com/address/
        let url = "https://bscscan.com/" + address;
        window.open(url, "_blank");
    }
    checkNumber(event) {
        if (event.which === 45 || event.which === 43 || event.which === 101) {
            event.preventDefault();
        }
    }
    checkProfile() {
        this.token = localStorage.getItem("Game-Token");
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set("cache-control", "no-cache")
            .set("Authorization", "Bearer " + this.token);
        return this.httpClient.get(this.REST_API_SERVER + 'users/check_profile', { headers: headers });
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, { isLoginCheck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], isMetaLoginCheck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], isNetworkChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], changeDetector: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], showWalletList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], accountsChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], networkChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], isMetaReady: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], footerContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], modelSignup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/common/services/metamask/common-contract/common-contract.service.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/common/services/metamask/common-contract/common-contract.service.ts ***!
  \*************************************************************************************/
/*! exports provided: CommonContractService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonContractService", function() { return CommonContractService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_assets_files_contract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/files/contract */ "./src/assets/files/contract.ts");
/* harmony import */ var src_assets_files_token_abi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/assets/files/token_abi */ "./src/assets/files/token_abi.ts");
/* harmony import */ var src_assets_files_pair_abi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/files/pair_abi */ "./src/assets/files/pair_abi.ts");
/* harmony import */ var _api_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/data.service */ "./src/app/common/services/api/data.service.ts");







class CommonContractService {
    constructor(dataService) {
        this.dataService = dataService;
        if (window.ethereum === undefined) {
            // this.toastr.errorToastr('Non-Ethereum browser detected. Install MetaMask', 'OOPS!');
        }
        else {
            window.web3 = window.web3.currentProvider;
            window.web3 = new window.Web3(window.ethereum);
        }
    }
    checkAddress(address) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            resolve(window.web3.utils.isAddress(address));
        }));
    }
    amountUnit(amount, decimal, type, isTrunc) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //fromWei mean divde the values - to display 
            //toWei mean multiplay the values - to contarct 
            if (!type) {
                type = "fromWei";
            }
            if (decimal == "18") {
                let out = yield window.web3.utils[type](amount.toString(), "ether");
                console.log(out, "out");
                return out;
            }
            else {
                let decimalCal = Math.pow(10, decimal);
                if (isTrunc) {
                    if (type == "fromWei") {
                        amount = amount / +decimal;
                    }
                    else {
                        amount = amount * +decimal;
                    }
                    return Math.trunc(amount);
                }
                else {
                    if (type == "fromWei") {
                        return (amount / decimalCal).toFixed(4);
                    }
                    else {
                        return amount * decimalCal;
                    }
                }
            }
        });
    }
    getGovernanceTokenBalance() {
        this.GetTokenbalance(src_assets_files_contract__WEBPACK_IMPORTED_MODULE_2__["ContractDetails"].governance_token_contract).then((suc) => {
            if (suc.balance) {
                this.dataService.metaDeatails.governanceTokenBalance = suc.balance;
            }
            else {
                this.dataService.metaDeatails.governanceTokenBalance = 0;
            }
        });
    }
    GetTokenbalance(Contract, UserAddress) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(Contract, 'GetTokenbalance contract');
            let Abi_array = src_assets_files_token_abi__WEBPACK_IMPORTED_MODULE_3__["TokenAbi"];
            console.log('called1');
            if (!UserAddress) {
                UserAddress = this.dataService.metaDeatails.account;
            }
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (typeof window.web3 !== "undefined") {
                    let token_contract = new window.web3.eth.Contract(Abi_array, Contract);
                    console.log('UserAddress', UserAddress);
                    yield token_contract.methods
                        .balanceOf(UserAddress)
                        .call((err, balance) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        if (balance) {
                            const sucMsg = {
                                status: true,
                                message: "Get your balance",
                                rawbalance: balance,
                                balance: yield window.web3.utils.fromWei(balance.toString(), "ether"),
                            };
                            resolve(sucMsg);
                        }
                        else {
                            const sucMsg = {
                                status: false,
                                message: "Got error",
                                data: err,
                            };
                            resolve(sucMsg);
                        }
                    }));
                }
                else {
                    const failMsg = {
                        status: false,
                        message: "Metamask extension not added on your browser",
                    };
                    resolve(failMsg);
                }
            }));
        });
    }
    GetTotalSupply(Contract) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("into GetTotalSupply");
            let Abi_array = src_assets_files_pair_abi__WEBPACK_IMPORTED_MODULE_4__["PairAbi"];
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (typeof window.web3 !== "undefined") {
                    let token_contract = new window.web3.eth.Contract(Abi_array, Contract);
                    yield token_contract.methods.totalSupply().call((err, totalsupply) => {
                        if (totalsupply) {
                            const sucMsg = {
                                status: true,
                                message: "Got Totalsupply",
                                rawtotalsupply: totalsupply,
                                totalsupply: window.web3.utils.fromWei(totalsupply.toString(), "ether"),
                            };
                            resolve(sucMsg);
                        }
                        else {
                            const sucMsg = {
                                status: false,
                                message: "Got error",
                                data: err,
                            };
                            resolve(sucMsg);
                        }
                    });
                }
                else {
                    const failMsg = {
                        status: false,
                        message: "Metamask extension not added on your browser",
                    };
                    resolve(failMsg);
                }
            }));
        });
    }
    sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
}
CommonContractService.ɵfac = function CommonContractService_Factory(t) { return new (t || CommonContractService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"])); };
CommonContractService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CommonContractService, factory: CommonContractService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CommonContractService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _api_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/common/services/metamask/common/metamask.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/common/services/metamask/common/metamask.service.ts ***!
  \*********************************************************************/
/*! exports provided: MetamaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetamaskService", function() { return MetamaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _api_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/data.service */ "./src/app/common/services/api/data.service.ts");
/* harmony import */ var src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/toaster/toaster.service */ "./src/app/common/toaster/toaster.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







class MetamaskService {
    constructor(dataService, toasterService, router) {
        this.dataService = dataService;
        this.toasterService = toasterService;
        this.router = router;
        if (window.ethereum === undefined) {
            // this.toastr.errorToastr('Non-Ethereum browser detected. Install MetaMask', 'OOPS!');
        }
        else {
            this.sleep(3000);
            console.clear();
            console.log("check wallet type ----->", sessionStorage.getItem("Wallettype"));
            let wallet_type = localStorage.getItem("Wallettype");
            if (wallet_type == "metamask") {
                window.web3 = window.web3.currentProvider;
                window.web3 = new window.Web3(window.ethereum);
            }
            else if (wallet_type == "binanceconnect") {
                window.web3 = new window.Web3(window.BinanceChain);
            }
            else if (wallet_type == "walletconnect") {
                window.web3 = window.web3.currentProvider;
                window.web3 = new window.Web3(window.ethereum);
            }
            else {
                window.web3 = window.web3.currentProvider;
                window.web3 = new window.Web3(window.ethereum);
            }
            let _this = this;
            window.ethereum.on("accountsChanged", function (accounts) {
                _this.logout();
                console.log(accounts, "_____________ accounts");
                if (accounts[0]) {
                    dataService.isMetaLogin = true;
                    dataService.metaDeatails.account = accounts[0];
                }
                else {
                    console.log("yes no account");
                    dataService.metaLogout();
                }
                dataService.accountsChanged.emit(true);
                dataService.isMetaReady.emit(true);
            });
            window.ethereum.on("networkChanged", function (netId) {
                console.log(netId, "_____________ accounts");
                _this.logout();
                dataService.networkChanged.emit(netId);
            });
        }
    }
    logout() {
        this.dataService.metaLogout();
        localStorage.clear();
        this.toasterService.show(false, "Please login to continue");
        this.router.navigateByUrl("/");
    }
    checkChainIdCall() {
        return this.checkChainId()
            .then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (result.status) {
                console.log(result, "result");
                return true;
            }
            else {
                this.toasterService.show(false, result.message);
                return false;
            }
        }))
            .catch((error) => {
            this.toasterService.show(false, error);
            return false;
        });
    }
    checkChainId() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                if (typeof window.web3 !== "undefined") {
                    window.web3.eth.getChainId((err, netId) => {
                        console.log("netId ----->", netId);
                        if (netId == src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].chainid) {
                            const sucMsg = {
                                status: true,
                                message: "Correct Network",
                            };
                            resolve(sucMsg);
                        }
                        else {
                            console.log("else   ----->", netId);
                            localStorage.clear();
                            const sucMsg = {
                                status: false,
                                message: "Kindly Change Binance Mainnet",
                            };
                            resolve(sucMsg);
                        }
                    });
                }
                else {
                    console.log("hole else   ----->");
                    const failMsg = {
                        status: false,
                        message: "Metamask extension not added on your browser",
                    };
                    resolve(failMsg);
                }
            });
        });
    }
    addNetwork() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                // wasAdded is a boolean. Like any RPC method, an error may be thrown.
                if (typeof window.web3 !== "undefined") {
                    const wasAdded = yield window.ethereum.request({
                        method: "wallet_addEthereumChain",
                        chainId: "0x38",
                        params: [
                            {
                                chainId: "0x38",
                                chainName: "Biance Mainnet",
                                blockExplorerUrls: ["https://bsc-dataseed.binance.org/"],
                                nativeCurrency: {
                                    name: "Biance Mainnet",
                                    decimals: 18,
                                    symbol: "BNB",
                                },
                                rpcUrls: ["https://bsc-dataseed.binance.org/"],
                            },
                        ],
                    });
                    if (wasAdded) {
                        let msg = {
                            status: true,
                            message: "Check Your Meta Mask",
                        };
                        return msg;
                    }
                }
                else {
                    const failMsg = {
                        status: false,
                        message: "Metamask extension not added on your browser",
                    };
                    return failMsg;
                }
            }
            catch (error) {
                let msg = {
                    status: false,
                    message: "Please try again",
                };
                return msg;
            }
        });
    }
    loginMetaMask() {
        this.connectMetaMask().then((suc) => {
            let responseData = suc;
            this.toasterService.show(responseData.status, responseData.message);
            if (responseData.status) {
                sessionStorage.setItem("isMetaLogin", "true");
            }
        });
    }
    connectMetaMask(type) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.sleep(1000);
            return new Promise((resolve, reject) => {
                if (typeof window.web3 !== "undefined") {
                    this.checkChainId()
                        .then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        if (result.status) {
                            yield window.ethereum
                                .enable()
                                .then((suc) => { })
                                .catch((err) => {
                                const sucMsg = {
                                    status: false,
                                    message: err.message,
                                };
                                resolve(sucMsg);
                            });
                            window.web3.eth.getAccounts((err, retAccount) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                if (retAccount.length > 0) {
                                    // localStorage.setItem("account", retAccount[0]);
                                    this.dataService.metaDeatails.account = retAccount[0];
                                    this.dataService.metaDeatails.isMetaLogin = true;
                                    console.log(this.dataService.metaDeatails.isMetaLogin, "this.dataService.metaDeatails.isMetaLogin");
                                    let first = retAccount[0].substring(0, 3);
                                    let last = retAccount[0].substring(38, 42);
                                    this.dataService.metaDeatails.accountShort = `${first}...${last}`;
                                    this.dataService.isMetaReady.emit(true);
                                    localStorage.setItem("isLoginPermit", "true");
                                    const sucMsg = {
                                        status: true,
                                        message: "Login successfully",
                                    };
                                    resolve(sucMsg);
                                }
                                else {
                                    const failMsg = {
                                        status: false,
                                        message: "No account found",
                                    };
                                    resolve(failMsg);
                                }
                                if (err != null) {
                                    const failMsg = {
                                        status: false,
                                        message: "Error retrieving account",
                                    };
                                    resolve(failMsg);
                                }
                            }));
                        }
                        else {
                            resolve(result);
                        }
                    }))
                        .catch((error) => {
                        const failMsg = {
                            status: false,
                            message: "Network Error",
                        };
                        resolve(failMsg);
                    });
                }
                else {
                    const failMsg = {
                        status: false,
                        message: "Metamask extension not added on your browser",
                    };
                    resolve(failMsg);
                }
            });
        });
    }
    GetEbalance() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                if (typeof window.web3 !== "undefined") {
                    let account = this.dataService.metaDeatails.account;
                    this.checkChainId()
                        .then((result) => {
                        if (result.status) {
                            window.web3.eth.getBalance(account, function (err, balance) {
                                localStorage.setItem("rawethbalance", balance);
                                let convert_balance = window.web3.utils.fromWei(balance.toString(), "ether");
                                localStorage.setItem("ethbalance", convert_balance);
                                let date_for = new Date();
                                let date_data = date_for.getTime();
                                localStorage.setItem("dtime", date_data);
                                const sucMsg = {
                                    status: true,
                                    message: "Get your balance",
                                    rawbalance: balance,
                                    balance: convert_balance,
                                };
                                resolve(sucMsg);
                            });
                        }
                        else {
                            resolve(result);
                        }
                    })
                        .catch((error) => {
                        console.log(error, "______________ error");
                        const failMsg = {
                            status: false,
                            message: "Network Error",
                        };
                        resolve(failMsg);
                    });
                }
                else {
                    const failMsg = {
                        status: false,
                        message: "Metamask extension not added on your browser",
                    };
                    resolve(failMsg);
                }
            });
        });
    }
    sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
    // walletconnect 
    checkWallet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let obj = {};
            let chainId = 56;
            obj[chainId] = "https://bsc-dataseed1.ninicoin.io";
            let configWallet = {
                infuraId: "9aa3d95b3bc440fa88ea12eaa4456161",
                rpc: obj,
                chainId: chainId
            };
            const WalletConnectProvider = window.WalletConnectProvider.default;
            let ropstenProvider = new WalletConnectProvider(configWallet);
            yield ropstenProvider.enable();
            window.web3 = new window.Web3(ropstenProvider);
        });
    }
    connectWallet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.checkWallet();
            yield this.sleep(1000);
            const sucMsg = {
                status: true,
                message: "connected Successfully",
            };
            return sucMsg;
        });
    }
}
MetamaskService.ɵfac = function MetamaskService_Factory(t) { return new (t || MetamaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
MetamaskService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MetamaskService, factory: MetamaskService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MetamaskService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _api_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }, { type: src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/common/services/metamask/nft/nft.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/common/services/metamask/nft/nft.service.ts ***!
  \*************************************************************/
/*! exports provided: NftService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NftService", function() { return NftService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_assets_files_nft_abi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/files/nft_abi */ "./src/assets/files/nft_abi.ts");
/* harmony import */ var src_assets_files_contract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/assets/files/contract */ "./src/assets/files/contract.ts");
/* harmony import */ var _api_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/data.service */ "./src/app/common/services/api/data.service.ts");






class NftService {
    constructor(dataService) {
        this.dataService = dataService;
        if (window.ethereum === undefined) {
        }
        else {
            window.web3 = window.web3.currentProvider;
            window.web3 = new window.Web3(window.ethereum);
        }
    }
    /*nft checkBal function start*/
    tokenURI(Token, Abi, itemid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('nft service function called', Token);
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log('nft service function called inside...');
                if (typeof window.web3 !== "undefined") {
                    console.log('inside if condition');
                    console.log(Token, Abi, itemid);
                    let exchange_contract = new window.web3.eth.Contract(Abi, Token);
                    yield exchange_contract.methods
                        .tokenURI(itemid)
                        .call((err, getResult) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        console.log(err, 'geterror');
                        console.log(getResult, 'getResult');
                        if (getResult) {
                            const sucMsg = {
                                status: true,
                                message: "tokenURI Result",
                                result: getResult,
                            };
                            resolve(sucMsg);
                        }
                        else {
                            const sucMsg = {
                                status: false,
                                message: "Got error",
                                data: err,
                            };
                            resolve(sucMsg);
                        }
                    }));
                }
                else {
                    console.log('else condition');
                    const failMsg = {
                        status: false,
                        message: "Metamask extension not added on your browser",
                    };
                    resolve(failMsg);
                }
            }));
        });
    }
    /*nft checkBal function end*/
    /*nft prepareBuyerFeeMessage function start*/
    buyerFeeSign(Tuple, Fees) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('nft service function called', Tuple);
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log('nft service function called inside...');
                if (typeof window.web3 !== "undefined") {
                    console.log('inside if condition');
                    let Abi_array = src_assets_files_nft_abi__WEBPACK_IMPORTED_MODULE_2__["NftExchangeAbi"];
                    let Contract = src_assets_files_contract__WEBPACK_IMPORTED_MODULE_3__["ContractDetails"].nft_exchange_token;
                    let exchange_contract = new window.web3.eth.Contract(Abi_array, Contract);
                    yield exchange_contract.methods
                        .prepareBuyerFeeMessage(Tuple, Fees)
                        .call((err, getResult) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        console.log(err, 'geterror');
                        console.log(getResult, 'getResult');
                        if (getResult) {
                            const sucMsg = {
                                status: true,
                                message: "PrepareBuyerFeeMessage Result",
                                result: getResult,
                            };
                            resolve(sucMsg);
                        }
                        else {
                            const sucMsg = {
                                status: false,
                                message: "Got error",
                                data: err,
                            };
                            resolve(sucMsg);
                        }
                    }));
                }
                else {
                    console.log('else condition');
                    const failMsg = {
                        status: false,
                        message: "Metamask extension not added on your browser",
                    };
                    resolve(failMsg);
                }
            }));
        });
    }
    /*nft prepareBuyerFeeMessage function end*/
    /*nft validatesign function start*/
    validatesign(Tuple, Fees) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('nft service function called', Tuple);
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log('nft service function called inside...');
                if (typeof window.web3 !== "undefined") {
                    console.log('inside if condition');
                    let Abi_array = src_assets_files_nft_abi__WEBPACK_IMPORTED_MODULE_2__["NftExchangeAbi"];
                    let Contract = src_assets_files_contract__WEBPACK_IMPORTED_MODULE_3__["ContractDetails"].nft_exchange_token;
                    let exchange_contract = new window.web3.eth.Contract(Abi_array, Contract);
                    yield exchange_contract.methods
                        .validateOrderSignatureView(Tuple, Fees)
                        .call((err, getResult) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        console.log(err, 'geterror');
                        console.log(getResult, 'getResult');
                        if (getResult) {
                            const sucMsg = {
                                status: true,
                                message: "validateOrderSignatureView Result",
                                result: getResult,
                            };
                            resolve(sucMsg);
                        }
                        else {
                            const sucMsg = {
                                status: false,
                                message: "Got error",
                                data: err,
                            };
                            resolve(sucMsg);
                        }
                    }));
                }
                else {
                    console.log('else condition');
                    const failMsg = {
                        status: false,
                        message: "Metamask extension not added on your browser",
                    };
                    resolve(failMsg);
                }
            }));
        });
    }
    /*nft prepareBuyerFeeMessage function end*/
    /*nft validateBuyerSign function start*/
    validateBuyerSign(Tuple, Fees, Sig) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('nft service function called', Tuple);
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log('nft service function called inside...');
                if (typeof window.web3 !== "undefined") {
                    console.log('inside if condition');
                    let Abi_array = src_assets_files_nft_abi__WEBPACK_IMPORTED_MODULE_2__["NftExchangeAbi"];
                    let Contract = src_assets_files_contract__WEBPACK_IMPORTED_MODULE_3__["ContractDetails"].nft_exchange_token;
                    let exchange_contract = new window.web3.eth.Contract(Abi_array, Contract);
                    yield exchange_contract.methods
                        .validateBuyerFeeSigView(Tuple, Fees, Sig)
                        .call((err, getResult) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        console.log(err, 'geterror');
                        console.log(getResult, 'getResult');
                        if (getResult) {
                            const sucMsg = {
                                status: true,
                                message: "validateOrderSignatureView Result",
                                result: getResult,
                            };
                            resolve(sucMsg);
                        }
                        else {
                            const sucMsg = {
                                status: false,
                                message: "Got error",
                                data: err,
                            };
                            resolve(sucMsg);
                        }
                    }));
                }
                else {
                    console.log('else condition');
                    const failMsg = {
                        status: false,
                        message: "Metamask extension not added on your browser",
                    };
                    resolve(failMsg);
                }
            }));
        });
    }
    /*nft validateBuyerSign function end*/
    /*nft checkBal function start*/
    checkBal(Token, Abi, address) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('nft service function called', Token);
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log('nft service function called inside...');
                if (typeof window.web3 !== "undefined") {
                    console.log('inside if condition');
                    console.log(Token, Abi, address);
                    let exchange_contract = new window.web3.eth.Contract(Abi, Token);
                    yield exchange_contract.methods
                        .balanceOf(address)
                        .call((err, getResult) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        console.log(err, 'geterror');
                        console.log(getResult, 'getResult');
                        if (getResult) {
                            const sucMsg = {
                                status: true,
                                message: "validateOrderSignatureView Result",
                                result: getResult,
                            };
                            resolve(sucMsg);
                        }
                        else {
                            const sucMsg = {
                                status: false,
                                message: "Got error",
                                data: err,
                            };
                            resolve(sucMsg);
                        }
                    }));
                }
                else {
                    console.log('else condition');
                    const failMsg = {
                        status: false,
                        message: "Metamask extension not added on your browser",
                    };
                    resolve(failMsg);
                }
            }));
        });
    }
    /*nft checkBal function end*/
    /*nft checkBal function start*/
    tokenOfOwnerByIndex(Token, Abi, addr, index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('nft service function called', Token);
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log('nft service function called inside...');
                if (typeof window.web3 !== "undefined") {
                    console.log('inside if condition');
                    let exchange_contract = new window.web3.eth.Contract(Abi, Token);
                    yield exchange_contract.methods
                        .tokenOfOwnerByIndex(addr, index)
                        .call((err, getResult) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        console.log(err, 'geterror');
                        console.log(getResult, 'getResult');
                        if (getResult) {
                            const sucMsg = {
                                status: true,
                                message: "tokenOfOwnerByIndex Result",
                                result: getResult,
                            };
                            resolve(sucMsg);
                        }
                        else {
                            const sucMsg = {
                                status: false,
                                message: "Got error",
                                data: err,
                            };
                            resolve(sucMsg);
                        }
                    }));
                }
                else {
                    console.log('else condition');
                    const failMsg = {
                        status: false,
                        message: "Metamask extension not added on your browser",
                    };
                    resolve(failMsg);
                }
            }));
        });
    }
    /*nft checkBal function end*/
    /*nft checkBal function start*/
    verifyOwner(Token, Abi, NftId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('nft service function called', Token);
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log('nft service function called inside...');
                if (typeof window.web3 !== "undefined") {
                    console.log('inside if condition');
                    let exchange_contract = new window.web3.eth.Contract(Abi, Token);
                    yield exchange_contract.methods
                        .ownerOf(NftId)
                        .call((err, getResult) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        console.log(err, 'geterror');
                        console.log(getResult, 'getResult');
                        if (getResult) {
                            const sucMsg = {
                                status: true,
                                message: "validateOrderSignatureView Result",
                                result: getResult,
                            };
                            resolve(sucMsg);
                        }
                        else {
                            const sucMsg = {
                                status: false,
                                message: "Got error",
                                data: err,
                            };
                            resolve(sucMsg);
                        }
                    }));
                }
                else {
                    console.log('else condition');
                    const failMsg = {
                        status: false,
                        message: "Metamask extension not added on your browser",
                    };
                    resolve(failMsg);
                }
            }));
        });
    }
    /*nft checkBal function end*/
    /*nft seller approve function start*/
    approveSellFun(Token, TokenABI, TokenId, Address) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('nft service function called', TokenId);
            return new Promise((resolve, reject) => {
                console.log('inside function');
                let exchangeContract = new window.web3.eth.Contract(TokenABI, Token);
                exchangeContract.methods
                    .approve(src_assets_files_contract__WEBPACK_IMPORTED_MODULE_3__["ContractDetails"].nft_exchange_token, TokenId)
                    .send({ from: Address })
                    .on("transactionHash", hash => {
                    console.log('ontransactionhash', hash);
                })
                    .on('receipt', receipt => {
                    console.log('onreceipt', receipt);
                    if (receipt) {
                        let sucMsg = {
                            status: true,
                            message: "PrepareBuyerFeeMessage Result",
                            result: receipt,
                        };
                        resolve(sucMsg);
                    }
                    else {
                        let failMsg = {
                            status: false,
                            message: "Something went wrong",
                        };
                        resolve(failMsg);
                    }
                })
                    .on('error', error => reject(new Error('Failed to submit the Transaction to the contract admins')));
            });
        });
    }
    /*nft seller approve function end*/
    /*nft buyer approve function start*/
    approveBuyFun(Token, TokenABI, Amount, Address) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('nft service function called', Amount);
            console.log('nft service params', Token, TokenABI, Amount, Address, 'params');
            return new Promise((resolve, reject) => {
                console.log('inside function');
                let exchangeContract = new window.web3.eth.Contract(TokenABI, '0xae13d989dac2f0debff460ac112a837c89baa7cd');
                exchangeContract.methods
                    .approve(src_assets_files_contract__WEBPACK_IMPORTED_MODULE_3__["ContractDetails"].nft_exchange_token, Amount.toString())
                    .send({ from: Address })
                    .on("transactionHash", hash => {
                    console.log('ontransactionhash', hash);
                })
                    .on('receipt', receipt => {
                    console.log('onreceipt', receipt);
                    if (receipt) {
                        let sucMsg = {
                            status: true,
                            message: "PrepareBuyerFeeMessage Result",
                            result: receipt,
                        };
                        resolve(sucMsg);
                    }
                    else {
                        let failMsg = {
                            status: false,
                            message: "Something went wrong",
                        };
                        resolve(failMsg);
                    }
                })
                    .on('error', error => reject(new Error('Failed to submit the Transaction to the contract admins')));
            });
        });
    }
    /*nft buyer approve function end*/
    /*nft callsell function start*/
    callSell(price, order, sellsign, buyFeesign, fee, userAddr) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('1.', price, '2.', order, '3.', sellsign, '4.', buyFeesign, '5.', fee, '6.', userAddr);
            return new Promise((resolve, reject) => {
                console.log('inside function');
                let Abi_array = src_assets_files_nft_abi__WEBPACK_IMPORTED_MODULE_2__["NftExchangeAbi"];
                let Contract = src_assets_files_contract__WEBPACK_IMPORTED_MODULE_3__["ContractDetails"].nft_exchange_token;
                let exchangeContract = new window.web3.eth.Contract(Abi_array, Contract);
                exchangeContract.methods
                    .sell(order, sellsign, buyFeesign, fee)
                    .send({ value: 1, from: userAddr })
                    .on("transactionHash", hash => {
                    console.log('ontransactionhash', hash);
                })
                    .on('receipt', receipt => {
                    console.log('onreceipt', receipt);
                    if (receipt) {
                        let sucMsg = {
                            status: true,
                            message: "PrepareBuyerFeeMessage Result",
                            result: receipt.transactionHash,
                        };
                        resolve(sucMsg);
                    }
                    else {
                        let failMsg = {
                            status: false,
                            message: "Something went wrong",
                        };
                        resolve(failMsg);
                    }
                })
                    .on('error', error => reject(new Error('Failed to submit the Transaction to the contract admins')));
            });
        });
    }
    /*nft callsell function end*/
    /*nft callbuy function start*/
    callBuy(price, order, sig, buyerFeeSig, fees, userAddr) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('function callBuy called');
            console.log(price, order, sig, buyerFeeSig, fees, userAddr);
            return new Promise((resolve, reject) => {
                console.log('inside function');
                let Abi_array = src_assets_files_nft_abi__WEBPACK_IMPORTED_MODULE_2__["NftExchangeAbi"];
                let Contract = src_assets_files_contract__WEBPACK_IMPORTED_MODULE_3__["ContractDetails"].nft_exchange_token;
                let exchangeContract = new window.web3.eth.Contract(Abi_array, Contract);
                exchangeContract.methods
                    .buy(order, sig, buyerFeeSig, fees)
                    .send({ from: userAddr })
                    .on('error', error => reject(new Error('Failed to submit the Transaction to the contract admins')))
                    .on("transactionHash", hash => {
                    console.log('ontransactionhash', hash);
                })
                    .on('receipt', receipt => {
                    console.log('onreceipt', receipt);
                    if (receipt) {
                        let sucMsg = {
                            status: true,
                            message: "PrepareBuyerFeeMessage Result",
                            result: receipt.transactionHash,
                        };
                        resolve(sucMsg);
                    }
                    else {
                        let failMsg = {
                            status: false,
                            message: "Something went wrong",
                        };
                        resolve(failMsg);
                    }
                });
            });
        });
    }
    /*nft callbuy function end*/
    /*nft callbid function start*/
    callBid(order, sig, buyerSig, buyerFeeSig, buyer, buyingAmount, fees, userAddr) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('function callBid called');
            console.log('order:', order, 'sig:', sig, 'buyerSig:', buyerSig, 'buyerFeeSig:', buyerFeeSig, 'buyer:', buyer, 'buyingAmount:', buyingAmount, 'fees:', fees, 'userAddr:', userAddr);
            return new Promise((resolve, reject) => {
                console.log('inside function');
                let Abi_array = src_assets_files_nft_abi__WEBPACK_IMPORTED_MODULE_2__["NftExchangeAbi"];
                let Contract = src_assets_files_contract__WEBPACK_IMPORTED_MODULE_3__["ContractDetails"].nft_exchange_token;
                let exchangeContract = new window.web3.eth.Contract(Abi_array, Contract);
                exchangeContract.methods
                    .bid(order, sig, buyerSig, buyerFeeSig, buyer, buyingAmount, fees)
                    .send({ from: userAddr })
                    .on('error', error => reject(new Error('Failed to submit the Transaction to the contract admins')))
                    .on("transactionHash", hash => {
                    console.log('ontransactionhash', hash);
                })
                    .on('receipt', receipt => {
                    console.log('onreceipt', receipt);
                    if (receipt) {
                        let sucMsg = {
                            status: true,
                            message: "PrepareBuyerFeeMessage Result",
                            result: receipt.transactionHash,
                        };
                        resolve(sucMsg);
                    }
                    else {
                        let failMsg = {
                            status: false,
                            message: "Something went wrong",
                        };
                        resolve(failMsg);
                    }
                });
            });
        });
    }
    /*nft callbuy function end*/
    /*nft callcancel function start*/
    callCancel(order, userAddr) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('function callCancel called');
            return new Promise((resolve, reject) => {
                console.log('inside function');
                let Abi_array = src_assets_files_nft_abi__WEBPACK_IMPORTED_MODULE_2__["NftExchangeAbi"];
                let Contract = src_assets_files_contract__WEBPACK_IMPORTED_MODULE_3__["ContractDetails"].nft_exchange_token;
                let exchangeContract = new window.web3.eth.Contract(Abi_array, Contract);
                exchangeContract.methods
                    .cancel(order)
                    .send({ from: userAddr })
                    .on('error', error => reject(new Error('Failed to submit the Transaction to the contract admins')))
                    .on("transactionHash", hash => {
                    console.log('ontransactionhash', hash);
                })
                    .on('receipt', receipt => {
                    console.log('onreceipt', receipt);
                    if (receipt) {
                        let sucMsg = {
                            status: true,
                            message: "PrepareBuyerFeeMessage Result",
                            result: receipt.transactionHash,
                        };
                        resolve(sucMsg);
                    }
                    else {
                        let failMsg = {
                            status: false,
                            message: "Something went wrong",
                        };
                        resolve(failMsg);
                    }
                });
            });
        });
    }
    /*nft callbuy function end*/
    /*nft prepareOrderHash function start*/
    orderHash(order) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let Abi_array = src_assets_files_nft_abi__WEBPACK_IMPORTED_MODULE_2__["NftExchangeAbi"];
            let Contract = src_assets_files_contract__WEBPACK_IMPORTED_MODULE_3__["ContractDetails"].nft_exchange_token;
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (typeof window.web3 !== "undefined") {
                    let token_contract = new window.web3.eth.Contract(Abi_array, Contract);
                    yield token_contract.methods.prepareOrderHash(order).call((err, result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        if (result) {
                            console.log('result', result);
                            const sucMsg = {
                                status: true,
                                message: "Got Result",
                                result: result,
                            };
                            resolve(sucMsg);
                        }
                        else {
                            console.log('error', err);
                            const sucMsg = {
                                status: false,
                                message: "Got error",
                                data: err,
                            };
                            resolve(sucMsg);
                        }
                    }));
                }
                else {
                    const failMsg = {
                        status: false,
                        message: "Metamask extension not added on your browser",
                    };
                    resolve(failMsg);
                }
            }));
        });
    }
    /*nft prepareOrderHash function end*/
    /*nft prepareBidOrderHash function start*/
    bidOrderHash(order, bidder, amount) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let Abi_array = src_assets_files_nft_abi__WEBPACK_IMPORTED_MODULE_2__["NftExchangeAbi"];
            let Contract = src_assets_files_contract__WEBPACK_IMPORTED_MODULE_3__["ContractDetails"].nft_exchange_token;
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (typeof window.web3 !== "undefined") {
                    let token_contract = new window.web3.eth.Contract(Abi_array, Contract);
                    yield token_contract.methods.prepareBidOrderHash(order, bidder, amount).call((err, result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        if (result) {
                            console.log('result', result);
                            const sucMsg = {
                                status: true,
                                message: "Got Result",
                                result: result,
                            };
                            resolve(sucMsg);
                        }
                        else {
                            console.log('error', err);
                            const sucMsg = {
                                status: false,
                                message: "Got error",
                                data: err,
                            };
                            resolve(sucMsg);
                        }
                    }));
                }
                else {
                    const failMsg = {
                        status: false,
                        message: "Metamask extension not added on your browser",
                    };
                    resolve(failMsg);
                }
            }));
        });
    }
    /*nft prepareBidOrderHash function end*/
    getweiValue(getAmount) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return window.web3.utils.toWei(getAmount.toString());
        });
    }
}
NftService.ɵfac = function NftService_Factory(t) { return new (t || NftService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"])); };
NftService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NftService, factory: NftService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NftService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _api_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/common/services/metamask/stake/stake.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/common/services/metamask/stake/stake.service.ts ***!
  \*****************************************************************/
/*! exports provided: StakeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StakeService", function() { return StakeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_assets_files_stake_abi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/files/stake_abi */ "./src/assets/files/stake_abi.ts");
/* harmony import */ var src_assets_files_contract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/assets/files/contract */ "./src/assets/files/contract.ts");
/* harmony import */ var src_assets_files_pair_abi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/files/pair_abi */ "./src/assets/files/pair_abi.ts");
/* harmony import */ var _api_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/data.service */ "./src/app/common/services/api/data.service.ts");







class StakeService {
    constructor(dataService) {
        this.dataService = dataService;
        if (window.ethereum === undefined) {
            // this.toastr.errorToastr('Non-Ethereum browser detected. Install MetaMask', 'OOPS!');
        }
        else {
            window.web3 = window.web3.currentProvider;
            window.web3 = new window.Web3(window.ethereum);
        }
    }
    // get GetRewardamount method
    // public async GetRewardamount(Contract:any,Abi_array:any,UserAddress:any): Promise<any> {
    GetRewardamount(pId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('GetRewardamount', pId);
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (typeof window.web3 !== "undefined") {
                    let Abi_array = src_assets_files_stake_abi__WEBPACK_IMPORTED_MODULE_2__["StakeAbi"];
                    let Contract = src_assets_files_contract__WEBPACK_IMPORTED_MODULE_3__["ContractDetails"].master_stake_address;
                    let UserAddress = this.dataService.metaDeatails.account;
                    let stake_contract = new window.web3.eth.Contract(Abi_array, Contract);
                    yield stake_contract.methods
                        .pendingCake(pId, UserAddress)
                        .call((err, getearnedResult) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        if (getearnedResult) {
                            const sucMsg = {
                                status: true,
                                message: "GetRewardamount Result",
                                result: getearnedResult,
                            };
                            resolve(sucMsg);
                        }
                        else {
                            const sucMsg = {
                                status: false,
                                message: "Got error",
                                data: err,
                            };
                            resolve(sucMsg);
                        }
                    }));
                }
                else {
                    const failMsg = {
                        status: false,
                        message: "Metamask extension not added on your browser",
                    };
                    resolve(failMsg);
                }
            }));
        });
    }
    // get GetStakedamount method
    // public async GetRewardamount(Contract:any,Abi_array:any,UserAddress:any): Promise<any> {
    GetStakedamount(pId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('GetStakedamount', pId);
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (typeof window.web3 !== "undefined") {
                    let Abi_array = src_assets_files_stake_abi__WEBPACK_IMPORTED_MODULE_2__["StakeAbi"];
                    let Contract = src_assets_files_contract__WEBPACK_IMPORTED_MODULE_3__["ContractDetails"].master_stake_address;
                    let UserAddress = this.dataService.metaDeatails.account;
                    let stake_contract = new window.web3.eth.Contract(Abi_array, Contract);
                    yield stake_contract.methods
                        .userInfo(pId, UserAddress)
                        .call((err, getuserinfoResult) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        if (getuserinfoResult) {
                            const sucMsg = {
                                status: true,
                                message: "GetuserinfoResult Result",
                                result: getuserinfoResult,
                                amount: getuserinfoResult.amount,
                            };
                            resolve(sucMsg);
                        }
                        else {
                            const sucMsg = {
                                status: false,
                                message: "Got error",
                                data: err,
                            };
                            resolve(sucMsg);
                        }
                    }));
                }
                else {
                    const failMsg = {
                        status: false,
                        message: "Metamask extension not added on your browser",
                    };
                    resolve(failMsg);
                }
            }));
        });
    }
    // approve section
    ApproveFunction(Contract, Amount) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('ApproveFunction', Contract, Amount);
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (typeof window.web3 !== "undefined") {
                    let Abi_array = src_assets_files_pair_abi__WEBPACK_IMPORTED_MODULE_4__["PairAbi"];
                    let UserAddress = this.dataService.metaDeatails.account;
                    let SpenderAddress = src_assets_files_contract__WEBPACK_IMPORTED_MODULE_3__["ContractDetails"].master_stake_address;
                    let contract = new window.web3.eth.Contract(Abi_array, Contract);
                    // allowance section
                    yield contract.methods
                        .allowance(UserAddress, SpenderAddress)
                        .call({ from: UserAddress }, (err, getAllowanceResult) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        if (getAllowanceResult) {
                            if (+getAllowanceResult > +Amount) {
                                const sucMsg = {
                                    status: true,
                                    message: "Successfully approved",
                                    result: "No need to approve",
                                };
                                yield resolve(sucMsg);
                            }
                            else {
                                // approve section
                                yield contract.methods
                                    .approve(SpenderAddress, Amount)
                                    .send({ from: UserAddress })
                                    .on("transactionHash", (hash) => {
                                    // console.log("a ------>",hash);
                                })
                                    .on("receipt", (approveresult) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                    const sucMsg = {
                                        status: true,
                                        message: "Successfully approved",
                                        result: approveresult,
                                    };
                                    resolve(sucMsg);
                                }))
                                    .on("confirmation", (confirmationNumber, approveresult) => { })
                                    .on("error", (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                    let message = error.message ==
                                        "MetaMask Tx Signature: User denied transaction signature"
                                        ? "Transaction Rejected !"
                                        : "Something went wrong try after Sometime";
                                    const sucMsg = {
                                        status: false,
                                        message: error.message,
                                        data: err,
                                    };
                                    yield resolve(sucMsg);
                                }));
                                // approve section
                            }
                        }
                        else {
                            const sucMsg = {
                                status: false,
                                message: "Got error",
                                data: err,
                            };
                            resolve(sucMsg);
                        }
                    }));
                    // allowance section
                }
                else {
                    const failMsg = {
                        status: false,
                        message: "Metamask extension not added on your browser",
                    };
                    resolve(failMsg);
                }
            }));
        });
    }
    // stake section
    // public async StakeFunction(Contract:any,Abi_array:any,Amount:any,UserAddress:any): Promise<any> {
    StakeFunction(pId, Amount) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(pId, 'PID');
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (typeof window.web3 !== "undefined") {
                    let Abi_array = src_assets_files_stake_abi__WEBPACK_IMPORTED_MODULE_2__["StakeAbi"];
                    let Contract = src_assets_files_contract__WEBPACK_IMPORTED_MODULE_3__["ContractDetails"].master_stake_address;
                    let UserAddress = this.dataService.metaDeatails.account;
                    let contract = new window.web3.eth.Contract(Abi_array, Contract);
                    // stake section
                    yield contract.methods
                        .deposit(pId, Amount.toString())
                        .send({ from: UserAddress })
                        .on("transactionHash", (hash) => {
                        // console.log("a ------>",hash);
                    })
                        .on("receipt", (stakeresult) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        const sucMsg = {
                            status: true,
                            message: "Successfully staked",
                            result: stakeresult,
                        };
                        resolve(sucMsg);
                    }))
                        .on("confirmation", (confirmationNumber, stakeresult) => { })
                        .on("error", (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        let message = error.message ==
                            "MetaMask Tx Signature: User denied transaction signature"
                            ? "Transaction Rejected !"
                            : "Something went wrong try after Sometime";
                        const sucMsg = {
                            status: false,
                            message: error.message,
                        };
                        yield resolve(sucMsg);
                    }));
                    // stake section
                }
                else {
                    const failMsg = {
                        status: false,
                        message: "Metamask extension not added on your browser",
                    };
                    resolve(failMsg);
                }
            }));
        });
    }
    addStakeing(pairAddress) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('addStakeing called', pairAddress);
            //   let Abi_array = TokenAbi;
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (typeof window.web3 !== 'undefined') {
                    let contract = new window.web3.eth.Contract(src_assets_files_stake_abi__WEBPACK_IMPORTED_MODULE_2__["StakeAbi"], src_assets_files_contract__WEBPACK_IMPORTED_MODULE_3__["ContractDetails"].master_stake_address);
                    const address = yield contract.methods.owner().call();
                    yield contract.methods
                        .add(100, pairAddress, false)
                        .send({ from: address })
                        .then(function (result) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            console.log(result, 'sucess');
                            if (result.status) {
                                const poolLength = yield contract.methods.poolLength().call();
                                console.log(poolLength, '___________ poolLength');
                                const sucMsg = {
                                    status: true,
                                    message: 'Get your poll',
                                    data: poolLength - 1,
                                    txId: result.transactionHash,
                                };
                                resolve(sucMsg);
                            }
                            else {
                                const sucMsg = {
                                    status: false,
                                    message: 'Got error',
                                    data: result,
                                };
                                resolve(sucMsg);
                            }
                        });
                    })
                        .catch((err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        const errMsg = {
                            status: false,
                            message: err.message,
                            data: err,
                        };
                        yield resolve(errMsg);
                        const sucMsg = {
                            status: false,
                            message: 'Got error',
                        };
                        resolve(sucMsg);
                    }));
                }
                else {
                    const failMsg = {
                        status: false,
                        message: 'Metamask extension not added on your browser',
                    };
                    resolve(failMsg);
                }
            }));
        });
    }
    // unstake section
    // public async UnstakeFunction(Contract:any,Abi_array:any,UserAddress:any): Promise<any> {
    UnstakeFunction(pId, Amount) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('UnstakeFunction', pId, Amount);
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (typeof window.web3 !== "undefined") {
                    let Abi_array = src_assets_files_stake_abi__WEBPACK_IMPORTED_MODULE_2__["StakeAbi"];
                    let Contract = src_assets_files_contract__WEBPACK_IMPORTED_MODULE_3__["ContractDetails"].master_stake_address;
                    let UserAddress = this.dataService.metaDeatails.account;
                    let contract = new window.web3.eth.Contract(Abi_array, Contract);
                    // unstake section
                    yield contract.methods
                        .withdraw(pId, Amount)
                        .send({ from: UserAddress })
                        .on("transactionHash", (hash) => {
                        // console.log("a ------>",hash);
                    })
                        .on("receipt", (unstakeresult) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        const sucMsg = {
                            status: true,
                            message: "Successfully staked",
                            result: unstakeresult,
                        };
                        resolve(sucMsg);
                    }))
                        .on("confirmation", (confirmationNumber, unstakeresult) => { })
                        .on("error", (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        let message = error.message ==
                            "MetaMask Tx Signature: User denied transaction signature"
                            ? "Transaction Rejected !"
                            : "Something went wrong try after Sometime";
                        const sucMsg = {
                            status: false,
                            message: error.message,
                        };
                        yield resolve(sucMsg);
                    }));
                    // unstake section
                }
                else {
                    const failMsg = {
                        status: false,
                        message: "Metamask extension not added on your browser",
                    };
                    resolve(failMsg);
                }
            }));
        });
    }
    // harvest section
    // public async HarvestFunction(Contract:any,Abi_array:any,UserAddress:any): Promise<any> {
    HarvestFunction(pId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('HarvestFunction', pId);
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (typeof window.web3 !== "undefined") {
                    let Abi_array = src_assets_files_stake_abi__WEBPACK_IMPORTED_MODULE_2__["StakeAbi"];
                    let Contract = src_assets_files_contract__WEBPACK_IMPORTED_MODULE_3__["ContractDetails"].master_stake_address;
                    let UserAddress = this.dataService.metaDeatails.account;
                    let Amount = 0;
                    let contract = new window.web3.eth.Contract(Abi_array, Contract);
                    // Harvestresult section
                    yield contract.methods
                        .withdraw(pId, Amount)
                        .send({ from: UserAddress })
                        .on("transactionHash", (hash) => {
                        // console.log("a ------>",hash);
                    })
                        .on("receipt", (Harvestresult) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        const sucMsg = {
                            status: true,
                            message: "Successfully Harvest",
                            result: Harvestresult,
                        };
                        resolve(sucMsg);
                    }))
                        .on("confirmation", (confirmationNumber, Harvestresult) => { })
                        .on("error", (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        let message = error.message ==
                            "MetaMask Tx Signature: User denied transaction signature"
                            ? "Transaction Rejected !"
                            : "Something went wrong try after Sometime";
                        const sucMsg = {
                            status: false,
                            message: error.message,
                        };
                        yield resolve(sucMsg);
                    }));
                    // Harvestresult section
                }
                else {
                    const failMsg = {
                        status: false,
                        message: "Metamask extension not added on your browser",
                    };
                    resolve(failMsg);
                }
            }));
        });
    }
    sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
    GetPoolInfo(poolId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let Abi_array = src_assets_files_stake_abi__WEBPACK_IMPORTED_MODULE_2__["StakeAbi"];
            console.log('GetPoolInfo', poolId);
            let Contract = src_assets_files_contract__WEBPACK_IMPORTED_MODULE_3__["ContractDetails"].master_stake_address;
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (typeof window.web3 !== "undefined") {
                    let token_contract = new window.web3.eth.Contract(Abi_array, Contract);
                    yield token_contract.methods.poolInfo(poolId).call((err, result) => {
                        if (result) {
                            const sucMsg = {
                                status: true,
                                message: "Got Result",
                                shareRaw: result.accGoldPerShare,
                                share: window.web3.utils.fromWei(result.accGoldPerShare.toString(), "ether"),
                                allocPoint: result.allocPoint,
                            };
                            resolve(sucMsg);
                        }
                        else {
                            const sucMsg = {
                                status: false,
                                message: "Got error",
                                data: err,
                            };
                            resolve(sucMsg);
                        }
                    });
                }
                else {
                    const failMsg = {
                        status: false,
                        message: "Metamask extension not added on your browser",
                    };
                    resolve(failMsg);
                }
            }));
        });
    }
    GetReferrerReward(txId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('GetReferrerReward', txId);
            let Abi_array = src_assets_files_stake_abi__WEBPACK_IMPORTED_MODULE_2__["StakeAbi"];
            let Contract = src_assets_files_contract__WEBPACK_IMPORTED_MODULE_3__["ContractDetails"].master_stake_address;
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (typeof window.web3 !== "undefined") {
                    let token_contract = yield new window.web3.eth.Contract(Abi_array, Contract);
                    return yield token_contract.events
                        .referrerReward({
                        filter: {
                            user: this.dataService.metaDeatails.account,
                        },
                        fromBlock: 0,
                        toBlock: "latest",
                    }, function (error, event) {
                        // console.log(event);
                        // console.log(error);
                        if (event.transactionHash == txId) {
                            // console.log("yes here");
                            resolve(event);
                        }
                    })
                        .on("data", function (event) {
                        console.log(event); // same results as the optional callback above
                        console.log(event.transactionHash, txId); // same results as the optional callback above
                        if (event.transactionHash == txId) {
                            console.log("yes here1");
                            resolve(event);
                        }
                    })
                        .on("changed", function (event) {
                        // remove event from local database
                    })
                        .on("error", function (err) {
                        console.log(err);
                    });
                    // await token_contract.methods.poolInfo(txId).call((err, result) => {
                    //   if (result) {
                    //     const sucMsg = {
                    //       status: true,
                    //       message: "Got Result",
                    //       shareRaw: result.accGoldPerShare,
                    //       share: window.web3.utils.fromWei(
                    //         result.accGoldPerShare.toString(),
                    //         "ether"
                    //       ),
                    //       allocPoint: result.allocPoint,
                    //     };
                    //     resolve(sucMsg);
                    //   } else {
                    //     const sucMsg = {
                    //       status: false,
                    //       message: "Got error",
                    //       data: err,
                    //     };
                    //     resolve(sucMsg);
                    //   }
                    // });
                }
                else {
                    // const failMsg = {
                    //   status: false,
                    //   message: "Metamask extension not added on your browser",
                    // };
                    // resolve(failMsg);
                }
            }));
        });
    }
}
StakeService.ɵfac = function StakeService_Factory(t) { return new (t || StakeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"])); };
StakeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: StakeService, factory: StakeService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StakeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _api_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/common/toaster/toaster-container.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/common/toaster/toaster-container.component.ts ***!
  \***************************************************************/
/*! exports provided: ToasterContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToasterContainerComponent", function() { return ToasterContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _toaster_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toaster.service */ "./src/app/common/toaster/toaster.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_common_toaster_toaster_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/toaster/toaster.component */ "./src/app/common/toaster/toaster.component.ts");





function ToasterContainerComponent_app_toaster_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-toaster", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("remove", function ToasterContainerComponent_app_toaster_0_Template_app_toaster_remove_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.remove($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const toast_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("toast", toast_r1)("i", i_r2);
} }
// <pre>toast$: {{ this.toaster.toast$ | async | json }}</pre>
// <pre>toasts: {{ toasts | json }}</pre>
class ToasterContainerComponent {
    constructor(toaster) {
        this.toaster = toaster;
        this.toasts = [];
    }
    ngOnInit() {
        this.toaster.toast$.subscribe((toast) => {
            this.toasts = [toast, ...this.toasts];
            setTimeout(() => this.toasts.pop(), toast.delay);
        });
    }
    remove(index) {
        this.toasts = this.toasts.filter((v, i) => i !== index);
        //this.toasts.splice(index, 1);
    }
}
ToasterContainerComponent.ɵfac = function ToasterContainerComponent_Factory(t) { return new (t || ToasterContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_toaster_service__WEBPACK_IMPORTED_MODULE_1__["ToasterService"])); };
ToasterContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToasterContainerComponent, selectors: [["app-toaster-container"]], decls: 1, vars: 1, consts: [[3, "toast", "i", "remove", 4, "ngFor", "ngForOf"], [3, "toast", "i", "remove"]], template: function ToasterContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ToasterContainerComponent_app_toaster_0_Template, 1, 2, "app-toaster", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.toasts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], src_app_common_toaster_toaster_component__WEBPACK_IMPORTED_MODULE_3__["ToasterComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToasterContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-toaster-container",
                template: `
    <app-toaster
      *ngFor="let toast of toasts; let i = index"
      [toast]="toast"
      [i]="i"
      (remove)="remove($event)"
    ></app-toaster>

  
  `,
                styles: [],
            }]
    }], function () { return [{ type: _toaster_service__WEBPACK_IMPORTED_MODULE_1__["ToasterService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/common/toaster/toaster.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/common/toaster/toaster.component.ts ***!
  \*****************************************************/
/*! exports provided: ToasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToasterComponent", function() { return ToasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function ToasterComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToasterComponent_div_0_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.remove.emit(ctx_r1.i); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("toast toast-", ctx_r0.toast.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", ctx_r0.i * 65, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.toast.title);
} }
class ToasterComponent {
    constructor() {
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
}
ToasterComponent.ɵfac = function ToasterComponent_Factory(t) { return new (t || ToasterComponent)(); };
ToasterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToasterComponent, selectors: [["app-toaster"]], inputs: { toast: "toast", i: "i" }, outputs: { remove: "remove" }, decls: 1, vars: 1, consts: [[3, "class", "top", 4, "ngIf"], [1, "toast-heading"], [1, "close", 3, "click"]], template: function ToasterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ToasterComponent_div_0_Template, 5, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.i == 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".toast[_ngcontent-%COMP%] {\n      position: fixed;\n      width: 300px;\n      margin-top: 1rem;\n      border: 1px solid transparent;\n      border-radius: .25rem;\n      animation: move 2s both;\n      z-index: 10000;\n    opacity: 1;\n\n    right: 5px;\n    top: 10px;\n    display: flex;\n    align-items: center;\n    padding: 15px;\n    }\n\n    .toast-success[_ngcontent-%COMP%] {\n      color: #155724;\n      background-color: #d4edda;\n      border-color: #c3e6cb;\n    }\n\n    .toast-error[_ngcontent-%COMP%] {\n      color: #721c24;\n      background-color: #f8d7da;\n      border-color: #f5c6cb;\n    }\n\n    .toast-warning[_ngcontent-%COMP%] {\n      color: #856404;\n      background-color: #fff3cd;\n      border-color: #ffeeba;\n    }\n\n    .close[_ngcontent-%COMP%] {\n      cursor: pointer;\n      flex: 1;\n      text-align: right;\n    }\n\n    .toast-heading[_ngcontent-%COMP%] {\n      margin: 0px !important;\n      flex:2;\n    }\n\n    @keyframes move {\n      from {\n        transform: translateX(100%);\n      }\n      to {\n        transform: translateX(0);\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToasterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-toaster",
                template: `
    <div *ngIf="i == 0" class="toast toast-{{ toast.type }}" [style.top.px]="i * 65">
      <p class="toast-heading">{{ toast.title }}</p>
      <a class="close" (click)="remove.emit(i)">&times;</a>
    </div>
  `,
                // <p>{{ toast.body }}</p>
                styles: [
                    `
    .toast {
      position: fixed;
      width: 300px;
      margin-top: 1rem;
      border: 1px solid transparent;
      border-radius: .25rem;
      animation: move 2s both;
      z-index: 10000;
    opacity: 1;

    right: 5px;
    top: 10px;
    display: flex;
    align-items: center;
    padding: 15px;
    }

    .toast-success {
      color: #155724;
      background-color: #d4edda;
      border-color: #c3e6cb;
    }

    .toast-error {
      color: #721c24;
      background-color: #f8d7da;
      border-color: #f5c6cb;
    }

    .toast-warning {
      color: #856404;
      background-color: #fff3cd;
      border-color: #ffeeba;
    }

    .close {
      cursor: pointer;
      flex: 1;
      text-align: right;
    }

    .toast-heading {
      margin: 0px !important;
      flex:2;
    }

    @keyframes move {
      from {
        transform: translateX(100%);
      }
      to {
        transform: translateX(0);
      }
  `,
                ],
            }]
    }], null, { toast: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], i: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], remove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/common/toaster/toaster.service.ts":
/*!***************************************************!*\
  !*** ./src/app/common/toaster/toaster.service.ts ***!
  \***************************************************/
/*! exports provided: ToasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToasterService", function() { return ToasterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_api_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api/data.service */ "./src/app/common/services/api/data.service.ts");





class ToasterService {
    constructor(dataService) {
        this.dataService = dataService;
        console.log('Toaster service called');
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.toast$ = this.subject
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((toast) => toast !== null));
    }
    show(type, title, delay, body, kill) {
        if (type) {
            type = "success";
        }
        if (type == false) {
            type = "error";
        }
        // console.log(delay, "delay");
        if (delay == undefined) {
            delay = 3000;
        }
        this.dataService.changeDetector.emit(true);
        this.subject.next({ type, title, body, delay });
    }
}
ToasterService.ɵfac = function ToasterService_Factory(t) { return new (t || ToasterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_api_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"])); };
ToasterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ToasterService, factory: ToasterService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToasterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _services_api_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _common_inner_header_inner_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/inner-header/inner-header.component */ "./src/app/common/inner-header/inner-header.component.ts");
/* harmony import */ var _pages_defi_sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/defi/sidemenu/sidemenu.component */ "./src/app/pages/defi/sidemenu/sidemenu.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _common_inner_footer_inner_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/inner-footer/inner-footer.component */ "./src/app/common/inner-footer/inner-footer.component.ts");
/* harmony import */ var src_app_common_toaster_toaster_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/toaster/toaster-container.component */ "./src/app/common/toaster/toaster-container.component.ts");







class LayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(); };
LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], decls: 10, vars: 0, consts: [[1, "dsb-cnt"], [1, "container"], [1, "row"], [1, "sidebar-cnt"], [1, "tabpages-cnt"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-inner-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-sidemenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-inner-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-toaster-container");
    } }, directives: [_common_inner_header_inner_header_component__WEBPACK_IMPORTED_MODULE_1__["InnerHeaderComponent"], _pages_defi_sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_2__["SidemenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _common_inner_footer_inner_footer_component__WEBPACK_IMPORTED_MODULE_4__["InnerFooterComponent"], src_app_common_toaster_toaster_container_component__WEBPACK_IMPORTED_MODULE_5__["ToasterContainerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-layout',
                templateUrl: './layout.component.html',
                styleUrls: ['./layout.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/blog/blog.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/blog/blog.component.ts ***!
  \**********************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/services/api/data.service */ "./src/app/common/services/api/data.service.ts");
/* harmony import */ var src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/toaster/toaster.service */ "./src/app/common/toaster/toaster.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _common_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/header/header.component */ "./src/app/common/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/footer/footer.component */ "./src/app/common/footer/footer.component.ts");








function BlogComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlogComponent_div_6_div_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const blog_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.myFunc(blog_r3.blogId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const blog_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", blog_r3.image ? blog_r3.image : "assets/images/blog-1.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](blog_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 4, blog_r3.date, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", blog_r3.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function BlogComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BlogComponent_div_6_div_1_Template, 10, 7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.blogs);
} }
function BlogComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlogComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.loadmore(ctx_r6.skip); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Load more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class BlogComponent {
    constructor(conn, toasterService, router) {
        this.conn = conn;
        this.toasterService = toasterService;
        this.router = router;
        this.blogs = {};
        this.limit = 6;
        this.skip = 6;
    }
    ngOnInit() {
        this.getBlogs();
    }
    getBlogs() {
        this.conn.postRequest('blogs', { skip: 0, limit: this.limit }).subscribe((res) => {
            if (res.status == true) {
                this.blogs = res.data;
            }
        });
    }
    myFunc(blog_id) {
        this.router.navigate(['/blog-details/'], { queryParams: { id: encodeURIComponent(blog_id) } });
    }
    loadmore(skip) {
        this.conn.postRequest('blogs', { skip: this.skip, limit: this.limit }).subscribe((res) => {
            this.blogs.push(...res.data);
            this.skip = this.skip + this.limit;
        });
    }
}
BlogComponent.ɵfac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_2__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogComponent, selectors: [["app-blog"]], decls: 9, vars: 2, consts: [[1, "digital-art-sec"], [1, "blog-container"], [1, "container"], [1, "page-title"], ["class", "row", 4, "ngIf"], ["class", "btn default-btn mt-4", 3, "click", 4, "ngIf"], [1, "row"], ["class", "col-md-6 col-lg-4", 4, "ngFor", "ngForOf"], [1, "col-md-6", "col-lg-4"], [1, "blog-cnt", 3, "click"], [3, "src"], [1, "text-cnt"], [1, "content", 3, "innerHTML"], [1, "btn", "default-btn", "mt-4", 3, "click"]], template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Blogs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BlogComponent_div_6_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BlogComponent_button_7_Template, 2, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.blogs.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.blogs.length > 5);
    } }, directives: [_common_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: [".blog-container[_ngcontent-%COMP%] {\n  padding: 40px 0px;\n}\n.blog-container[_ngcontent-%COMP%]   .blog-cnt[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 25px;\n  overflow: hidden;\n  border: 1px solid #ebebeb;\n  margin-bottom: 15px;\n  display: block;\n}\n.blog-container[_ngcontent-%COMP%]   .blog-cnt[_ngcontent-%COMP%]   .text-cnt[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 15px 25px;\n}\n.blog-container[_ngcontent-%COMP%]   .blog-cnt[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 185px;\n  object-fit: cover;\n}\n.blog-container[_ngcontent-%COMP%]   .blog-cnt[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  margin-bottom: 10px;\n  line-height: 1.5;\n  color: #111111;\n}\n.blog-container[_ngcontent-%COMP%]   .blog-cnt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #888888;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYmxvZy9ibG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsaUJBQUE7QUFDRDtBQUNDO0VBQ0MsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUNGO0FBQ0U7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7QUFDSDtBQUNFO0VBQ0MsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUNIO0FBQ0U7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNIO0FBQ0U7RUFDQyxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBQ0giLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ibG9nL2Jsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvZy1jb250YWluZXJ7XHJcblx0cGFkZGluZzo0MHB4IDBweDtcclxuXHJcblx0LmJsb2ctY250e1xyXG5cdFx0d2lkdGg6MTAwJTtcclxuXHRcdGJvcmRlci1yYWRpdXM6MjVweDtcclxuXHRcdG92ZXJmbG93OmhpZGRlbjtcclxuXHRcdGJvcmRlcjoxcHggc29saWQgI2ViZWJlYjtcclxuXHRcdG1hcmdpbi1ib3R0b206MTVweDtcclxuXHRcdGRpc3BsYXk6YmxvY2s7XHJcblxyXG5cdFx0LnRleHQtY250e1xyXG5cdFx0XHR3aWR0aDoxMDAlO1xyXG5cdFx0XHRwYWRkaW5nOjE1cHggMjVweDtcclxuXHRcdH1cclxuXHRcdGltZ3tcclxuXHRcdFx0d2lkdGg6MTAwJTtcclxuXHRcdFx0aGVpZ2h0OjE4NXB4O1xyXG5cdFx0XHRvYmplY3QtZml0OiBjb3ZlcjtcclxuXHRcdH1cclxuXHRcdGgze1xyXG5cdFx0XHRmb250LXNpemU6MTZweDtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6NzAwO1xyXG5cdFx0XHRtYXJnaW4tYm90dG9tOjEwcHg7XHJcblx0XHRcdGxpbmUtaGVpZ2h0OjEuNTtcclxuXHRcdFx0Y29sb3I6IzExMTExMTtcclxuXHRcdH1cclxuXHRcdHB7XHJcblx0XHRcdGZvbnQtc2l6ZToxNHB4O1xyXG5cdFx0XHRjb2xvcjojODg4ODg4O1xyXG5cdFx0XHRtYXJnaW4tYm90dG9tOjEwcHg7XHJcblx0XHR9XHJcblx0fVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blog',
                templateUrl: './blog.component.html',
                styleUrls: ['./blog.component.scss']
            }]
    }], function () { return [{ type: src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }, { type: src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_2__["ToasterService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/blogdetails/blogdetails.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/blogdetails/blogdetails.component.ts ***!
  \************************************************************/
/*! exports provided: BlogdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogdetailsComponent", function() { return BlogdetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/services/api/data.service */ "./src/app/common/services/api/data.service.ts");
/* harmony import */ var src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/toaster/toaster.service */ "./src/app/common/toaster/toaster.service.ts");
/* harmony import */ var _common_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/header/header.component */ "./src/app/common/header/header.component.ts");
/* harmony import */ var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/footer/footer.component */ "./src/app/common/footer/footer.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








class BlogdetailsComponent {
    constructor(route, router, conn, toasterService) {
        this.route = route;
        this.router = router;
        this.conn = conn;
        this.toasterService = toasterService;
        this.blogObj = {};
    }
    ngOnInit() {
        this.blogObj.pagekey = this.route.snapshot.queryParamMap.get('id');
        var Id = decodeURIComponent(this.blogObj.pagekey);
        this.pageKey = Id;
        this.getBlogDetails(Id);
    }
    getBlogDetails(param) {
        this.conn.postRequest('getBlog', { id: param }).subscribe((result) => {
            if (result.status) {
                this.page = result.data;
            }
            else {
                this.toasterService.show(false, "Page not found");
            }
        });
    }
}
BlogdetailsComponent.ɵfac = function BlogdetailsComponent_Factory(t) { return new (t || BlogdetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"])); };
BlogdetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogdetailsComponent, selectors: [["app-blogdetails"]], decls: 17, vars: 7, consts: [[1, "digital-art-sec"], [1, "blog-detail-container"], [1, "container"], [1, "page-title"], [1, "row"], [1, "col-12"], [1, "blog-details-cnt"], [3, "src"], [3, "innerHTML"]], template: function BlogdetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Blog Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.page.image ? ctx.page.image : "assets/images/blog-5.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.page.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 4, ctx.page.date, "medium"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("innerHTML", ctx.page.pagecontent, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [_common_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: [".blog-detail-container[_ngcontent-%COMP%] {\n  padding: 40px 0px;\n}\n.blog-detail-container[_ngcontent-%COMP%]   .blog-details-cnt[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 25px;\n  overflow: hidden;\n  border: 1px solid #ebebeb;\n  padding: 25px;\n}\n.blog-detail-container[_ngcontent-%COMP%]   .blog-details-cnt[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 335px;\n  margin-bottom: 25px;\n  object-fit: cover;\n  border-radius: 15px;\n}\n.blog-detail-container[_ngcontent-%COMP%]   .blog-details-cnt[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  margin-bottom: 10px;\n  line-height: 1.5;\n  color: #111111;\n}\n.blog-detail-container[_ngcontent-%COMP%]   .blog-details-cnt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #888888;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYmxvZ2RldGFpbHMvYmxvZ2RldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxpQkFBQTtBQUNEO0FBQ0M7RUFDQyxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQUNGO0FBQ0U7RUFDQyxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUNIO0FBQ0U7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNIO0FBQ0U7RUFDQyxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBQ0giLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ibG9nZGV0YWlscy9ibG9nZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibG9nLWRldGFpbC1jb250YWluZXJ7XHJcblx0cGFkZGluZzo0MHB4IDBweDtcclxuXHJcblx0LmJsb2ctZGV0YWlscy1jbnR7XHJcblx0XHR3aWR0aDoxMDAlO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czoyNXB4O1xyXG5cdFx0b3ZlcmZsb3c6aGlkZGVuO1xyXG5cdFx0Ym9yZGVyOjFweCBzb2xpZCAjZWJlYmViO1xyXG5cdFx0cGFkZGluZzoyNXB4O1xyXG5cclxuXHRcdGltZ3tcclxuXHRcdFx0d2lkdGg6MTAwJTtcclxuXHRcdFx0aGVpZ2h0OjMzNXB4O1xyXG5cdFx0XHRtYXJnaW4tYm90dG9tOjI1cHg7XHJcblx0XHRcdG9iamVjdC1maXQ6Y292ZXI7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6MTVweDtcclxuXHRcdH1cclxuXHRcdGgze1xyXG5cdFx0XHRmb250LXNpemU6MjRweDtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6NzAwO1xyXG5cdFx0XHRtYXJnaW4tYm90dG9tOjEwcHg7XHJcblx0XHRcdGxpbmUtaGVpZ2h0OjEuNTtcclxuXHRcdFx0Y29sb3I6IzExMTExMTtcclxuXHRcdH1cclxuXHRcdHB7XHJcblx0XHRcdGZvbnQtc2l6ZToxNHB4O1xyXG5cdFx0XHRjb2xvcjojODg4ODg4O1xyXG5cdFx0XHRtYXJnaW4tYm90dG9tOjEwcHg7XHJcblx0XHR9XHJcblx0fVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogdetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blogdetails',
                templateUrl: './blogdetails.component.html',
                styleUrls: ['./blogdetails.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }, { type: src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/defi/sidemenu/sidemenu.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/defi/sidemenu/sidemenu.component.ts ***!
  \***********************************************************/
/*! exports provided: SidemenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidemenuComponent", function() { return SidemenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/services/api/data.service */ "./src/app/common/services/api/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = function (a0) { return { "active": a0 }; };
function SidemenuComponent_li_44_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidemenuComponent_li_44_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.logout(); })("click", function SidemenuComponent_li_44_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.sideclick("logout"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r0.url == "logout"));
} }
class SidemenuComponent {
    constructor(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.navbarCollapsed = true;
        this.url = "";
        var path = window.location.pathname;
        this.sideclick(path.substr(1));
        this.dataService.actUrl.subscribe((res) => {
            this.url = res;
        });
    }
    toggleNavbarCollapsing() { this.navbarCollapsed = !this.navbarCollapsed; }
    sideclick(val) {
        this.dataService.activeUrl(val);
    }
    ngOnInit() {
    }
    logout() {
        this.dataService.metaLogout();
        localStorage.clear();
        this.router.navigateByUrl("/");
    }
}
SidemenuComponent.ɵfac = function SidemenuComponent_Factory(t) { return new (t || SidemenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
SidemenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidemenuComponent, selectors: [["app-sidemenu"]], decls: 47, vars: 35, consts: [[1, "navbar-expand-lg"], [1, "d-flex", "justify-content-start", "fixmenubutton"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", "menucontent"], [1, "pl-0"], [3, "routerLink", "ngClass", "click"], ["src", "assets/images/sidebar-dsb-icon.png", 1, "img-fluid"], ["src", "assets/images/sidebar-trd-icon.png", 1, "img-fluid"], ["src", "assets/images/sidebar-stake-icon.png", 1, "img-fluid"], ["src", "assets/images/sidebar-collection-icon.png", 1, "img-fluid"], ["src", "assets/images/sidebar-profile3-icon.png", 1, "img-fluid"], ["src", "assets/images/sidebar-history-icon.png", 1, "img-fluid"], ["src", "assets/images/sidebar-settings-icon.png", 1, "img-fluid"], [4, "ngIf"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "true", "aria-label", "Toggle navigation", 1, "navbar-toggler", "sidemenubar", 3, "click"], [1, "navbar-toggler-icon", "side-icon"], [3, "ngClass", "click"], ["src", "assets/images/sidebar-signout-icon.png", 1, "img-fluid"]], template: function SidemenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidemenuComponent_Template_a_click_5_listener() { return ctx.sideclick("dashboard"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidemenuComponent_Template_a_click_10_listener() { return ctx.sideclick("trade"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Trade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidemenuComponent_Template_a_click_15_listener() { return ctx.sideclick("staking"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Staking");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidemenuComponent_Template_a_click_20_listener() { return ctx.sideclick("collection"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Collection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidemenuComponent_Template_a_click_25_listener() { return ctx.sideclick("import"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Import NFT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidemenuComponent_Template_a_click_30_listener() { return ctx.sideclick("profile"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidemenuComponent_Template_a_click_35_listener() { return ctx.sideclick("history"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidemenuComponent_Template_a_click_40_listener() { return ctx.sideclick("settings"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, SidemenuComponent_li_44_Template, 5, 3, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidemenuComponent_Template_button_click_45_listener() { return ctx.toggleNavbarCollapsing(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("collapse", ctx.navbarCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/dashboard")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx.url == "dashboard"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/trade")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, ctx.url == "trade"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/staking")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c0, ctx.url == "staking"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/collection")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c0, ctx.url == "collection"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/import")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c0, ctx.url == "import"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/user")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](29, _c0, ctx.url == "user"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/history")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](31, _c0, ctx.url == "history"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/settings")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](33, _c0, ctx.url == "settings"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataService.metaDeatails == null ? null : ctx.dataService.metaDeatails.accountShort);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RlZmkvc2lkZW1lbnUvc2lkZW1lbnUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidemenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidemenu',
                templateUrl: './sidemenu.component.html',
                styleUrls: ['./sidemenu.component.scss']
            }]
    }], function () { return [{ type: src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/defi/sidemenu/sidemenu.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/defi/sidemenu/sidemenu.module.ts ***!
  \********************************************************/
/*! exports provided: SidemenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidemenuModule", function() { return SidemenuModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _sidemenu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidemenu.component */ "./src/app/pages/defi/sidemenu/sidemenu.component.ts");





// import { InnerFooterModule } from "../../../common/inner-footer/inner-footer.module";
class SidemenuModule {
}
SidemenuModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SidemenuModule });
SidemenuModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SidemenuModule_Factory(t) { return new (t || SidemenuModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SidemenuModule, { declarations: [_sidemenu_component__WEBPACK_IMPORTED_MODULE_3__["SidemenuComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_sidemenu_component__WEBPACK_IMPORTED_MODULE_3__["SidemenuComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidemenuModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_sidemenu_component__WEBPACK_IMPORTED_MODULE_3__["SidemenuComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                exports: [_sidemenu_component__WEBPACK_IMPORTED_MODULE_3__["SidemenuComponent"]],
                entryComponents: [_sidemenu_component__WEBPACK_IMPORTED_MODULE_3__["SidemenuComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_assets_files_contract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/assets/files/contract */ "./src/assets/files/contract.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/services/api/data.service */ "./src/app/common/services/api/data.service.ts");
/* harmony import */ var src_app_common_services_metamask_common_metamask_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/services/metamask/common/metamask.service */ "./src/app/common/services/metamask/common/metamask.service.ts");
/* harmony import */ var src_app_common_services_metamask_common_contract_common_contract_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/services/metamask/common-contract/common-contract.service */ "./src/app/common/services/metamask/common-contract/common-contract.service.ts");
/* harmony import */ var src_app_common_services_metamask_stake_stake_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/services/metamask/stake/stake.service */ "./src/app/common/services/metamask/stake/stake.service.ts");
/* harmony import */ var src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common/toaster/toaster.service */ "./src/app/common/toaster/toaster.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _common_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/header/header.component */ "./src/app/common/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/footer/footer.component */ "./src/app/common/footer/footer.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");















const _c0 = ["form"];
function HomeComponent_section_13_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_section_13_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.goto(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Start Collecting");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.cmsContent[1].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.cmsContent[1].pagecontent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.cmsContent[2].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.cmsContent[2].pagecontent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.cmsContent[3].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.cmsContent[3].pagecontent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.cmsContent[4].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.cmsContent[4].pagecontent);
} }
function HomeComponent_section_14_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Blog");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_section_14_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.myFunc(ctx_r13.blogContent[0].blogId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_section_14_Template_div_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.myFunc(ctx_r15.blogContent[1].blogId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_section_14_Template_div_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.myFunc(ctx_r16.blogContent[2].blogId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "View More");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.blogContent[0].image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.blogContent[0].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r1.blogContent[0].pagecontent, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.blogContent[1].image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.blogContent[1].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r1.blogContent[1].pagecontent, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.blogContent[2].image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.blogContent[2].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r1.blogContent[2].pagecontent, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/blogs");
} }
const _c1 = function (a0) { return [a0]; };
function HomeComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const act_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c1, "/userprofile/" + act_r19.username));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", act_r19.profile ? act_r19.profile : "assets/images/prof.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate6"]("@", act_r19.username, " ", act_r19.type, " @", act_r19.objectname, " on ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 10, act_r19.date, "medium"), " with a bid of ", act_r19.price, " ", act_r19.currency, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 13, act_r19.date, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", act_r19.image ? act_r19.image : "assets/images/activity-banner1.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function HomeComponent_div_19_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "View More");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/market");
} }
function HomeComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_19_div_1_Template, 14, 18, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_div_19_button_4_Template, 2, 1, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, ctx_r2.activity, ctx_r2.paginationConfig));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isActivityViewMore);
} }
function HomeComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Activity Result");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_section_21_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "How it Works For Artists.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_section_21_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.goto(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Get On your Radar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.cmsContent[5].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.cmsContent[5].pagecontent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.cmsContent[6].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.cmsContent[6].pagecontent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.cmsContent[7].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.cmsContent[7].pagecontent);
} }
function HomeComponent_div_37_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, "/userprofile/" + col_r23.user_name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", col_r23.user_pic ? col_r23.user_pic : "assets/images/mkt-prof1.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("@", col_r23.user_name, "");
} }
function HomeComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_37_div_1_Template, 7, 5, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.topcollectors);
} }
function HomeComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " No Datas Found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_50_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const art_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, "/userprofile/" + art_r25.user_name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", art_r25.user_pic ? art_r25.user_pic : "assets/images/mkt-prof1.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("@", art_r25.user_name, "");
} }
function HomeComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_50_div_1_Template, 7, 5, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.artist);
} }
function HomeComponent_div_69_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_69_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email must be a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_69_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email must be a valid email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_69_div_1_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_69_div_2_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_69_div_3_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.errors.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.errors.pattern);
} }
const _c2 = function (a0) { return { "is-invalid": a0 }; };
class HomeComponent {
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
        this.governanceTokenBalance = 0;
        this.governanceTokenSupply = 0;
        this.model = {};
        this.cmsContent = {};
        this.blogContent = {};
        this.activity = {};
        this.artist = {};
        this.topcollectors = {};
        this.limit = 6;
        this.skip = 6;
        this.isLogin = localStorage.getItem('Game-Token');
        this.paginationConfig = {
            itemsPerPage: 6,
            currentPage: 1,
            totalItems: this.activity
                ? this.activity.length
                : 0,
        };
        this.isActivityViewMore = false;
    }
    ngOnInit() {
        this.dataService.isOverlay = false;
        this.getGovernanceTokenBalance();
        this.getCms();
        this.getBlogs();
        this.getActivity();
        this.topCollectors();
        this.trendings();
    }
    /*goto(value) {
        this.router.navigateByUrl("/" + value);
    }*/
    /*async getPolledPairs() {
        console.log("yes heheheheheheheeh")
        this.Homepagevariable.governanceTokenHarvset = 0;
        this.dataService.getRequest("farming/getPooledPairs").subscribe((suc) => {
          let responseData: any = suc;
          if (responseData.status) {
            this.stakingPairs = responseData.data;
            let get_farmpairdata = responseData.data;
            let governanceTokenHarvset = 0;
            get_farmpairdata.map(async (items) => {
              this.stakeService
                .GetRewardamount(items.poolId)
                .then(async (result) => {
                  console.log("______________ result", "resultresult" , result)
                  if (result.status) {
                    governanceTokenHarvset = window.web3.utils.fromWei(
                      result.result.toString(),
                      "ether"
                    );
                    this.Homepagevariable.governanceTokenHarvset =
                      +this.Homepagevariable.governanceTokenHarvset + +governanceTokenHarvset;
                  } else {
                    this.Homepagevariable.governanceTokenHarvset =
                      +this.Homepagevariable.governanceTokenHarvset + 0;
                  }
                })
                .catch((error) => {
                  this.Homepagevariable.governanceTokenHarvset =
                    +this.Homepagevariable.governanceTokenHarvset + 0;
                  console.log(" gettvlvalue error 2---->", error);
                });
                this.Homepagevariable.governanceTokenHarvset = 0;
            });
          }
        });
    }*/
    getGovernanceTokenBalance() {
        this.commonContractService
            .GetTokenbalance(src_assets_files_contract__WEBPACK_IMPORTED_MODULE_1__["ContractDetails"].governance_token_contract)
            .then((suc) => {
            if (suc.balance) {
                this.governanceTokenBalance = suc.balance;
            }
            else {
                this.governanceTokenBalance = 0;
            }
        });
    }
    /*getTotalsupply() {
        this.commonContractService
          .GetTotalSupply(ContractDetails.governance_token_contract)
          .then((suc) => {
            if (suc.totalsupply) {
              this.governanceTokenSupply = suc.totalsupply;
            } else {
              this.governanceTokenSupply = 0;
            }
        });
    }*/
    onSubmit(news) {
        var data = news.value;
        this.dataService.postRequest("subscribe", data).subscribe((suc) => {
            if (suc.status) {
                this.toasterService.show(true, suc.message);
            }
            else {
                this.toasterService.show(false, suc.message);
            }
        });
    }
    getCms() {
        var data = { page: 'home' };
        this.dataService.postRequest("cms", data).subscribe((suc) => {
            if (suc.status) {
                var res = suc.data;
                this.cmsContent = suc.data;
                this.dataService.footerContent.emit(res[7].pagecontent);
            }
            else {
            }
        });
    }
    getBlogs() {
        var data = { page: 'home', skip: 0, limit: 3 };
        this.dataService.postRequest("blogs", data).subscribe((suc) => {
            if (suc.status) {
                this.blogContent = suc.data;
                this.blogContent.sucs = 1;
            }
            else {
            }
        });
    }
    myFunc(blog_id) {
        this.router.navigate(['/blog-details/'], { queryParams: { id: encodeURIComponent(blog_id) } });
    }
    getActivity() {
        this.dataService.postRequest("getActivity", { skip: 0, limit: this.limit }).subscribe((suc) => {
            let responseData = suc;
            if (responseData.status) {
                this.activity = responseData.data;
                if (Number(this.activity.length) > 6) {
                    this.isActivityViewMore = true;
                }
            }
        });
    }
    trendings() {
        this.dataService.getRequest("topartist").subscribe((suc) => {
            let responseData = suc;
            if (responseData.status) {
                this.artist = responseData.data;
            }
        });
    }
    topCollectors() {
        this.dataService.getRequest("topcollectors").subscribe((suc) => {
            let responseData = suc;
            if (responseData.status) {
                this.topcollectors = responseData.data;
            }
        });
    }
    goto() {
        this.isLogin = localStorage.getItem('Game-Token');
        if (this.isLogin) {
            this.router.navigateByUrl('/import');
        }
        else {
            this.dataService.modelSignup.emit(true);
        }
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_services_metamask_common_metamask_service__WEBPACK_IMPORTED_MODULE_4__["MetamaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_services_metamask_common_contract_common_contract_service__WEBPACK_IMPORTED_MODULE_5__["CommonContractService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_services_metamask_stake_stake_service__WEBPACK_IMPORTED_MODULE_6__["StakeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_7__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], viewQuery: function HomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
    } }, decls: 71, vars: 12, consts: [[1, "banner-cnt"], [1, "container"], [1, "row"], [1, "col-lg-5", "d-flex", "align-items-center"], [1, "btn", "default-btn", "mt-3", 3, "click"], [1, "col-lg-7", "astro-cnt"], ["src", "assets/images/banner-background.png", 1, "img-fluid", "vert-move"], ["src", "assets/images/astronaut.png", 1, "img-fluid", "astronaut", "vert-move1"], ["class", "digital-art-sec", 4, "ngIf"], ["class", "blog-sec", 4, "ngIf"], [1, "activity-sec"], [1, "section-title", "mb-5"], ["class", "row", 4, "ngIf"], ["class", "work-sec", 4, "ngIf"], [1, "market-sec"], [1, "section-title"], [1, "w-100", "p-4", "gry-bg", "mb-4"], [1, "row", "head", "mb-3"], [1, "col-lg-8"], [1, "d-flex", "flex-wrap", "align-items-center"], [1, "mr-2"], [1, "col-lg-4", "d-flex", "justify-content-end"], [1, "btn", "default-btn"], [4, "ngIf"], [1, "w-100", "p-4", "mb-4"], [1, "d-flex", "justify-content-center", "w-100"], [1, "btn", "default-btn", "ml-lg-5", 3, "click"], [1, "newsletter-sec"], ["name", "form", "novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "col-lg-11", "mx-auto"], [1, "newsletter-cnt", "d-flex", "py-5", "flex-column", "justify-content-center", "align-items-center"], [1, "d-flex", "flex-column", "flex-md-row", "mt-3", "col-lg-10", "mx-auto"], ["type", "text", "placeholder", "Enter Your Email Id", "name", "email", "id", "email", "autocomplete", "off", "ngModel", "", "pattern", "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$", "required", "", 3, "ngClass"], ["email", "ngModel"], ["type", "submit", 1, "btn", "default-btn"], ["class", "invalid-feedback", 4, "ngIf"], [1, "digital-art-sec"], [1, "section-title", "mb-1"], [1, "section-subtitle", "mb-5"], [1, "col-lg-4"], [1, "art-cnt", "d-flex", "flex-column", "justify-content-center", "align-items-center"], [1, "img-cnt"], ["src", "assets/images/tokenized-icon.png"], ["src", "assets/images/buy-sell-icon.png"], ["src", "assets/images/showcase-icon.png"], [1, "col-lg-12", "d-flex", "justify-content-center", "mt-5"], [1, "btn", "default-btn", 3, "click"], [1, "blog-sec"], [1, "col-lg-6"], [1, "blog-sec-cnt", 3, "click"], [1, "img-fluid", 3, "src"], [1, "lg-txt"], [3, "innerHTML"], [1, "d-lg-flex", "align-items-center"], [1, "img-fluid", "mr-lg-3", 3, "src"], [1, "btn", "default-btn", 3, "routerLink"], ["class", "col-md-6 col-lg-4", 4, "ngFor", "ngForOf"], ["class", "btn default-btn", 3, "routerLink", 4, "ngIf"], [1, "col-md-6", "col-lg-4"], [1, "act-cnt"], [1, "act-head", "d-flex", "align-items-center"], [1, "prof-pic-cnt", "mr-3"], [3, "routerLink"], [3, "src"], [1, "mb-0"], [1, "col-sm-12", "text-center"], [1, "work-sec"], ["src", "assets/images/work-sec-banner.png", 1, "img-fluid", "banner-img"], [1, "col-lg-6", "black-cnt", "d-flex", "flex-column", "justify-content-center", "align-items-center"], [1, "d-flex", "mb-3"], [1, "mr-3"], ["src", "assets/images/authenticate-icon.png"], [1, "d-flex", "flex-column"], ["src", "assets/images/setprice-icon.png"], ["src", "assets/images/early-access-icon.png"], [1, "d-flex", "justify-content-start", "w-100"], ["class", "col-6 col-md-4 col-lg-2", 4, "ngFor", "ngForOf"], [1, "col-6", "col-md-4", "col-lg-2"], [1, "mkt-cnt", "pb-lg-0", "d-flex", "flex-column", "justify-content-center", "align-items-center"], [1, "profile"], [1, "d-flex", "align-items-center", "mb-3", "text-center"], [1, "invalid-feedback"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Create Buy & Sell ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_8_listener() { return ctx.goto(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Start Collecting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HomeComponent_section_13_Template, 34, 8, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeComponent_section_14_Template, 29, 10, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Recent Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HomeComponent_div_19_Template, 5, 5, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HomeComponent_div_20_Template, 3, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, HomeComponent_section_21_Template, 35, 6, "section", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Watch the Market Move");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Top Collectors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Recently Collected");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "See All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, HomeComponent_div_37_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, HomeComponent_div_38_Template, 3, 0, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h3", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Top Artists");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Recently Collected");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "See All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, HomeComponent_div_50_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_52_listener() { return ctx.goto(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Start Collecting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "section", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "form", 28, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HomeComponent_Template_form_ngSubmit_57_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](58); return _r8.form.valid && ctx.onSubmit(_r8); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Subscribe to Our Newsletter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "input", 33, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, HomeComponent_div_69_Template, 4, 3, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "app-footer");
    } if (rf & 2) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](58);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cmsContent.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.blogContent.sucs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activity.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.activity.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cmsContent.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.topcollectors.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.topcollectors.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.artist.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c2, _r8.submitted && _r9.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.submitted && _r9.invalid);
    } }, directives: [_common_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["PaginatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }, { type: src_app_common_services_metamask_common_metamask_service__WEBPACK_IMPORTED_MODULE_4__["MetamaskService"] }, { type: src_app_common_services_metamask_common_contract_common_contract_service__WEBPACK_IMPORTED_MODULE_5__["CommonContractService"] }, { type: src_app_common_services_metamask_stake_stake_service__WEBPACK_IMPORTED_MODULE_6__["StakeService"] }, { type: src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_7__["ToasterService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }]; }, { form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['form', { static: false, read: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"] }]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/login-address/login-address.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/login-address/login-address.component.ts ***!
  \****************************************************************/
/*! exports provided: LoginAddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginAddressComponent", function() { return LoginAddressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _common_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/header/header.component */ "./src/app/common/header/header.component.ts");
/* harmony import */ var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/footer/footer.component */ "./src/app/common/footer/footer.component.ts");




class LoginAddressComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoginAddressComponent.ɵfac = function LoginAddressComponent_Factory(t) { return new (t || LoginAddressComponent)(); };
LoginAddressComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginAddressComponent, selectors: [["app-login-address"]], decls: 36, vars: 0, consts: [[1, "digital-art-sec"], [1, "middle-section"], [1, "container", "main-content-height", "d-flex", "justify-content-center", "align-items-center"], [1, "w-100"], [1, "row"], [1, "col-dm-12", "col-sm-12", "col-lg-12", "text-center", "mt-4", "col-xl-12"], ["src", "assets/images/symbol-logo.png"], [1, "font-41", "font-weight-bold", "text-color", "mt-3"], [1, "row", "justify-content-center", "mt-3"], [1, "col-md-12", "col-lg-8", "col-sm-12", "col-xl-6", "text-center"], [1, "border", "addresblock", "p-3", "rounded"], [1, "fontweight-600"], [1, "font-16", "pl-3"], [1, "form-group", "mt-3"], ["type", "text", "placeholder", "User Name", 1, "form-control", "input-sec", "font-16", "fontweight-400"], ["type", "text", "placeholder", "Email", 1, "form-control", "font-16", "input-sec", "fontweight-400"], [1, "text-center"], [1, "form-check", "login-block"], [1, "login-block", "custom-checkbox", "fontweight-400", "font-16", "text-color1"], [1, "text-primary-color"], ["type", "checkbox"], [1, "checkmark"], [1, "btn", "default-btn", "mt-4"]], template: function LoginAddressComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Create a Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "0x4cf53ae8C51c7eCB9f57E825152c5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Agree to our Signup ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Terms & Conditions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "app-footer");
    } }, directives: [_common_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luLWFkZHJlc3MvbG9naW4tYWRkcmVzcy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginAddressComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-address',
                templateUrl: './login-address.component.html',
                styleUrls: ['./login-address.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _common_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/header/header.component */ "./src/app/common/header/header.component.ts");
/* harmony import */ var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/footer/footer.component */ "./src/app/common/footer/footer.component.ts");




class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 2, vars: 0, template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-footer");
    } }, directives: [_common_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/mainpage/mainpage.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/mainpage/mainpage.component.ts ***!
  \******************************************************/
/*! exports provided: MainpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainpageComponent", function() { return MainpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _common_inner_header_inner_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/inner-header/inner-header.component */ "./src/app/common/inner-header/inner-header.component.ts");
/* harmony import */ var _defi_sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../defi/sidemenu/sidemenu.component */ "./src/app/pages/defi/sidemenu/sidemenu.component.ts");
/* harmony import */ var _common_inner_footer_inner_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/inner-footer/inner-footer.component */ "./src/app/common/inner-footer/inner-footer.component.ts");





class MainpageComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainpageComponent.ɵfac = function MainpageComponent_Factory(t) { return new (t || MainpageComponent)(); };
MainpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainpageComponent, selectors: [["app-mainpage"]], decls: 57, vars: 0, consts: [[1, "dsb-cnt"], [1, "container"], [1, "row"], [1, "sidebar-cnt"], [1, "tabpages-cnt"], [1, "col-md-6", "col-lg-4"], [1, "card", "grey-cnt"], [1, "card-body"], [1, "heading", "text-right"], [1, "col-md-6", "col-lg-4", "d-flex", "justify-content-center", "align-items-center"], [1, "d-flex", "justify-content-around", "w-100"], ["href", "", 1, "d-flex", "flex-column", "justify-content-center", "align-items-center"], ["src", "assets/images/send-icon.png"], [1, "text-center", "mt-2"], ["src", "assets/images/receive-icon.png"], [1, "col-lg-12"], [1, "section-title"]], template: function MainpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-inner-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-sidemenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Total Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Total Sales Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "0 BNB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Artists Collection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Total Collected");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Total Collected Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "0 BNB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Receive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Offers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "app-inner-footer");
    } }, directives: [_common_inner_header_inner_header_component__WEBPACK_IMPORTED_MODULE_1__["InnerHeaderComponent"], _defi_sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_2__["SidemenuComponent"], _common_inner_footer_inner_footer_component__WEBPACK_IMPORTED_MODULE_3__["InnerFooterComponent"]], styles: [".sidebar-cnt[_ngcontent-%COMP%]{\n\tmargin: 20px 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFpbnBhZ2UvbWFpbnBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGdCQUFnQjtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW5wYWdlL21haW5wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZWJhci1jbnR7XG5cdG1hcmdpbjogMjBweCAwIDA7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainpageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mainpage',
                templateUrl: './mainpage.component.html',
                styleUrls: ['./mainpage.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/nft/activity/activity.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/nft/activity/activity.component.ts ***!
  \**********************************************************/
/*! exports provided: ActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityComponent", function() { return ActivityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/services/api/data.service */ "./src/app/common/services/api/data.service.ts");
/* harmony import */ var src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/toaster/toaster.service */ "./src/app/common/toaster/toaster.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _common_inner_header_inner_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/inner-header/inner-header.component */ "./src/app/common/inner-header/inner-header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _common_inner_footer_inner_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/inner-footer/inner-footer.component */ "./src/app/common/inner-footer/inner-footer.component.ts");








function ActivityComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActivityComponent_div_8_div_1_Template_span_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const act_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.myFunc(act_r8.userId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const act_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", act_r8.image ? act_r8.image : "assets/images/activity-banner1.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", act_r8.profilepicture ? act_r8.profilepicture : "assets/images/prof.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("@", act_r8.username, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"]("@", act_r8.username, " ", act_r8.type, " @", act_r8.objectname, " on ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 8, act_r8.date, "medium"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 11, act_r8.date, "medium"));
} }
function ActivityComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ActivityComponent_div_8_div_1_Template, 15, 14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.activity);
} }
function ActivityComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Activity Result");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ActivityComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActivityComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.loadmore(ctx_r11.skip); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Load more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ActivityComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", col_r14.user_pic ? col_r14.user_pic : "assets/images/mkt-prof1.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("@", col_r14.user_name, "");
} }
function ActivityComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ActivityComponent_div_15_div_1_Template, 5, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.topcollectors);
} }
function ActivityComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " No Datas Found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ActivityComponent_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const art_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", art_r16.user_pic ? art_r16.user_pic : "assets/images/mkt-prof1.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("@", art_r16.user_name, "");
} }
function ActivityComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ActivityComponent_div_20_div_1_Template, 5, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.artist);
} }
function ActivityComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " No Datas Found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ActivityComponent {
    constructor(service, toasterService, route) {
        this.service = service;
        this.toasterService = toasterService;
        this.route = route;
        this.limit = 6;
        this.skip = 6;
        this.activity = [];
        this.artist = [];
        this.topcollectors = [];
    }
    ngOnInit() {
        this.getActivity();
        this.topCollectors();
        this.trendings();
    }
    getActivity() {
        this.service.postRequest("getActivity", { skip: 0, limit: this.limit }).subscribe((suc) => {
            let responseData = suc;
            if (responseData.status) {
                this.activity = responseData.data;
            }
        });
    }
    trendings() {
        this.service.getRequest("topartist").subscribe((suc) => {
            let responseData = suc;
            if (responseData.status) {
                this.artist = responseData.data;
            }
        });
    }
    topCollectors() {
        this.service.getRequest("topcollectors").subscribe((suc) => {
            let responseData = suc;
            if (responseData.status) {
                this.topcollectors = responseData.data;
            }
        });
    }
    myFunc(Id) {
        console.log(Id, 'id');
        console.log(encodeURIComponent(Id), 'encid');
        this.route.navigate(['/user'], { queryParams: { id: encodeURIComponent(Id) } });
    }
    loadmore(skip) {
        this.service.postRequest('getActivity', { skip: this.skip, limit: this.limit }).subscribe((res) => {
            this.activity.push(...res.data);
            this.skip = this.skip + this.limit;
        });
    }
}
ActivityComponent.ɵfac = function ActivityComponent_Factory(t) { return new (t || ActivityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_2__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ActivityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActivityComponent, selectors: [["app-activity"]], decls: 23, vars: 7, consts: [[1, "full-pg-cnt"], [1, "container"], [1, "row"], [1, "col-lg-12", "mb-5"], [1, "section-title", "text-center"], [1, "col-lg-9"], ["class", "row", 4, "ngIf"], ["class", "btn default-btn mt-4", 3, "click", 4, "ngIf"], [1, "col-lg-3"], [1, "w-100", "activity-cnt"], [1, "section-title", "activity-title", "md-title", "text-left"], [4, "ngIf"], ["class", "col-sm-6", 4, "ngFor", "ngForOf"], [1, "col-sm-6"], [1, "activity-cnt"], [1, "banner", 3, "src"], [1, "d-flex"], [1, "profile", 3, "src"], [1, "d-flex", "flex-column"], [1, "name", "cursor", 3, "click"], [1, "date"], [1, "col-sm-12", "text-center"], [1, "btn", "default-btn", "mt-4", 3, "click"], ["class", "d-flex align-items-center mb-3", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", "mb-3"], [1, "activity-profile", 3, "src"], [1, "name"], [1, "d-flex", "align-items-center", "mb-3", "text-center"]], template: function ActivityComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-inner-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ActivityComponent_div_8_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ActivityComponent_div_9_Template, 3, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ActivityComponent_button_10_Template, 2, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Top Collectors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ActivityComponent_div_15_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ActivityComponent_div_16_Template, 3, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Trending Artists");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ActivityComponent_div_20_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ActivityComponent_div_21_Template, 3, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-inner-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activity.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.activity.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activity.length > 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.topcollectors.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.topcollectors.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.artist.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.artist.length);
    } }, directives: [_common_inner_header_inner_header_component__WEBPACK_IMPORTED_MODULE_4__["InnerHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _common_inner_footer_inner_footer_component__WEBPACK_IMPORTED_MODULE_6__["InnerFooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25mdC9hY3Rpdml0eS9hY3Rpdml0eS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActivityComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-activity',
                templateUrl: './activity.component.html',
                styleUrls: ['./activity.component.css']
            }]
    }], function () { return [{ type: src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }, { type: src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_2__["ToasterService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/nft/feature/feature.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/nft/feature/feature.component.ts ***!
  \********************************************************/
/*! exports provided: FeatureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureComponent", function() { return FeatureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/services/api/data.service */ "./src/app/common/services/api/data.service.ts");
/* harmony import */ var src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/toaster/toaster.service */ "./src/app/common/toaster/toaster.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _common_inner_header_inner_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/inner-header/inner-header.component */ "./src/app/common/inner-header/inner-header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _common_inner_footer_inner_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/inner-footer/inner-footer.component */ "./src/app/common/inner-footer/inner-footer.component.ts");








function FeatureComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const obj_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", obj_r3.image ? obj_r3.image : "assets/images/feature1.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 4, obj_r3.createddate, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](obj_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("innerHTML", obj_r3.pagecontent, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function FeatureComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FeatureComponent_div_8_div_1_Template, 11, 7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.features);
} }
function FeatureComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Datas to Display");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FeatureComponent {
    constructor(service, toasterService, route) {
        this.service = service;
        this.toasterService = toasterService;
        this.route = route;
        this.limit = 6;
        this.skip = 6;
    }
    ngOnInit() {
        this.getFeatures();
    }
    getFeatures() {
        this.service.postRequest("getFeatures", { skip: 0, limit: this.limit }).subscribe((suc) => {
            let responseData = suc;
            if (responseData.status) {
                this.features = responseData.data;
            }
        });
    }
}
FeatureComponent.ɵfac = function FeatureComponent_Factory(t) { return new (t || FeatureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_2__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
FeatureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeatureComponent, selectors: [["app-feature"]], decls: 11, vars: 2, consts: [[1, "digital-art-sec"], [1, "middle-section"], [1, "container", "d-flex", "justify-content-center", "align-items-center"], [1, "row"], [1, "col-lg-12", "mb-5"], [1, "section-title", "text-center"], ["class", "row justify-content-center align-items-start", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "row", "justify-content-center", "align-items-start"], ["class", "col-md-12 col-sm-12 col-lg-12 col-xl-12 text-center mt-4", 4, "ngFor", "ngForOf"], [1, "col-md-12", "col-sm-12", "col-lg-12", "col-xl-12", "text-center", "mt-4"], [1, "blog-sec-cnt"], [1, "d-lg-flex", "align-items-center"], [1, "img-fluid", "mr-3", 3, "src"], [1, "text-left"], [1, "lg-txt", "font-24", "mb-0"], [1, "lg-txt", "font-24", "my-2"], [1, "font-16", "fontweight-400", "mt-2", "mb-1", 3, "innerHTML"], [1, "col-lg-12", "col-xl-12", "col-sm-12", "text-center"]], template: function FeatureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-inner-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FeatureComponent_div_8_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FeatureComponent_div_9_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-inner-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.features.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.features.length);
    } }, directives: [_common_inner_header_inner_header_component__WEBPACK_IMPORTED_MODULE_4__["InnerHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _common_inner_footer_inner_footer_component__WEBPACK_IMPORTED_MODULE_6__["InnerFooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25mdC9mZWF0dXJlL2ZlYXR1cmUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeatureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-feature',
                templateUrl: './feature.component.html',
                styleUrls: ['./feature.component.css']
            }]
    }], function () { return [{ type: src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }, { type: src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_2__["ToasterService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/nft/history/history.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/nft/history/history.component.ts ***!
  \********************************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/services/api/data.service */ "./src/app/common/services/api/data.service.ts");
/* harmony import */ var src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/toaster/toaster.service */ "./src/app/common/toaster/toaster.service.ts");
/* harmony import */ var _common_inner_header_inner_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/inner-header/inner-header.component */ "./src/app/common/inner-header/inner-header.component.ts");
/* harmony import */ var _defi_sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../defi/sidemenu/sidemenu.component */ "./src/app/pages/defi/sidemenu/sidemenu.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _common_inner_footer_inner_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/inner-footer/inner-footer.component */ "./src/app/common/inner-footer/inner-footer.component.ts");









function HistoryComponent_tbody_36_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const his_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](his_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://bscscan.com/tx/", his_r3.txid, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.txSubstring(his_r3.txid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](his_r3.from);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](his_r3.to);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](his_r3.currency);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](his_r3.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](his_r3.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](20, 9, his_r3.date, "medium"));
} }
function HistoryComponent_tbody_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HistoryComponent_tbody_36_tr_1_Template, 21, 12, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.history);
} }
function HistoryComponent_tbody_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No Record Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HistoryComponent {
    constructor(activatedRoute, route, service, toasterService) {
        this.activatedRoute = activatedRoute;
        this.route = route;
        this.service = service;
        this.toasterService = toasterService;
        this.history = {};
    }
    ngOnInit() {
        this.getHistory();
    }
    getHistory() {
        this.service.postRequest("users/history", {}).subscribe((suc) => {
            if (suc.status) {
                this.history = suc.data;
            }
        });
    }
    txSubstring(str) {
        let first = str.substring(0, 5);
        let last = str.substring(62, 66);
        var short = "";
        return short = `${first}......${last}`;
    }
}
HistoryComponent.ɵfac = function HistoryComponent_Factory(t) { return new (t || HistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"])); };
HistoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HistoryComponent, selectors: [["app-history"]], decls: 39, vars: 2, consts: [[1, "dsb-cnt"], [1, "container"], [1, "row"], [1, "sidebar-cnt"], [1, "tabpages-cnt"], [1, "col-lg-12"], [1, "section-title"], [1, "col-md-12", "col-lg-12"], [1, "card", "grey-cnt"], [1, "card-body"], [1, "transaction-history-table"], [1, "table"], ["scope", "col"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["height", "50px", "width", "50px", "src", "assets/images/market-detail1.png"], ["target", "blank", 3, "href"], ["colspan", "9", 1, "text-center", "no-records-found"]], template: function HistoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-inner-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-sidemenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Transaction History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Hash");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "From");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "To");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Token Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "BNBAmount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, HistoryComponent_tbody_36_Template, 2, 1, "tbody", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, HistoryComponent_tbody_37_Template, 4, 0, "tbody", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "app-inner-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.history.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.history.length);
    } }, directives: [_common_inner_header_inner_header_component__WEBPACK_IMPORTED_MODULE_4__["InnerHeaderComponent"], _defi_sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_5__["SidemenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _common_inner_footer_inner_footer_component__WEBPACK_IMPORTED_MODULE_7__["InnerFooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25mdC9oaXN0b3J5L2hpc3RvcnkuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HistoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-history',
                templateUrl: './history.component.html',
                styleUrls: ['./history.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }, { type: src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/nft/market-detail/market-detail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/nft/market-detail/market-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: MarketDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketDetailComponent", function() { return MarketDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_assets_files_contract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/files/contract */ "./src/assets/files/contract.ts");
/* harmony import */ var src_assets_files_127cre_abi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/assets/files/127cre_abi */ "./src/assets/files/127cre_abi.js");
/* harmony import */ var src_assets_files_5511cre_abi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/files/5511cre_abi */ "./src/assets/files/5511cre_abi.js");
/* harmony import */ var src_assets_files_nft_bnb_abi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/assets/files/nft_bnb_abi */ "./src/assets/files/nft_bnb_abi.js");
/* harmony import */ var src_assets_files_20cre_abi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/assets/files/20cre_abi */ "./src/assets/files/20cre_abi.js");
/* harmony import */ var src_assets_files_currencyType__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/assets/files/currencyType */ "./src/assets/files/currencyType.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/common/services/api/data.service */ "./src/app/common/services/api/data.service.ts");
/* harmony import */ var src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/common/toaster/toaster.service */ "./src/app/common/toaster/toaster.service.ts");
/* harmony import */ var src_app_common_services_metamask_nft_nft_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/common/services/metamask/nft/nft.service */ "./src/app/common/services/metamask/nft/nft.service.ts");
/* harmony import */ var _common_inner_header_inner_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../common/inner-header/inner-header.component */ "./src/app/common/inner-header/inner-header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _common_inner_footer_inner_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../common/inner-footer/inner-footer.component */ "./src/app/common/inner-footer/inner-footer.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

















const _c0 = ["closebutton"];
const _c1 = ["closebutton1"];
const _c2 = ["closebutton2"];
const _c3 = ["closebutton3"];
function MarketDetailComponent_div_5_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 90);
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r21.items.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function MarketDetailComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MarketDetailComponent_div_5_img_1_Template, 1, 1, "img", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.items.image != "");
} }
function MarketDetailComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MarketDetailComponent_img_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 71);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r2.items.profilepicture ? ctx_r2.items.profilepicture : "assets/images/prof.png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function MarketDetailComponent_img_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 92);
} }
function MarketDetailComponent_img_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 71);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r4.items.ownerpicture ? ctx_r4.items.ownerpicture : "assets/images/prof1.png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function MarketDetailComponent_img_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 93);
} }
function MarketDetailComponent_div_47_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Buy Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MarketDetailComponent_div_47_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Make An Offer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MarketDetailComponent_div_47_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Join Bidding");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MarketDetailComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MarketDetailComponent_div_47_button_1_Template, 2, 0, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MarketDetailComponent_div_47_button_2_Template, 2, 0, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MarketDetailComponent_div_47_button_3_Template, 2, 0, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.items.saletype != "fixed" && ctx_r6.items.saletype != "auction");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.items.offer);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.items.saletype == "auction");
} }
function MarketDetailComponent_div_49_div_1_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MarketDetailComponent_div_49_div_1_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const offers_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r29.beforConfirmOffer(offers_r26, offers_r26.type); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Approve");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MarketDetailComponent_div_49_div_1_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MarketDetailComponent_div_49_div_1_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34); const offers_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r32.beforConfirmOffer(offers_r26, offers_r26.type); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Approve");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MarketDetailComponent_div_49_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, MarketDetailComponent_div_49_div_1_button_8_Template, 2, 0, "button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, MarketDetailComponent_div_49_div_1_button_9_Template, 2, 0, "button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const offers_r26 = ctx.$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" @", offers_r26.username, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", offers_r26.type, " at ", offers_r26.price, " ", offers_r26.currency, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](7, 7, offers_r26.date, ctx_r25.minimum));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r25.items.owner && offers_r26.type == "Offered");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r25.items.owner && offers_r26.type == "Bid" && offers_r26.price == ctx_r25.lastbid);
} }
function MarketDetailComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MarketDetailComponent_div_49_div_1_Template, 10, 10, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r7.itemsOffers);
} }
function MarketDetailComponent_div_50_div_4_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 71);
} if (rf & 2) {
    const moreitem_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", moreitem_r36.image ? moreitem_r36.image : "assets/images/market-detail1.png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function MarketDetailComponent_div_50_div_4_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 115);
} }
function MarketDetailComponent_div_50_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MarketDetailComponent_div_50_div_4_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r41); const moreitem_r36 = ctx.$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r40.myFunc(moreitem_r36.itemId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MarketDetailComponent_div_50_div_4_img_2_Template, 1, 1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MarketDetailComponent_div_50_div_4_img_3_Template, 1, 0, "img", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const moreitem_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", moreitem_r36.image != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", moreitem_r36.image == "");
} }
function MarketDetailComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MarketDetailComponent_div_50_div_4_Template, 4, 2, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("More Work ", ctx_r8.items.username ? ctx_r8.items.username : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r8.moreitems);
} }
function MarketDetailComponent_h3_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r11.bnbBalance, " ", ctx_r11.items.tocurrency, "");
} }
function MarketDetailComponent_div_98_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Bid Amount is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MarketDetailComponent_div_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MarketDetailComponent_div_98_div_1_Template, 2, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r12.errors.required);
} }
function MarketDetailComponent_span_166_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Offer price is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MarketDetailComponent_span_166_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MarketDetailComponent_span_166_span_1_Template, 2, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](164);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r17.errors.required);
} }
function MarketDetailComponent_p_170_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Your balance is ", ctx_r19.bnbBalance, " ", ctx_r19.items.tocurrency, " ");
} }
const _c4 = function (a0) { return { "is-invalid": a0 }; };
class MarketDetailComponent {
    constructor(activatedRoute, route, service, toasterService, nftservice) {
        this.activatedRoute = activatedRoute;
        this.route = route;
        this.service = service;
        this.toasterService = toasterService;
        this.nftservice = nftservice;
        this.itemObj = {};
        this.items = {};
        this.moreitems = {};
        this.limit = 6;
        this.skip = 6;
        this.buyedition = 1;
        this.minDateend = new Date();
        this.offerData = {};
        this.publishData = {};
        this.offObj = {};
        this.bidsObj = {};
        this.itemsHis = {};
        this.itemsOffers = {};
        this.apprToken = {};
        this.apprTokenId = {};
        this.apprTokenABI = {};
        this.tokenBalance = {};
        this.approvePrice = {};
        this.developerfee = {};
        this.royaltyfee = {};
        this.receivePrice = {};
        this.toffers = {};
        this.ttype = {};
        this.lastbid = 0;
        this.showroyaltyfee = {};
        this.showdeveloperfee = {};
        this.toToken = {};
        this.toTokenId = {};
        this.toTokenABI = {};
        this.token = localStorage.getItem("Game-Token");
    }
    ngOnInit() {
        this.init();
    }
    init() {
        this.service.isOverlay = false;
        this.minDateend.setDate(this.minDateend.getDate() - 1);
        this.account = this.service.metaDeatails.account;
        this.itemObj.pagekey = this.activatedRoute.snapshot.queryParamMap.get('id');
        this.itemObj.pagetype = this.activatedRoute.snapshot.queryParamMap.get('type');
        console.log('itemObj.pagekey  ', this.itemObj.pagekey);
        var itemId = decodeURIComponent(this.itemObj.pagekey);
        console.log("this.activatedRoute.snapshot.queryParamMap.get('type')this.activatedRoute.snapshot.queryParamMap.get('type')", this.activatedRoute.snapshot.queryParamMap.get('type'));
        this.pageKey = itemId;
        if (this.activatedRoute.snapshot.queryParamMap.get('type') == "0") {
            this.getItems(itemId);
        }
        else {
            this.getItems1(itemId);
            //	this.getItems1(itemId);
        }
        this.getItemHistory(itemId);
        this.getItemOffers(itemId);
        this.checkBNBbalance();
        this.getFees();
    }
    hideModel() {
        this.closebutton.nativeElement.click();
        this.closebutton1.nativeElement.click();
        this.closebutton2.nativeElement.click();
        this.closebutton3.nativeElement.click();
    }
    getFees() {
        this.service.getRequest("getNFTFees").subscribe((suc) => {
            console.log("sucsucsuc", suc);
            if (suc.status) {
                this.developerfee = suc.developerfee;
                this.royaltyfee = suc.roayaltyfee;
                this.showdeveloperfee = this.developerfee.fee / 10;
                this.showroyaltyfee = this.royaltyfee.fee / 10;
                console.log(this.developerfee, 'developerfee');
                console.log(this.royaltyfee, 'royaltyfee');
            }
        });
    }
    getItems(Id) {
        console.log("12333");
        if (Id) {
            this.service.postRequest("item-details", { id: Id }).subscribe((suc) => {
                let responseData = suc;
                if (responseData.status) {
                    this.items = responseData.data;
                    this.items.UserId = responseData.data.userId;
                    this.items.itemId = responseData.data.itemId;
                    this.getMoreItems(this.items.itemId, this.items.UserId);
                }
                else {
                    this.toasterService.show(false, 'Invalid Item Details');
                    this.route.navigateByUrl('market');
                }
            });
        }
        else {
            this.toasterService.show(false, 'Something went wrong');
            this.route.navigateByUrl('market');
        }
    }
    getItems1(Id) {
        if (Id) {
            this.service.postRequest("item-details1", { id: Id }).subscribe((suc) => {
                let responseData = suc;
                if (responseData.status) {
                    this.items = responseData.data;
                    this.items.UserId = responseData.data.userId;
                    this.items.itemId = responseData.data.itemId;
                    this.getMoreItems(this.items.itemId, this.items.UserId);
                }
                else {
                    this.toasterService.show(false, 'Invalid Item Details');
                    this.route.navigateByUrl('market');
                }
            });
        }
        else {
            this.toasterService.show(false, 'Something went wrong');
            this.route.navigateByUrl('market');
        }
    }
    getMoreItems(Id, userId) {
        if (Id) {
            this.service.postRequest("more-item-details", { id: Id, userId: userId }).subscribe((suc) => {
                let responseData = suc;
                if (responseData.status) {
                    this.moreitems = responseData.data;
                }
            });
        }
        else {
            this.toasterService.show(false, 'Something went wrong');
            this.route.navigateByUrl('market');
        }
    }
    onbitSubmit(Items, formData) {
        let askedprice = formData.bidsprice;
        if (!askedprice) {
            this.service.isOverlay = false;
            return this.toasterService.show(false, 'Bid Price is required');
        }
        if (this.lastbid != 0 && Number(this.lastbid) >= Number(askedprice)) {
            console.log('condition true');
            this.service.isOverlay = false;
            return this.toasterService.show(false, 'Bid Price should more than lastbid');
        }
        if (Number(Items.price) >= Number(askedprice)) {
            this.service.isOverlay = false;
            return this.toasterService.show(false, 'Bid Price should more than seller price');
        }
        this.hideModel();
        this.service.isOverlay = true;
        if (Items) {
            this.service.postRequest("collection/getOrderDetails", { _id: Items._id, edition: Items.supply }).subscribe((suc) => {
                if (suc.status) {
                    this.makeBid(suc, askedprice);
                }
                else {
                    this.service.isOverlay = false;
                    return this.toasterService.show('error', 'Item not found.');
                }
            });
        }
    }
    onSubmit(Items, formData) {
        console.log(formData, 'formData');
        console.log(Items, 'items');
        let askedprice = formData.offprice;
        this.service.isOverlay = true;
        if (!askedprice) {
            this.service.isOverlay = false;
            return this.toasterService.show(false, 'Offer Price is required');
        }
        console.log('price', typeof Number(askedprice), typeof Number(Items.price));
        if (Number(Items.price) <= Number(askedprice)) {
            this.service.isOverlay = false;
            return this.toasterService.show(false, 'Offer Price should less than seller price');
        }
        this.hideModel();
        if (Items) {
            this.service.postRequest("collection/getOrderDetails", { _id: Items._id, edition: Items.supply }).subscribe((suc) => {
                if (suc.status) {
                    this.makeOffer(suc, askedprice);
                }
                else {
                    this.service.isOverlay = false;
                    return this.toasterService.show(false, 'Item not found.');
                }
            });
        }
    }
    getItemHistory(Id) {
        if (Id) {
            this.service.postRequest("item-history", { id: Id }).subscribe((suc) => {
                let responseData = suc;
                if (responseData.status) {
                    this.itemsHis = responseData.data;
                }
            });
        }
        else {
            this.service.isOverlay = false;
            this.toasterService.show(false, 'Something went wrong');
            this.route.navigateByUrl('market');
        }
    }
    getItemOffers(Id) {
        if (Id) {
            this.service.postRequest("item-offers", { id: Id }).subscribe((suc) => {
                let responseData = suc;
                if (responseData.status) {
                    this.itemsOffers = responseData.data;
                    this.lastbid = responseData.highestbid;
                    console.log(this.lastbid, 'lastbid');
                }
                else {
                    this.lastbid = 0;
                }
            });
        }
        else {
            this.service.isOverlay = false;
            this.toasterService.show(false, 'Something went wrong');
            this.route.navigateByUrl('market');
        }
    }
    checkBNBbalance() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let account = this.service.metaDeatails.account;
            if (!account) {
                this.service.isOverlay = false;
                return this.toasterService.show(false, "Please login to continue");
            }
            let bal = yield this.nftservice.checkBal(src_assets_files_contract__WEBPACK_IMPORTED_MODULE_2__["ContractDetails"].nft_wbnb, src_assets_files_nft_bnb_abi__WEBPACK_IMPORTED_MODULE_5__["NFT_bnb_Token_ABI"], account);
            if (bal.status) {
                this.bnbBalance = (bal.result / 1e18);
            }
            console.log(this.bnbBalance, 'bnb balance');
        });
    }
    approveOffer(offers, type) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("approve offers function called");
            console.log("offers", offers, 'type', type);
            this.hideModel();
            this.service.isOverlay = true;
            if (type == 'Bid') {
                console.log('type bid');
                yield this.service.postRequest("collection/getOfferInfo", { item_id: offers.offerId }).subscribe((suc) => {
                    this.approveBuyerBid(suc, offers.price);
                });
            }
            else {
                console.log('type offer');
                yield this.service.postRequest("collection/getOfferInfo", { item_id: offers.offerId }).subscribe((suc) => {
                    this.makeSellOffer(suc, offers.price);
                    //this.makeBuy(suc,offers.price);
                });
            }
        });
    }
    buyCalled(Items, type) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (type == 'buy') {
                this.hideModel();
                this.service.isOverlay = true;
                yield this.service.postRequest("collection/getOrderDetails", { _id: Items._id, edition: Items.supply }).subscribe((suc) => {
                    this.makeBuy(suc, 10);
                });
            }
            else if (type == 'offer') {
            }
        });
    }
    beforConfirmOffer(offers, type) {
        this.toffers = offers;
        this.ttype = type;
        this.approvePrice = offers.price;
        var devfeeper = ((offers.price * 1e18) * this.developerfee.fee) / 100;
        var royalfeeper = ((offers.price * 1e18) * this.royaltyfee.fee) / 100;
        this.receivePrice = ((offers.price * 1e18) - (devfeeper + royalfeeper)) / 1e18;
    }
    makeBuy(res, oprice) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                var userAddr = this.service.metaDeatails.account;
                if (res.status) {
                    let datas = res.data;
                    if (datas.imported == 1) {
                        let cobj = {
                            "contractid": datas.contractId,
                        };
                        console.log(cobj, 'cobj');
                        yield this.service.postRequest('users/getContract', cobj).subscribe((reqData) => {
                            if (reqData.status) {
                                let cdata = reqData.data;
                                console.log(cdata.contract, 'cdata.contract');
                                console.log(cdata.abi, 'cdata.abi');
                                this.apprToken = cdata.contract;
                                this.apprTokenABI = cdata.abi;
                                this.contractMakeBuy(this.apprToken, this.apprTokenABI, datas, oprice);
                            }
                        });
                    }
                    else {
                        let currency = datas.currency;
                        let tocurrency = datas.tocurrency;
                        this.apprToken = src_assets_files_currencyType__WEBPACK_IMPORTED_MODULE_7__["Sample"][0][currency].address;
                        this.apprTokenId = src_assets_files_currencyType__WEBPACK_IMPORTED_MODULE_7__["Sample"][0][currency].tokenid;
                        this.toToken = src_assets_files_currencyType__WEBPACK_IMPORTED_MODULE_7__["Sample"][0][tocurrency].address;
                        console.log("toToken");
                        if (currency == 'ERC721') {
                            this.apprTokenABI = src_assets_files_127cre_abi__WEBPACK_IMPORTED_MODULE_3__["NFT_721_Token_ABI"];
                        }
                        else if (currency == 'WBNB') {
                            this.apprTokenABI = src_assets_files_5511cre_abi__WEBPACK_IMPORTED_MODULE_4__["NFT_1155_Token_ABI"];
                        }
                        else if (currency == 'ERC20') {
                            this.apprTokenABI = src_assets_files_20cre_abi__WEBPACK_IMPORTED_MODULE_6__["NFT_20_Token_ABI"];
                        }
                        if (tocurrency == 'ERC721') {
                            this.toTokenABI = src_assets_files_127cre_abi__WEBPACK_IMPORTED_MODULE_3__["NFT_721_Token_ABI"];
                        }
                        else if (tocurrency == 'WBNB') {
                            this.toTokenABI = [{ "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "guy", "type": "address" }, { "name": "wad", "type": "uint256" }], "name": "approve", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "src", "type": "address" }, { "name": "dst", "type": "address" }, { "name": "wad", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "wad", "type": "uint256" }], "name": "withdraw", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "dst", "type": "address" }, { "name": "wad", "type": "uint256" }], "name": "transfer", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "deposit", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }, { "name": "", "type": "address" }], "name": "allowance", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "src", "type": "address" }, { "indexed": true, "name": "guy", "type": "address" }, { "indexed": false, "name": "wad", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "src", "type": "address" }, { "indexed": true, "name": "dst", "type": "address" }, { "indexed": false, "name": "wad", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "dst", "type": "address" }, { "indexed": false, "name": "wad", "type": "uint256" }], "name": "Deposit", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "src", "type": "address" }, { "indexed": false, "name": "wad", "type": "uint256" }], "name": "Withdrawal", "type": "event" }];
                        }
                        else if (tocurrency == 'ERC20') {
                            this.toTokenABI = src_assets_files_20cre_abi__WEBPACK_IMPORTED_MODULE_6__["NFT_20_Token_ABI"];
                        }
                        this.contractMakeBuy(this.apprToken, this.apprTokenABI, datas, oprice);
                    }
                }
            }
            catch (er) {
                if (er) {
                    this.service.isOverlay = false;
                    this.toasterService.show(false, er);
                }
            }
        });
    }
    makeOffer(itemData, askedprice) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                console.log('here also called');
                let datas = itemData.data;
                if (Number(askedprice) > Number(datas.price)) {
                    this.service.isOverlay = false;
                    this.toasterService.show(false, "Offer price less than original price");
                    return false;
                }
                var userAddr = this.service.metaDeatails.account;
                console.log("userAddr11", userAddr);
                if (itemData.status) {
                    if (datas.imported == 1) {
                        let cobj = {
                            "contractid": datas.contractId,
                        };
                        console.log(cobj, 'cobj');
                        yield this.service.postRequest('users/getContract', cobj).subscribe((reqData) => {
                            if (reqData.status) {
                                let cdata = reqData.data;
                                console.log(cdata.contract, 'cdata.contract');
                                console.log(cdata.abi, 'cdata.abi');
                                this.apprToken = cdata.contract;
                                this.apprTokenABI = cdata.abi;
                                this.contractMakeOffer(this.apprToken, this.apprTokenABI, datas, askedprice);
                            }
                        });
                    }
                    else {
                        let currency = datas.currency;
                        let tocurrency = datas.tocurrency;
                        this.apprToken = src_assets_files_currencyType__WEBPACK_IMPORTED_MODULE_7__["Sample"][0][currency].address;
                        this.apprTokenId = src_assets_files_currencyType__WEBPACK_IMPORTED_MODULE_7__["Sample"][0][currency].tokenid;
                        this.toToken = src_assets_files_currencyType__WEBPACK_IMPORTED_MODULE_7__["Sample"][0][tocurrency].address;
                        if (currency == 'ERC721') {
                            this.apprTokenABI = src_assets_files_127cre_abi__WEBPACK_IMPORTED_MODULE_3__["NFT_721_Token_ABI"];
                        }
                        else if (currency == 'WBNB') {
                            this.apprTokenABI = src_assets_files_5511cre_abi__WEBPACK_IMPORTED_MODULE_4__["NFT_1155_Token_ABI"];
                        }
                        else if (currency == 'ERC20') {
                            this.apprTokenABI = src_assets_files_20cre_abi__WEBPACK_IMPORTED_MODULE_6__["NFT_20_Token_ABI"];
                        }
                        if (tocurrency == 'ERC721') {
                            console.log("721 called");
                            this.toTokenABI = src_assets_files_127cre_abi__WEBPACK_IMPORTED_MODULE_3__["NFT_721_Token_ABI"];
                        }
                        else if (tocurrency == 'WBNB') {
                            console.log("wbnb called");
                            this.toTokenABI = src_assets_files_5511cre_abi__WEBPACK_IMPORTED_MODULE_4__["NFT_1155_Token_ABI"];
                        }
                        else if (tocurrency == 'ERC20') {
                            console.log("erc called");
                            this.toTokenABI = src_assets_files_20cre_abi__WEBPACK_IMPORTED_MODULE_6__["NFT_20_Token_ABI"];
                        }
                        this.contractMakeOffer(this.apprToken, this.apprTokenABI, datas, askedprice);
                    }
                }
            }
            catch (error) {
                this.service.isOverlay = false;
                console.log('here catch console called');
                this.toasterService.show(false, error.message);
            }
        });
    }
    makeBid(itemData, askedprice) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let datas = itemData.data;
                console.log("datasdatasdatas", datas);
                return false;
                if (askedprice < datas.price) {
                    this.service.isOverlay = false;
                    this.toasterService.show(false, "Bid price should greater than original price");
                    return false;
                }
                var userAddr = this.service.metaDeatails.account;
                if (itemData.status) {
                    if (datas.imported == 1) {
                        let cobj = {
                            "contractid": datas.contractId,
                        };
                        console.log(cobj, 'cobj');
                        yield this.service.postRequest('users/getContract', cobj).subscribe((reqData) => {
                            if (reqData.status) {
                                let cdata = reqData.data;
                                console.log(cdata.contract, 'cdata.contract');
                                console.log(cdata.abi, 'cdata.abi');
                                this.apprToken = cdata.contract;
                                this.apprTokenABI = cdata.abi;
                                this.contractMakeBid(this.apprToken, this.apprTokenABI, datas, askedprice);
                            }
                        });
                    }
                    else {
                        let currency = datas.currency;
                        let tocurrency = datas.tocurrency;
                        this.apprToken = src_assets_files_currencyType__WEBPACK_IMPORTED_MODULE_7__["Sample"][0][currency].address;
                        this.apprTokenId = src_assets_files_currencyType__WEBPACK_IMPORTED_MODULE_7__["Sample"][0][currency].tokenid;
                        this.toToken = src_assets_files_currencyType__WEBPACK_IMPORTED_MODULE_7__["Sample"][0][tocurrency].address;
                        if (currency == 'ERC721') {
                            this.apprTokenABI = src_assets_files_127cre_abi__WEBPACK_IMPORTED_MODULE_3__["NFT_721_Token_ABI"];
                        }
                        else if (currency == 'WBNB') {
                            this.apprTokenABI = src_assets_files_5511cre_abi__WEBPACK_IMPORTED_MODULE_4__["NFT_1155_Token_ABI"];
                        }
                        else if (currency == 'ERC20') {
                            this.apprTokenABI = src_assets_files_20cre_abi__WEBPACK_IMPORTED_MODULE_6__["NFT_20_Token_ABI"];
                        }
                        if (tocurrency == 'ERC721') {
                            console.log("721 called");
                            this.toTokenABI = src_assets_files_127cre_abi__WEBPACK_IMPORTED_MODULE_3__["NFT_721_Token_ABI"];
                        }
                        else if (tocurrency == 'WBNB') {
                            console.log("wbnb called");
                            this.toTokenABI = src_assets_files_5511cre_abi__WEBPACK_IMPORTED_MODULE_4__["NFT_1155_Token_ABI"];
                        }
                        else if (tocurrency == 'ERC20') {
                            console.log("erc called");
                            this.toTokenABI = src_assets_files_20cre_abi__WEBPACK_IMPORTED_MODULE_6__["NFT_20_Token_ABI"];
                        }
                        this.contractMakeBid(this.apprToken, this.apprTokenABI, datas, askedprice);
                    }
                }
            }
            catch (error) {
                this.service.isOverlay = false;
                this.toasterService.show(false, error.message);
            }
        });
    }
    makeSellOffer(orderDetail, oprice) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                var userAddr = this.service.metaDeatails.account;
                if (orderDetail.status) {
                    let datas = orderDetail.data;
                    if (datas.imported == 1) {
                        let cobj = {
                            "contractid": datas.contractId,
                        };
                        console.log(cobj, 'cobj');
                        yield this.service.postRequest('users/getContract', cobj).subscribe((reqData) => {
                            if (reqData.status) {
                                let cdata = reqData.data;
                                console.log(cdata.contract, 'cdata.contract');
                                console.log(cdata.abi, 'cdata.abi');
                                this.apprToken = cdata.contract;
                                this.apprTokenABI = cdata.abi;
                                this.contractApproveOffer(this.apprToken, this.apprTokenABI, datas, oprice);
                            }
                        });
                    }
                    else {
                        let currency = datas.currency;
                        let tocurrency = datas.tocurrency;
                        this.apprToken = src_assets_files_currencyType__WEBPACK_IMPORTED_MODULE_7__["Sample"][0][currency].address;
                        this.apprTokenId = src_assets_files_currencyType__WEBPACK_IMPORTED_MODULE_7__["Sample"][0][currency].tokenid;
                        this.toToken = src_assets_files_currencyType__WEBPACK_IMPORTED_MODULE_7__["Sample"][0][tocurrency].address;
                        if (currency == 'ERC721') {
                            this.apprTokenABI = src_assets_files_127cre_abi__WEBPACK_IMPORTED_MODULE_3__["NFT_721_Token_ABI"];
                        }
                        else if (currency == 'WBNB') {
                            this.apprTokenABI = src_assets_files_5511cre_abi__WEBPACK_IMPORTED_MODULE_4__["NFT_1155_Token_ABI"];
                        }
                        else if (currency == 'ERC20') {
                            this.apprTokenABI = src_assets_files_20cre_abi__WEBPACK_IMPORTED_MODULE_6__["NFT_20_Token_ABI"];
                        }
                        if (tocurrency == 'ERC721') {
                            this.toTokenABI = src_assets_files_127cre_abi__WEBPACK_IMPORTED_MODULE_3__["NFT_721_Token_ABI"];
                        }
                        else if (tocurrency == 'WBNB') {
                            this.toTokenABI = src_assets_files_5511cre_abi__WEBPACK_IMPORTED_MODULE_4__["NFT_1155_Token_ABI"];
                        }
                        else if (tocurrency == 'ERC20') {
                            this.toTokenABI = src_assets_files_20cre_abi__WEBPACK_IMPORTED_MODULE_6__["NFT_20_Token_ABI"];
                        }
                        this.contractApproveOffer(this.apprToken, this.apprTokenABI, datas, oprice);
                    }
                }
            }
            catch (er) {
                if (er) {
                    this.service.isOverlay = false;
                    this.toasterService.show(false, er);
                }
            }
        });
    }
    approveBuyerBid(orderDetail, oprice) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(orderDetail, 'orderDetail');
            console.log(oprice, 'oprice');
            var userAddr = this.service.metaDeatails.account;
            if (!userAddr) {
                this.service.isOverlay = false;
                return this.toasterService.show(false, 'Please login to cointinue');
            }
            let orderDetails = orderDetail.data;
            let buyer = orderDetails.buyerAddr;
            console.log(buyer, 'buyer');
            let feeTuple = [this.developerfee.address, this.royaltyfee.address, this.developerfee.fee, this.royaltyfee.fee];
            console.log(feeTuple, 'feeTuple');
            let order = orderDetails.buyorder;
            console.log(order[0], 'order');
            let buyerVRS = order[0].vrs;
            let buyerFeeSignerprivateKey = '99748c4d7a2391052aade492dee9a4ff8b3810522aa9a862d207d29e7e7476c9';
            let sigOrder = orderDetails.sellorder;
            let signCreate = yield this.nftservice.buyerFeeSign(order[0].order, feeTuple);
            console.log(signCreate, 'signCreate');
            let buyerFeeSig = signCreate.result;
            console.log(buyerFeeSig, 'buyerFeeSig');
            let sig1 = yield window.web3.eth.accounts.sign(buyerFeeSig, buyerFeeSignerprivateKey);
            console.log(sig1, 'sig1');
            let buyerFeeSig1 = [sig1.v, sig1.r, sig1.s];
            console.log(buyerFeeSig1, 'buyerFeeSig1');
            // let buyerFeeSig = await this.nftservice.orderHash(order);
            // console.log(buyerFeeSig, 'orderHash');
            let sig = sigOrder[0].vrs;
            console.log(sig, 'sig');
            let buy = yield this.nftservice.callBid(sigOrder[0].order, sig, buyerVRS, buyerFeeSig1, buyer, (orderDetails.askedprice * 1e18).toString(), feeTuple, userAddr);
            console.log(buy, 'buy');
            if (buy.status) {
                let buyresult = buy.result;
                let bidorderObj = {
                    'itemId': orderDetails.itemId,
                    'orderId': orderDetails.orderId,
                    'price': orderDetails.askedprice,
                    'ownerId': orderDetails.buyerId,
                    'txid': buy.result,
                    'sold': "2",
                    'status': "2",
                    'buyercontractdata': { order: order, vrs: [] },
                };
                console.log(bidorderObj, 'bidorderObj');
                this.service.postRequest('collection/bidbuyComplete', bidorderObj).subscribe((res) => {
                    console.log(res, 'bidbuyComplete');
                    if (res.status) {
                        let itemObj = {
                            salestatus: "0",
                            status: "completed",
                            ownerId: orderDetails.buyerId,
                            itemId: orderDetails.itemId,
                        };
                        console.log(itemObj, 'itemObj');
                        this.service.postRequest('collection/updateItems', itemObj).subscribe((ress) => {
                            console.log(ress, 'updateItems');
                            if (ress.status) {
                                this.service.isOverlay = false;
                                this.toasterService.show(true, ress.msg);
                                this.route.navigateByUrl('/market');
                            }
                            else {
                                this.service.isOverlay = false;
                                this.toasterService.show(false, ress.msg);
                            }
                        });
                    }
                });
            }
        });
    }
    contractMakeOffer(apprToken, apprTokenABI, datas, askedprice) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                console.log('contractMakeOffer function called');
                let apprTokenABII = JSON.parse(apprTokenABI);
                var userAddr = this.service.metaDeatails.account;
                let approve = yield this.nftservice.approveBuyFun(apprToken, apprTokenABII, (askedprice * 1e18), userAddr);
                if (!approve.result || approve.result == undefined || approve.result == null) {
                    this.service.isOverlay = false;
                    this.toasterService.show(false, 'Something went wrong, Please Try Again.');
                    return;
                }
                let sellOrder = datas.sellorder;
                let order = sellOrder[0].order;
                let orderBuyer = [[userAddr, ['0xae13d989dac2f0debff460ac112a837c89baa7cd', (askedprice * 1e18).toString(), '0'], order[0][1],], (askedprice * 1e18).toString(), (order[1]).toString(), (order[3]).toString(), (order[4]).toString(), (order[5]).toString(), (order[6]).toString()];
                console.log(orderBuyer, 'orderBuyer');
                let orderHash = yield this.nftservice.orderHash(orderBuyer);
                let sig1 = yield window.web3.eth.personal.sign(orderHash.result, userAddr, '');
                let r = sig1.slice(0, 66);
                let s = '0x' + sig1.slice(66, 130);
                let v = '0x' + sig1.slice(130, 132);
                let BuyergetVRS = [v, r, s];
                if (orderHash && BuyergetVRS) {
                    let orderObj = {
                        'itemId': datas.itemId,
                        'orderId': datas.orderId,
                        'address': userAddr,
                        'price': datas.price,
                        'currency': datas.tocurrency,
                        'type': 'Offered',
                        'offerprice': askedprice,
                        'edition': datas.edition,
                        'buyercontractdata': { order: orderBuyer, vrs: BuyergetVRS },
                    };
                    console.log(orderObj, 'orderObj makeoffer');
                    this.service.postRequest('collection/makeOffer', orderObj).subscribe((result) => {
                        if (result.status) {
                            this.service.isOverlay = false;
                            this.toasterService.show(result.status, result.msg);
                            this.route.navigateByUrl('/market');
                        }
                        else {
                            this.service.isOverlay = false;
                            this.toasterService.show(result.status, result.msg);
                        }
                    });
                }
            }
            catch (e) {
                this.service.isOverlay = false;
            }
        });
    }
    contractApproveOffer(apprToken, apprTokenABI, datas, oprice) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let apprTokenABII = JSON.parse(apprTokenABI);
                var userAddr = this.service.metaDeatails.account;
                /*let balance = await this.nftservice.checkBal(this.toToken, this.toTokenABI, userAddr);
                if (balance.result == '0' || balance.result == 0) {
                    this.toasterService.show(false, 'Sorry Insufficient Fund to Proceed');
                    return;
                }*/
                let amount = oprice * 1e18; //0.1e18;//should change dynamically
                let approve = yield this.nftservice.approveBuyFun(apprToken, apprTokenABII, amount, userAddr);
                if (!approve.result || approve.result == undefined || approve.result == null) {
                    this.service.isOverlay = false;
                    this.toasterService.show(false, 'Something went wrong, Please Try Again.');
                    return;
                }
                console.log(datas, 'datas');
                let buyorder = datas.buyorder;
                let order = buyorder[0].order;
                let BuyerVRS = buyorder[0].vrs;
                let orderBuyer = [[order[0][0], order[0][1], order[0][2],], (order[1]).toString(), (order[2]).toString(), (order[3]).toString(), (order[4]).toString(), (order[5]).toString(), '2'];
                /*let orderBuyer = [["0xd3A02594D41076DDfdba93c277551Ff4CCA76833",
                 ["0x76dbb555c3bb4d985e93567670093f68bf12bca8", "6", "1"],
                 ["0xae13d989dac2f0debff460ac112a837c89baa7cd", "1000000000000000000", "0"]
                 ],
                  "12", "1000000000000000000", "40", "262097159535", "1635162974776", "1"];*/
                // let	sample_ordersdata = [["0xc84928f94462F530a83A8D8E8e1FF4851255b335", ["0xd3A02594D41076DDfdba93c277551Ff4CCA76833", "1", "1"], ["0xae13d989dac2f0debff460ac112a837c89baa7cd", "2", "2"]], "13", "0", "40", "1300223672072", "1634904186615", "1"];
                let orderHash = yield this.nftservice.orderHash(order);
                console.log("orderHash", orderHash);
                let sellorderVRS = datas.sellorder[0].vrs;
                /*let buyerFeeSignerprivateKey  = '99748c4d7a2391052aade492dee9a4ff8b3810522aa9a862d207d29e7e7476c9';
                let buyerFeeSigner = await window.web3.eth.accounts.sign(orderHash.result, buyerFeeSignerprivateKey);*/
                // let fees = this.service.getRequest('/getFees');
                // let feeTuple = ["0x36Ee7371c5D0FA379428321b9d531a1cf0a5cAE6","0x36Ee7371c5D0FA379428321b9d531a1cf0a5cAE6","1","40"];
                let feeTuple = [this.developerfee.address, this.royaltyfee.address, this.developerfee.fee, this.royaltyfee.fee];
                console.log("feeTuple", feeTuple);
                let buyerFeeSignerprivateKey = '99748c4d7a2391052aade492dee9a4ff8b3810522aa9a862d207d29e7e7476c9';
                console.log("buyerFeeSignerprivateKey", buyerFeeSignerprivateKey);
                let signCreate = yield this.nftservice.buyerFeeSign(order, feeTuple);
                console.log("signCreatesignCreatesignCreate", signCreate);
                let feeSigner = signCreate.result;
                let sig1 = yield window.web3.eth.accounts.sign(feeSigner, buyerFeeSignerprivateKey);
                var BuyergetVRS = [sig1.v, sig1.r, sig1.s];
                // var  BuyergetVRS = datas.buyorder[0].vrs;
                //  console.log("BuyergetVRS",BuyergetVRS);return false;
                // let sample_buyervrs = ["0x2a36a9fcc4b82eb60171ee2ae5950b658c5d9c509e4ebbdda9b8fcfbf9e1661e", "0x453035a8327c6edfa2bb472b6e2185012af920e8b3b5569d5e9e0dbef6ae5754", "0x1c"];
                //	let validate = await this.nftservice.validateBuyerSign(order, feeTuple, BuyergetVRS);
                console.log("feeSigner", feeSigner);
                console.log("datas.price", datas.price);
                console.log("orderBuyer", orderBuyer);
                console.log("sellorderVRS", sellorderVRS);
                console.log("BuyergetVRS", BuyergetVRS);
                console.log("userAddr", userAddr);
                let buy = yield this.nftservice.callBuy(oprice, order, BuyerVRS, BuyergetVRS, feeTuple, userAddr);
                console.log("buy", buy);
                if (buy.status) {
                    let orderObj = {
                        'price': oprice,
                        /*'itemId' : datas.itemId,*/
                        'orderId': datas.orderId,
                        'ownerId': datas.buyerId,
                        'sold': "2",
                        'txid': buy.result,
                        'status': "2",
                        'buyercontractdata': { order: order, vrs: [] },
                    };
                    console.log('orderObj', orderObj);
                    this.service.postRequest('collection/offerbuyComplete', orderObj).subscribe((res) => {
                        console.log(res, 'ress');
                        if (res.status) {
                            let exObj = {
                                itemId: datas.itemId,
                                orderId: datas.orderId,
                                _id: datas._id,
                                expire: 1,
                            };
                            console.log(exObj, 'exObj');
                            this.service.postRequest('collection/expireOffer', exObj).subscribe((re) => {
                                console.log(re, 'exObj re');
                                if (re.status) {
                                    let itemObj = {
                                        salestatus: "0",
                                        status: "completed",
                                        itemId: datas.itemId,
                                        ownerId: datas.buyerId,
                                    };
                                    console.log(itemObj, 'itemObj');
                                    this.service.postRequest('collection/updateItems', itemObj).subscribe((ress) => {
                                        console.log(ress, 'ress');
                                        if (ress.status) {
                                            this.service.isOverlay = false;
                                            this.toasterService.show(true, ress.msg);
                                            this.route.navigateByUrl('/market');
                                        }
                                        else {
                                            this.service.isOverlay = false;
                                            this.toasterService.show(false, ress.msg);
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            }
            catch (e) {
                this.service.isOverlay = false;
            }
        });
    }
    contractMakeBid(apprToken, apprTokenABI, datas, askedprice) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let apprTokenABII = JSON.parse(apprTokenABI);
                var userAddr = this.service.metaDeatails.account;
                let approve = yield this.nftservice.approveBuyFun(apprToken, apprTokenABII, (askedprice * 1e18).toString(), userAddr);
                if (!approve.result || approve.result == undefined || approve.result == null) {
                    this.service.isOverlay = false;
                    this.toasterService.show(false, 'Something went wrong, Please Try Again.');
                    return;
                }
                let sellOrder = datas.sellorder;
                let order = sellOrder[0].order;
                // let orderBuyer = [[userAddr,order[0][1],order[0][2], ],(order[1]).toString(),(order[2]).toString(),(order[3]).toString(),(order[4]).toString(),(order[5]).toString(),(order[6]).toString()];  
                let orderHash = yield this.nftservice.bidOrderHash(order, userAddr, (askedprice * 1e18).toString());
                console.log(orderHash, 'bidOrderHash');
                let sig1 = yield window.web3.eth.personal.sign(orderHash.result, userAddr, '');
                let r = sig1.slice(0, 66);
                let s = '0x' + sig1.slice(66, 130);
                let v = '0x' + sig1.slice(130, 132);
                let BuyergetVRS = [v, r, s];
                if (orderHash && BuyergetVRS) {
                    let orderObj = {
                        'itemId': datas.itemId,
                        'orderId': datas.orderId,
                        'address': userAddr,
                        'price': datas.price,
                        'type': 'Bid',
                        'offerprice': askedprice,
                        'edition': datas.edition,
                        'buyercontractdata': { order: order, vrs: BuyergetVRS },
                    };
                    this.service.postRequest('collection/makeOffer', orderObj).subscribe((result) => {
                        if (result.status) {
                            this.service.isOverlay = false;
                            this.toasterService.show(result.status, result.msg);
                            this.route.navigateByUrl('/market');
                        }
                        else {
                            this.service.isOverlay = false;
                            this.toasterService.show(result.status, result.msg);
                        }
                    });
                }
            }
            catch (e) {
                this.service.isOverlay = false;
            }
        });
    }
    contractMakeBuy(apprToken, apprTokenABI, datas, oprice) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //try {
            //	let apprTokenABII = JSON.parse(apprTokenABI);
            if (datas.imported == 1) {
                var apprTokenABII = JSON.parse(apprTokenABI);
            }
            else {
                var apprTokenABII = apprTokenABI;
            }
            var userAddr = this.service.metaDeatails.account;
            /*let balance = await this.nftservice.checkBal(this.toToken, this.toTokenABI, userAddr);
            if (balance.result == '0' || balance.result == 0) {
                this.toasterService.show(false, 'Sorry Insufficient Fund to Proceed');
                return;
            }*/
            let amount = oprice * 1e18; //should change dynamically
            /*
                let approve = await this.nftservice.approveBuyFun(apprToken, apprTokenABII, amount, userAddr);
    
    
    
                if (!approve.result || approve.result == undefined || approve.result == null) {
                    this.service.isOverlay = false;
                    this.toasterService.show(false, 'Something went wrong, Please Try Again.');
                    return;
                }*/
            let sellOrder = datas.sellorder;
            let order = sellOrder[0].order;
            let orderBuyer = [[order[0][0], order[0][1], order[0][2],], (order[2]).toString(), (order[1]).toString(), (order[3]).toString(), (order[4]).toString(), (order[5]).toString(), (order[6]).toString()];
            /*let orderBuyer = [["0xd3A02594D41076DDfdba93c277551Ff4CCA76833",
             ["0x76dbb555c3bb4d985e93567670093f68bf12bca8", "6", "1"],
             ["0xae13d989dac2f0debff460ac112a837c89baa7cd", "1000000000000000000", "0"]
             ],
              "12", "1000000000000000000", "40", "262097159535", "1635162974776", "1"];*/
            // let	sample_ordersdata = [["0xc84928f94462F530a83A8D8E8e1FF4851255b335", ["0xd3A02594D41076DDfdba93c277551Ff4CCA76833", "1", "1"], ["0xae13d989dac2f0debff460ac112a837c89baa7cd", "2", "2"]], "13", "0", "40", "1300223672072", "1634904186615", "1"];
            let orderHash = yield this.nftservice.orderHash(order);
            let sellorderVRS = sellOrder[0].vrs;
            /*let buyerFeeSignerprivateKey  = '99748c4d7a2391052aade492dee9a4ff8b3810522aa9a862d207d29e7e7476c9';
            let buyerFeeSigner = await window.web3.eth.accounts.sign(orderHash.result, buyerFeeSignerprivateKey);*/
            // let fees = this.service.getRequest('/getFees');
            // let feeTuple = ["0x36Ee7371c5D0FA379428321b9d531a1cf0a5cAE6","0x36Ee7371c5D0FA379428321b9d531a1cf0a5cAE6","1","40"];
            let feeTuple = [this.developerfee.address, this.royaltyfee.address, this.developerfee.fee, this.royaltyfee.fee];
            let buyerFeeSignerprivateKey = '99748c4d7a2391052aade492dee9a4ff8b3810522aa9a862d207d29e7e7476c9';
            let signCreate = yield this.nftservice.buyerFeeSign(order, feeTuple);
            let feeSigner = signCreate.result;
            let sig1 = yield window.web3.eth.accounts.sign(feeSigner, buyerFeeSignerprivateKey);
            let BuyergetVRS = [sig1.v, sig1.r, sig1.s];
            // let sample_buyervrs = ["0x2a36a9fcc4b82eb60171ee2ae5950b658c5d9c509e4ebbdda9b8fcfbf9e1661e", "0x453035a8327c6edfa2bb472b6e2185012af920e8b3b5569d5e9e0dbef6ae5754", "0x1c"];
            let validate = yield this.nftservice.validateBuyerSign(order, feeTuple, BuyergetVRS);
            console.log("datas.pricedatas.pricedatas.price", datas.price);
            // return false;
            let buy = yield this.nftservice.callSell(datas.price, order, sellorderVRS, BuyergetVRS, feeTuple, userAddr);
            if (buy.status) {
                let orderObj = {
                    /*'itemId' : datas.itemId,*/
                    'orderId': datas.orderId,
                    'txid': buy.result,
                    'sold': "2",
                    'status': "2",
                    'buyercontractdata': { order: order, vrs: [] },
                };
                this.service.postRequest('collection/privatebuyComplete', orderObj).subscribe((res) => {
                    if (res.status) {
                        let itemObj = {
                            salestatus: "0",
                            status: "completed",
                            itemId: datas.itemId,
                            ownerId: res.buyerId,
                        };
                        this.service.postRequest('collection/updateItems', itemObj).subscribe((ress) => {
                            console.log('updateItems ress', ress);
                            if (ress.status) {
                                this.service.isOverlay = false;
                                this.toasterService.show(true, ress.msg);
                                this.route.navigateByUrl('market');
                            }
                            else {
                                this.service.isOverlay = false;
                                this.toasterService.show(false, ress.msg);
                            }
                        });
                    }
                });
            }
            /*}
            catch(e) {
                this.service.isOverlay = false;
            }*/
        });
    }
    myFunc(_id) {
        this.route.navigate(['/item-details/'], { queryParams: { id: encodeURIComponent(_id) } });
        setTimeout(() => {
            this.init();
        }, 1000);
    }
}
MarketDetailComponent.ɵfac = function MarketDetailComponent_Factory(t) { return new (t || MarketDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_10__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_services_metamask_nft_nft_service__WEBPACK_IMPORTED_MODULE_11__["NftService"])); };
MarketDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MarketDetailComponent, selectors: [["app-market-detail"]], viewQuery: function MarketDetailComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.closebutton = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.closebutton1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.closebutton2 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.closebutton3 = _t.first);
    } }, decls: 220, vars: 60, consts: [[1, "digital-art-sec"], [1, "middle-section"], [1, "container", "tabpages-cnt"], [4, "ngIf"], [1, "row", "mt-3"], [1, "col-md-6", "col-sm-7", "col-lg-6", "col-xl-4"], [1, "section-title", "mb-0", "text-left"], [1, "col-md-6", "col-sm-5", "col-lg-6", "col-xl-2"], [1, "section-title", "text-black", "font-20", "fontweight-400", "text-left"], [1, "col-md-12", "col-sm-12", "col-lg-12", "col-xl-6"], [1, "box-shadow1", "act-cnt", "d-xl-flex", "d-sm-flex", "align-items-center", "justify-content-between", "p-2"], [1, "d-flex", "act-head", "p-2", "mb-2"], [1, "prof-pic-cnt", "mr-3"], [3, "src", 4, "ngIf"], ["src", "assets/images/prof.png", 4, "ngIf"], [1, "mb-0"], [1, "mr-3"], [1, "prof-pic-cnt"], ["src", "assets/images/prof1.png", 4, "ngIf"], [1, "text-xl-center", "text-sm-center", "mb-2"], ["src", "assets/images/heart.png", 1, "mb-2"], [1, "font-14", "mb-0", "fontweight-400"], ["src", "assets/images/eye.png", 1, "mb-2"], [1, "col-md-12"], [1, "pb-0", "font-14", "text-black", "fontweight-400", "mb-2"], ["class", "text-center mt-4", 4, "ngIf"], [1, "row", "mb-5"], ["class", "col-md-12 col-sm-12 col-lg-6 col-xl-6", 4, "ngIf"], ["id", "Bidapp", 1, "modal", "fade", "modalPrimary", "md", "creat-collection"], [1, "modal-dialog", "modal-lg", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header", "border-bottom-0", "d-block"], ["type", "button", "data-dismiss", "modal", 1, "close"], ["closebutton", ""], [1, "modal-body"], ["name", "bidsForm", "id", "bidsForm", 3, "ngSubmit"], ["bf", "ngForm"], [1, "row", "justify-content-center", "align-items-start"], [1, "col-md-12", "col-sm-12", "col-lg-12", "col-xl-12"], [1, "blog-sec-cnt"], [1, "d-lg-flex", "align-items-center"], [1, "img-fluid", "mr-3", 3, "src"], [1, "text-left"], [1, "font-16", "fontweight-500", "text-black", "mt-2", "mb-4"], [1, "font-16", "fontweight-500", "text-black", "mb-2"], [1, "font-28", "font-weight-bold", "text-black", "mb-0"], [1, "font-16", "fontweight-500", "mt-4", "text-black", "mb-2"], [1, "row", "tabpages-cnt", "p-0", "w-auto"], [1, "col-md-6", "col-sm-6", "col-xl-4", "col-lg-6", "mt-3"], [1, "card", "grey-cnt", "text-center"], [1, "card-body"], [1, "font-16", "fontweight-500"], ["class", "font-16 fontweight-500", 4, "ngIf"], [1, "form-group", "mt-3"], [1, "d-flex", "justify-content-between", "bid-block"], ["for", "yourName", 1, "mb-0", "pb-0", "font-18", "font-weight-bold", "text-black", "mb-2"], ["type", "text", "placeholder", "1", "name", "bidsprice", "required", "", 3, "ngClass", "ngModel", "ngModelChange"], ["bidsprice", "ngModel"], ["class", "invalid-feedback", 4, "ngIf"], [1, "text-center"], ["data-dismiss", "modal", 1, "btn", "mt-4", "mr-3"], [1, "btn", "default-btn", "mt-4"], ["id", "Createcollection", 1, "modal", "fade", "modalPrimary", "md", "creat-collection-1"], [1, "modal-header", "border-bottom-0", "d-flex"], [1, "card", "shadow-card", "font-18", "text-black", "font-weight-bold", "padd-bot-20"], ["closebutton1", ""], [1, "modal-body", "px-5"], [1, "form-group"], [1, "mt-2"], ["for", "file-upload", 1, "custom-file-upload", "d-xl-flex", "d-lg-flex", "w-100"], [1, "width100"], [3, "src"], [1, "font-18", "fontweight-400", "p-lg-42", "text-black"], [1, "text-right"], ["data-dismiss", "modal", 1, "btn", "default-btn2", "mt-4"], [1, "btn", "default-btn", "mt-4", 3, "click"], ["id", "Createcollection2", 1, "modal", "fade", "modalPrimary", "md", "creat-collection-1"], ["closebutton2", ""], ["name", "offerForm", "id", "offerForm", 3, "ngSubmit"], ["f", "ngForm"], [1, "font-14", "fontweight-400", "p-lg-42", "text-black"], ["href", "#"], [1, "dash-under"], ["type", "text", "placeholder", "1", "name", "offprice", "required", "", 3, "ngClass", "ngModel", "ngModelChange"], ["offprice", "ngModel"], ["class", "text-danger", 4, "ngIf"], ["class", "font-14 fontweight-400 p-lg-42 text-black", 4, "ngIf"], ["id", "Createcollection3", 1, "modal", "fade", "modalPrimary", "md", "creat-collection-1"], ["closebutton3", ""], ["class", "img-fluid w-100", 3, "src", 4, "ngIf"], [1, "img-fluid", "w-100", 3, "src"], ["src", "assets/images/market1.png", 1, "img-fluid", "w-100"], ["src", "assets/images/prof.png"], ["src", "assets/images/prof1.png"], [1, "text-center", "mt-4"], ["class", "btn default-btn min-width-auto px-5 mr-1 py-2 mt-1", "data-toggle", "modal", "data-target", "#Createcollection", 4, "ngIf"], ["class", "btn border-btn min-width-auto px-4  py-2 mt-1", "data-toggle", "modal", "data-target", "#Createcollection2", 4, "ngIf"], ["class", "btn border-btn min-width-auto px-4  py-2 mt-1", "data-toggle", "modal", "data-target", "#Bidapp", 4, "ngIf"], ["data-toggle", "modal", "data-target", "#Createcollection", 1, "btn", "default-btn", "min-width-auto", "px-5", "mr-1", "py-2", "mt-1"], ["data-toggle", "modal", "data-target", "#Createcollection2", 1, "btn", "border-btn", "min-width-auto", "px-4", "py-2", "mt-1"], ["data-toggle", "modal", "data-target", "#Bidapp", 1, "btn", "border-btn", "min-width-auto", "px-4", "py-2", "mt-1"], [1, "col-md-12", "col-sm-12", "col-lg-6", "col-xl-6"], ["class", "mt-3", 4, "ngFor", "ngForOf"], [1, "mt-3"], [1, "font-20", "fontweight-400", "text-black", "mb-2"], [1, "text-black1"], [1, "text-black1", "font-14", "fontweight-400", "mb-2"], ["data-toggle", "modal", "data-target", "#Createcollection3", "class", "btn default-btn min-width-auto px-5 mr-1 py-2 mt-1", 3, "click", 4, "ngIf"], ["data-toggle", "modal", "data-target", "#Createcollection3", 1, "btn", "default-btn", "min-width-auto", "px-5", "mr-1", "py-2", "mt-1", 3, "click"], [1, "section-title", "text-left"], [1, "row", "mt-5"], ["class", "col-md-6 col-sm-6 col-lg-6 col-xl-3", 4, "ngFor", "ngForOf"], [1, "col-md-6", "col-sm-6", "col-lg-6", "col-xl-3"], [3, "click"], ["src", "assets/images/market-detail1.png", 4, "ngIf"], ["src", "assets/images/market-detail1.png"], [1, "invalid-feedback"], [1, "text-danger"]], template: function MarketDetailComponent_Template(rf, ctx) { if (rf & 1) {
        const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Offers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-inner-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MarketDetailComponent_div_5_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MarketDetailComponent_div_6_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "List Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, MarketDetailComponent_img_20_Template, 1, 1, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, MarketDetailComponent_img_21_Template, 1, 0, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Artist");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Artist");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, MarketDetailComponent_img_34_Template, 1, 1, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, MarketDetailComponent_img_35_Template, 1, 0, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, MarketDetailComponent_div_47_Template, 4, 3, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, MarketDetailComponent_div_49_Template, 2, 1, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, MarketDetailComponent_div_50_Template, 5, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "app-inner-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "button", 32, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "form", 35, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function MarketDetailComponent_Template_form_ngSubmit_60_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r44); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](61); return _r10.form.valid && ctx.onbitSubmit(ctx.items, _r10.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Bids placed during an auction cannot be withdrawn. By placing a bid you indicate that you have read and agree to the Auction Terms of Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "p", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Lowest Bid");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "h5", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Highest Bid Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "h3", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Your Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](89, MarketDetailComponent_h3_89_Template, 2, 2, "h3", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "label", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "You must bid more than");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "label", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "input", 56, 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MarketDetailComponent_Template_input_ngModelChange_96_listener($event) { return ctx.bidsObj.bidsprice = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](98, MarketDetailComponent_div_98_Template, 2, 1, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "button", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, " Never Mind");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Submit Bid");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "button", 32, 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "label", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](118, "img", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "p", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "p", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "Price : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "p", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "Your Balance : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "button", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "Never Mind");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "button", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MarketDetailComponent_Template_button_click_135_listener() { return ctx.buyCalled(ctx.items, "buy"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "button", 32, 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "form", 78, 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function MarketDetailComponent_Template_form_ngSubmit_147_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r44); const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](148); return _r16.form.valid && ctx.onSubmit(ctx.items, _r16.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "label", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](153, "img", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "p", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, "Seller Price ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](159, "a", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "p", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "Your Offer: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "b", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "input", 83, 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MarketDetailComponent_Template_input_ngModelChange_163_listener($event) { return ctx.offObj.offprice = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](166, MarketDetailComponent_span_166_Template, 2, 1, "span", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "p", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](169, "a", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](170, MarketDetailComponent_p_170_Template, 2, 2, "p", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "p", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, "Your ether will be escrowed in the smart contract until your offer is accepted, or you withdraw it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "button", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, "Never Mind");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, "\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, "Submit Offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](184);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "button", 32, 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](187, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "label", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](193, "img", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "p", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "p", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](199, "Price : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](201);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "p", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](203, "Developer fee (%) : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](205);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "p", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](207, "Royalty fee (%) : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](209);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "p", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](211, "Amount you may receive : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](213);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "button", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](216, "Never Mind");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](217, "\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "button", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MarketDetailComponent_Template_button_click_218_listener() { return ctx.approveOffer(ctx.toffers, ctx.ttype); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](219, "Confirm 111");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](61);
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](97);
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](148);
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](164);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.items.type == "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.items.type != "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.items.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.items.price, " ", ctx.items.tocurrency, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.items.profilepicture != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.items.profilepicture == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.items.username ? ctx.items.username : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.items.ownername ? ctx.items.ownername : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.items.ownerpicture != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.items.ownerpicture == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.items.likeCount, " Favorites");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.items.viewCount, " Views");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.items.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.items.canbuy && ctx.items.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.itemsOffers.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.moreitems.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.items.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.items.price, " ", ctx.items.tocurrency, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.items.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.lastbid != 0 ? ctx.lastbid : ctx.items.price, " ", ctx.items.tocurrency, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.bnbBalance);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.lastbid != 0 ? ctx.lastbid : ctx.items.price, " ", ctx.items.tocurrency, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](56, _c4, _r10.submitted && _r12.invalid))("ngModel", ctx.bidsObj.bidsprice);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r10.submitted && _r12.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Confirm purchase of #", ctx.items.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.items.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" #", ctx.items.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.items.price, " ", ctx.items.tocurrency, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.bnbBalance, " ", ctx.items.tocurrency, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Make an Offer on #", ctx.items.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.items.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.items.price, " ", ctx.items.tocurrency, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](58, _c4, _r16.submitted && _r17.invalid))("ngModel", ctx.offObj.offprice);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.items.tocurrency, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r16.submitted && _r17.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Your must offer at least lesser than ", ctx.items.price, " ", ctx.items.tocurrency, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.bnbBalance);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Confirm purchase of #", ctx.items.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.items.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" #", ctx.items.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.toffers.price, " ", ctx.items.tocurrency, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.showdeveloperfee, " %");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.showroyaltyfee, " %");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.receivePrice, " ", ctx.items.tocurrency, "");
    } }, directives: [_common_inner_header_inner_header_component__WEBPACK_IMPORTED_MODULE_12__["InnerHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _common_inner_footer_inner_footer_component__WEBPACK_IMPORTED_MODULE_14__["InnerFooterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"]], styles: [".heart-icon[_ngcontent-%COMP%] {\n\t width: 20px;\n\t height: 18px;\n\t background: url('/assets/images/heart-icon.png') no-repeat center center;\n\t background-size: contain;\n}\n .heart-icon.active[_ngcontent-%COMP%], .heart-icon[_ngcontent-%COMP%]:hover {\n\t background: url('/assets/images/heart.png') no-repeat center center;\n\t cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmZ0L21hcmtldC1kZXRhaWwvbWFya2V0LWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix3RUFBd0U7RUFDeEUsd0JBQXdCO0FBQzFCO0NBQ0M7RUFDQyxtRUFBbUU7RUFDbkUsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25mdC9tYXJrZXQtZGV0YWlsL21hcmtldC1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFydC1pY29uIHtcblx0IHdpZHRoOiAyMHB4O1xuXHQgaGVpZ2h0OiAxOHB4O1xuXHQgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9oZWFydC1pY29uLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuXHQgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuIC5oZWFydC1pY29uLmFjdGl2ZSwgLmhlYXJ0LWljb246aG92ZXIge1xuXHQgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9oZWFydC5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcblx0IGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MarketDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-market-detail',
                templateUrl: './market-detail.component.html',
                styleUrls: ['./market-detail.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"] }, { type: src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_10__["ToasterService"] }, { type: src_app_common_services_metamask_nft_nft_service__WEBPACK_IMPORTED_MODULE_11__["NftService"] }]; }, { closebutton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['closebutton']
        }], closebutton1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['closebutton1']
        }], closebutton2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['closebutton2']
        }], closebutton3: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['closebutton3']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/nft/market/market.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/nft/market/market.component.ts ***!
  \******************************************************/
/*! exports provided: MarketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketComponent", function() { return MarketComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/services/api/data.service */ "./src/app/common/services/api/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/toaster/toaster.service */ "./src/app/common/toaster/toaster.service.ts");
/* harmony import */ var _common_inner_header_inner_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/inner-header/inner-header.component */ "./src/app/common/inner-header/inner-header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _common_inner_footer_inner_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/inner-footer/inner-footer.component */ "./src/app/common/inner-footer/inner-footer.component.ts");








function MarketComponent_div_8_div_1_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 61);
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r3.profilepicture ? item_r3.profilepicture : "assets/images/prof.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MarketComponent_div_8_div_1_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 62);
} }
function MarketComponent_div_8_div_1_img_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 61);
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r3.ownerpicture ? item_r3.ownerpicture : "assets/images/prof1.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MarketComponent_div_8_div_1_img_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 63);
} }
function MarketComponent_div_8_div_1_img_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 64);
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MarketComponent_div_8_div_1_img_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 65);
} }
function MarketComponent_div_8_div_1_img_36_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MarketComponent_div_8_div_1_img_36_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.addLike(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MarketComponent_div_8_div_1_img_37_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MarketComponent_div_8_div_1_img_37_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.addLike(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MarketComponent_div_8_div_1_div_40_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MarketComponent_div_8_div_1_div_40_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.myFunc(item_r3._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "buy now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MarketComponent_div_8_div_1_div_41_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MarketComponent_div_8_div_1_div_41_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.myFunc1(item_r3._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "buy now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MarketComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MarketComponent_div_8_div_1_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.getUserFunc(item_r3.userId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MarketComponent_div_8_div_1_img_5_Template, 1, 1, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MarketComponent_div_8_div_1_img_6_Template, 1, 0, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Artist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MarketComponent_div_8_div_1_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.getUserFunc(item_r3.ownerId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Artist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, MarketComponent_div_8_div_1_img_20_Template, 1, 1, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, MarketComponent_div_8_div_1_img_21_Template, 1, 0, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MarketComponent_div_8_div_1_Template_a_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.myFunc1(item_r3._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, MarketComponent_div_8_div_1_img_23_Template, 1, 1, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, MarketComponent_div_8_div_1_img_24_Template, 1, 0, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, MarketComponent_div_8_div_1_img_36_Template, 1, 0, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, MarketComponent_div_8_div_1_img_37_Template, 1, 0, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, MarketComponent_div_8_div_1_div_40_Template, 3, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, MarketComponent_div_8_div_1_div_41_Template, 3, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.profilepicture != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.profilepicture == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.ownername);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.ownerpicture != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.ownerpicture == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.image != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.image == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r3.price, " ", item_r3.tocurrency, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.fav);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r3.fav);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r3.likeCount, " Favorites");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.canbuy && item_r3.type == "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.canbuy && item_r3.type != "add");
} }
function MarketComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MarketComponent_div_8_div_1_Template, 42, 16, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.show);
} }
function MarketComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MarketComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.loadmore(ctx_r39.skip); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Load more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MarketComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Items to display");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MarketComponent {
    constructor(service, route, toasterService) {
        this.service = service;
        this.route = route;
        this.toasterService = toasterService;
        this.itemObj = {};
        this.items = [];
        this.limit = 9;
        this.skip = 0;
        this.account = this.service.metaDeatails.account;
    }
    ngOnInit() {
        /*if (!this.account) {
            this.toasterService.show(false, 'Please login to continue');
            this.route.navigate(['/']);
        }*/
        this.service.isOverlay = false;
        this.getItems();
    }
    myFunc(_id) {
        this.route.navigate(['/item-details1/'], { queryParams: { id: encodeURIComponent(_id) } });
    }
    myFunc1(_id) {
        this.route.navigate(['/item-details/'], { queryParams: { id: encodeURIComponent(_id), 'type': 0 } });
    }
    getUserFunc(user_id) {
        this.route.navigate(['/user/'], { queryParams: { id: encodeURIComponent(user_id) } });
    }
    getItems() {
        this.service.postRequest("collection/getMarkets", { skip: this.skip, limit: this.limit, account: this.account }).subscribe((suc) => {
            let responseData = suc;
            if (responseData.status) {
                this.items = responseData.data;
            }
        });
    }
    addLike(itemData) {
        var obj = {
            type: "Liked",
            objectId: itemData.itemId,
            creatorId: itemData.userId,
            ownerId: itemData.ownerId,
            image: itemData.image,
            objectName: itemData.name,
        };
        this.service.postRequest('users/addActivity', obj).subscribe((res) => {
            if (res.status == true) {
            }
        });
    }
    loadmore(skip) {
        this.service.postRequest("collection/getMarkets", { skip: this.skip, limit: this.limit }).subscribe((res) => {
            this.items.push(...res.data);
            this.skip = this.skip + this.limit;
        });
    }
}
MarketComponent.ɵfac = function MarketComponent_Factory(t) { return new (t || MarketComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"])); };
MarketComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MarketComponent, selectors: [["app-market"]], decls: 60, vars: 3, consts: [[1, "digital-art-sec"], [1, "middle-section"], [1, "container", "tabpages-cnt"], [1, "row"], [1, "col-lg-12"], [1, "section-title"], ["class", "col-md-12 col-lg-6 col-sm-12 col-xl-4", 4, "ngFor", "ngForOf"], ["class", "btn default-btn mt-4", 3, "click", 4, "ngIf"], ["class", "col-md-12 col-lg-12 col-sm-12 col-xl-12 text-center", 4, "ngIf"], ["id", "Bidapp", 1, "modal", "fade", "modalPrimary", "md", "creat-collection"], [1, "modal-dialog", "modal-lg", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header", "border-bottom-0", "d-block"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], [1, "row", "justify-content-center", "align-items-start"], [1, "col-md-12", "col-sm-12", "col-lg-12", "col-xl-12"], [1, "blog-sec-cnt"], [1, "d-lg-flex", "align-items-center"], ["src", "assets/images/app1.png", 1, "img-fluid", "mr-3"], [1, "text-left"], [1, "font-16", "fontweight-500", "text-black", "mt-2", "mb-4"], [1, "font-16", "fontweight-500", "text-black", "mb-2"], [1, "font-28", "font-weight-bold", "text-black", "mb-0"], [1, "font-16", "fontweight-500", "mt-4", "text-black", "mb-2"], [1, "row", "tabpages-cnt", "p-0", "w-auto"], [1, "col-md-6", "col-sm-6", "col-xl-4", "col-lg-6", "mt-3"], [1, "card", "grey-cnt", "text-center"], [1, "card-body"], [1, "font-16", "fontweight-500"], [1, "form-group", "mt-3"], [1, "d-flex", "justify-content-between", "bid-block"], ["for", "yourName", 1, "mb-0", "pb-0", "font-18", "font-weight-bold", "text-black", "mb-2"], ["type", "text", "placeholder", "Place your Bid", 1, "form-control", "input-sec", "font-16", "fontweight-400"], [1, "text-center"], [1, "btn", "mt-4", "mr-3"], [1, "btn", "fontweight-500", "default-btn", "mt-4"], [1, "col-md-12", "col-lg-6", "col-sm-12", "col-xl-4"], ["class", "act-cnt", 4, "ngIf"], [1, "act-cnt"], [1, "act-head", "d-flex", "align-items-center", "justify-content-between", "px-2", "mb-3"], [3, "click"], [1, "d-flex"], [1, "prof-pic-cnt", "mr-3"], [3, "src", 4, "ngIf"], ["src", "assets/images/prof.png", 4, "ngIf"], [1, "mb-0"], [1, "mr-3"], [1, "prof-pic-cnt"], ["src", "assets/images/prof1.png", 4, "ngIf"], ["class", "img-fluid w-100", 3, "src", 4, "ngIf"], ["src", "assets/images/market1.png", "class", "img-fluid w-100", 4, "ngIf"], [1, "act-head"], [1, "border-bottom"], [1, "row", "mt-2"], [1, "col-sm-6", "col-md-6", "text-center", "col-lg-6", "col-xl-6", "border-right"], [1, "mb-2"], [1, "col-sm-6", "col-md-6", "text-center", "col-lg-6", "col-xl-6"], ["src", "assets/images/heart.png", 3, "click", 4, "ngIf"], ["src", "assets/images/heart-icon.png", 3, "click", 4, "ngIf"], ["class", "text-xl-center text-sm-center mb-2", 4, "ngIf"], [3, "src"], ["src", "assets/images/prof.png"], ["src", "assets/images/prof1.png"], [1, "img-fluid", "w-100", 3, "src"], ["src", "assets/images/market1.png", 1, "img-fluid", "w-100"], ["src", "assets/images/heart.png", 3, "click"], ["src", "assets/images/heart-icon.png", 3, "click"], [1, "text-xl-center", "text-sm-center", "mb-2"], [1, "btn", "default-btn", "type-btn", 3, "click"], [1, "btn", "default-btn", "mt-4", 3, "click"], [1, "col-md-12", "col-lg-12", "col-sm-12", "col-xl-12", "text-center"]], template: function MarketComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-inner-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Buy NFT's Here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MarketComponent_div_8_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MarketComponent_button_9_Template, 2, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MarketComponent_div_10_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-inner-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Bids placed during an auction cannot be withdrawn. By placing a bid you indicate that you have read and agree to the Auction Terms of Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Current Bid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "0.1 ETH (~$242)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h5", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "OLIVER CROMWELL - AI \"AFTER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Total Bit Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h3", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "0 BNB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Your Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h3", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "0 BNB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "You must bid at least ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "0.11 BNB (~$266) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Never Mind");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Submit Bid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.items.length > 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.items.length == 0);
    } }, directives: [_common_inner_header_inner_header_component__WEBPACK_IMPORTED_MODULE_4__["InnerHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _common_inner_footer_inner_footer_component__WEBPACK_IMPORTED_MODULE_6__["InnerFooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25mdC9tYXJrZXQvbWFya2V0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MarketComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-market',
                templateUrl: './market.component.html',
                styleUrls: ['./market.component.css']
            }]
    }], function () { return [{ type: src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/nft/top-collectors/top-collectors.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/nft/top-collectors/top-collectors.component.ts ***!
  \**********************************************************************/
/*! exports provided: TopCollectorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopCollectorsComponent", function() { return TopCollectorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _common_inner_header_inner_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/inner-header/inner-header.component */ "./src/app/common/inner-header/inner-header.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _common_inner_footer_inner_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/inner-footer/inner-footer.component */ "./src/app/common/inner-footer/inner-footer.component.ts");





class TopCollectorsComponent {
    constructor() { }
    ngOnInit() {
    }
}
TopCollectorsComponent.ɵfac = function TopCollectorsComponent_Factory(t) { return new (t || TopCollectorsComponent)(); };
TopCollectorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopCollectorsComponent, selectors: [["app-top-collectors"]], decls: 271, vars: 0, consts: [[1, "digital-art-sec"], [1, "middle-section"], [1, "container", "tabpages-cnt"], [1, "row"], [1, "col-md-7", "col-sm-12", "col-xl-10", "col-lg-7"], [1, "section-title", "text-left"], [1, "col-md-5", "col-sm-12", "col-xl-2", "col-lg-5"], [1, "input-group", "w-100", "mb-2"], [1, "input-group-append", "w-100", "h-43"], [1, "rounded", "w-100"], [1, "row", "collection-block", "mt-4"], [1, "table-responsive", "collectors-table"], [1, "table"], ["scope", "col"], ["scope", "row"], ["src", "assets/images/top1.png", 1, "pr-2"], ["src", "assets/images/top2.png", 1, "pr-2"], ["src", "assets/images/top3.png", 1, "pr-2"], ["src", "assets/images/top4.png", 1, "pr-2"], ["src", "assets/images/top5.png", 1, "pr-2"], ["src", "assets/images/top6.png", 1, "pr-2"], ["id", "Bidapp", 1, "modal", "fade", "modalPrimary", "md", "creat-collection"], [1, "modal-dialog", "modal-lg", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header", "border-bottom-0", "d-block"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], [1, "row", "justify-content-center", "align-items-start"], [1, "col-md-12", "col-sm-12", "col-lg-12", "col-xl-12"], [1, "blog-sec-cnt"], [1, "d-lg-flex", "align-items-center"], ["src", "assets/images/app1.png", 1, "img-fluid", "mr-3"], [1, "text-left"], [1, "font-16", "fontweight-500", "text-black", "mt-2", "mb-4"], [1, "font-16", "fontweight-500", "text-black", "mb-2"], [1, "font-28", "font-weight-bold", "text-black", "mb-0"], [1, "font-16", "fontweight-500", "mt-4", "text-black", "mb-2"], [1, "row", "tabpages-cnt", "p-0", "w-auto"], [1, "col-md-6", "col-sm-6", "col-xl-4", "col-lg-6", "mt-3"], [1, "card", "grey-cnt", "text-center"], [1, "card-body"], [1, "font-16", "fontweight-500"], [1, "form-group", "mt-3"], [1, "d-flex", "justify-content-between", "bid-block"], ["for", "yourName", 1, "mb-0", "pb-0", "font-18", "font-weight-bold", "text-black", "mb-2"], ["type", "text", "placeholder", "Place your Bid", 1, "form-control", "input-sec", "font-16", "fontweight-400"], [1, "text-center"], [1, "btn", "mt-4", "mr-3"], [1, "btn", "fontweight-500", "default-btn", "mt-4"]], template: function TopCollectorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-inner-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Top Collectors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "30 Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "30 Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "30 Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Collect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Work Collected");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Worked owned");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Avg purchease Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Total Purches ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Biggest Purchase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Works Resold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Avg Resales Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Total Resales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " @mrmisang ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "$ 4,132");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "$ 80,706");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "$ 15,0239");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "$1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " @mrmisang ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "$ 4,132");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "$ 80,706");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "$ 15,0239");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "$1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " @mrmisang ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "$ 4,132");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "$ 80,706");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "$ 15,0239");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "$1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " @mrmisang ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "$ 4,132");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "$ 80,706");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "$ 15,0239");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "$1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " @mrmisang ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "$ 4,132");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "$ 80,706");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "$ 15,0239");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "$1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, " @mrmisang ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "$ 4,132");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "$ 80,706");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "$ 15,0239");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "$1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, " @mrmisang ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "$ 4,132");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "$ 80,706");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "$ 15,0239");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "$1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, " @mrmisang ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "$ 4,132");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "$ 80,706");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "$ 15,0239");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "$1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, " @mrmisang ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "$ 4,132");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "$ 80,706");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "$ 15,0239");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "$1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "app-inner-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](234, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "Bids placed during an auction cannot be withdrawn. By placing a bid you indicate that you have read and agree to the Auction Terms of Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "Current Bid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "0.1 ETH (~$242)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "h5", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "OLIVER CROMWELL - AI \"AFTER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "Total Bit Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "h3", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "0 BNB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "Your Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "h3", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "0 BNB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "You must bid at least ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "0.11 BNB (~$266) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](265, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, " Never Mind");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, " Submit Bid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_common_inner_header_inner_header_component__WEBPACK_IMPORTED_MODULE_1__["InnerHeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _common_inner_footer_inner_footer_component__WEBPACK_IMPORTED_MODULE_3__["InnerFooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25mdC90b3AtY29sbGVjdG9ycy90b3AtY29sbGVjdG9ycy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopCollectorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-top-collectors',
                templateUrl: './top-collectors.component.html',
                styleUrls: ['./top-collectors.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/nft/userprofile/userprofile.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/nft/userprofile/userprofile.component.ts ***!
  \****************************************************************/
/*! exports provided: UserprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserprofileComponent", function() { return UserprofileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/services/api/data.service */ "./src/app/common/services/api/data.service.ts");
/* harmony import */ var src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/toaster/toaster.service */ "./src/app/common/toaster/toaster.service.ts");
/* harmony import */ var _common_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/header/header.component */ "./src/app/common/header/header.component.ts");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm2015/ngx-bootstrap-tabs.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/footer/footer.component */ "./src/app/common/footer/footer.component.ts");









function UserprofileComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Collected ");
} }
function UserprofileComponent_div_22_img_39_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserprofileComponent_div_22_img_39_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.addLike(item_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserprofileComponent_div_22_img_40_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserprofileComponent_div_22_img_40_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.addLike(item_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserprofileComponent_div_22_div_43_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserprofileComponent_div_22_div_43_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.myFunc(item_r6._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "buy now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserprofileComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserprofileComponent_div_22_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const item_r6 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.getUserFunc(item_r6.userId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Artist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserprofileComponent_div_22_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const item_r6 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.getUserFunc(item_r6.ownerId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Artist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserprofileComponent_div_22_Template_a_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const item_r6 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.myFunc(item_r6._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Suppply");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, UserprofileComponent_div_22_img_39_Template, 1, 0, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, UserprofileComponent_div_22_img_40_Template, 1, 0, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, UserprofileComponent_div_22_div_43_Template, 3, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r6.profilepicture ? item_r6.profilepicture : "assets/images/user-icon.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.ownername);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r6.ownerpicture ? item_r6.ownerpicture : "assets/images/prof1.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r6.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r6.price, " ", item_r6.currency, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.supply);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r6.fav);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r6.fav);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r6.likeCount, " Favorites");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r6.canbuy);
} }
function UserprofileComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No items collected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserprofileComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " On Sale ");
} }
function UserprofileComponent_div_27_img_39_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserprofileComponent_div_27_img_39_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.addLike(item_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserprofileComponent_div_27_img_40_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserprofileComponent_div_27_img_40_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.addLike(item_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserprofileComponent_div_27_div_43_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserprofileComponent_div_27_div_43_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.myFunc(item_r24._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "buy now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserprofileComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserprofileComponent_div_27_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const item_r24 = ctx.$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.getUserFunc(item_r24.userId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Artist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserprofileComponent_div_27_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const item_r24 = ctx.$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.getUserFunc(item_r24.ownerId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Artist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserprofileComponent_div_27_Template_a_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const item_r24 = ctx.$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.myFunc(item_r24._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Suppply");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, UserprofileComponent_div_27_img_39_Template, 1, 0, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, UserprofileComponent_div_27_img_40_Template, 1, 0, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, UserprofileComponent_div_27_div_43_Template, 3, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r24.profilepicture ? item_r24.profilepicture : "assets/images/user-icon.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r24.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r24.ownername);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r24.ownerpicture ? item_r24.ownerpicture : "assets/images/prof1.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r24.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r24.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r24.price, " ", item_r24.currency, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r24.supply);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r24.fav);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r24.fav);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r24.likeCount, " Favorites");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r24.canbuy);
} }
function UserprofileComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No items found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class UserprofileComponent {
    constructor(activatedRoute, route, service, toasterService) {
        this.activatedRoute = activatedRoute;
        this.route = route;
        this.service = service;
        this.toasterService = toasterService;
        this.profile = {};
        this.userCollected = [];
        this.onSale = [];
        this.limit = 6;
        this.skip = 6;
        this.token = localStorage.getItem("Game-Token");
        this.activatedRoute.paramMap.subscribe((params) => {
            this.username = this.activatedRoute.snapshot.paramMap.get('userName');
            this.getProfile();
            this.getUserCollected();
            this.getCollectionOnSale();
        });
    }
    ngOnInit() {
        this.service.isOverlay = false;
    }
    getProfile() {
        this.service.postRequest("users/otheruserproffile", { username: this.username }).subscribe((suc) => {
            if (suc.status) {
                this.profile = suc.data;
            }
            else {
                this.profile = {};
            }
        });
    }
    getUserCollected() {
        this.service.postRequest("users/otherprofilecollect", { skip: 0, limit: this.limit, username: this.username }).subscribe((suc) => {
            if (suc.status) {
                this.userCollected = suc.data;
            }
        });
    }
    getCollectionOnSale() {
        this.service.postRequest("collection/onsaleothers", { skip: 0, limit: this.limit, username: this.username }).subscribe((suc) => {
            if (suc.status) {
                this.onSale = suc.data;
            }
        });
    }
}
UserprofileComponent.ɵfac = function UserprofileComponent_Factory(t) { return new (t || UserprofileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"])); };
UserprofileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserprofileComponent, selectors: [["app-userprofile"]], decls: 30, vars: 10, consts: [[1, "userprofile-section"], [1, "container"], [1, "row"], [1, "col-lg-12", "mb-5"], [1, "section-title", "text-center"], [1, "col-12", "user-profile-cnt"], [1, "cover-cnt"], [1, "profile-cnt", "d-flex", "justify-content-center"], [1, "profile-pic-cnt"], [3, "src"], [1, "copy-link"], [1, "col-12", "user-cnt"], ["id", "tab1"], ["tabHeading", ""], ["class", "col-md-12 col-lg-6 col-sm-12 col-xl-4", 4, "ngFor", "ngForOf"], ["class", "row", 4, "ngIf"], ["id", "tab2"], [1, "col-md-12", "col-lg-6", "col-sm-12", "col-xl-4"], [1, "act-cnt"], [1, "act-head", "d-flex", "align-items-center", "justify-content-between", "px-2", "mb-3"], [3, "click"], [1, "d-flex"], [1, "prof-pic-cnt", "mr-3"], [1, "mb-0"], [1, "mr-3"], [1, "prof-pic-cnt"], [1, "img-fluid", "w-100", 3, "src"], [1, "act-head"], [1, "border-bottom"], [1, "row", "mt-2"], [1, "col-sm-6", "col-md-6", "text-center", "col-lg-6", "col-xl-4", "border-right"], [1, "mb-2"], [1, "col-sm-6", "col-md-6", "text-center", "col-lg-6", "col-xl-4"], ["src", "assets/images/heart.png", 3, "click", 4, "ngIf"], ["src", "assets/images/heart-icon.png", 3, "click", 4, "ngIf"], ["class", "text-xl-center text-sm-center mb-2", 4, "ngIf"], ["src", "assets/images/heart.png", 3, "click"], ["src", "assets/images/heart-icon.png", 3, "click"], [1, "text-xl-center", "text-sm-center", "mb-2"], [1, "btn", "default-btn", "type-btn", 3, "click"]], template: function UserprofileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tabset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tab", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, UserprofileComponent_ng_template_20_Template, 1, 0, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, UserprofileComponent_div_22_Template, 44, 13, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, UserprofileComponent_div_23_Template, 2, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tab", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, UserprofileComponent_ng_template_25_Template, 1, 0, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, UserprofileComponent_div_27_Template, 44, 13, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, UserprofileComponent_div_28_Template, 2, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background:url('", ctx.profile.profilepicture ? ctx.profile.profilepicture : "assets/images/mkt-prof7.png", "');");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.profile.profilepicture ? ctx.profile.profilepicture : "assets/images/mkt-prof7.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.profile.username ? ctx.profile.username : "Unnamed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.profile.address ? ctx.profile.address : "0xd3a0...6833");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userCollected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userCollected.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.onSale);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.onSale.length == 0);
    } }, directives: [_common_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__["TabsetComponent"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__["TabDirective"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__["TabHeadingDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]], styles: [".userprofile-section[_ngcontent-%COMP%]   .section-title.text-center[_ngcontent-%COMP%] {\n    margin: 100px 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmZ0L3VzZXJwcm9maWxlL3VzZXJwcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9uZnQvdXNlcnByb2ZpbGUvdXNlcnByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VycHJvZmlsZS1zZWN0aW9uIC5zZWN0aW9uLXRpdGxlLnRleHQtY2VudGVyIHtcbiAgICBtYXJnaW46IDEwMHB4IDAgMDtcbn0gIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserprofileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-userprofile',
                templateUrl: './userprofile.component.html',
                styleUrls: ['./userprofile.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }, { type: src_app_common_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm2015/ngx-bootstrap-tabs.js");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _common_inner_header_inner_header_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/inner-header/inner-header.module */ "./src/app/common/inner-header/inner-header.module.ts");
/* harmony import */ var _common_inner_footer_inner_footer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/inner-footer/inner-footer.module */ "./src/app/common/inner-footer/inner-footer.module.ts");
/* harmony import */ var _defi_sidemenu_sidemenu_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./defi/sidemenu/sidemenu.module */ "./src/app/pages/defi/sidemenu/sidemenu.module.ts");
/* harmony import */ var _nft_market_detail_market_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nft/market-detail/market-detail.component */ "./src/app/pages/nft/market-detail/market-detail.component.ts");
/* harmony import */ var _nft_top_collectors_top_collectors_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nft/top-collectors/top-collectors.component */ "./src/app/pages/nft/top-collectors/top-collectors.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search/search.component */ "./src/app/pages/search/search.component.ts");
/* harmony import */ var _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mainpage/mainpage.component */ "./src/app/pages/mainpage/mainpage.component.ts");
/* harmony import */ var src_app_common_toaster_toaster_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/common/toaster/toaster.component */ "./src/app/common/toaster/toaster.component.ts");
/* harmony import */ var src_app_common_toaster_toaster_container_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/common/toaster/toaster-container.component */ "./src/app/common/toaster/toaster-container.component.ts");
/* harmony import */ var _nft_activity_activity_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./nft/activity/activity.component */ "./src/app/pages/nft/activity/activity.component.ts");
/* harmony import */ var _nft_feature_feature_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./nft/feature/feature.component */ "./src/app/pages/nft/feature/feature.component.ts");
/* harmony import */ var _nft_market_market_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./nft/market/market.component */ "./src/app/pages/nft/market/market.component.ts");
/* harmony import */ var _nft_history_history_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./nft/history/history.component */ "./src/app/pages/nft/history/history.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");












// import { FarmComponent } from './pages/defi/farm/farm.component';
// import { Staking2Component } from './defi/staking2/staking2.component';












const routes = [
    {
        path: '',
        component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
        children: [
            {
                path: "dashboard",
                loadChildren: () => Promise.all(/*! import() | defi-dashboard-dashboard-module */[__webpack_require__.e("default~defi-dashboard-dashboard-module~defi-farm-farm-module~defi-trade-trade-module~edit-profile-e~29f99eaf"), __webpack_require__.e("defi-dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./defi/dashboard/dashboard.module */ "./src/app/pages/defi/dashboard/dashboard.module.ts")).then((m) => m.DashboardModule),
            },
            {
                path: "farm",
                loadChildren: () => Promise.all(/*! import() | defi-farm-farm-module */[__webpack_require__.e("default~defi-dashboard-dashboard-module~defi-farm-farm-module~defi-trade-trade-module~edit-profile-e~29f99eaf"), __webpack_require__.e("default~defi-farm-farm-module~defi-trade-trade-module"), __webpack_require__.e("default~defi-farm-farm-module~defi-staking-staking-module"), __webpack_require__.e("defi-farm-farm-module")]).then(__webpack_require__.bind(null, /*! ./defi/farm/farm.module */ "./src/app/pages/defi/farm/farm.module.ts")).then((m) => m.FarmModule),
            },
            {
                path: "staking",
                loadChildren: () => Promise.all(/*! import() | defi-staking-staking-module */[__webpack_require__.e("default~defi-farm-farm-module~defi-staking-staking-module"), __webpack_require__.e("defi-staking-staking-module")]).then(__webpack_require__.bind(null, /*! ./defi/staking/staking.module */ "./src/app/pages/defi/staking/staking.module.ts")).then((m) => m.StakingModule),
            },
            {
                path: "trade",
                loadChildren: () => Promise.all(/*! import() | defi-trade-trade-module */[__webpack_require__.e("default~defi-dashboard-dashboard-module~defi-farm-farm-module~defi-trade-trade-module~edit-profile-e~29f99eaf"), __webpack_require__.e("default~defi-farm-farm-module~defi-trade-trade-module"), __webpack_require__.e("defi-trade-trade-module")]).then(__webpack_require__.bind(null, /*! ./defi/trade/trade.module */ "./src/app/pages/defi/trade/trade.module.ts")).then((m) => m.TradeModule),
            },
            {
                path: "reference-links",
                loadChildren: () => __webpack_require__.e(/*! import() | reference-links-reference-links-module */ "reference-links-reference-links-module").then(__webpack_require__.bind(null, /*! ./reference-links/reference-links.module */ "./src/app/pages/reference-links/reference-links.module.ts")).then((m) => m.ReferralModule),
            },
            {
                canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]],
                path: "collection",
                loadChildren: () => Promise.all(/*! import() | nft-collection-collection-module */[__webpack_require__.e("default~defi-dashboard-dashboard-module~defi-farm-farm-module~defi-trade-trade-module~edit-profile-e~29f99eaf"), __webpack_require__.e("nft-collection-collection-module")]).then(__webpack_require__.bind(null, /*! ./nft/collection/collection.module */ "./src/app/pages/nft/collection/collection.module.ts")).then((m) => m.CollectionModule),
            },
            {
                canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]],
                path: "create-item",
                loadChildren: () => Promise.all(/*! import() | nft-create-item-create-item-module */[__webpack_require__.e("default~defi-dashboard-dashboard-module~defi-farm-farm-module~defi-trade-trade-module~edit-profile-e~29f99eaf"), __webpack_require__.e("nft-create-item-create-item-module")]).then(__webpack_require__.bind(null, /*! ./nft/create-item/create-item.module */ "./src/app/pages/nft/create-item/create-item.module.ts")).then((m) => m.CreateItemModule),
            },
            {
                canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]],
                path: "items",
                loadChildren: () => Promise.all(/*! import() | nft-items-items-module */[__webpack_require__.e("default~defi-dashboard-dashboard-module~defi-farm-farm-module~defi-trade-trade-module~edit-profile-e~29f99eaf"), __webpack_require__.e("default~nft-items-items-module~nft-user-user-module"), __webpack_require__.e("nft-items-items-module")]).then(__webpack_require__.bind(null, /*! ./nft/items/items.module */ "./src/app/pages/nft/items/items.module.ts")).then((m) => m.ItemsModule),
            },
            {
                path: "profile",
                loadChildren: () => Promise.all(/*! import() | profile-profile-module */[__webpack_require__.e("default~defi-dashboard-dashboard-module~defi-farm-farm-module~defi-trade-trade-module~edit-profile-e~29f99eaf"), __webpack_require__.e("profile-profile-module")]).then(__webpack_require__.bind(null, /*! ./profile/profile.module */ "./src/app/pages/profile/profile.module.ts")).then((m) => m.ProfileModule),
            },
            {
                path: "edit-profile",
                loadChildren: () => Promise.all(/*! import() | edit-profile-edit-profile-module */[__webpack_require__.e("default~defi-dashboard-dashboard-module~defi-farm-farm-module~defi-trade-trade-module~edit-profile-e~29f99eaf"), __webpack_require__.e("edit-profile-edit-profile-module")]).then(__webpack_require__.bind(null, /*! ./edit-profile/edit-profile.module */ "./src/app/pages/edit-profile/edit-profile.module.ts")).then((m) => m.EditProfileModule),
            },
            {
                canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]],
                path: "settings",
                loadChildren: () => Promise.all(/*! import() | nft-settings-settings-module */[__webpack_require__.e("default~defi-dashboard-dashboard-module~defi-farm-farm-module~defi-trade-trade-module~edit-profile-e~29f99eaf"), __webpack_require__.e("nft-settings-settings-module")]).then(__webpack_require__.bind(null, /*! ./nft/settings/settings.module */ "./src/app/pages/nft/settings/settings.module.ts")).then((m) => m.SettingsModule),
            },
            {
                canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]],
                path: "import",
                loadChildren: () => Promise.all(/*! import() | nft-import-import-module */[__webpack_require__.e("default~defi-dashboard-dashboard-module~defi-farm-farm-module~defi-trade-trade-module~edit-profile-e~29f99eaf"), __webpack_require__.e("nft-import-import-module")]).then(__webpack_require__.bind(null, /*! ./nft/import/import.module */ "./src/app/pages/nft/import/import.module.ts")).then((m) => m.ImportModule),
            },
            {
                canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]],
                path: "user",
                loadChildren: () => Promise.all(/*! import() | nft-user-user-module */[__webpack_require__.e("default~defi-dashboard-dashboard-module~defi-farm-farm-module~defi-trade-trade-module~edit-profile-e~29f99eaf"), __webpack_require__.e("default~nft-items-items-module~nft-user-user-module"), __webpack_require__.e("nft-user-user-module")]).then(__webpack_require__.bind(null, /*! ./nft/user/user.module */ "./src/app/pages/nft/user/user.module.ts")).then((m) => m.UserModule),
            },
        ],
    },
    {
        path: 'market',
        component: _nft_market_market_component__WEBPACK_IMPORTED_MODULE_16__["MarketComponent"]
    },
    {
        path: 'history',
        component: _nft_history_history_component__WEBPACK_IMPORTED_MODULE_17__["HistoryComponent"]
    },
    {
        path: 'item-details',
        component: _nft_market_detail_market_detail_component__WEBPACK_IMPORTED_MODULE_8__["MarketDetailComponent"]
    },
    {
        path: 'activity',
        component: _nft_activity_activity_component__WEBPACK_IMPORTED_MODULE_14__["ActivityComponent"]
    },
    {
        path: 'features',
        component: _nft_feature_feature_component__WEBPACK_IMPORTED_MODULE_15__["FeatureComponent"]
    },
    {
        path: 'search',
        component: _search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"]
    },
];
class PagesModule {
}
PagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PagesModule });
PagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PagesModule_Factory(t) { return new (t || PagesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _common_inner_header_inner_header_module__WEBPACK_IMPORTED_MODULE_5__["InnerHeaderModule"],
            _common_inner_footer_inner_footer_module__WEBPACK_IMPORTED_MODULE_6__["InnerFooterModule"],
            _defi_sidemenu_sidemenu_module__WEBPACK_IMPORTED_MODULE_7__["SidemenuModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_20__["NgxPaginationModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_2__["TabsModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesModule, { declarations: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"], _nft_top_collectors_top_collectors_component__WEBPACK_IMPORTED_MODULE_9__["TopCollectorsComponent"], _nft_history_history_component__WEBPACK_IMPORTED_MODULE_17__["HistoryComponent"],
        _nft_market_detail_market_detail_component__WEBPACK_IMPORTED_MODULE_8__["MarketDetailComponent"], _nft_market_market_component__WEBPACK_IMPORTED_MODULE_16__["MarketComponent"], _nft_feature_feature_component__WEBPACK_IMPORTED_MODULE_15__["FeatureComponent"], _nft_activity_activity_component__WEBPACK_IMPORTED_MODULE_14__["ActivityComponent"], _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_11__["MainpageComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"], src_app_common_toaster_toaster_container_component__WEBPACK_IMPORTED_MODULE_13__["ToasterContainerComponent"], src_app_common_toaster_toaster_component__WEBPACK_IMPORTED_MODULE_12__["ToasterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _common_inner_header_inner_header_module__WEBPACK_IMPORTED_MODULE_5__["InnerHeaderModule"],
        _common_inner_footer_inner_footer_module__WEBPACK_IMPORTED_MODULE_6__["InnerFooterModule"],
        _defi_sidemenu_sidemenu_module__WEBPACK_IMPORTED_MODULE_7__["SidemenuModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_20__["NgxPaginationModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_2__["TabsModule"]], exports: [src_app_common_toaster_toaster_container_component__WEBPACK_IMPORTED_MODULE_13__["ToasterContainerComponent"],
        src_app_common_toaster_toaster_component__WEBPACK_IMPORTED_MODULE_12__["ToasterComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"], _nft_top_collectors_top_collectors_component__WEBPACK_IMPORTED_MODULE_9__["TopCollectorsComponent"], _nft_history_history_component__WEBPACK_IMPORTED_MODULE_17__["HistoryComponent"],
                    _nft_market_detail_market_detail_component__WEBPACK_IMPORTED_MODULE_8__["MarketDetailComponent"], _nft_market_market_component__WEBPACK_IMPORTED_MODULE_16__["MarketComponent"], _nft_feature_feature_component__WEBPACK_IMPORTED_MODULE_15__["FeatureComponent"], _nft_activity_activity_component__WEBPACK_IMPORTED_MODULE_14__["ActivityComponent"], _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_11__["MainpageComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"], src_app_common_toaster_toaster_container_component__WEBPACK_IMPORTED_MODULE_13__["ToasterContainerComponent"], src_app_common_toaster_toaster_component__WEBPACK_IMPORTED_MODULE_12__["ToasterComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _common_inner_header_inner_header_module__WEBPACK_IMPORTED_MODULE_5__["InnerHeaderModule"],
                    _common_inner_footer_inner_footer_module__WEBPACK_IMPORTED_MODULE_6__["InnerFooterModule"],
                    _defi_sidemenu_sidemenu_module__WEBPACK_IMPORTED_MODULE_7__["SidemenuModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_20__["NgxPaginationModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                    ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_2__["TabsModule"].forRoot()
                ],
                exports: [
                    src_app_common_toaster_toaster_container_component__WEBPACK_IMPORTED_MODULE_13__["ToasterContainerComponent"],
                    src_app_common_toaster_toaster_component__WEBPACK_IMPORTED_MODULE_12__["ToasterComponent"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/privacy/privacy.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/privacy/privacy.component.ts ***!
  \****************************************************/
/*! exports provided: PrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function() { return PrivacyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _common_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/header/header.component */ "./src/app/common/header/header.component.ts");
/* harmony import */ var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/footer/footer.component */ "./src/app/common/footer/footer.component.ts");




class PrivacyComponent {
    constructor() { }
    ngOnInit() {
    }
}
PrivacyComponent.ɵfac = function PrivacyComponent_Factory(t) { return new (t || PrivacyComponent)(); };
PrivacyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrivacyComponent, selectors: [["app-privacy"]], decls: 50, vars: 0, consts: [[1, "digital-art-sec"], [1, "middle-section", "privacy-policy"], [1, "container"], [1, "row"], [1, "col-dm-12", "col-sm-12", "col-lg-12", "mt-4", "col-xl-12"], [1, "section-title", "text-left", "mb-1"], [1, "font-18", "text-black", "fontweight-500", "mb-2"], [1, "font-14", "fontweight-400"], [1, "font-20", "text-black", "font-weight-bold", "mb-2"], [1, "font-14", "fontweight-400", "mb-2"]], template: function PrivacyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Ingressdefi Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Last Updated: December 22, 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h6", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Personal Information We Collect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h6", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "What We Do With Personal Information We Collect ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h6", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Cookkies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h6", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Your Rights");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h6", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Minors and Children");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h6", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Third-Party Links and Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "app-footer");
    } }, directives: [_common_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByaXZhY3kvcHJpdmFjeS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrivacyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-privacy',
                templateUrl: './privacy.component.html',
                styleUrls: ['./privacy.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/search/search.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/search/search.component.ts ***!
  \**************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _common_services_api_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../common/services/api/data.service */ "./src/app/common/services/api/data.service.ts");
/* harmony import */ var _common_inner_header_inner_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/inner-header/inner-header.component */ "./src/app/common/inner-header/inner-header.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _common_inner_footer_inner_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/inner-footer/inner-footer.component */ "./src/app/common/inner-footer/inner-footer.component.ts");







function SearchComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const nft_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", nft_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class SearchComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.limit = 9;
        this.skip = 0;
        this.account = this.dataService.metaDeatails.account;
        this.nftCollections = [];
        this.isDataLoading = false;
    }
    ngOnInit() {
        this.getCollections('');
    }
    getCollections(event) {
        this.nftCollections = [];
        this.isDataLoading = true;
        let searchText = event;
        this.dataService.postRequest("collection/getMarketssearch", { skip: this.skip, limit: this.limit, account: this.account, search: searchText }).subscribe((suc) => {
            let responseData = suc;
            this.isDataLoading = false;
            if (responseData.status) {
                this.nftCollections = responseData.data;
            }
            else {
                this.nftCollections = [];
            }
        });
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_services_api_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 17, vars: 2, consts: [[1, "full-pg-cnt"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "section-title", "text-center"], [1, "col-lg-12", "my-4"], ["type", "text", "name", "searchText", "placeholder", "Search for your favourite art", 1, "mst-search", 3, "ngModel", "ngModelChange"], [1, "section-title", "sm-title", "text-center"], [1, "col-lg-12", "mb-4"], ["class", "col-lg-4", 4, "ngFor", "ngForOf"], [1, "col-lg-4"], [1, "search-banner-img", 3, "src"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-inner-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_input_ngModelChange_9_listener($event) { return ctx.searchText = $event; })("ngModelChange", function SearchComponent_Template_input_ngModelChange_9_listener($event) { return ctx.getCollections($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Trending Tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SearchComponent_div_15_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-inner-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.nftCollections);
    } }, directives: [_common_inner_header_inner_header_component__WEBPACK_IMPORTED_MODULE_2__["InnerHeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _common_inner_footer_inner_footer_component__WEBPACK_IMPORTED_MODULE_5__["InnerFooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search',
                templateUrl: './search.component.html',
                styleUrls: ['./search.component.css']
            }]
    }], function () { return [{ type: _common_services_api_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, null); })();


/***/ }),

/***/ "./src/assets/files/127cre_abi.js":
/*!****************************************!*\
  !*** ./src/assets/files/127cre_abi.js ***!
  \****************************************/
/*! exports provided: NFT_721_Token_ABI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NFT_721_Token_ABI", function() { return NFT_721_Token_ABI; });
let NFT_721_Token_ABI =  [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"newURI","type":"string"}],"name":"baseURIUpdate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"safeMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"}];

/***/ }),

/***/ "./src/assets/files/20cre_abi.js":
/*!***************************************!*\
  !*** ./src/assets/files/20cre_abi.js ***!
  \***************************************/
/*! exports provided: NFT_20_Token_ABI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NFT_20_Token_ABI", function() { return NFT_20_Token_ABI; });
let NFT_20_Token_ABI =  [{"inputs":[{"internalType":"address","name":"buyerfeesigner","type":"address"},{"internalType":"address","name":"wethAddr","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"bool","name":"status","type":"bool"}],"name":"AllowToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newBeneficiary","type":"address"}],"name":"Beneficiary","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newBuyerFeeSigner","type":"address"}],"name":"BuyerFeeSigner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sellToken","type":"address"},{"indexed":true,"internalType":"uint256","name":"sellTokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"address","name":"buyToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"buyTokenId","type":"uint256"}],"name":"Cancel","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sellToken","type":"address"},{"indexed":true,"internalType":"uint256","name":"sellTokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"sellValue","type":"uint256"},{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"address","name":"buyToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"buyTokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"buyValue","type":"uint256"},{"indexed":false,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"orderType","type":"uint256"}],"name":"MatchOrder","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newRoyaltyFeeLimit","type":"uint256"}],"name":"RoyaltyFeeLimit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newMintableStore","type":"address"}],"name":"SetMintableStore","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"allowToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"address payable","name":"owner","type":"address"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"sellAsset","type":"tuple"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"buyAsset","type":"tuple"}],"internalType":"struct OrderBook.OrderKey","name":"key","type":"tuple"},{"internalType":"uint256","name":"selling","type":"uint256"},{"internalType":"uint256","name":"buying","type":"uint256"},{"internalType":"uint256","name":"sellerFee","type":"uint256"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"uint256","name":"expiryTime","type":"uint256"},{"internalType":"uint256","name":"orderType","type":"uint256"}],"internalType":"struct OrderBook.Order","name":"order","type":"tuple"},{"components":[{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"internalType":"struct OrderBook.Sig","name":"sig","type":"tuple"},{"components":[{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"internalType":"struct OrderBook.Sig","name":"buyerSig","type":"tuple"},{"components":[{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"internalType":"struct OrderBook.Sig","name":"buyerFeeSig","type":"tuple"},{"internalType":"address","name":"buyer","type":"address"},{"internalType":"uint256","name":"buyingAmount","type":"uint256"},{"components":[{"internalType":"address","name":"devAddress","type":"address"},{"internalType":"address","name":"royaltyReceipt","type":"address"},{"internalType":"uint256","name":"devFee","type":"uint256"},{"internalType":"uint256","name":"royaltyFee","type":"uint256"}],"internalType":"struct OrderState.feeStore","name":"fees","type":"tuple"}],"name":"bid","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"address payable","name":"owner","type":"address"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"sellAsset","type":"tuple"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"buyAsset","type":"tuple"}],"internalType":"struct OrderBook.OrderKey","name":"key","type":"tuple"},{"internalType":"uint256","name":"selling","type":"uint256"},{"internalType":"uint256","name":"buying","type":"uint256"},{"internalType":"uint256","name":"sellerFee","type":"uint256"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"uint256","name":"expiryTime","type":"uint256"},{"internalType":"uint256","name":"orderType","type":"uint256"}],"internalType":"struct OrderBook.Order","name":"order","type":"tuple"},{"components":[{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"internalType":"struct OrderBook.Sig","name":"sig","type":"tuple"},{"components":[{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"internalType":"struct OrderBook.Sig","name":"buyerFeeSig","type":"tuple"},{"components":[{"internalType":"address","name":"devAddress","type":"address"},{"internalType":"address","name":"royaltyReceipt","type":"address"},{"internalType":"uint256","name":"devFee","type":"uint256"},{"internalType":"uint256","name":"royaltyFee","type":"uint256"}],"internalType":"struct OrderState.feeStore","name":"fees","type":"tuple"}],"name":"buy","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyerFeeSigner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"address payable","name":"owner","type":"address"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"sellAsset","type":"tuple"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"buyAsset","type":"tuple"}],"internalType":"struct OrderBook.OrderKey","name":"key","type":"tuple"},{"internalType":"uint256","name":"selling","type":"uint256"},{"internalType":"uint256","name":"buying","type":"uint256"},{"internalType":"uint256","name":"sellerFee","type":"uint256"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"uint256","name":"expiryTime","type":"uint256"},{"internalType":"uint256","name":"orderType","type":"uint256"}],"internalType":"struct OrderBook.Order","name":"order","type":"tuple"}],"name":"cancel","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"completed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"address payable","name":"owner","type":"address"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"sellAsset","type":"tuple"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"buyAsset","type":"tuple"}],"internalType":"struct OrderBook.OrderKey","name":"key","type":"tuple"},{"internalType":"uint256","name":"selling","type":"uint256"},{"internalType":"uint256","name":"buying","type":"uint256"},{"internalType":"uint256","name":"sellerFee","type":"uint256"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"uint256","name":"expiryTime","type":"uint256"},{"internalType":"uint256","name":"orderType","type":"uint256"}],"internalType":"struct OrderBook.Order","name":"order","type":"tuple"},{"internalType":"address","name":"buyer","type":"address"},{"internalType":"uint256","name":"buyingAmount","type":"uint256"}],"name":"getBidOrderCompletedKey","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"address payable","name":"owner","type":"address"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"sellAsset","type":"tuple"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"buyAsset","type":"tuple"}],"internalType":"struct OrderBook.OrderKey","name":"key","type":"tuple"},{"internalType":"uint256","name":"selling","type":"uint256"},{"internalType":"uint256","name":"buying","type":"uint256"},{"internalType":"uint256","name":"sellerFee","type":"uint256"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"uint256","name":"expiryTime","type":"uint256"},{"internalType":"uint256","name":"orderType","type":"uint256"}],"internalType":"struct OrderBook.Order","name":"order","type":"tuple"}],"name":"getCompleted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"address payable","name":"owner","type":"address"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"sellAsset","type":"tuple"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"buyAsset","type":"tuple"}],"internalType":"struct OrderBook.OrderKey","name":"key","type":"tuple"},{"internalType":"uint256","name":"selling","type":"uint256"},{"internalType":"uint256","name":"buying","type":"uint256"},{"internalType":"uint256","name":"sellerFee","type":"uint256"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"uint256","name":"expiryTime","type":"uint256"},{"internalType":"uint256","name":"orderType","type":"uint256"}],"internalType":"struct OrderBook.Order","name":"order","type":"tuple"}],"name":"getCompletedKey","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"inCaseTokensGetStuck","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"address payable","name":"owner","type":"address"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"sellAsset","type":"tuple"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"buyAsset","type":"tuple"}],"internalType":"struct OrderBook.OrderKey","name":"key","type":"tuple"},{"internalType":"uint256","name":"selling","type":"uint256"},{"internalType":"uint256","name":"buying","type":"uint256"},{"internalType":"uint256","name":"sellerFee","type":"uint256"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"uint256","name":"expiryTime","type":"uint256"},{"internalType":"uint256","name":"orderType","type":"uint256"}],"internalType":"struct OrderBook.Order","name":"order","type":"tuple"},{"internalType":"address","name":"bidder","type":"address"},{"internalType":"uint256","name":"buyingAmount","type":"uint256"}],"name":"prepareBidOrderHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"address payable","name":"owner","type":"address"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"sellAsset","type":"tuple"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"buyAsset","type":"tuple"}],"internalType":"struct OrderBook.OrderKey","name":"key","type":"tuple"},{"internalType":"uint256","name":"selling","type":"uint256"},{"internalType":"uint256","name":"buying","type":"uint256"},{"internalType":"uint256","name":"sellerFee","type":"uint256"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"uint256","name":"expiryTime","type":"uint256"},{"internalType":"uint256","name":"orderType","type":"uint256"}],"internalType":"struct OrderBook.Order","name":"order","type":"tuple"},{"components":[{"internalType":"address","name":"devAddress","type":"address"},{"internalType":"address","name":"royaltyReceipt","type":"address"},{"internalType":"uint256","name":"devFee","type":"uint256"},{"internalType":"uint256","name":"royaltyFee","type":"uint256"}],"internalType":"struct OrderState.feeStore","name":"fees","type":"tuple"}],"name":"prepareBuyerFeeMessage","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"address payable","name":"owner","type":"address"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"sellAsset","type":"tuple"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"buyAsset","type":"tuple"}],"internalType":"struct OrderBook.OrderKey","name":"key","type":"tuple"},{"internalType":"uint256","name":"selling","type":"uint256"},{"internalType":"uint256","name":"buying","type":"uint256"},{"internalType":"uint256","name":"sellerFee","type":"uint256"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"uint256","name":"expiryTime","type":"uint256"},{"internalType":"uint256","name":"orderType","type":"uint256"}],"internalType":"struct OrderBook.Order","name":"order","type":"tuple"}],"name":"prepareOrderHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"royaltyFeeLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"address payable","name":"owner","type":"address"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"sellAsset","type":"tuple"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"buyAsset","type":"tuple"}],"internalType":"struct OrderBook.OrderKey","name":"key","type":"tuple"},{"internalType":"uint256","name":"selling","type":"uint256"},{"internalType":"uint256","name":"buying","type":"uint256"},{"internalType":"uint256","name":"sellerFee","type":"uint256"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"uint256","name":"expiryTime","type":"uint256"},{"internalType":"uint256","name":"orderType","type":"uint256"}],"internalType":"struct OrderBook.Order","name":"order","type":"tuple"},{"components":[{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"internalType":"struct OrderBook.Sig","name":"sig","type":"tuple"},{"components":[{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"internalType":"struct OrderBook.Sig","name":"buyerFeeSig","type":"tuple"},{"components":[{"internalType":"address","name":"devAddress","type":"address"},{"internalType":"address","name":"royaltyReceipt","type":"address"},{"internalType":"uint256","name":"devFee","type":"uint256"},{"internalType":"uint256","name":"royaltyFee","type":"uint256"}],"internalType":"struct OrderState.feeStore","name":"fees","type":"tuple"}],"name":"sell","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"newBuyerFeeSigner","type":"address"}],"name":"setBuyerFeeSigner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newRoyaltyFeeLimit","type":"uint256"}],"name":"setRoyaltyFeeLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"bool","name":"status","type":"bool"}],"name":"setTokenStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"hash","type":"bytes32"},{"components":[{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"internalType":"struct OrderBook.Sig","name":"sig","type":"tuple"}],"name":"toEthSignedMessageHash","outputs":[{"internalType":"address","name":"signer","type":"address"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"components":[{"internalType":"address","name":"devAddress","type":"address"},{"internalType":"address","name":"royaltyReceipt","type":"address"},{"internalType":"uint256","name":"devFee","type":"uint256"},{"internalType":"uint256","name":"royaltyFee","type":"uint256"}],"internalType":"struct OrderState.feeStore","name":"fees","type":"tuple"}],"name":"transferFeeView","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"address payable","name":"owner","type":"address"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"sellAsset","type":"tuple"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"buyAsset","type":"tuple"}],"internalType":"struct OrderBook.OrderKey","name":"key","type":"tuple"},{"internalType":"uint256","name":"selling","type":"uint256"},{"internalType":"uint256","name":"buying","type":"uint256"},{"internalType":"uint256","name":"sellerFee","type":"uint256"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"uint256","name":"expiryTime","type":"uint256"},{"internalType":"uint256","name":"orderType","type":"uint256"}],"internalType":"struct OrderBook.Order","name":"order","type":"tuple"},{"components":[{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"internalType":"struct OrderBook.Sig","name":"sig","type":"tuple"},{"internalType":"address","name":"bidder","type":"address"},{"internalType":"uint256","name":"buyingAmount","type":"uint256"}],"name":"validateBidOrderSignatureView","outputs":[],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"address payable","name":"owner","type":"address"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"sellAsset","type":"tuple"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"buyAsset","type":"tuple"}],"internalType":"struct OrderBook.OrderKey","name":"key","type":"tuple"},{"internalType":"uint256","name":"selling","type":"uint256"},{"internalType":"uint256","name":"buying","type":"uint256"},{"internalType":"uint256","name":"sellerFee","type":"uint256"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"uint256","name":"expiryTime","type":"uint256"},{"internalType":"uint256","name":"orderType","type":"uint256"}],"internalType":"struct OrderBook.Order","name":"order","type":"tuple"},{"components":[{"internalType":"address","name":"devAddress","type":"address"},{"internalType":"address","name":"royaltyReceipt","type":"address"},{"internalType":"uint256","name":"devFee","type":"uint256"},{"internalType":"uint256","name":"royaltyFee","type":"uint256"}],"internalType":"struct OrderState.feeStore","name":"fees","type":"tuple"},{"components":[{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"internalType":"struct OrderBook.Sig","name":"sig","type":"tuple"}],"name":"validateBuyerFeeSigView","outputs":[],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"address payable","name":"owner","type":"address"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"sellAsset","type":"tuple"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"buyAsset","type":"tuple"}],"internalType":"struct OrderBook.OrderKey","name":"key","type":"tuple"},{"internalType":"uint256","name":"selling","type":"uint256"},{"internalType":"uint256","name":"buying","type":"uint256"},{"internalType":"uint256","name":"sellerFee","type":"uint256"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"uint256","name":"expiryTime","type":"uint256"},{"internalType":"uint256","name":"orderType","type":"uint256"}],"internalType":"struct OrderBook.Order","name":"order","type":"tuple"},{"components":[{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"internalType":"struct OrderBook.Sig","name":"sig","type":"tuple"}],"name":"validateOrderSignatureView","outputs":[],"stateMutability":"view","type":"function"},{"inputs":[],"name":"weth","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}];

/***/ }),

/***/ "./src/assets/files/5511cre_abi.js":
/*!*****************************************!*\
  !*** ./src/assets/files/5511cre_abi.js ***!
  \*****************************************/
/*! exports provided: NFT_1155_Token_ABI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NFT_1155_Token_ABI", function() { return NFT_1155_Token_ABI; });
let NFT_1155_Token_ABI =  [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}];

/***/ }),

/***/ "./src/assets/files/contract.ts":
/*!**************************************!*\
  !*** ./src/assets/files/contract.ts ***!
  \**************************************/
/*! exports provided: ContractDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractDetails", function() { return ContractDetails; });
/*export let ContractDetails = {
  router_contract: "0xA89Dac5b9043213197A475768A4E83b0712B6846",
  WBNB_contract: "0x5Ae7C59DAa218da071A744977bb063fca4891Cb9",
  factory_contract: "0x951C0F2A903956B6b672fCa5F20c0E0B35e75658",
  master_stake_address: "0xC3f2acE63dbA1F3A2541Fef73Ee535C1F9c08687",
  syrup_Bar_token: "0xc0b110C8877e3415Aa6921c8f8cEe7d0c9C454b9",
  nft_exchange_token: "0xA074c1BeDaf6040Bc0DC96aa3573d88435B66350",
  nft_wbnb: "0xae13d989dac2f0debff460ac112a837c89baa7cd",
  nft_token: "0xae13d989dac2f0debff460ac112a837c89baa7cd",
  lottery_nft : "0x71E1B7FA90D53D040c3e8f9dD1A6988315332Dc0",
  governance_token_contract : "0x22565cDC68566ac2db4738D32d1b04a67E8cA07D",
  
  lending_pool_proxy : "0x35a22a9D5C6b8551778B4312ad7AD22C564928B0",
  lottery_main_proxy : "0x7D884875D2a04b787E5C337114B8E5F6171d6115",
  lending_data_provider : "0x330758f8C0BF6E5767AbB1f3229CB109dBA648BE",
};*/
let ContractDetails = {
    router_contract: "0xf4D8C9436E2fC980A6ce181829Bd6D61524b9839",
    WBNB_contract: "0x6C8e6da3F30D68F0887e696e9807fAf79490AAD5",
    factory_contract: "0x8DBc0893bdA06Be0ac81a13992DFC94De43DeacB",
    master_stake_address: "0xe7b4c10e2143D0e3a9fF014B5ff1038e79Cb3dc1",
    syrup_Bar_token: "0x006AAb69dD33C4Ed6570b6a273A05bd73b7f941A",
    nft_exchange_token: "0xd69A05D2Ea1De4d33893393F8dA45924A12245Ac",
    nft_wbnb: "0xd69A05D2Ea1De4d33893393F8dA45924A12245Ac",
    nft_token: "0xd69A05D2Ea1De4d33893393F8dA45924A12245Ac",
    lottery_nft: "0x71E1B7FA90D53D040c3e8f9dD1A6988315332Dc0",
    governance_token_contract: "0x22565cDC68566ac2db4738D32d1b04a67E8cA07D",
    lending_pool_proxy: "0x35a22a9D5C6b8551778B4312ad7AD22C564928B0",
    lottery_main_proxy: "0x7D884875D2a04b787E5C337114B8E5F6171d6115",
    lending_data_provider: "0x330758f8C0BF6E5767AbB1f3229CB109dBA648BE",
};
/**
 *
 *
 *
 *
 *
 *

Syrup Bar - https://bscscan.com/address/0x006AAb69dD33C4Ed6570b6a273A05bd73b7f941A#code
Router - https://bscscan.com/address/0xf4D8C9436E2fC980A6ce181829Bd6D61524b9839#code
Factory - https://bscscan.com/address/0x8DBc0893bdA06Be0ac81a13992DFC94De43DeacB#code
WBNB - https://bscscan.com/address/0x6C8e6da3F30D68F0887e696e9807fAf79490AAD5#code


As per the client confirmation, we have deployed the remaining contract in mainnet. Kindly find the contract details below.
Exchange - https://bscscan.com/address/0xd69A05D2Ea1De4d33893393F8dA45924A12245Ac#code
NFT - https://bscscan.com/address/0xdf4A83De5880653db3c1F74682ABe83e3228498e#code
Masterchef - https://bscscan.com/address/0xe7b4c10e2143D0e3a9fF014B5ff1038e79Cb3dc1#code

 */
/*Router Contract :- https://testnet.bscscan.com/address/0xA89Dac5b9043213197A475768A4E83b0712B6846#code
WBNB Contract :- https://testnet.bscscan.com/address/0x5Ae7C59DAa218da071A744977bb063fca4891Cb9#code
Factory Contract :- https://testnet.bscscan.com/address/0x951C0F2A903956B6b672fCa5F20c0E0B35e75658#readContract
MasterChef Contract :-  https://testnet.bscscan.com/address/0xC3f2acE63dbA1F3A2541Fef73Ee535C1F9c08687#code
Syrup Token Contract :- https://testnet.bscscan.com/address/0xc0b110C8877e3415Aa6921c8f8cEe7d0c9C454b9#code
NFT Token Contract :- https://testnet.bscscan.com/address/0x71E1B7FA90D53D040c3e8f9dD1A6988315332Dc0#code
Cake Token Contract :-  https://testnet.bscscan.com/address/0x22565cDC68566ac2db4738D32d1b04a67E8cA07D#code

Exchange Contract :-https://testnet.bscscan.com/address/0x13fe7de0b0f6f59b80489d31d38ebe4192d63a17#code*/ 


/***/ }),

/***/ "./src/assets/files/currencyType.ts":
/*!******************************************!*\
  !*** ./src/assets/files/currencyType.ts ***!
  \******************************************/
/*! exports provided: Sample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sample", function() { return Sample; });
let Sample = [
    { 'ERC20': { 'address': '0xasdfasdfasdfasdfasdfasdfasdfas', 'tokenid': 0, 'astype': '0' }, 'ERC721': { 'address': '0x76dbb555c3bb4d985e93567670093f68bf12bca8', 'tokenid': 1, 'astype': '1' }, 'WBNB': { 'address': '0xd69A05D2Ea1De4d33893393F8dA45924A12245Ac', 'tokenid': 2, 'astype': '2' } }
];


/***/ }),

/***/ "./src/assets/files/nft_abi.ts":
/*!*************************************!*\
  !*** ./src/assets/files/nft_abi.ts ***!
  \*************************************/
/*! exports provided: NftExchangeAbi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NftExchangeAbi", function() { return NftExchangeAbi; });
let NftExchangeAbi = [{ "inputs": [{ "internalType": "address", "name": "buyerfeesigner", "type": "address" }, { "internalType": "address", "name": "wethAddr", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "token", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "status", "type": "bool" }], "name": "AllowToken", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "newBeneficiary", "type": "address" }], "name": "Beneficiary", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "newbeneficiaryfee", "type": "uint256" }], "name": "BeneficiaryFee", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "newBuyerFeeSigner", "type": "address" }], "name": "BuyerFeeSigner", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "sellToken", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "sellTokenId", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": false, "internalType": "address", "name": "buyToken", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "buyTokenId", "type": "uint256" }], "name": "Cancel", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "sellToken", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "sellTokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "sellValue", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": false, "internalType": "address", "name": "buyToken", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "buyTokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "buyValue", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "buyer", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "orderType", "type": "uint256" }], "name": "MatchOrder", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "newRoyaltyFeeLimit", "type": "uint256" }], "name": "RoyaltyFeeLimit", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "newMintableStore", "type": "address" }], "name": "SetMintableStore", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "allowToken", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "components": [{ "components": [{ "internalType": "address payable", "name": "owner", "type": "address" }, { "components": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "enum OrderBook.AssetType", "name": "assetType", "type": "uint8" }], "internalType": "struct OrderBook.Asset", "name": "sellAsset", "type": "tuple" }, { "components": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "enum OrderBook.AssetType", "name": "assetType", "type": "uint8" }], "internalType": "struct OrderBook.Asset", "name": "buyAsset", "type": "tuple" }], "internalType": "struct OrderBook.OrderKey", "name": "key", "type": "tuple" }, { "internalType": "uint256", "name": "selling", "type": "uint256" }, { "internalType": "uint256", "name": "buying", "type": "uint256" }, { "internalType": "uint256", "name": "sellerFee", "type": "uint256" }, { "internalType": "uint256", "name": "salt", "type": "uint256" }, { "internalType": "uint256", "name": "expiryTime", "type": "uint256" }, { "internalType": "uint256", "name": "orderType", "type": "uint256" }], "internalType": "struct OrderBook.Order", "name": "order", "type": "tuple" }, { "components": [{ "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "internalType": "struct OrderBook.Sig", "name": "sig", "type": "tuple" }, { "components": [{ "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "internalType": "struct OrderBook.Sig", "name": "buyerSig", "type": "tuple" }, { "components": [{ "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "internalType": "struct OrderBook.Sig", "name": "buyerFeeSig", "type": "tuple" }, { "internalType": "address", "name": "buyer", "type": "address" }, { "internalType": "uint256", "name": "buyingAmount", "type": "uint256" }, { "components": [{ "internalType": "address", "name": "devAddress", "type": "address" }, { "internalType": "address", "name": "royaltyReceipt", "type": "address" }, { "internalType": "uint256", "name": "devFee", "type": "uint256" }, { "internalType": "uint256", "name": "royaltyFee", "type": "uint256" }], "internalType": "struct OrderState.feeStore", "name": "fees", "type": "tuple" }], "name": "bid", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "components": [{ "components": [{ "internalType": "address payable", "name": "owner", "type": "address" }, { "components": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "enum OrderBook.AssetType", "name": "assetType", "type": "uint8" }], "internalType": "struct OrderBook.Asset", "name": "sellAsset", "type": "tuple" }, { "components": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "enum OrderBook.AssetType", "name": "assetType", "type": "uint8" }], "internalType": "struct OrderBook.Asset", "name": "buyAsset", "type": "tuple" }], "internalType": "struct OrderBook.OrderKey", "name": "key", "type": "tuple" }, { "internalType": "uint256", "name": "selling", "type": "uint256" }, { "internalType": "uint256", "name": "buying", "type": "uint256" }, { "internalType": "uint256", "name": "sellerFee", "type": "uint256" }, { "internalType": "uint256", "name": "salt", "type": "uint256" }, { "internalType": "uint256", "name": "expiryTime", "type": "uint256" }, { "internalType": "uint256", "name": "orderType", "type": "uint256" }], "internalType": "struct OrderBook.Order", "name": "order", "type": "tuple" }, { "components": [{ "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "internalType": "struct OrderBook.Sig", "name": "sig", "type": "tuple" }, { "components": [{ "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "internalType": "struct OrderBook.Sig", "name": "buyerFeeSig", "type": "tuple" }, { "components": [{ "internalType": "address", "name": "devAddress", "type": "address" }, { "internalType": "address", "name": "royaltyReceipt", "type": "address" }, { "internalType": "uint256", "name": "devFee", "type": "uint256" }, { "internalType": "uint256", "name": "royaltyFee", "type": "uint256" }], "internalType": "struct OrderState.feeStore", "name": "fees", "type": "tuple" }], "name": "buy", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "buyerFeeSigner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "components": [{ "components": [{ "internalType": "address payable", "name": "owner", "type": "address" }, { "components": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "enum OrderBook.AssetType", "name": "assetType", "type": "uint8" }], "internalType": "struct OrderBook.Asset", "name": "sellAsset", "type": "tuple" }, { "components": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "enum OrderBook.AssetType", "name": "assetType", "type": "uint8" }], "internalType": "struct OrderBook.Asset", "name": "buyAsset", "type": "tuple" }], "internalType": "struct OrderBook.OrderKey", "name": "key", "type": "tuple" }, { "internalType": "uint256", "name": "selling", "type": "uint256" }, { "internalType": "uint256", "name": "buying", "type": "uint256" }, { "internalType": "uint256", "name": "sellerFee", "type": "uint256" }, { "internalType": "uint256", "name": "salt", "type": "uint256" }, { "internalType": "uint256", "name": "expiryTime", "type": "uint256" }, { "internalType": "uint256", "name": "orderType", "type": "uint256" }], "internalType": "struct OrderBook.Order", "name": "order", "type": "tuple" }], "name": "cancel", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "name": "completed", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "components": [{ "components": [{ "internalType": "address payable", "name": "owner", "type": "address" }, { "components": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "enum OrderBook.AssetType", "name": "assetType", "type": "uint8" }], "internalType": "struct OrderBook.Asset", "name": "sellAsset", "type": "tuple" }, { "components": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "enum OrderBook.AssetType", "name": "assetType", "type": "uint8" }], "internalType": "struct OrderBook.Asset", "name": "buyAsset", "type": "tuple" }], "internalType": "struct OrderBook.OrderKey", "name": "key", "type": "tuple" }, { "internalType": "uint256", "name": "selling", "type": "uint256" }, { "internalType": "uint256", "name": "buying", "type": "uint256" }, { "internalType": "uint256", "name": "sellerFee", "type": "uint256" }, { "internalType": "uint256", "name": "salt", "type": "uint256" }, { "internalType": "uint256", "name": "expiryTime", "type": "uint256" }, { "internalType": "uint256", "name": "orderType", "type": "uint256" }], "internalType": "struct OrderBook.Order", "name": "order", "type": "tuple" }, { "internalType": "address", "name": "buyer", "type": "address" }, { "internalType": "uint256", "name": "buyingAmount", "type": "uint256" }], "name": "getBidOrderCompletedKey", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "components": [{ "components": [{ "internalType": "address payable", "name": "owner", "type": "address" }, { "components": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "enum OrderBook.AssetType", "name": "assetType", "type": "uint8" }], "internalType": "struct OrderBook.Asset", "name": "sellAsset", "type": "tuple" }, { "components": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "enum OrderBook.AssetType", "name": "assetType", "type": "uint8" }], "internalType": "struct OrderBook.Asset", "name": "buyAsset", "type": "tuple" }], "internalType": "struct OrderBook.OrderKey", "name": "key", "type": "tuple" }, { "internalType": "uint256", "name": "selling", "type": "uint256" }, { "internalType": "uint256", "name": "buying", "type": "uint256" }, { "internalType": "uint256", "name": "sellerFee", "type": "uint256" }, { "internalType": "uint256", "name": "salt", "type": "uint256" }, { "internalType": "uint256", "name": "expiryTime", "type": "uint256" }, { "internalType": "uint256", "name": "orderType", "type": "uint256" }], "internalType": "struct OrderBook.Order", "name": "order", "type": "tuple" }], "name": "getCompleted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "components": [{ "components": [{ "internalType": "address payable", "name": "owner", "type": "address" }, { "components": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "enum OrderBook.AssetType", "name": "assetType", "type": "uint8" }], "internalType": "struct OrderBook.Asset", "name": "sellAsset", "type": "tuple" }, { "components": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "enum OrderBook.AssetType", "name": "assetType", "type": "uint8" }], "internalType": "struct OrderBook.Asset", "name": "buyAsset", "type": "tuple" }], "internalType": "struct OrderBook.OrderKey", "name": "key", "type": "tuple" }, { "internalType": "uint256", "name": "selling", "type": "uint256" }, { "internalType": "uint256", "name": "buying", "type": "uint256" }, { "internalType": "uint256", "name": "sellerFee", "type": "uint256" }, { "internalType": "uint256", "name": "salt", "type": "uint256" }, { "internalType": "uint256", "name": "expiryTime", "type": "uint256" }, { "internalType": "uint256", "name": "orderType", "type": "uint256" }], "internalType": "struct OrderBook.Order", "name": "order", "type": "tuple" }], "name": "getCompletedKey", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_token", "type": "address" }], "name": "inCaseTokensGetStuck", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "components": [{ "components": [{ "internalType": "address payable", "name": "owner", "type": "address" }, { "components": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "enum OrderBook.AssetType", "name": "assetType", "type": "uint8" }], "internalType": "struct OrderBook.Asset", "name": "sellAsset", "type": "tuple" }, { "components": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "enum OrderBook.AssetType", "name": "assetType", "type": "uint8" }], "internalType": "struct OrderBook.Asset", "name": "buyAsset", "type": "tuple" }], "internalType": "struct OrderBook.OrderKey", "name": "key", "type": "tuple" }, { "internalType": "uint256", "name": "selling", "type": "uint256" }, { "internalType": "uint256", "name": "buying", "type": "uint256" }, { "internalType": "uint256", "name": "sellerFee", "type": "uint256" }, { "internalType": "uint256", "name": "salt", "type": "uint256" }, { "internalType": "uint256", "name": "expiryTime", "type": "uint256" }, { "internalType": "uint256", "name": "orderType", "type": "uint256" }], "internalType": "struct OrderBook.Order", "name": "order", "type": "tuple" }, { "internalType": "address", "name": "bidder", "type": "address" }, { "internalType": "uint256", "name": "buyingAmount", "type": "uint256" }], "name": "prepareBidOrderHash", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "components": [{ "components": [{ "internalType": "address payable", "name": "owner", "type": "address" }, { "components": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "enum OrderBook.AssetType", "name": "assetType", "type": "uint8" }], "internalType": "struct OrderBook.Asset", "name": "sellAsset", "type": "tuple" }, { "components": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "enum OrderBook.AssetType", "name": "assetType", "type": "uint8" }], "internalType": "struct OrderBook.Asset", "name": "buyAsset", "type": "tuple" }], "internalType": "struct OrderBook.OrderKey", "name": "key", "type": "tuple" }, { "internalType": "uint256", "name": "selling", "type": "uint256" }, { "internalType": "uint256", "name": "buying", "type": "uint256" }, { "internalType": "uint256", "name": "sellerFee", "type": "uint256" }, { "internalType": "uint256", "name": "salt", "type": "uint256" }, { "internalType": "uint256", "name": "expiryTime", "type": "uint256" }, { "internalType": "uint256", "name": "orderType", "type": "uint256" }], "internalType": "struct OrderBook.Order", "name": "order", "type": "tuple" }, { "components": [{ "internalType": "address", "name": "devAddress", "type": "address" }, { "internalType": "address", "name": "royaltyReceipt", "type": "address" }, { "internalType": "uint256", "name": "devFee", "type": "uint256" }, { "internalType": "uint256", "name": "royaltyFee", "type": "uint256" }], "internalType": "struct OrderState.feeStore", "name": "fees", "type": "tuple" }], "name": "prepareBuyerFeeMessage", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "components": [{ "components": [{ "internalType": "address payable", "name": "owner", "type": "address" }, { "components": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "enum OrderBook.AssetType", "name": "assetType", "type": "uint8" }], "internalType": "struct OrderBook.Asset", "name": "sellAsset", "type": "tuple" }, { "components": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "enum OrderBook.AssetType", "name": "assetType", "type": "uint8" }], "internalType": "struct OrderBook.Asset", "name": "buyAsset", "type": "tuple" }], "internalType": "struct OrderBook.OrderKey", "name": "key", "type": "tuple" }, { "internalType": "uint256", "name": "selling", "type": "uint256" }, { "internalType": "uint256", "name": "buying", "type": "uint256" }, { "internalType": "uint256", "name": "sellerFee", "type": "uint256" }, { "internalType": "uint256", "name": "salt", "type": "uint256" }, { "internalType": "uint256", "name": "expiryTime", "type": "uint256" }, { "internalType": "uint256", "name": "orderType", "type": "uint256" }], "internalType": "struct OrderBook.Order", "name": "order", "type": "tuple" }], "name": "prepareOrderHash", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "royaltyFeeLimit", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "components": [{ "components": [{ "internalType": "address payable", "name": "owner", "type": "address" }, { "components": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "enum OrderBook.AssetType", "name": "assetType", "type": "uint8" }], "internalType": "struct OrderBook.Asset", "name": "sellAsset", "type": "tuple" }, { "components": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "enum OrderBook.AssetType", "name": "assetType", "type": "uint8" }], "internalType": "struct OrderBook.Asset", "name": "buyAsset", "type": "tuple" }], "internalType": "struct OrderBook.OrderKey", "name": "key", "type": "tuple" }, { "internalType": "uint256", "name": "selling", "type": "uint256" }, { "internalType": "uint256", "name": "buying", "type": "uint256" }, { "internalType": "uint256", "name": "sellerFee", "type": "uint256" }, { "internalType": "uint256", "name": "salt", "type": "uint256" }, { "internalType": "uint256", "name": "expiryTime", "type": "uint256" }, { "internalType": "uint256", "name": "orderType", "type": "uint256" }], "internalType": "struct OrderBook.Order", "name": "order", "type": "tuple" }, { "components": [{ "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "internalType": "struct OrderBook.Sig", "name": "sig", "type": "tuple" }, { "components": [{ "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "internalType": "struct OrderBook.Sig", "name": "buyerFeeSig", "type": "tuple" }, { "components": [{ "internalType": "address", "name": "devAddress", "type": "address" }, { "internalType": "address", "name": "royaltyReceipt", "type": "address" }, { "internalType": "uint256", "name": "devFee", "type": "uint256" }, { "internalType": "uint256", "name": "royaltyFee", "type": "uint256" }], "internalType": "struct OrderState.feeStore", "name": "fees", "type": "tuple" }], "name": "sell", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newBuyerFeeSigner", "type": "address" }], "name": "setBuyerFeeSigner", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "newRoyaltyFeeLimit", "type": "uint256" }], "name": "setRoyaltyFeeLimit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "bool", "name": "status", "type": "bool" }], "name": "setTokenStatus", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "hash", "type": "bytes32" }, { "components": [{ "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "internalType": "struct OrderBook.Sig", "name": "sig", "type": "tuple" }], "name": "toEthSignedMessageHash", "outputs": [{ "internalType": "address", "name": "signer", "type": "address" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "components": [{ "internalType": "address", "name": "devAddress", "type": "address" }, { "internalType": "address", "name": "royaltyReceipt", "type": "address" }, { "internalType": "uint256", "name": "devFee", "type": "uint256" }, { "internalType": "uint256", "name": "royaltyFee", "type": "uint256" }], "internalType": "struct OrderState.feeStore", "name": "fees", "type": "tuple" }], "name": "transferFeeView", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "components": [{ "components": [{ "internalType": "address payable", "name": "owner", "type": "address" }, { "components": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "enum OrderBook.AssetType", "name": "assetType", "type": "uint8" }], "internalType": "struct OrderBook.Asset", "name": "sellAsset", "type": "tuple" }, { "components": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "enum OrderBook.AssetType", "name": "assetType", "type": "uint8" }], "internalType": "struct OrderBook.Asset", "name": "buyAsset", "type": "tuple" }], "internalType": "struct OrderBook.OrderKey", "name": "key", "type": "tuple" }, { "internalType": "uint256", "name": "selling", "type": "uint256" }, { "internalType": "uint256", "name": "buying", "type": "uint256" }, { "internalType": "uint256", "name": "sellerFee", "type": "uint256" }, { "internalType": "uint256", "name": "salt", "type": "uint256" }, { "internalType": "uint256", "name": "expiryTime", "type": "uint256" }, { "internalType": "uint256", "name": "orderType", "type": "uint256" }], "internalType": "struct OrderBook.Order", "name": "order", "type": "tuple" }, { "components": [{ "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "internalType": "struct OrderBook.Sig", "name": "sig", "type": "tuple" }, { "internalType": "address", "name": "bidder", "type": "address" }, { "internalType": "uint256", "name": "buyingAmount", "type": "uint256" }], "name": "validateBidOrderSignatureView", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "components": [{ "components": [{ "internalType": "address payable", "name": "owner", "type": "address" }, { "components": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "enum OrderBook.AssetType", "name": "assetType", "type": "uint8" }], "internalType": "struct OrderBook.Asset", "name": "sellAsset", "type": "tuple" }, { "components": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "enum OrderBook.AssetType", "name": "assetType", "type": "uint8" }], "internalType": "struct OrderBook.Asset", "name": "buyAsset", "type": "tuple" }], "internalType": "struct OrderBook.OrderKey", "name": "key", "type": "tuple" }, { "internalType": "uint256", "name": "selling", "type": "uint256" }, { "internalType": "uint256", "name": "buying", "type": "uint256" }, { "internalType": "uint256", "name": "sellerFee", "type": "uint256" }, { "internalType": "uint256", "name": "salt", "type": "uint256" }, { "internalType": "uint256", "name": "expiryTime", "type": "uint256" }, { "internalType": "uint256", "name": "orderType", "type": "uint256" }], "internalType": "struct OrderBook.Order", "name": "order", "type": "tuple" }, { "components": [{ "internalType": "address", "name": "devAddress", "type": "address" }, { "internalType": "address", "name": "royaltyReceipt", "type": "address" }, { "internalType": "uint256", "name": "devFee", "type": "uint256" }, { "internalType": "uint256", "name": "royaltyFee", "type": "uint256" }], "internalType": "struct OrderState.feeStore", "name": "fees", "type": "tuple" }, { "components": [{ "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "internalType": "struct OrderBook.Sig", "name": "sig", "type": "tuple" }], "name": "validateBuyerFeeSigView", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "components": [{ "components": [{ "internalType": "address payable", "name": "owner", "type": "address" }, { "components": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "enum OrderBook.AssetType", "name": "assetType", "type": "uint8" }], "internalType": "struct OrderBook.Asset", "name": "sellAsset", "type": "tuple" }, { "components": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "enum OrderBook.AssetType", "name": "assetType", "type": "uint8" }], "internalType": "struct OrderBook.Asset", "name": "buyAsset", "type": "tuple" }], "internalType": "struct OrderBook.OrderKey", "name": "key", "type": "tuple" }, { "internalType": "uint256", "name": "selling", "type": "uint256" }, { "internalType": "uint256", "name": "buying", "type": "uint256" }, { "internalType": "uint256", "name": "sellerFee", "type": "uint256" }, { "internalType": "uint256", "name": "salt", "type": "uint256" }, { "internalType": "uint256", "name": "expiryTime", "type": "uint256" }, { "internalType": "uint256", "name": "orderType", "type": "uint256" }], "internalType": "struct OrderBook.Order", "name": "order", "type": "tuple" }, { "components": [{ "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "internalType": "struct OrderBook.Sig", "name": "sig", "type": "tuple" }], "name": "validateOrderSignatureView", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "weth", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }];


/***/ }),

/***/ "./src/assets/files/nft_bnb_abi.js":
/*!*****************************************!*\
  !*** ./src/assets/files/nft_bnb_abi.js ***!
  \*****************************************/
/*! exports provided: NFT_bnb_Token_ABI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NFT_bnb_Token_ABI", function() { return NFT_bnb_Token_ABI; });
let NFT_bnb_Token_ABI = [{"inputs":[{"internalType":"address","name":"buyerfeesigner","type":"address"},{"internalType":"address","name":"wethAddr","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"bool","name":"status","type":"bool"}],"name":"AllowToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newBeneficiary","type":"address"}],"name":"Beneficiary","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newbeneficiaryfee","type":"uint256"}],"name":"BeneficiaryFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newBuyerFeeSigner","type":"address"}],"name":"BuyerFeeSigner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sellToken","type":"address"},{"indexed":true,"internalType":"uint256","name":"sellTokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"address","name":"buyToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"buyTokenId","type":"uint256"}],"name":"Cancel","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sellToken","type":"address"},{"indexed":true,"internalType":"uint256","name":"sellTokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"sellValue","type":"uint256"},{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"address","name":"buyToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"buyTokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"buyValue","type":"uint256"},{"indexed":false,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"orderType","type":"uint256"}],"name":"MatchOrder","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newRoyaltyFeeLimit","type":"uint256"}],"name":"RoyaltyFeeLimit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newMintableStore","type":"address"}],"name":"SetMintableStore","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"allowToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"address payable","name":"owner","type":"address"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"sellAsset","type":"tuple"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"buyAsset","type":"tuple"}],"internalType":"struct OrderBook.OrderKey","name":"key","type":"tuple"},{"internalType":"uint256","name":"selling","type":"uint256"},{"internalType":"uint256","name":"buying","type":"uint256"},{"internalType":"uint256","name":"sellerFee","type":"uint256"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"uint256","name":"expiryTime","type":"uint256"},{"internalType":"uint256","name":"orderType","type":"uint256"}],"internalType":"struct OrderBook.Order","name":"order","type":"tuple"},{"components":[{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"internalType":"struct OrderBook.Sig","name":"sig","type":"tuple"},{"components":[{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"internalType":"struct OrderBook.Sig","name":"buyerSig","type":"tuple"},{"components":[{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"internalType":"struct OrderBook.Sig","name":"buyerFeeSig","type":"tuple"},{"internalType":"address","name":"buyer","type":"address"},{"internalType":"uint256","name":"buyingAmount","type":"uint256"},{"components":[{"internalType":"address","name":"devAddress","type":"address"},{"internalType":"address","name":"royaltyReceipt","type":"address"},{"internalType":"uint256","name":"devFee","type":"uint256"},{"internalType":"uint256","name":"royaltyFee","type":"uint256"}],"internalType":"struct OrderState.feeStore","name":"fees","type":"tuple"}],"name":"bid","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"address payable","name":"owner","type":"address"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"sellAsset","type":"tuple"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"buyAsset","type":"tuple"}],"internalType":"struct OrderBook.OrderKey","name":"key","type":"tuple"},{"internalType":"uint256","name":"selling","type":"uint256"},{"internalType":"uint256","name":"buying","type":"uint256"},{"internalType":"uint256","name":"sellerFee","type":"uint256"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"uint256","name":"expiryTime","type":"uint256"},{"internalType":"uint256","name":"orderType","type":"uint256"}],"internalType":"struct OrderBook.Order","name":"order","type":"tuple"},{"components":[{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"internalType":"struct OrderBook.Sig","name":"sig","type":"tuple"},{"components":[{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"internalType":"struct OrderBook.Sig","name":"buyerFeeSig","type":"tuple"},{"components":[{"internalType":"address","name":"devAddress","type":"address"},{"internalType":"address","name":"royaltyReceipt","type":"address"},{"internalType":"uint256","name":"devFee","type":"uint256"},{"internalType":"uint256","name":"royaltyFee","type":"uint256"}],"internalType":"struct OrderState.feeStore","name":"fees","type":"tuple"}],"name":"buy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"buyerFeeSigner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"address payable","name":"owner","type":"address"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"sellAsset","type":"tuple"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"buyAsset","type":"tuple"}],"internalType":"struct OrderBook.OrderKey","name":"key","type":"tuple"},{"internalType":"uint256","name":"selling","type":"uint256"},{"internalType":"uint256","name":"buying","type":"uint256"},{"internalType":"uint256","name":"sellerFee","type":"uint256"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"uint256","name":"expiryTime","type":"uint256"},{"internalType":"uint256","name":"orderType","type":"uint256"}],"internalType":"struct OrderBook.Order","name":"order","type":"tuple"}],"name":"cancel","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"completed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"address payable","name":"owner","type":"address"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"sellAsset","type":"tuple"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"buyAsset","type":"tuple"}],"internalType":"struct OrderBook.OrderKey","name":"key","type":"tuple"},{"internalType":"uint256","name":"selling","type":"uint256"},{"internalType":"uint256","name":"buying","type":"uint256"},{"internalType":"uint256","name":"sellerFee","type":"uint256"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"uint256","name":"expiryTime","type":"uint256"},{"internalType":"uint256","name":"orderType","type":"uint256"}],"internalType":"struct OrderBook.Order","name":"order","type":"tuple"},{"internalType":"address","name":"buyer","type":"address"},{"internalType":"uint256","name":"buyingAmount","type":"uint256"}],"name":"getBidOrderCompletedKey","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"address payable","name":"owner","type":"address"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"sellAsset","type":"tuple"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"buyAsset","type":"tuple"}],"internalType":"struct OrderBook.OrderKey","name":"key","type":"tuple"},{"internalType":"uint256","name":"selling","type":"uint256"},{"internalType":"uint256","name":"buying","type":"uint256"},{"internalType":"uint256","name":"sellerFee","type":"uint256"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"uint256","name":"expiryTime","type":"uint256"},{"internalType":"uint256","name":"orderType","type":"uint256"}],"internalType":"struct OrderBook.Order","name":"order","type":"tuple"}],"name":"getCompleted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"address payable","name":"owner","type":"address"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"sellAsset","type":"tuple"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"buyAsset","type":"tuple"}],"internalType":"struct OrderBook.OrderKey","name":"key","type":"tuple"},{"internalType":"uint256","name":"selling","type":"uint256"},{"internalType":"uint256","name":"buying","type":"uint256"},{"internalType":"uint256","name":"sellerFee","type":"uint256"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"uint256","name":"expiryTime","type":"uint256"},{"internalType":"uint256","name":"orderType","type":"uint256"}],"internalType":"struct OrderBook.Order","name":"order","type":"tuple"}],"name":"getCompletedKey","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"inCaseTokensGetStuck","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"address payable","name":"owner","type":"address"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"sellAsset","type":"tuple"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"buyAsset","type":"tuple"}],"internalType":"struct OrderBook.OrderKey","name":"key","type":"tuple"},{"internalType":"uint256","name":"selling","type":"uint256"},{"internalType":"uint256","name":"buying","type":"uint256"},{"internalType":"uint256","name":"sellerFee","type":"uint256"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"uint256","name":"expiryTime","type":"uint256"},{"internalType":"uint256","name":"orderType","type":"uint256"}],"internalType":"struct OrderBook.Order","name":"order","type":"tuple"},{"internalType":"address","name":"bidder","type":"address"},{"internalType":"uint256","name":"buyingAmount","type":"uint256"}],"name":"prepareBidOrderHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"address payable","name":"owner","type":"address"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"sellAsset","type":"tuple"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"buyAsset","type":"tuple"}],"internalType":"struct OrderBook.OrderKey","name":"key","type":"tuple"},{"internalType":"uint256","name":"selling","type":"uint256"},{"internalType":"uint256","name":"buying","type":"uint256"},{"internalType":"uint256","name":"sellerFee","type":"uint256"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"uint256","name":"expiryTime","type":"uint256"},{"internalType":"uint256","name":"orderType","type":"uint256"}],"internalType":"struct OrderBook.Order","name":"order","type":"tuple"},{"components":[{"internalType":"address","name":"devAddress","type":"address"},{"internalType":"address","name":"royaltyReceipt","type":"address"},{"internalType":"uint256","name":"devFee","type":"uint256"},{"internalType":"uint256","name":"royaltyFee","type":"uint256"}],"internalType":"struct OrderState.feeStore","name":"fees","type":"tuple"}],"name":"prepareBuyerFeeMessage","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"address payable","name":"owner","type":"address"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"sellAsset","type":"tuple"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"buyAsset","type":"tuple"}],"internalType":"struct OrderBook.OrderKey","name":"key","type":"tuple"},{"internalType":"uint256","name":"selling","type":"uint256"},{"internalType":"uint256","name":"buying","type":"uint256"},{"internalType":"uint256","name":"sellerFee","type":"uint256"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"uint256","name":"expiryTime","type":"uint256"},{"internalType":"uint256","name":"orderType","type":"uint256"}],"internalType":"struct OrderBook.Order","name":"order","type":"tuple"}],"name":"prepareOrderHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"royaltyFeeLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"address payable","name":"owner","type":"address"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"sellAsset","type":"tuple"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"buyAsset","type":"tuple"}],"internalType":"struct OrderBook.OrderKey","name":"key","type":"tuple"},{"internalType":"uint256","name":"selling","type":"uint256"},{"internalType":"uint256","name":"buying","type":"uint256"},{"internalType":"uint256","name":"sellerFee","type":"uint256"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"uint256","name":"expiryTime","type":"uint256"},{"internalType":"uint256","name":"orderType","type":"uint256"}],"internalType":"struct OrderBook.Order","name":"order","type":"tuple"},{"components":[{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"internalType":"struct OrderBook.Sig","name":"sig","type":"tuple"},{"components":[{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"internalType":"struct OrderBook.Sig","name":"buyerFeeSig","type":"tuple"},{"components":[{"internalType":"address","name":"devAddress","type":"address"},{"internalType":"address","name":"royaltyReceipt","type":"address"},{"internalType":"uint256","name":"devFee","type":"uint256"},{"internalType":"uint256","name":"royaltyFee","type":"uint256"}],"internalType":"struct OrderState.feeStore","name":"fees","type":"tuple"}],"name":"sell","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"newBuyerFeeSigner","type":"address"}],"name":"setBuyerFeeSigner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newRoyaltyFeeLimit","type":"uint256"}],"name":"setRoyaltyFeeLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"bool","name":"status","type":"bool"}],"name":"setTokenStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"hash","type":"bytes32"},{"components":[{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"internalType":"struct OrderBook.Sig","name":"sig","type":"tuple"}],"name":"toEthSignedMessageHash","outputs":[{"internalType":"address","name":"signer","type":"address"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"components":[{"internalType":"address","name":"devAddress","type":"address"},{"internalType":"address","name":"royaltyReceipt","type":"address"},{"internalType":"uint256","name":"devFee","type":"uint256"},{"internalType":"uint256","name":"royaltyFee","type":"uint256"}],"internalType":"struct OrderState.feeStore","name":"fees","type":"tuple"}],"name":"transferFeeView","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"address payable","name":"owner","type":"address"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"sellAsset","type":"tuple"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"buyAsset","type":"tuple"}],"internalType":"struct OrderBook.OrderKey","name":"key","type":"tuple"},{"internalType":"uint256","name":"selling","type":"uint256"},{"internalType":"uint256","name":"buying","type":"uint256"},{"internalType":"uint256","name":"sellerFee","type":"uint256"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"uint256","name":"expiryTime","type":"uint256"},{"internalType":"uint256","name":"orderType","type":"uint256"}],"internalType":"struct OrderBook.Order","name":"order","type":"tuple"},{"components":[{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"internalType":"struct OrderBook.Sig","name":"sig","type":"tuple"},{"internalType":"address","name":"bidder","type":"address"},{"internalType":"uint256","name":"buyingAmount","type":"uint256"}],"name":"validateBidOrderSignatureView","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"address payable","name":"owner","type":"address"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"sellAsset","type":"tuple"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"buyAsset","type":"tuple"}],"internalType":"struct OrderBook.OrderKey","name":"key","type":"tuple"},{"internalType":"uint256","name":"selling","type":"uint256"},{"internalType":"uint256","name":"buying","type":"uint256"},{"internalType":"uint256","name":"sellerFee","type":"uint256"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"uint256","name":"expiryTime","type":"uint256"},{"internalType":"uint256","name":"orderType","type":"uint256"}],"internalType":"struct OrderBook.Order","name":"order","type":"tuple"},{"components":[{"internalType":"address","name":"devAddress","type":"address"},{"internalType":"address","name":"royaltyReceipt","type":"address"},{"internalType":"uint256","name":"devFee","type":"uint256"},{"internalType":"uint256","name":"royaltyFee","type":"uint256"}],"internalType":"struct OrderState.feeStore","name":"fees","type":"tuple"},{"components":[{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"internalType":"struct OrderBook.Sig","name":"sig","type":"tuple"}],"name":"validateBuyerFeeSigView","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"pure","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"address payable","name":"owner","type":"address"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"sellAsset","type":"tuple"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"enum OrderBook.AssetType","name":"assetType","type":"uint8"}],"internalType":"struct OrderBook.Asset","name":"buyAsset","type":"tuple"}],"internalType":"struct OrderBook.OrderKey","name":"key","type":"tuple"},{"internalType":"uint256","name":"selling","type":"uint256"},{"internalType":"uint256","name":"buying","type":"uint256"},{"internalType":"uint256","name":"sellerFee","type":"uint256"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"uint256","name":"expiryTime","type":"uint256"},{"internalType":"uint256","name":"orderType","type":"uint256"}],"internalType":"struct OrderBook.Order","name":"order","type":"tuple"},{"components":[{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"internalType":"struct OrderBook.Sig","name":"sig","type":"tuple"}],"name":"validateOrderSignatureView","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"weth","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}];

/***/ }),

/***/ "./src/assets/files/pair_abi.ts":
/*!**************************************!*\
  !*** ./src/assets/files/pair_abi.ts ***!
  \**************************************/
/*! exports provided: PairAbi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PairAbi", function() { return PairAbi; });
let PairAbi = [{ "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount0", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount1", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }], "name": "Burn", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount0", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount1", "type": "uint256" }], "name": "Mint", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount0In", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount1In", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount0Out", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount1Out", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }], "name": "Swap", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint112", "name": "reserve0", "type": "uint112" }, { "indexed": false, "internalType": "uint112", "name": "reserve1", "type": "uint112" }], "name": "Sync", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "constant": true, "inputs": [], "name": "DOMAIN_SEPARATOR", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "MINIMUM_LIQUIDITY", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "PERMIT_TYPEHASH", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "to", "type": "address" }], "name": "burn", "outputs": [{ "internalType": "uint256", "name": "amount0", "type": "uint256" }, { "internalType": "uint256", "name": "amount1", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "factory", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getReserves", "outputs": [{ "internalType": "uint112", "name": "_reserve0", "type": "uint112" }, { "internalType": "uint112", "name": "_reserve1", "type": "uint112" }, { "internalType": "uint32", "name": "_blockTimestampLast", "type": "uint32" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "_token0", "type": "address" }, { "internalType": "address", "name": "_token1", "type": "address" }], "name": "initialize", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "kLast", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "to", "type": "address" }], "name": "mint", "outputs": [{ "internalType": "uint256", "name": "liquidity", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "nonces", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "permit", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "price0CumulativeLast", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "price1CumulativeLast", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "to", "type": "address" }], "name": "skim", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "amount0Out", "type": "uint256" }, { "internalType": "uint256", "name": "amount1Out", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "swap", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "sync", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "token0", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "token1", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }];


/***/ }),

/***/ "./src/assets/files/stake_abi.ts":
/*!***************************************!*\
  !*** ./src/assets/files/stake_abi.ts ***!
  \***************************************/
/*! exports provided: StakeAbi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StakeAbi", function() { return StakeAbi; });
let StakeAbi = [{ "inputs": [{ "internalType": "contract IngressDefiToken", "name": "_IngressDefi", "type": "address" }, { "internalType": "contract SyrupBar", "name": "_syrup", "type": "address" }, { "internalType": "address", "name": "_devaddr", "type": "address" }, { "internalType": "uint256", "name": "_IngressDefiPerBlock", "type": "uint256" }, { "internalType": "uint256", "name": "_startBlock", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "pid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Deposit", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "pid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "EmergencyWithdraw", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "pid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Withdraw", "type": "event" }, { "inputs": [], "name": "BONUS_MULTIPLIER", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "IngressDefi", "outputs": [{ "internalType": "contract IngressDefiToken", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "IngressDefiPerBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_allocPoint", "type": "uint256" }, { "internalType": "contract IBEP20", "name": "_lpToken", "type": "address" }, { "internalType": "bool", "name": "_withUpdate", "type": "bool" }], "name": "add", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "deposit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_devaddr", "type": "address" }], "name": "dev", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "devaddr", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }], "name": "emergencyWithdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "enterStaking", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_from", "type": "uint256" }, { "internalType": "uint256", "name": "_to", "type": "uint256" }], "name": "getMultiplier", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "leaveStaking", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "massUpdatePools", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }], "name": "migrate", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "migrator", "outputs": [{ "internalType": "contract IMigratorChef", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }, { "internalType": "address", "name": "_user", "type": "address" }], "name": "pendingIngressDefi", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "poolInfo", "outputs": [{ "internalType": "contract IBEP20", "name": "lpToken", "type": "address" }, { "internalType": "uint256", "name": "allocPoint", "type": "uint256" }, { "internalType": "uint256", "name": "lastRewardBlock", "type": "uint256" }, { "internalType": "uint256", "name": "accIngressDefiPerShare", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "poolLength", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }, { "internalType": "uint256", "name": "_allocPoint", "type": "uint256" }, { "internalType": "bool", "name": "_withUpdate", "type": "bool" }], "name": "set", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "contract IMigratorChef", "name": "_migrator", "type": "address" }], "name": "setMigrator", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "startBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "syrup", "outputs": [{ "internalType": "contract SyrupBar", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalAllocPoint", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "multiplierNumber", "type": "uint256" }], "name": "updateMultiplier", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }], "name": "updatePool", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "address", "name": "", "type": "address" }], "name": "userInfo", "outputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "rewardDebt", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];


/***/ }),

/***/ "./src/assets/files/token_abi.ts":
/*!***************************************!*\
  !*** ./src/assets/files/token_abi.ts ***!
  \***************************************/
/*! exports provided: TokenAbi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenAbi", function() { return TokenAbi; });
let TokenAbi = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Paused", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Unpaused", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "newURI", "type": "string" }], "name": "baseURIUpdate", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "paused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }], "name": "safeMint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenOfOwnerByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "unpause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'https://api.ingressdefi.com/',
    chainid: 56,
    projectName: "IngressDefi",
    tokenName: "IngressDefi",
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\aida\Desktop\livesource\front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map