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
var Rx_1 = require("rxjs/Rx");
var LogoService = /** @class */ (function () {
    function LogoService() {
        this.current = new Rx_1.ReplaySubject(1);
        // default logo
        this.logo = {
            html_mini: '<b>A</b>LT',
            html_lg: '<b>Admin</b>LTE'
        };
        this.setCurrent(this.logo);
    }
    /* Redefine the logo */
    LogoService.prototype.setCurrent = function (logo) {
        if (logo.small || logo.big) {
            console.log('NgxAdminLTE: LogoService setCurrent: small and big are now deprecated in logo, use html_mini and html_lg');
        }
        this.current.next(logo);
    };
    LogoService.prototype.getCurrent = function () {
        return this.current;
    };
    LogoService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], LogoService);
    return LogoService;
}());
exports.LogoService = LogoService;
//# sourceMappingURL=logo.service.js.map