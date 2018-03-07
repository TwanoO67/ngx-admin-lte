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
var ReplaySubject_1 = require('rxjs/ReplaySubject');
var BreadcrumbService = (function () {
    function BreadcrumbService() {
        this.initialData = {
            description: '',
            display: false,
            header: '',
            levels: [
                {
                    icon: 'clock-o',
                    link: ['/'],
                    title: 'Default'
                }
            ]
        };
        this.current = new ReplaySubject_1.ReplaySubject(1);
        this.clear();
    }
    BreadcrumbService.prototype.setCurrent = function (data) {
        this.current.next(data);
    };
    BreadcrumbService.prototype.getCurrent = function () {
        return this.current;
    };
    BreadcrumbService.prototype.clear = function () {
        this.setCurrent(this.initialData);
    };
    BreadcrumbService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], BreadcrumbService);
    return BreadcrumbService;
})();
exports.BreadcrumbService = BreadcrumbService;
//# sourceMappingURL=breadcrumb.service.js.map