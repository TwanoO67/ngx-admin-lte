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
var ControlSidebarService = (function () {
    function ControlSidebarService() {
        this.current = new Rx_1.ReplaySubject(1);
        this.default = false;
        this.current_value = false;
        this.current.next(this.default);
    }
    ControlSidebarService.prototype.getCurrent = function () {
        return this.current;
    };
    ControlSidebarService.prototype.open = function () {
        this.current_value = true;
        this.current.next(this.current_value);
    };
    ControlSidebarService.prototype.close = function () {
        this.current_value = false;
        this.current.next(this.current_value);
    };
    ControlSidebarService.prototype.toggle = function () {
        this.current_value = !this.current_value;
        this.current.next(this.current_value);
    };
    ControlSidebarService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ControlSidebarService);
    return ControlSidebarService;
})();
exports.ControlSidebarService = ControlSidebarService;
//# sourceMappingURL=control-sidebar.service.js.map