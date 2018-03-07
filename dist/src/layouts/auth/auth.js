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
var user_service_1 = require('../../services/user.service');
var menu_service_1 = require('../../services/menu.service');
var angular2_toaster_1 = require('angular2-toaster/angular2-toaster');
var translate_service_1 = require('../../services/translate.service');
var LayoutAuthComponent = (function () {
    function LayoutAuthComponent(userServ, menuServ, toastr, translate, route) {
        this.userServ = userServ;
        this.menuServ = menuServ;
        this.toastr = toastr;
        this.translate = translate;
        this.mylinks = [];
        this.skin = 'skin-blue';
        this.display_control = true;
        this.display_user = true;
        this.display_tasks = true;
        this.display_messages = true;
        this.display_notifications = true;
        this.display_menu_user = true;
        this.display_menu_search = true;
        this.menu_title = ''; // deprecated
        this.display_logout = false;
        this.header_components = [];
        this.boxed_style = true;
        var param = route.snapshot.data[0];
        this.skin = this.paramExistOrDefault(param, 'skin', 'skin-blue');
        this.display_control = this.paramExistOrDefault(param, 'display_control');
        this.display_user = this.paramExistOrDefault(param, 'display_user');
        this.display_tasks = this.paramExistOrDefault(param, 'display_tasks');
        this.display_messages = this.paramExistOrDefault(param, 'display_messages');
        this.display_notifications = this.paramExistOrDefault(param, 'display_notifications');
        this.display_menu_user = this.paramExistOrDefault(param, 'display_menu_user');
        this.display_menu_search = this.paramExistOrDefault(param, 'display_menu_search');
        this.menu_title = this.paramExistOrDefault(param, 'menu_title', '');
        this.display_logout = this.paramExistOrDefault(param, 'display_logout', false);
        this.header_components = this.paramExistOrDefault(param, 'header_components', []);
        this.boxed_style = this.paramExistOrDefault(param, 'boxed_style', true);
        this.toastrConfig = new angular2_toaster_1.ToasterConfig({
            newestOnTop: true,
            showCloseButton: true,
            tapToDismiss: false
        });
        // this.translate = translate.getTranslate();
        // this.logger = new LoggerService( this.translate );
    }
    LayoutAuthComponent.prototype.paramExistOrDefault = function (param, index, default_value) {
        if (default_value === void 0) { default_value = true; }
        return param.hasOwnProperty(index) ? param[index] : default_value;
    };
    LayoutAuthComponent.prototype.ngOnInit = function () {
        var _this = this;
        //  sedding the resize event, for AdminLTE to place the height
        var ie = this.detectIE();
        if (!ie) {
            window.dispatchEvent(new Event('resize'));
        }
        else {
            // solution for IE from @hakonamatata
            var event_1 = document.createEvent('Event');
            event_1.initEvent('resize', false, true);
            window.dispatchEvent(event_1);
        }
        // default menu structure, please use the menuService to modify
        this.mylinks = [
            {
                'header': 'NAVIGATION'
            },
            {
                'title': 'Home',
                'icon': 'dashboard',
                'link': ['/']
            }
        ];
        // register to menu change
        this.menuServ.getCurrent().subscribe(function (menu) {
            _this.mylinks = menu;
        });
        document.body.className = 'hold-transition ' + this.skin + ' sidebar-mini';
    };
    LayoutAuthComponent.prototype.ngOnDestroy = function () {
        document.body.className = '';
    };
    LayoutAuthComponent.prototype.detectIE = function () {
        var ua = window.navigator.userAgent;
        // Test values; Un-comment to check result …
        // IE 10
        // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
        // IE 11
        // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
        // IE 12 / Spartan
        // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
        // Edge (IE 12+)
        // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)
        // Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';
        // const msie = ua.indexOf('MSIE ');
        // if (msie > 0) {
        //     // IE 10 or older => return version number
        //     // return parseInt( ua.substring( msie + 5, ua.indexOf( '.', msie ) ), 10 );
        //     return true;
        // }
        // const trident = ua.indexOf('Trident/');
        // if (trident > 0) {
        //     // IE 11 => return version number
        //     // const rv = ua.indexOf( 'rv:' );
        //     // return parseInt( ua.substring( rv + 3, ua.indexOf( '.', rv ) ), 10 );
        //     return true;
        // }
        // const edge = ua.indexOf('Edge/');
        // if (edge > 0) {
        //     // Edge (IE 12+) => return version number
        //     // return parseInt( ua.substring( edge + 5, ua.indexOf( '.', edge ) ), 10 );
        //     return true;
        // }
        // // other browser
        // return false;
        return ua.includes('MSIE ') || ua.includes('Trident/') || ua.includes('Edge/');
    };
    LayoutAuthComponent = __decorate([
        core_1.Component({
            selector: 'app-layouts-auth',
            templateUrl: './auth.html'
        }), 
        __metadata('design:paramtypes', [UserService, MenuService, (typeof ToasterService !== 'undefined' && ToasterService) || Object, TranslateService, (typeof ActivatedRoute !== 'undefined' && ActivatedRoute) || Object])
    ], LayoutAuthComponent);
    return LayoutAuthComponent;
})();
exports.LayoutAuthComponent = LayoutAuthComponent;
//# sourceMappingURL=auth.js.map