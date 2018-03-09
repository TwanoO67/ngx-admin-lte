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
var Rx_1 = require("rxjs/Rx");
var initialNotifications = [];
var NotificationsService = /** @class */ (function () {
    // public markThreadAsRead: Subject<any> = new Subject<any>();
    function NotificationsService() {
        var _this = this;
        this.notificationsList = [];
        // a stream that publishes new notifications only once
        this.newNotifications = new Rx_1.Subject();
        // `notifications` is a stream that emits an array of the most up to date notifications
        this.notifications = new Rx_1.ReplaySubject(1);
        // `updates` receives _operations_ to be applied to our `notifications`
        // it's a way we can perform changes on *all* notifications (that are currently
        // stored in `notifications`)
        this.updates = new Rx_1.Subject();
        // action streams
        this.create = new Rx_1.Subject();
        // recois des operation, et les fais sur la liste interne, puis diffuse le resultat sur notifications
        this.updates.subscribe(function (ope) {
            _this.notificationsList = ope(_this.notificationsList);
            console.log(_this.notificationsList);
            _this.notifications.next(_this.notificationsList);
        });
        this.newNotifications
            .map(function (notification) {
            return function (notifications) {
                return notifications.concat(notification);
            };
        })
            .subscribe(this.updates);
    }
    // an imperative function call to this action stream
    NotificationsService.prototype.addNotification = function (notification) {
        this.newNotifications.next(notification);
    };
    NotificationsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], NotificationsService);
    return NotificationsService;
}());
exports.NotificationsService = NotificationsService;
//# sourceMappingURL=notifications.service.js.map