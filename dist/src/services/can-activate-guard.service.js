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
var user_service_1 = require('./user.service');
var CanActivateGuard = (function () {
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
        __metadata('design:paramtypes', [(typeof Router !== 'undefined' && Router) || Object, UserService])
    ], CanActivateGuard);
    return CanActivateGuard;
})();
exports.CanActivateGuard = CanActivateGuard;
//# sourceMappingURL=can-activate-guard.service.js.map