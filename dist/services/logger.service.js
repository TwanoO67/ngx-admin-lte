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
var translate_service_1 = require("./translate.service");
var LoggerService = /** @class */ (function () {
    function LoggerService(translate) {
        this.translate = translate;
    }
    LoggerService.prototype.log = function (component, msg, i18nRef, data) {
        // here we should test some environment config to show or not the log
        if (true) {
            if (i18nRef) {
                var params = {};
                if (data) {
                    params = (data[0]) ? { 0: data[0] } : params;
                    params = (data[1]) ? { 0: data[0], 1: data[1] } : params;
                    params = (data[2]) ? { 0: data[0], 1: data[1], 2: data[2] } : params;
                }
                this.translate.getTranslate().get(i18nRef, params).subscribe(function (res) {
                    console.log(component + ': ' + res);
                });
            }
            else {
                console.log(component + ': ' + msg);
            }
        }
    };
    LoggerService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [translate_service_1.TranslateService])
    ], LoggerService);
    return LoggerService;
}());
exports.LoggerService = LoggerService;
//# sourceMappingURL=logger.service.js.map