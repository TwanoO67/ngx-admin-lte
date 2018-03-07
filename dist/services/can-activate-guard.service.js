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
var router_1 = require("@angular/router");
var user_service_1 = require("./user.service");
var CanActivateGuard = /** @class */ (function () {
    function CanActivateGuard(router, userService) {
        var _this = this;
        this.router = router;
        this.userService = userService;
        this.connected = false;
        this.userService.getCurrent().subscribe(function (user) {
            _this.connected = user.connected;
        });
    }
    CanActivateGuard.prototype.canActivate = function () {
        // test here if you user is logged
        if (!this.connected) {
            this.router.navigate(['login']);
        }
        return this.connected;
    };
    CanActivateGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router,
            user_service_1.UserService])
    ], CanActivateGuard);
    return CanActivateGuard;
}());
exports.CanActivateGuard = CanActivateGuard;
//# sourceMappingURL=can-activate-guard.service.js.map