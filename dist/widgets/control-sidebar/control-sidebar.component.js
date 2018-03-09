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
exports.__esModule = true;
var core_1 = require("@angular/core");
var control_sidebar_service_1 = require("../../services/control-sidebar.service");
var ControlSidebarComponent = /** @class */ (function () {
    function ControlSidebarComponent(_sidebar) {
        this._sidebar = _sidebar;
    }
    ControlSidebarComponent = __decorate([
        core_1.Component({
            selector: 'app-control-sidebar',
            styleUrls: ['./control-sidebar.component.css'],
            templateUrl: './control-sidebar.component.html'
        }),
        __metadata("design:paramtypes", [control_sidebar_service_1.ControlSidebarService])
    ], ControlSidebarComponent);
    return ControlSidebarComponent;
}());
exports.ControlSidebarComponent = ControlSidebarComponent;
//# sourceMappingURL=control-sidebar.component.js.map