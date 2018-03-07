"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/**
 * Component to dynamicly load other component
 */
var ComponentLoaderComponent = /** @class */ (function () {
    /**
     * Component initialisation
     * @param  {ComponentFactoryResolver} _factoryResolver
     */
    function ComponentLoaderComponent(_factoryResolver) {
        this._factoryResolver = _factoryResolver;
        /**
         * class of the component to load
         * @type {Class}
         */
        this.class_component = null;
        /**
         * data to pass to component
         * @type {Class}
         */
        this.data = null;
        /**
         * component reference
         * @type {number|string}
         */
        this.componentRef = null;
    }
    /**
     * Lifecycle hook OnInit
     */
    ComponentLoaderComponent.prototype.ngOnInit = function () {
        // Build the child component
        var factory = this._factoryResolver.resolveComponentFactory(this.class_component);
        this.componentRef = this.viewContainerRef.createComponent(factory);
        // then give some data
        this.setComponentData(this.data);
    };
    /**
     * Lifecycle hook OnChanges, on modification of data send it to the child
     * @param  {any} changes new data changes (and old ones, in same object)
     */
    ComponentLoaderComponent.prototype.ngOnChanges = function (changes) {
        this.setComponentData(changes);
    };
    /**
     * Send data to the inner component
     * @param  {any} changes Data to send
     */
    ComponentLoaderComponent.prototype.setComponentData = function (changes) {
        if (this.componentRef) {
            // send data to component
            Object.assign(this.componentRef.instance, changes);
            // trigger component ngOnChange
            this.componentRef.instance.ngOnChanges(changes);
        }
    };
    /**
     * Lifecycle hook OnDestroy
     * @return {[type]} [description]
     */
    ComponentLoaderComponent.prototype.ngOnDestroy = function () {
        if (this.componentRef) {
            this.componentRef.destroy();
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ComponentLoaderComponent.prototype, "class_component", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ComponentLoaderComponent.prototype, "data", void 0);
    __decorate([
        core_1.ViewChild('destination', { read: core_1.ViewContainerRef }),
        __metadata("design:type", Object)
    ], ComponentLoaderComponent.prototype, "viewContainerRef", void 0);
    ComponentLoaderComponent = __decorate([
        core_1.Component({
            selector: 'app-component-loader',
            encapsulation: core_1.ViewEncapsulation.None,
            template: '<ng-container #destination ></ng-container>'
        }),
        __metadata("design:paramtypes", [core_1.ComponentFactoryResolver])
    ], ComponentLoaderComponent);
    return ComponentLoaderComponent;
}());
exports.ComponentLoaderComponent = ComponentLoaderComponent;
//# sourceMappingURL=component-loader.component.js.map