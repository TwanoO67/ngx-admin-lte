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
var FooterService = (function () {
    function FooterService() {
        this.current = new Rx_1.ReplaySubject(1);
        this.default = {
            right_part: 'Anything you want',
            left_part: "<strong>Copyright &copy; 2016 <a href=\"#\" routerLink=\"/\">Company X</a>.\n    \t</strong> All rights reserved."
        };
    }
    /* Redefine the footer html */
    FooterService.prototype.setCurrent = function (footer) {
        this.current.next(footer);
    };
    FooterService.prototype.getCurrent = function () {
        return this.current;
    };
    FooterService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], FooterService);
    return FooterService;
})();
exports.FooterService = FooterService;
//# sourceMappingURL=footer.service.js.map