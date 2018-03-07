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
var user_service_1 = require('./user.service');
var langs = ['en', 'fr', 'ru', 'he', 'zh', 'pt', 'it'];
var langmatch = /en|fr|ru|he|zh|pt|it/;
var TranslateService = (function () {
    function TranslateService(userServ, translate) {
        var _this = this;
        this.userServ = userServ;
        this.translate = translate;
        this.lang = 'us';
        translate.addLangs(langs);
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');
        this.userServ.getCurrent().subscribe(function (user) {
            _this.currentUser = user;
            // the lang to use, if the lang isn't available, it will use the current loader to get them
            var browserLang = _this.translate.getBrowserLang();
            var browserCultureLang = _this.translate.getBrowserCultureLang();
            console.log('Detected browser language: "' + browserCultureLang + '"');
            // check if current User has a Preferred Language set, and it differs from his browser lang
            var useLang = 'en';
            var prefLang = (_this.currentUser) ? _this.currentUser.preferredLang : null;
            if (!prefLang) {
                useLang = browserLang.match(langmatch) ? browserLang : 'en';
            }
            else {
                console.log('Detected User preferred language: "' + prefLang + '"');
                useLang = prefLang.match(langmatch) ? prefLang : 'en';
            }
            _this.translate.use(useLang);
            console.log('Translation language has been set to: "' + useLang + '"');
            // translate.use( 'ru' );
        });
    }
    TranslateService.prototype.ngOnInit = function () {
        // TODO
    };
    TranslateService.prototype.getTranslate = function () {
        return this.translate;
    };
    TranslateService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [UserService, (typeof NGXTranslateService !== 'undefined' && NGXTranslateService) || Object])
    ], TranslateService);
    return TranslateService;
})();
exports.TranslateService = TranslateService;
//# sourceMappingURL=translate.service.js.map