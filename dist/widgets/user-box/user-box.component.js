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
var user_1 = require("../../models/user");
var user_service_1 = require("../../services/user.service");
var router_1 = require("@angular/router");
var UserBoxComponent = /** @class */ (function () {
    function UserBoxComponent(userServ, router) {
        var _this = this;
        this.userServ = userServ;
        this.router = router;
        // default user, only an example, please use the userService to modify
        this.currentUser = new user_1.User({
            avatarUrl: 'assets/img/user2-160x160.jpg',
            email: 'weber.antoine@outlook.com',
            firstname: 'WEBER',
            lastname: 'Antoine'
        });
        this.logout = function () {
            _this.userServ.logout();
        };
        // se connecter au modif du user courant
        this.userServ.getCurrent().subscribe(function (user) { return _this.currentUser = user; });
    }
    UserBoxComponent.prototype.ngOnInit = function () {
        // TODO
    };
    UserBoxComponent = __decorate([
        core_1.Component({
            /* tslint:disable */
            selector: '.userBox',
            /* tslint:enable */
            styleUrls: ['./user-box.component.css'],
            templateUrl: './user-box.component.html'
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
    ], UserBoxComponent);
    return UserBoxComponent;
}());
exports.UserBoxComponent = UserBoxComponent;
//# sourceMappingURL=user-box.component.js.map