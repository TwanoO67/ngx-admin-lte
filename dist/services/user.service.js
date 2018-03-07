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
var user_1 = require("../models/user");
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var router_1 = require("@angular/router");
var UserService = /** @class */ (function () {
    function UserService(router) {
        this.router = router;
        this.current = new Rx_1.ReplaySubject(1);
    }
    UserService.prototype.setCurrent = function (user) {
        this.current.next(user);
    };
    UserService.prototype.getCurrent = function () {
        return this.current;
    };
    UserService.prototype.logout = function () {
        if (this.logoutAction) {
            this.logoutAction();
        }
        else {
            var user = new user_1.User();
            user.connected = false;
            this.setCurrent(user);
            this.router.navigate(['login']);
        }
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map