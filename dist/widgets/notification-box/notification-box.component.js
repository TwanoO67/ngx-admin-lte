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
var notifications_service_1 = require("../../services/notifications.service");
var logger_service_1 = require("../../services/logger.service");
var NotificationBoxComponent = /** @class */ (function () {
    function NotificationBoxComponent(notifServ, logger) {
        this.notifServ = notifServ;
        this.logger = logger;
        this.notifLength = { 0: 0 };
        this.notifications = [];
    }
    NotificationBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Every incoming notification changes entire local notification Array.
        this.notifServ.notifications.subscribe(function (notif) {
            _this.logger.log('NotificationBox', null, 'RECEIVED.NOTIFICATION', null);
            _this.notifications = notif;
            _this.notifLength = { 0: _this.notifications.length };
        });
    };
    NotificationBoxComponent = __decorate([
        core_1.Component({
            /* tslint:disable */
            selector: '.notificationsBox',
            /* tslint:enable */
            styleUrls: ['./notification-box.component.css'],
            templateUrl: './notification-box.component.html'
        }),
        __metadata("design:paramtypes", [notifications_service_1.NotificationsService, logger_service_1.LoggerService])
    ], NotificationBoxComponent);
    return NotificationBoxComponent;
}());
exports.NotificationBoxComponent = NotificationBoxComponent;
//# sourceMappingURL=notification-box.component.js.map