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
var notifications_service_1 = require('../../services/notifications.service');
var logger_service_1 = require('../../services/logger.service');
var NotificationBoxComponent = (function () {
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
        __metadata('design:paramtypes', [NotificationsService, LoggerService])
    ], NotificationBoxComponent);
    return NotificationBoxComponent;
})();
exports.NotificationBoxComponent = NotificationBoxComponent;
//# sourceMappingURL=notification-box.component.js.map