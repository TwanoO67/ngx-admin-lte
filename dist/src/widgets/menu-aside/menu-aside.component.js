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
var MenuAsideComponent = (function () {
    function MenuAsideComponent(userServ, router) {
        var _this = this;
        this.userServ = userServ;
        this.router = router;
        this.currentUser = new user_1.User();
        this.links = [];
        this.display_menu_user = true;
        this.display_menu_search = true;
        this.menu_title = ''; // deprecated
        // getting the current url
        this.router.events.subscribe(function (evt) { return _this.currentUrl = evt.url; });
        this.userServ.getCurrent().subscribe(function (user) { return _this.currentUser = user; });
    }
    MenuAsideComponent.prototype.ngOnInit = function () { };
    MenuAsideComponent.prototype.ngOnChanges = function (changes) {
        if (this.menu_title !== '') {
            console.log('menu_title is deprecated please use "header" in your menuService links configuration');
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], MenuAsideComponent.prototype, "links");
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MenuAsideComponent.prototype, "display_menu_user");
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MenuAsideComponent.prototype, "display_menu_search");
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MenuAsideComponent.prototype, "menu_title");
    MenuAsideComponent = __decorate([
        core_1.Component({
            selector: 'app-menu-aside',
            styleUrls: ['./menu-aside.component.css'],
            templateUrl: './menu-aside.component.html'
        }), 
        __metadata('design:paramtypes', [UserService, (typeof Router !== 'undefined' && Router) || Object])
    ], MenuAsideComponent);
    return MenuAsideComponent;
})();
exports.MenuAsideComponent = MenuAsideComponent;
//# sourceMappingURL=menu-aside.component.js.map