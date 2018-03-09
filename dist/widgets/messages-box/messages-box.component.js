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
var messages_service_1 = require("../../services/messages.service");
var logger_service_1 = require("../../services/logger.service");
var MessagesBoxComponent = /** @class */ (function () {
    function MessagesBoxComponent(msgServ, logger) {
        this.msgServ = msgServ;
        this.logger = logger;
        this.msgLength = { 0: 0 };
        this.messages = [];
    }
    MessagesBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Every incoming message changes entire local message Array.
        this.msgServ.messages.subscribe(function (msg) {
            _this.logger.log('MsgBox', null, 'RECEIVED.MESSAGE', null);
            _this.messages = msg;
            _this.msgLength = { 0: _this.messages.length };
        });
    };
    MessagesBoxComponent = __decorate([
        core_1.Component({
            /* tslint:disable */
            selector: '.messagesBox',
            /* tslint:enable */
            styleUrls: ['./messages-box.component.css'],
            templateUrl: './messages-box.component.html'
        }),
        __metadata("design:paramtypes", [messages_service_1.MessagesService, logger_service_1.LoggerService])
    ], MessagesBoxComponent);
    return MessagesBoxComponent;
}());
exports.MessagesBoxComponent = MessagesBoxComponent;
//# sourceMappingURL=messages-box.component.js.map