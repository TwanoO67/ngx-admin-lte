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
var logo_service_1 = require('../../services/logo.service');
var LogoComponent = (function () {
    function LogoComponent(logoServ) {
        this.logoServ = logoServ;
        this.hide = '';
    }
    LogoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.logoServ.getCurrent().subscribe(function (logo) {
            _this.logo = logo;
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], LogoComponent.prototype, "hide");
    LogoComponent = __decorate([
        core_1.Component({
            selector: 'app-logo',
            templateUrl: './logo.component.html'
        }), 
        __metadata('design:paramtypes', [LogoService])
    ], LogoComponent);
    return LogoComponent;
})();
exports.LogoComponent = LogoComponent;
//# sourceMappingURL=logo.component.js.map