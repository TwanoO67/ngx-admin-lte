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
var LogoService = (function () {
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
        __metadata('design:paramtypes', [])
    ], LogoService);
    return LogoService;
})();
exports.LogoService = LogoService;
//# sourceMappingURL=logo.service.js.map