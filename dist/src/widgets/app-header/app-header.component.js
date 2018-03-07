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
var user_service_1 = require('../../services/user.service');
var control_sidebar_service_1 = require('../../services/control-sidebar.service');
var AppHeaderComponent = (function () {
    function AppHeaderComponent(userService, sidebarService) {
        this.userService = userService;
        this.sidebarService = sidebarService;
        this.display_messages = true;
        this.display_notifications = true;
        this.display_tasks = true;
        this.display_user = true;
        this.display_control = true;
        this.display_logout = false;
        this.header_components = [];
    }
    AppHeaderComponent.prototype.logout = function () {
        this.userService.logout();
    };
    AppHeaderComponent.prototype.toggleSidebar = function () {
        this.sidebarService.toggle();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AppHeaderComponent.prototype, "display_messages");
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AppHeaderComponent.prototype, "display_notifications");
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AppHeaderComponent.prototype, "display_tasks");
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AppHeaderComponent.prototype, "display_user");
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AppHeaderComponent.prototype, "display_control");
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AppHeaderComponent.prototype, "display_logout");
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AppHeaderComponent.prototype, "header_components");
    AppHeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            styleUrls: ['./app-header.component.css'],
            templateUrl: './app-header.component.html'
        }), 
        __metadata('design:paramtypes', [UserService, ControlSidebarService])
    ], AppHeaderComponent);
    return AppHeaderComponent;
})();
exports.AppHeaderComponent = AppHeaderComponent;
//# sourceMappingURL=app-header.component.js.map