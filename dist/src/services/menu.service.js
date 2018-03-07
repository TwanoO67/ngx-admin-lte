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
var Rx_1 = require('rxjs/Rx');
var MenuService = (function () {
    function MenuService(router) {
        this.router = router;
        this.current = new Rx_1.ReplaySubject(1);
    }
    MenuService.prototype.setCurrent = function (menu) {
        this.current.next(menu);
    };
    MenuService.prototype.getCurrent = function () {
        return this.current;
    };
    MenuService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof Router !== 'undefined' && Router) || Object])
    ], MenuService);
    return MenuService;
})();
exports.MenuService = MenuService;
//# sourceMappingURL=menu.service.js.map