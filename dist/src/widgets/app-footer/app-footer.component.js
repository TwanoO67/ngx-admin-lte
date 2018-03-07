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
var footer_service_1 = require('../../services/footer.service');
var AppFooterComponent = (function () {
    function AppFooterComponent(footerServ) {
        var _this = this;
        this.footerServ = footerServ;
        this.footer = {};
        this.footerServ.getCurrent().subscribe(function (footer) { return _this.footer = footer; });
    }
    AppFooterComponent = __decorate([
        core_1.Component({
            selector: 'app-footer',
            styleUrls: ['./app-footer.component.css'],
            templateUrl: './app-footer.component.html'
        }), 
        __metadata('design:paramtypes', [FooterService])
    ], AppFooterComponent);
    return AppFooterComponent;
})();
exports.AppFooterComponent = AppFooterComponent;
//# sourceMappingURL=app-footer.component.js.map