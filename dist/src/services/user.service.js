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
var user_1 = require('../models/user');
var core_1 = require('@angular/core');
var Rx_1 = require('rxjs/Rx');
var UserService = (function () {
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
        __metadata('design:paramtypes', [(typeof Router !== 'undefined' && Router) || Object])
    ], UserService);
    return UserService;
})();
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map