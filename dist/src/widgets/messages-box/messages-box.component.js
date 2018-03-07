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
var messages_service_1 = require('../../services/messages.service');
var logger_service_1 = require('../../services/logger.service');
var MessagesBoxComponent = (function () {
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
        __metadata('design:paramtypes', [MessagesService, LoggerService])
    ], MessagesBoxComponent);
    return MessagesBoxComponent;
})();
exports.MessagesBoxComponent = MessagesBoxComponent;
//# sourceMappingURL=messages-box.component.js.map