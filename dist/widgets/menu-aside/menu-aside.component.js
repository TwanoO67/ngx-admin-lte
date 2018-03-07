"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("../../models/user");
var router_1 = require("@angular/router");
var user_service_1 = require("../../services/user.service");
var MenuAsideComponent = /** @class */ (function () {
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
        __metadata("design:type", Array)
    ], MenuAsideComponent.prototype, "links", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], MenuAsideComponent.prototype, "display_menu_user", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], MenuAsideComponent.prototype, "display_menu_search", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], MenuAsideComponent.prototype, "menu_title", void 0);
    MenuAsideComponent = __decorate([
        core_1.Component({
            selector: 'app-menu-aside',
            styleUrls: ['./menu-aside.component.css'],
            templateUrl: './menu-aside.component.html'
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
    ], MenuAsideComponent);
    return MenuAsideComponent;
}());
exports.MenuAsideComponent = MenuAsideComponent;
//# sourceMappingURL=menu-aside.component.js.map