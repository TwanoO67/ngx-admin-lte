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
var Rx_1 = require('rxjs/Rx');
var initialMessages = [];
var MessagesService = (function () {
    // public markThreadAsRead: Subject<any> = new Subject<any>();
    function MessagesService() {
        var _this = this;
        this.messagesList = [];
        // a stream that publishes new messages only once
        this.newMessages = new Rx_1.Subject();
        // `messages` is a stream that emits an array of the most up to date messages
        this.messages = new Rx_1.ReplaySubject(1);
        // `updates` receives _operations_ to be applied to our `messages`
        // it's a way we can perform changes on *all* messages (that are currently
        // stored in `messages`)
        this.updates = new Rx_1.Subject();
        // action streams
        this.create = new Rx_1.Subject();
        // recois des operation, et les fais sur la liste interne, puis diffuse le resultat sur messages
        this.updates.subscribe(function (ope) {
            _this.messagesList = ope(_this.messagesList);
            console.log(_this.messagesList);
            _this.messages.next(_this.messagesList);
        });
        this.newMessages
            .map(function (message) {
            return function (messages) {
                return messages.concat(message);
            };
        })
            .subscribe(this.updates);
    }
    // an imperative function call to this action stream
    MessagesService.prototype.addMessage = function (message) {
        this.newMessages.next(message);
    };
    MessagesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MessagesService);
    return MessagesService;
})();
exports.MessagesService = MessagesService;
//# sourceMappingURL=messages.service.js.map