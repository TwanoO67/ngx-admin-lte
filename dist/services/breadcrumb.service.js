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
var ReplaySubject_1 = require("rxjs/ReplaySubject");
var BreadcrumbService = /** @class */ (function () {
    function BreadcrumbService() {
        this.initialData = {
            description: '',
            display: false,
            header: '',
            levels: [
                {
                    icon: 'clock-o',
                    link: ['/'],
                    title: 'Default'
                }
            ]
        };
        this.current = new ReplaySubject_1.ReplaySubject(1);
        this.clear();
    }
    BreadcrumbService.prototype.setCurrent = function (data) {
        this.current.next(data);
    };
    BreadcrumbService.prototype.getCurrent = function () {
        return this.current;
    };
    BreadcrumbService.prototype.clear = function () {
        this.setCurrent(this.initialData);
    };
    BreadcrumbService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], BreadcrumbService);
    return BreadcrumbService;
}());
exports.BreadcrumbService = BreadcrumbService;
//# sourceMappingURL=breadcrumb.service.js.map