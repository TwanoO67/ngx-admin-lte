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
var logo_service_1 = require("../../services/logo.service");
var LogoComponent = /** @class */ (function () {
    function LogoComponent(logoServ) {
        this.logoServ = logoServ;
        this.hide = '';
    }
    LogoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.logoServ.getCurrent().subscribe(function (logo) {
            _this.logo = logo;
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], LogoComponent.prototype, "hide");
    LogoComponent = __decorate([
        core_1.Component({
            selector: 'app-logo',
            templateUrl: './logo.component.html'
        }),
        __metadata("design:paramtypes", [logo_service_1.LogoService])
    ], LogoComponent);
    return LogoComponent;
}());
exports.LogoComponent = LogoComponent;
//# sourceMappingURL=logo.component.js.map