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
exports.__esModule = true;
var core_1 = require("@angular/core");
var LayoutLoginComponent = /** @class */ (function () {
    function LayoutLoginComponent() {
    }
    LayoutLoginComponent.prototype.ngOnInit = function () {
        window.dispatchEvent(new Event('resize'));
        document.body.className = 'hold-transition login-page';
    };
    LayoutLoginComponent.prototype.ngOnDestroy = function () {
        document.body.className = '';
    };
    LayoutLoginComponent = __decorate([
        core_1.Component({
            selector: 'app-layout-login',
            styles: ['./login.css'],
            templateUrl: './login.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], LayoutLoginComponent);
    return LayoutLoginComponent;
}());
exports.LayoutLoginComponent = LayoutLoginComponent;
//# sourceMappingURL=login.component.js.map