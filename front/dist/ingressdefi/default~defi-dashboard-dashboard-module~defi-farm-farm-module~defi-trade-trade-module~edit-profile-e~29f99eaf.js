(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~defi-dashboard-dashboard-module~defi-farm-farm-module~defi-trade-trade-module~edit-profile-e~29f99eaf"],{

/***/ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js ***!
  \*******************************************************************************************/
/*! exports provided: TooltipConfig, TooltipContainerComponent, TooltipDirective, TooltipModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipConfig", function() { return TooltipConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipContainerComponent", function() { return TooltipContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDirective", function() { return TooltipDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipModule", function() { return TooltipModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/utils/fesm2015/ngx-bootstrap-utils.js");
/* harmony import */ var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/positioning */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/positioning/fesm2015/ngx-bootstrap-positioning.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/component-loader */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/component-loader/fesm2015/ngx-bootstrap-component-loader.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








/** Default values provider for tooltip */




const _c0 = ["*"];
class TooltipConfig {
    constructor() {
        /** sets disable adaptive position */
        this.adaptivePosition = true;
        /** tooltip placement, supported positions: 'top', 'bottom', 'left', 'right' */
        this.placement = 'top';
        /** array of event names which triggers tooltip opening */
        this.triggers = 'hover focus';
        /** delay before showing the tooltip */
        this.delay = 0;
    }
}
TooltipConfig.ɵfac = function TooltipConfig_Factory(t) { return new (t || TooltipConfig)(); };
TooltipConfig.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function TooltipConfig_Factory() { return new TooltipConfig(); }, token: TooltipConfig, providedIn: "root" });

class TooltipContainerComponent {
    constructor(config) {
        Object.assign(this, config);
    }
    get _bsVersions() {
        return Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["getBsVer"])();
    }
    ngAfterViewInit() {
        this.classMap = { in: false, fade: false };
        if (this.placement) {
            if (this._bsVersions.isBs5) {
                this.placement = ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__["PlacementForBs5"][this.placement];
            }
            this.classMap[this.placement] = true;
        }
        this.classMap[`tooltip-${this.placement}`] = true;
        this.classMap.in = true;
        if (this.animation) {
            this.classMap.fade = true;
        }
        if (this.containerClass) {
            this.classMap[this.containerClass] = true;
        }
    }
}
TooltipContainerComponent.ɵfac = function TooltipContainerComponent_Factory(t) { return new (t || TooltipContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TooltipConfig)); };
TooltipContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TooltipContainerComponent, selectors: [["bs-tooltip-container"]], hostAttrs: ["role", "tooltip"], hostVars: 7, hostBindings: function TooltipContainerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("tooltip in tooltip-" + ctx.placement + " " + "bs-tooltip-" + ctx.placement + " " + ctx.placement + " " + ctx.containerClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", !ctx._bsVersions.isBs3)("bs3", ctx._bsVersions.isBs3);
    } }, ngContentSelectors: _c0, decls: 3, vars: 0, consts: [[1, "tooltip-arrow", "arrow"], [1, "tooltip-inner"]], template: function TooltipContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".tooltip[_nghost-%COMP%] {\n      display: block;\n      pointer-events: none;\n    }\n    .bs3.tooltip.top[_nghost-%COMP%] > .arrow[_ngcontent-%COMP%] {\n      margin-left: -2px;\n    }\n    .bs3.tooltip.bottom[_nghost-%COMP%] {\n      margin-top: 0px;\n    }\n    .bs3.bs-tooltip-left[_nghost-%COMP%], .bs3.bs-tooltip-right[_nghost-%COMP%]{\n      margin: 0px;\n    }\n    .bs3.bs-tooltip-right[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs3.bs-tooltip-left[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%] {\n      margin: .3rem 0;\n    }"], changeDetection: 0 });
TooltipContainerComponent.ctorParameters = () => [
    { type: TooltipConfig }
];

