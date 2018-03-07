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
var Rx_1 = require("rxjs/Rx");
var FooterService = /** @class */ (function () {
    function FooterService() {
        this.current = new Rx_1.ReplaySubject(1);
        this.default = {
            right_part: 'Anything you want',
            left_part: "<strong>Copyright &copy; 2016 <a href=\"#\" routerLink=\"/\">Company X</a>.\n    \t</strong> All rights reserved."
        };
    }
    /* Redefine the footer html */
    FooterService.prototype.setCurrent = function (footer) {
        this.current.next(footer);
    };
    FooterService.prototype.getCurrent = function () {
        return this.current;
    };
    FooterService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], FooterService);
    return FooterService;
}());
exports.FooterService = FooterService;
//# sourceMappingURL=footer.service.js.map