var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var user_1 = require('../../models/user');
var user_service_1 = require('../../services/user.service');
var UserBoxComponent = (function () {
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
        __metadata('design:paramtypes', [UserService, (typeof Router !== 'undefined' && Router) || Object])
    ], UserBoxComponent);
    return UserBoxComponent;
})();
exports.UserBoxComponent = UserBoxComponent;
//# sourceMappingURL=user-box.component.js.map