let id = 0;
class TooltipDirective {
    constructor(_viewContainerRef, cis, config, _elementRef, _renderer, _positionService) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._positionService = _positionService;
        this.tooltipId = id++;
        /** sets disable adaptive position */
        this.adaptivePosition = true;
        /** Fired when tooltip content changes */
        this.tooltipChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Placement of a tooltip. Accepts: "top", "bottom", "left", "right"
         */
        this.placement = 'top';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */
        this.triggers = 'hover focus';
        /**
         * Css class for tooltip container
         */
        this.containerClass = '';
        /**
         * Allows to disable tooltip
         */
        this.isDisabled = false;
        /**
         * Delay before showing the tooltip
         */
        this.delay = 0;
        /** @deprecated - removed, will be added to configuration */
        this.tooltipAnimation = true;
        /** @deprecated */
        this.tooltipFadeDuration = 150;
        /** @deprecated */
        this.tooltipStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._tooltip = cis
            .createLoader(this._elementRef, _viewContainerRef, this._renderer)
            .provide({ provide: TooltipConfig, useValue: config });
        Object.assign(this, config);
        this.onShown = this._tooltip.onShown;
        this.onHidden = this._tooltip.onHidden;
    }
    /**
     * Returns whether or not the tooltip is currently being shown
     */
    get isOpen() {
        return this._tooltip.isShown;
    }
    set isOpen(value) {
        if (value) {
            this.show();
        }
        else {
            this.hide();
        }
    }
    /** @deprecated - please use `tooltip` instead */
    set htmlContent(value) {
        Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipHtml was deprecated, please use `tooltip` instead');
        this.tooltip = value;
    }
    /** @deprecated - please use `placement` instead */
    // eslint-disable-next-line @angular-eslint/no-input-rename
    set _placement(value) {
        Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipPlacement was deprecated, please use `placement` instead');
        this.placement = value;
    }
    /** @deprecated - please use `isOpen` instead */
    // eslint-disable-next-line @angular-eslint/no-input-rename
    set _isOpen(value) {
        Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipIsOpen was deprecated, please use `isOpen` instead');
        this.isOpen = value;
    }
    get _isOpen() {
        Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipIsOpen was deprecated, please use `isOpen` instead');
        return this.isOpen;
    }
    /** @deprecated - please use `isDisabled` instead */
    // eslint-disable-next-line @angular-eslint/no-input-rename
    set _enable(value) {
        Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipEnable was deprecated, please use `isDisabled` instead');
        this.isDisabled = !value;
    }
    get _enable() {
        Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipEnable was deprecated, please use `isDisabled` instead');
        return this.isDisabled;
    }
    /** @deprecated - please use `container="body"` instead */
    // eslint-disable-next-line @angular-eslint/no-input-rename
    set _appendToBody(value) {
        Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipAppendToBody was deprecated, please use `container="body"` instead');
        this.container = value ? 'body' : this.container;
    }
    get _appendToBody() {
        Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipAppendToBody was deprecated, please use `container="body"` instead');
        return this.container === 'body';
    }
    /** @deprecated - will replaced with customClass */
    // eslint-disable-next-line @angular-eslint/no-input-rename
    set _popupClass(value) {
        Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipClass deprecated');
    }
    /** @deprecated - removed */
    // eslint-disable-next-line @angular-eslint/no-input-rename
    set _tooltipContext(value) {
        Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipContext deprecated');
    }
    /** @deprecated */
    // eslint-disable-next-line @angular-eslint/no-input-rename
    set _tooltipPopupDelay(value) {
        Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipPopupDelay is deprecated, use `delay` instead');
        this.delay = value;
    }
    /** @deprecated -  please use `triggers` instead */
    get _tooltipTrigger() {
        Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipTrigger was deprecated, please use `triggers` instead');
        return this.triggers;
    }
    set _tooltipTrigger(value) {
        Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipTrigger was deprecated, please use `triggers` instead');
        this.triggers = (value || '').toString();
    }
    ngOnInit() {
        this._tooltip.listen({
            triggers: this.triggers,
            show: () => this.show()
        });
        this.tooltipChange.subscribe((value) => {
            if (!value) {
                this._tooltip.hide();
            }
        });
        this.onShown.subscribe(() => {
            this.setAriaDescribedBy();
        });
        this.onHidden.subscribe(() => {
            this.setAriaDescribedBy();
        });
    }
    setAriaDescribedBy() {
        this._ariaDescribedby = this.isOpen ? `tooltip-${this.tooltipId}` : void 0;
        if (this._ariaDescribedby) {
            this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ariaDescribedby);
        }
        else {
            this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');
        }
    }
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    toggle() {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    }
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    show() {
        this._positionService.setOptions({
            modifiers: {
                flip: {
                    enabled: this.adaptivePosition
                },
                preventOverflow: {
                    enabled: this.adaptivePosition,
                    boundariesElement: this.boundariesElement || 'scrollParent'
                }
            }
        });
        if (this.isOpen ||
            this.isDisabled ||
            this._delayTimeoutId ||
            !this.tooltip) {
            return;
        }
        const showTooltip = () => {
            if (this._delayTimeoutId) {
                this._delayTimeoutId = undefined;
            }
            this._tooltip
                .attach(TooltipContainerComponent)
                .to(this.container)
                .position({ attachment: this.placement })
                .show({
                content: this.tooltip,
                placement: this.placement,
                containerClass: this.containerClass,
                id: `tooltip-${this.tooltipId}`
            });
        };
        const cancelDelayedTooltipShowing = () => {
            if (this._tooltipCancelShowFn) {
                this._tooltipCancelShowFn();
            }
        };
        if (this.delay) {
            if (this._delaySubscription) {
                this._delaySubscription.unsubscribe();
            }
            this._delaySubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(this.delay).subscribe(() => {
                showTooltip();
                cancelDelayedTooltipShowing();
            });
            if (this.triggers) {
                Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["parseTriggers"])(this.triggers)
                    .forEach((trigger) => {
                    if (!trigger.close) {
                        return;
                    }
                    this._tooltipCancelShowFn = this._renderer.listen(this._elementRef.nativeElement, trigger.close, () => {
                        var _a;
                        (_a = this._delaySubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
                        cancelDelayedTooltipShowing();
                    });
                });
            }
        }
        else {
            showTooltip();
        }
    }
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    hide() {
        var _a;
        if (this._delayTimeoutId) {
            clearTimeout(this._delayTimeoutId);
            this._delayTimeoutId = undefined;
        }
        if (!this._tooltip.isShown) {
            return;
        }
        if ((_a = this._tooltip.instance) === null || _a === void 0 ? void 0 : _a.classMap) {
            this._tooltip.instance.classMap.in = false;
        }
        setTimeout(() => {
            this._tooltip.hide();
        }, this.tooltipFadeDuration);
    }
    ngOnDestroy() {
        this._tooltip.dispose();
        this.tooltipChange.unsubscribe();
        if (this._delaySubscription) {
            this._delaySubscription.unsubscribe();
        }
        this.onShown.unsubscribe();
        this.onHidden.unsubscribe();
    }
}
TooltipDirective.ɵfac = function TooltipDirective_Factory(t) { return new (t || TooltipDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_4__["ComponentLoaderFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TooltipConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__["PositioningService"])); };
TooltipDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TooltipDirective, selectors: [["", "tooltip", ""], ["", "tooltipHtml", ""]], inputs: { adaptivePosition: "adaptivePosition", placement: "placement", triggers: "triggers", containerClass: "containerClass", isDisabled: "isDisabled", delay: "delay", tooltipAnimation: "tooltipAnimation", tooltipFadeDuration: "tooltipFadeDuration", isOpen: "isOpen", htmlContent: ["tooltipHtml", "htmlContent"], tooltip: "tooltip", _placement: ["tooltipPlacement", "_placement"], _isOpen: ["tooltipIsOpen", "_isOpen"], _enable: ["tooltipEnable", "_enable"], _appendToBody: ["tooltipAppendToBody", "_appendToBody"], container: "container", _popupClass: ["tooltipClass", "_popupClass"], _tooltipContext: ["tooltipContext", "_tooltipContext"], _tooltipPopupDelay: ["tooltipPopupDelay", "_tooltipPopupDelay"], _tooltipTrigger: ["tooltipTrigger", "_tooltipTrigger"], boundariesElement: "boundariesElement" }, outputs: { tooltipChange: "tooltipChange", tooltipStateChanged: "tooltipStateChanged", onShown: "onShown", onHidden: "onHidden" }, exportAs: ["bs-tooltip"] });
TooltipDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
    { type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_4__["ComponentLoaderFactory"] },
    { type: TooltipConfig },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__["PositioningService"] }
];
TooltipDirective.propDecorators = {
    adaptivePosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    tooltip: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    tooltipChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    placement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    triggers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    container: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    containerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    boundariesElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    delay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onShown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onHidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    htmlContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipHtml',] }],
    _placement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipPlacement',] }],
    _isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipIsOpen',] }],
    _enable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipEnable',] }],
    _appendToBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipAppendToBody',] }],
    tooltipAnimation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    _popupClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipClass',] }],
    _tooltipContext: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipContext',] }],
    _tooltipPopupDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipPopupDelay',] }],
    tooltipFadeDuration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    _tooltipTrigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipTrigger',] }],
    tooltipStateChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["OnChange"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
], TooltipDirective.prototype, "tooltip", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'bs-tooltip-container',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                host: {
                    '[class]': '"tooltip in tooltip-" + placement + " " + "bs-tooltip-" + placement + " " + placement + " " + containerClass',
                    '[class.show]': '!_bsVersions.isBs3',
                    '[class.bs3]': '_bsVersions.isBs3',
                    '[attr.id]': 'this.id',
                    role: 'tooltip'
                },
                template: `
    <div class="tooltip-arrow arrow"></div>
    <div class="tooltip-inner"><ng-content></ng-content></div>
    `,
                styles: [`
    :host.tooltip {
      display: block;
      pointer-events: none;
    }
    :host.bs3.tooltip.top>.arrow {
      margin-left: -2px;
    }
    :host.bs3.tooltip.bottom {
      margin-top: 0px;
    }
    :host.bs3.bs-tooltip-left, :host.bs3.bs-tooltip-right{
      margin: 0px;
    }
    :host.bs3.bs-tooltip-right .arrow, :host.bs3.bs-tooltip-left .arrow {
      margin: .3rem 0;
    }
  `]
            }]
    }], function () { return [{ type: TooltipConfig }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[tooltip], [tooltipHtml]',
                exportAs: 'bs-tooltip'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }, { type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_4__["ComponentLoaderFactory"] }, { type: TooltipConfig }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__["PositioningService"] }]; }, { adaptivePosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], tooltipChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], placement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], triggers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], containerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], delay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], tooltipAnimation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], tooltipFadeDuration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], tooltipStateChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onShown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onHidden: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], isOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], htmlContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['tooltipHtml']
        }], tooltip: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], _placement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['tooltipPlacement']
        }], _isOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['tooltipIsOpen']
        }], _enable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['tooltipEnable']
        }], _appendToBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['tooltipAppendToBody']
        }], container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], _popupClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['tooltipClass']
        }], _tooltipContext: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['tooltipContext']
        }], _tooltipPopupDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['tooltipPopupDelay']
        }], _tooltipTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['tooltipTrigger']
        }], boundariesElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class TooltipModule {
    static forRoot() {
        return {
            ngModule: TooltipModule,
            providers: [ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_4__["ComponentLoaderFactory"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__["PositioningService"]]
        };
    }
}
TooltipModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TooltipModule });
TooltipModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TooltipModule_Factory(t) { return new (t || TooltipModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TooltipModule, { declarations: function () { return [TooltipDirective, TooltipContainerComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]]; }, exports: function () { return [TooltipDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]],
                declarations: [TooltipDirective, TooltipContainerComponent],
                exports: [TooltipDirective],
                entryComponents: [TooltipContainerComponent]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-bootstrap-tooltip.js.map

/***/ }),

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


/***/ })

}]);
//# sourceMappingURL=default~defi-dashboard-dashboard-module~defi-farm-farm-module~defi-trade-trade-module~edit-profile-e~29f99eaf.js.map