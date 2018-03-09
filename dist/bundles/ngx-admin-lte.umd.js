(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs/ReplaySubject'), require('rxjs/Rx'), require('@angular/router'), require('@ngx-translate/core'), require('@angular/http'), require('rxjs/add/operator/map'), require('rxjs/Observable'), require('angular2-toaster/angular2-toaster'), require('@angular/platform-browser'), require('@ngx-translate/http-loader'), require('@angular/common/http')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'rxjs/ReplaySubject', 'rxjs/Rx', '@angular/router', '@ngx-translate/core', '@angular/http', 'rxjs/add/operator/map', 'rxjs/Observable', 'angular2-toaster/angular2-toaster', '@angular/platform-browser', '@ngx-translate/http-loader', '@angular/common/http'], factory) :
	(factory((global['ngx-admin-lte'] = {}),global.ng.core,global.Rx,global.Rx,global.ng.router,global.core$1,global.ng.http,global.Rx.Observable.prototype,global.Rx,global.angular2Toaster,global.ng.platformBrowser,global.httpLoader,global.ng.common.http));
}(this, (function (exports,core,ReplaySubject,Rx,router,core$1,http,map,Observable,angular2Toaster,platformBrowser,httpLoader,http$1) { 'use strict';

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
        this.current = new ReplaySubject.ReplaySubject(1);
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
    return BreadcrumbService;
}());
BreadcrumbService.decorators = [
    { type: core.Injectable },
];
BreadcrumbService.ctorParameters = function () { return []; };
var User = /** @class */ (function () {
    function User(data) {
        if (data === void 0) { data = {}; }
        this.connected = false;
        this.firstname = data.firstname || '';
        this.lastname = data.lastname || '';
        this.email = data.email || '';
        this.avatarUrl = data.avatarUrl || '';
        this.creationDate = data.creation_date || Date.now();
        this.preferredLang = data.preferredLang || null;
        this.connected = data.connected || false;
    }
    User.prototype.getName = function () {
        return this.firstname + ' ' + this.lastname;
    };
    return User;
}());
var UserService = /** @class */ (function () {
    function UserService(router$$1) {
        this.router = router$$1;
        this.current = new Rx.ReplaySubject(1);
    }
    UserService.prototype.setCurrent = function (user) {
        this.current.next(user);
    };
    UserService.prototype.getCurrent = function () {
        return this.current;
    };
    UserService.prototype.logout = function () {
        if (this.logoutAction) {
            this.logoutAction();
        }
        else {
            var user = new User();
            user.connected = false;
            this.setCurrent(user);
            this.router.navigate(['login']);
        }
    };
    return UserService;
}());
UserService.decorators = [
    { type: core.Injectable },
];
UserService.ctorParameters = function () { return [
    { type: router.Router, },
]; };
var CanActivateGuard = /** @class */ (function () {
    function CanActivateGuard(router$$1, userService) {
        var _this = this;
        this.router = router$$1;
        this.userService = userService;
        this.connected = false;
        this.userService.getCurrent().subscribe(function (user) {
            _this.connected = user.connected;
        });
    }
    CanActivateGuard.prototype.canActivate = function () {
        if (!this.connected) {
            this.router.navigate(['login']);
        }
        return this.connected;
    };
    return CanActivateGuard;
}());
CanActivateGuard.decorators = [
    { type: core.Injectable },
];
CanActivateGuard.ctorParameters = function () { return [
    { type: router.Router, },
    { type: UserService, },
]; };
var langs = ['en', 'fr', 'ru', 'he', 'zh', 'pt', 'it'];
var langmatch = /en|fr|ru|he|zh|pt|it/;
var TranslateService$1 = /** @class */ (function () {
    function TranslateService$1(userServ, translate) {
        var _this = this;
        this.userServ = userServ;
        this.translate = translate;
        this.lang = 'us';
        translate.addLangs(langs);
        translate.setDefaultLang('en');
        this.userServ.getCurrent().subscribe(function (user) {
            _this.currentUser = user;
            var browserLang = _this.translate.getBrowserLang();
            var browserCultureLang = _this.translate.getBrowserCultureLang();
            console.log('Detected browser language: "' + browserCultureLang + '"');
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
        });
    }
    TranslateService$1.prototype.ngOnInit = function () {
    };
    TranslateService$1.prototype.getTranslate = function () {
        return this.translate;
    };
    return TranslateService$1;
}());
TranslateService$1.decorators = [
    { type: core.Injectable },
];
TranslateService$1.ctorParameters = function () { return [
    { type: UserService, },
    { type: core$1.TranslateService, },
]; };
var LoggerService = /** @class */ (function () {
    function LoggerService(translate) {
        this.translate = translate;
    }
    LoggerService.prototype.log = function (component, msg, i18nRef, data) {
        {
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
    return LoggerService;
}());
LoggerService.decorators = [
    { type: core.Injectable },
];
LoggerService.ctorParameters = function () { return [
    { type: TranslateService$1, },
]; };
var MessagesService = /** @class */ (function () {
    function MessagesService() {
        var _this = this;
        this.messagesList = [];
        this.newMessages = new Rx.Subject();
        this.messages = new Rx.ReplaySubject(1);
        this.updates = new Rx.Subject();
        this.create = new Rx.Subject();
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
    MessagesService.prototype.addMessage = function (message) {
        this.newMessages.next(message);
    };
    return MessagesService;
}());
MessagesService.decorators = [
    { type: core.Injectable },
];
MessagesService.ctorParameters = function () { return []; };
var NotificationsService = /** @class */ (function () {
    function NotificationsService() {
        var _this = this;
        this.notificationsList = [];
        this.newNotifications = new Rx.Subject();
        this.notifications = new Rx.ReplaySubject(1);
        this.updates = new Rx.Subject();
        this.create = new Rx.Subject();
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
    NotificationsService.prototype.addNotification = function (notification) {
        this.newNotifications.next(notification);
    };
    return NotificationsService;
}());
NotificationsService.decorators = [
    { type: core.Injectable },
];
NotificationsService.ctorParameters = function () { return []; };
var RestService = /** @class */ (function () {
    function RestService(http$$1) {
        this.http = http$$1;
        this.modelName = 'to-configure';
        this.headers = new http.Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    RestService.prototype.setApiUrl = function (url) {
        this.serverWithApiUrl = url;
    };
    RestService.prototype.getAllFromLS = function (maxtime) {
        if (maxtime === void 0) { maxtime = 0; }
        var json = localStorage.getItem('rest_all_' + this.modelName);
        if (json) {
            var obj = JSON.parse(json);
            if (obj && (obj.date < (Date.now() - maxtime))) {
                return obj;
            }
        }
    };
    RestService.prototype.getFromCache = function (id) {
        if (this.lastGetAll) {
            return this.lastGetAll.find(function (unit) { return unit.id === id; });
        }
        else {
            return null;
        }
    };
    RestService.prototype.getActionUrl = function () {
        return this.serverWithApiUrl + this.modelName + '/';
    };
    RestService.prototype.getAll = function () {
        var _this = this;
        return this.http.get(this.getActionUrl(), { headers: this.headers })
            .map(function (response) {
            var data = response.json()[_this.modelName];
            var tab = data.records.map(function (elem) {
                var unit = {};
                data.columns.forEach(function (champ, index) {
                    unit[champ] = elem[index];
                });
                return unit;
            });
            _this.lastGetAll = tab;
            var obj = {
                data: tab,
                date: Date.now()
            };
            localStorage.setItem('rest_all_' + _this.modelName, JSON.stringify(obj));
            return tab;
        })
            .catch(this.handleError);
    };
    RestService.prototype.get = function (id) {
        var _this = this;
        return this.http.get(this.getActionUrl() + id, { headers: this.headers })
            .map(function (response) {
            var data = response.json();
            _this.lastGet = data;
            return data;
        })
            .catch(this.handleError);
    };
    RestService.prototype.add = function (item) {
        var toAdd = JSON.stringify(item);
        return this.http.post(this.getActionUrl(), toAdd, { headers: this.headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    RestService.prototype.addAll = function (tab) {
        var toAdd = JSON.stringify(tab);
        return this.http.post(this.getActionUrl(), toAdd, { headers: this.headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    RestService.prototype.update = function (id, itemToUpdate) {
        return this.http.put(this.getActionUrl() + id, JSON.stringify(itemToUpdate), { headers: this.headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    RestService.prototype.delete = function (id) {
        return this.http.delete(this.getActionUrl() + id, { headers: this.headers })
            .catch(this.handleError);
    };
    RestService.prototype.handleError = function (error) {
        console.error(error);
        return Observable.Observable.throw(error.json().error || 'Server error');
    };
    return RestService;
}());
RestService.decorators = [
    { type: core.Injectable },
];
RestService.ctorParameters = function () { return [
    { type: http.Http, },
]; };
var MenuService = /** @class */ (function () {
    function MenuService(router$$1) {
        this.router = router$$1;
        this.current = new Rx.ReplaySubject(1);
    }
    MenuService.prototype.setCurrent = function (menu) {
        this.current.next(menu);
    };
    MenuService.prototype.getCurrent = function () {
        return this.current;
    };
    return MenuService;
}());
MenuService.decorators = [
    { type: core.Injectable },
];
MenuService.ctorParameters = function () { return [
    { type: router.Router, },
]; };
var LogoService = /** @class */ (function () {
    function LogoService() {
        this.current = new Rx.ReplaySubject(1);
        this.logo = {
            html_mini: '<b>A</b>LT',
            html_lg: '<b>Admin</b>LTE'
        };
        this.setCurrent(this.logo);
    }
    LogoService.prototype.setCurrent = function (logo) {
        if (logo.small || logo.big) {
            console.log('NgxAdminLTE: LogoService setCurrent: small and big are now deprecated in logo, use html_mini and html_lg');
        }
        this.current.next(logo);
    };
    LogoService.prototype.getCurrent = function () {
        return this.current;
    };
    return LogoService;
}());
LogoService.decorators = [
    { type: core.Injectable },
];
LogoService.ctorParameters = function () { return []; };
var FooterService = /** @class */ (function () {
    function FooterService() {
        this.current = new Rx.ReplaySubject(1);
        this.default = {
            right_part: 'Anything you want',
            left_part: "<strong>Copyright &copy; 2016 <a href=\"#\" routerLink=\"/\">Company X</a>.\n    \t</strong> All rights reserved."
        };
    }
    FooterService.prototype.setCurrent = function (footer) {
        this.current.next(footer);
    };
    FooterService.prototype.getCurrent = function () {
        return this.current;
    };
    return FooterService;
}());
FooterService.decorators = [
    { type: core.Injectable },
];
FooterService.ctorParameters = function () { return []; };
var ControlSidebarService = /** @class */ (function () {
    function ControlSidebarService() {
        this.current = new Rx.ReplaySubject(1);
        this.default = false;
        this.current_value = false;
        this.current.next(this.default);
    }
    ControlSidebarService.prototype.getCurrent = function () {
        return this.current;
    };
    ControlSidebarService.prototype.open = function () {
        this.current_value = true;
        this.current.next(this.current_value);
    };
    ControlSidebarService.prototype.close = function () {
        this.current_value = false;
        this.current.next(this.current_value);
    };
    ControlSidebarService.prototype.toggle = function () {
        this.current_value = !this.current_value;
        this.current.next(this.current_value);
    };
    return ControlSidebarService;
}());
ControlSidebarService.decorators = [
    { type: core.Injectable },
];
ControlSidebarService.ctorParameters = function () { return []; };
var LayoutAuthComponent = /** @class */ (function () {
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
        this.menu_title = '';
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
        this.toastrConfig = new angular2Toaster.ToasterConfig({
            newestOnTop: true,
            showCloseButton: true,
            tapToDismiss: false
        });
    }
    LayoutAuthComponent.prototype.paramExistOrDefault = function (param, index, default_value) {
        if (default_value === void 0) { default_value = true; }
        return param.hasOwnProperty(index) ? param[index] : default_value;
    };
    LayoutAuthComponent.prototype.ngOnInit = function () {
        var _this = this;
        var ie = this.detectIE();
        if (!ie) {
            window.dispatchEvent(new Event('resize'));
        }
        else {
            var event = document.createEvent('Event');
            event.initEvent('resize', false, true);
            window.dispatchEvent(event);
        }
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
        return ua.includes('MSIE ') || ua.includes('Trident/') || ua.includes('Edge/');
    };
    return LayoutAuthComponent;
}());
LayoutAuthComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'app-layouts-auth',
                template: "<div class=\"wrapper\">\n\t<app-header\n\t\t[display_messages]='display_messages'\n\t\t[display_notifications]='display_notifications'\n\t\t[display_tasks]='display_tasks'\n\t\t[display_user]='display_user'\n\t\t[display_control]='display_control'\n\t\t[display_logout]='display_logout'\n\t\t[header_components]='header_components'\n    >{{ 'LOADING' | translate }} header...</app-header>\n\t<app-menu-aside\n\t[links]=\"mylinks\"\n\t[display_menu_user]='display_menu_user'\n\t[display_menu_search]='display_menu_search'\n\t>{{ 'LOADING' | translate }} menu...</app-menu-aside>\n\t<!-- Content Wrapper. Contains page content -->\n\t<div class=\"content-wrapper\">\n\t\t<!-- Content Header (Page header) -->\n\t\t<toaster-container [toasterconfig]=\"toastrConfig\"></toaster-container>\n\t\t<app-breadcrumb></app-breadcrumb>\n\t\t<!-- Main content -->\n\t\t<section class=\"content\">\n\t\t\t<div [ngClass]=\"{'box': boxed_style, 'box-default': boxed_style}\">\n\t\t\t\t<div [ngClass]=\"{'box-body': boxed_style}\">\n\t\t\t\t\t<router-outlet></router-outlet>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</section>\n\t\t<!-- /.content -->\n\t</div>\n\t<!-- /.content-wrapper -->\n\t<app-footer>{{ 'LOADING' | translate }} footer...</app-footer>\n\t<app-control-sidebar>{{ 'LOADING' | translate }} control sidebar...</app-control-sidebar>\n</div>\n<!-- ./wrapper -->\n"
            },] },
];
LayoutAuthComponent.ctorParameters = function () { return [
    { type: UserService, },
    { type: MenuService, },
    { type: angular2Toaster.ToasterService, },
    { type: TranslateService$1, },
    { type: router.ActivatedRoute, },
]; };
var LayoutLoginComponent = /** @class */ (function () {
    function LayoutLoginComponent() {
    }
    LayoutLoginComponent.prototype.ngOnInit = function () {
        window.dispatchEvent(new Event('resize'));
        document.body.className = 'hold-transition login-page';
    };
    LayoutLoginComponent.prototype.ngOnDestroy = function () {
        document.body.className = '';
    };
    return LayoutLoginComponent;
}());
LayoutLoginComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'app-layout-login',
                styles: ['./login.css'],
                template: "<div class=\"login-box\" >\n  <div class=\"login-logo\">\n    <app-logo [hide]='\"mini\"'></app-logo>\n  </div>\n  <!-- /.login-logo -->\n  <div class=\"login-box-body\">\n    <router-outlet></router-outlet>\n  </div>\n  <!-- /.login-box-body -->\n</div>\n<!-- /.login-box -->\n"
            },] },
];
LayoutLoginComponent.ctorParameters = function () { return []; };
var LayoutRegisterComponent = /** @class */ (function () {
    function LayoutRegisterComponent() {
    }
    LayoutRegisterComponent.prototype.ngOnInit = function () {
    };
    return LayoutRegisterComponent;
}());
LayoutRegisterComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'app-layout-register',
                template: "<body class=\"hold-transition register-page\">\n<div class=\"register-box\">\n  <div class=\"register-logo\">\n    <app-logo></app-logo>\n  </div>\n  <div class=\"register-box-body\">\n    <router-outlet></router-outlet>\n  </div>\n  <!-- /.form-box -->\n</div>\n<!-- /.register-box -->\n</body>\n"
            },] },
];
LayoutRegisterComponent.ctorParameters = function () { return []; };
var Message = /** @class */ (function () {
    function Message(data) {
        if (data === void 0) { data = {}; }
        this.content = data.content || '';
        this.title = data.title || '';
        this.author = data.author || null;
        this.destination = data.destination || null;
        this.date = data.date || Date.now();
    }
    return Message;
}());
var Preferencies = /** @class */ (function () {
    function Preferencies(data) {
        if (data === void 0) { data = {}; }
        this.avatarUrl = data.avatarUrl || '';
        this.preferredLang = data.preferredLang || null;
    }
    return Preferencies;
}());
var Notification = /** @class */ (function () {
    function Notification(data) {
        if (data === void 0) { data = {}; }
        this.content = data.content || '';
        this.class = data.class || '';
        this.link = data.link || '';
    }
    return Notification;
}());
var SafeHtmlPipe = /** @class */ (function () {
    function SafeHtmlPipe(sanitized) {
        this.sanitized = sanitized;
    }
    SafeHtmlPipe.prototype.transform = function (value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    };
    return SafeHtmlPipe;
}());
SafeHtmlPipe.decorators = [
    { type: core.Pipe, args: [{ name: 'safeHtml' },] },
];
SafeHtmlPipe.ctorParameters = function () { return [
    { type: platformBrowser.DomSanitizer, },
]; };
var AppHeaderComponent = /** @class */ (function () {
    function AppHeaderComponent(userService, sidebarService) {
        this.userService = userService;
        this.sidebarService = sidebarService;
        this.display_messages = true;
        this.display_notifications = true;
        this.display_tasks = true;
        this.display_user = true;
        this.display_control = true;
        this.display_logout = false;
        this.header_components = [];
    }
    AppHeaderComponent.prototype.logout = function () {
        this.userService.logout();
    };
    AppHeaderComponent.prototype.toggleSidebar = function () {
        this.sidebarService.toggle();
    };
    return AppHeaderComponent;
}());
AppHeaderComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'app-header',
                styles: [""],
                template: "<!-- Main Header -->\n<header class=\"main-header\">\n\t<!-- Logo -->\n\t<app-logo></app-logo>\n\t<!-- Header Navbar -->\n\t<nav class=\"navbar navbar-static-top\" role=\"navigation\">\n\t\t<!-- Sidebar toggle button-->\n\t\t<a class=\"sidebar-toggle\" data-toggle=\"offcanvas\" role=\"button\">\n\t\t\t<!-- ADMIN LTE 2.4.0  <a class=\"sidebar-toggle\" data-toggle=\"push-menu\" role=\"button\"> -->\n      <span class=\"sr-only\">Toggle navigation</span>\n\t\t</a>\n\t\t<!-- Navbar Right Menu -->\n\t\t<div class=\"navbar-custom-menu\">\n\t\t\t<ul class=\"nav navbar-nav\" >\n\t\t\t\t<!-- Messages: style can be found in dropdown.less-->\n\t\t\t\t<li class=\"dropdown messages-menu messagesBox\" *ngIf=\"display_messages\"></li>\n\t\t\t\t<!-- Notifications Menu -->\n\t\t\t\t<li class=\"dropdown notifications-menu notificationsBox\" *ngIf=\"display_notifications\"></li>\n\t\t\t\t<!-- Tasks Menu -->\n\t\t\t\t<li class=\"dropdown tasks-menu tasksBox\" *ngIf=\"display_tasks\"></li>\n\t\t\t\t<!-- User Account Menu -->\n        <li class=\"dropdown user user-menu userBox\" *ngIf=\"display_user\"></li>\n        <li *ngIf=\"display_logout\">\n\t\t\t\t\t<button class=\"btn btn-primary btn-lg\" (click)=\"logout()\">\n\t\t\t\t\t\t<i class=\"fa fa-power-off\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t</li>\n\t\t\t\t<!-- Control Sidebar Toggle Button -->\n\t\t\t\t<li>\n\t\t\t\t\t<a class=\"toggle-sidebar-right\" role=\"button\" *ngIf=\"display_control\">\n\t\t\t\t\t\t<i class=\"fa fa-gears\" (click)=\"toggleSidebar()\"></i>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<!-- Additionnal components -->\n\t\t\t\t<ng-container *ngFor=\"let widget of header_components\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<app-component-loader [class_component]=\"widget.class\" [data]=\"widget.data\"></app-component-loader>\n\t\t\t\t\t</li>\n\t\t\t\t</ng-container>\n\t\t\t</ul>\n\t\t</div>\n\t</nav>\n</header>\n"
            },] },
];
AppHeaderComponent.ctorParameters = function () { return [
    { type: UserService, },
    { type: ControlSidebarService, },
]; };
AppHeaderComponent.propDecorators = {
    "display_messages": [{ type: core.Input },],
    "display_notifications": [{ type: core.Input },],
    "display_tasks": [{ type: core.Input },],
    "display_user": [{ type: core.Input },],
    "display_control": [{ type: core.Input },],
    "display_logout": [{ type: core.Input },],
    "header_components": [{ type: core.Input },],
};
var LogoComponent = /** @class */ (function () {
    function LogoComponent(logoServ) {
        this.logoServ = logoServ;
        this.hide = '';
    }
    LogoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.logoServ.getCurrent().subscribe(function (logo) {
            _this.logo = logo;
        });
    };
    return LogoComponent;
}());
LogoComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'app-logo',
                template: "<!-- Logo -->\n<a href=\"#\" routerLink=\"/\" class=\"logo\"> <!-- mini logo for sidebar mini 50x50 pixels -->\n\t<ng-container *ngIf=\"hide !== 'mini'\">\n\t\t<ng-container *ngIf=\"logo?.html_mini; else oldsyntaxmini\">\n\t\t\t<span class=\"logo-mini\" [innerHtml]=\"logo?.html_mini | safeHtml\"></span>\n\t\t</ng-container>\n\t\t<ng-template #oldsyntaxmini>\n\t\t\t<span class=\"logo-mini\"><b>{{logo.small.bold}}</b>{{logo.small.normal}}</span> <!-- logo for regular state and mobile devices -->\n\t\t</ng-template>\n\t</ng-container>\n\t<ng-container *ngIf=\"hide !== 'lg'\">\n\t\t<ng-container *ngIf=\"logo?.html_lg; else oldsyntaxlg\">\n\t\t\t<span class=\"logo-lg\" [innerHtml]=\"logo?.html_lg | safeHtml\"></span>\n\t\t</ng-container>\n\t\t<ng-template #oldsyntaxlg>\n\t\t\t<span class=\"logo-lg\" ><b>{{logo.big.bold}}</b>{{logo.big.normal}}</span>\n\t\t</ng-template>\n\t</ng-container>\n</a>\n"
            },] },
];
LogoComponent.ctorParameters = function () { return [
    { type: LogoService, },
]; };
LogoComponent.propDecorators = {
    "hide": [{ type: core.Input },],
};
var AppFooterComponent = /** @class */ (function () {
    function AppFooterComponent(footerServ) {
        var _this = this;
        this.footerServ = footerServ;
        this.footer = {};
        this.footerServ.getCurrent().subscribe(function (footer) { return _this.footer = footer; });
    }
    return AppFooterComponent;
}());
AppFooterComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'app-footer',
                styles: [""],
                template: "<!-- Main Footer -->\n<footer class=\"main-footer\">\n\t<!-- To the right -->\n\t<div class=\"pull-right hidden-xs\" [innerHTML]=\"footer?.right_part | safeHtml\"></div>\n\t<!-- Default to the left -->\n\t<div [innerHtml]=\"footer?.left_part | safeHtml\"></div>\n</footer>\n"
            },] },
];
AppFooterComponent.ctorParameters = function () { return [
    { type: FooterService, },
]; };
var MenuAsideComponent = /** @class */ (function () {
    function MenuAsideComponent(userServ, router$$1) {
        var _this = this;
        this.userServ = userServ;
        this.router = router$$1;
        this.currentUser = new User();
        this.links = [];
        this.display_menu_user = true;
        this.display_menu_search = true;
        this.menu_title = '';
        this.router.events.subscribe(function (evt) { return _this.currentUrl = evt.url; });
        this.userServ.getCurrent().subscribe(function (user) { return _this.currentUser = user; });
    }
    MenuAsideComponent.prototype.ngOnInit = function () { };
    MenuAsideComponent.prototype.ngOnChanges = function (changes) {
        if (this.menu_title !== '') {
            console.log('menu_title is deprecated please use "header" in your menuService links configuration');
        }
    };
    return MenuAsideComponent;
}());
MenuAsideComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'app-menu-aside',
                styles: [""],
                template: "<!-- Left side column. contains the logo and sidebar -->\n<aside class=\"main-sidebar\">\n\t<!-- sidebar: style can be found in sidebar.less -->\n\t<section class=\"sidebar\" >\n\t\t<!-- Sidebar user panel (optional) -->\n\t\t<div *ngIf=\"display_menu_user\" class=\"user-panel\">\n\t\t\t<div class=\"pull-left image\" *ngIf=\"currentUser?.avatarUrl\" >\n\t\t\t\t<img [src]=\"currentUser?.avatarUrl\" class=\"img-circle\"\n\t\t\t\t\t[alt]=\"currentUser?.getName()\">\n\t\t\t</div>\n\t\t\t<div class=\"pull-left info\">\n\t\t\t\t<p>{{currentUser?.getName()}}</p>\n\t\t\t\t<!-- Status -->\n\t\t\t\t<a href=\"#\"><i class=\"fa fa-circle text-success\"></i> Online</a>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- search form (Optional) -->\n\t\t<form *ngIf=\"display_menu_search\" action=\"#\" method=\"get\" class=\"sidebar-form\">\n\t\t\t<div class=\"input-group\">\n\t\t\t\t<input type=\"text\" name=\"q\" class=\"form-control\"\n\t\t\t\t\tplaceholder=\"Search...\"> <span class=\"input-group-btn\">\n\t\t\t\t\t<button type=\"submit\" name=\"search\" id=\"search-btn\"\n\t\t\t\t\t\tclass=\"btn btn-flat\">\n\t\t\t\t\t\t<i class=\"fa fa-search\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</form>\n\t\t<!-- /.search form -->\n\t\t<!-- Sidebar Menu -->\n\t\t<ul class=\"sidebar-menu\" data-widget=\"tree\">\n\t\t\t<!-- DEPRECATED since 1.0.1 -->\n\t\t\t<ng-container *ngIf=\"menu_title !== '' \">\n\t\t\t\t<li class=\"header\">{{menu_title}}</li>\n\t\t\t</ng-container>\n\t\t\t<!-- /DEPRECATED since 1.0.1 -->\n\t\t\t<ng-container *ngFor=\"let item of links\">\n\t\t\t\t<!-- HEADER -->\n\t\t\t\t<ng-container *ngIf=\"item.header\">\n\t\t\t\t\t<li class=\"header\">{{item.header}}</li>\n\t\t\t\t</ng-container>\n\t\t\t\t<!-- COMPONENT -->\n\t\t\t\t<ng-container *ngIf=\"item.class\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<app-component-loader [class_component]=\"item.class\" [data]=\"item.data\"></app-component-loader>\n\t\t\t\t\t</li>\n\t\t\t\t</ng-container>\n\t\t\t\t<!-- LINK -->\n\t\t\t\t<ng-container *ngIf=\"item.link\">\n\t\t\t\t\t<li [class.active]=\"item.link[0] === currentUrl\">\n\t\t\t\t\t\t<a *ngIf=\"!item.external\" [routerLink]=\"item.link\">\n\t\t\t\t\t\t\t<i class=\"fa fa-{{item.icon}}\"></i>\n\t\t\t\t\t\t\t<span>{{item.title}}</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a *ngIf=\"item.external\" [href]=\"item.link\" [target]=\"item.target\">\n\t\t\t\t\t\t\t<i class=\"fa fa-{{item.icon}}\"></i>\n\t\t\t\t\t\t\t<span>{{item.title}}</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ng-container>\n\t\t\t\t<!-- LINK WITH SUBLINKS -->\n\t\t\t\t<ng-container *ngIf=\"item.sublinks\">\n\t\t\t\t\t<li class=\"treeview\">\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t<i *ngIf=\"item.icon\" class=\"fa fa-{{item.icon}}\"></i>\n\t\t\t\t\t\t\t<span>{{item.title}}</span>\n\t\t\t\t\t\t\t<span class=\"pull-right-container\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-angle-left pull-right\"></i>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<!--i class=\"fa fa-angle-left pull-right\"></i-->\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<ul class=\"treeview-menu\">\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let subitem of item.sublinks\">\n\t\t\t\t\t\t\t\t<li [class.active]=\"subitem.link[0] === currentUrl\">\n\t\t\t\t\t\t\t\t\t<a *ngIf=\"!subitem.external\" [routerLink]=\"subitem.link\">\n\t\t\t\t\t\t\t\t\t\t<i *ngIf=\"subitem.icon\" class=\"fa fa-{{subitem.icon}}\"></i>\n\t\t\t\t\t\t\t\t\t\t<span>{{subitem.title}}</span>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<a *ngIf=\"subitem.external\" [href]=\"subitem.link\" [target]=\"subitem.target\">\n\t\t\t\t\t\t\t\t\t\t<i *ngIf=\"subitem.icon\" class=\"fa fa-{{subitem.icon}}\"></i>\n\t\t\t\t\t\t\t\t\t\t<span>{{subitem.title}}</span>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t</ng-container>\n\t\t\t</ng-container>\n\t\t</ul>\n\t\t<!-- /.sidebar-menu -->\n\t</section>\n\t<!-- /.sidebar -->\n</aside>\n"
            },] },
];
MenuAsideComponent.ctorParameters = function () { return [
    { type: UserService, },
    { type: router.Router, },
]; };
MenuAsideComponent.propDecorators = {
    "links": [{ type: core.Input },],
    "display_menu_user": [{ type: core.Input },],
    "display_menu_search": [{ type: core.Input },],
    "menu_title": [{ type: core.Input },],
};
var ControlSidebarComponent = /** @class */ (function () {
    function ControlSidebarComponent(_sidebar) {
        this._sidebar = _sidebar;
    }
    return ControlSidebarComponent;
}());
ControlSidebarComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'app-control-sidebar',
                styles: [""],
                template: "<!-- Control Sidebar -->\n<aside [ngClass]=\"{\n\t'control-sidebar': true,\n\t'control-sidebar-dark': true,\n\t'control-sidebar-open': _sidebar.getCurrent() | async\n}\" >\n\t<!-- Create the tabs -->\n\t<ul class=\"nav nav-tabs nav-justified control-sidebar-tabs\">\n\t\t<li class=\"active\"><a href=\"#control-sidebar-home-tab\"\n\t\t\tdata-toggle=\"tab\"><i class=\"fa fa-home\"></i></a></li>\n\t\t<li><a href=\"#control-sidebar-settings-tab\" data-toggle=\"tab\"><i\n\t\t\t\tclass=\"fa fa-gears\"></i></a></li>\n\t</ul>\n\t<!-- Tab panes -->\n\t<div class=\"tab-content\">\n\t\t<!-- Home tab content -->\n\t\t<div class=\"tab-pane active\" id=\"control-sidebar-home-tab\">\n\t\t\t<h3 class=\"control-sidebar-heading\">Recent Activity</h3>\n\t\t\t<ul class=\"control-sidebar-menu\">\n\t\t\t\t<li><a href=\"javascript::;\"> <i\n\t\t\t\t\t\tclass=\"menu-icon fa fa-birthday-cake bg-red\"></i>\n\t\t\t\t\t\t<div class=\"menu-info\">\n\t\t\t\t\t\t\t<h4 class=\"control-sidebar-subheading\">Langdon's Birthday</h4>\n\t\t\t\t\t\t\t<p>Will be 23 on April 24th</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t</a></li>\n\t\t\t</ul>\n\t\t\t<!-- /.control-sidebar-menu -->\n\t\t\t<h3 class=\"control-sidebar-heading\">Tasks Progress</h3>\n\t\t\t<ul class=\"control-sidebar-menu\">\n\t\t\t\t<li><a href=\"javascript::;\">\n\t\t\t\t\t\t<h4 class=\"control-sidebar-subheading\">\n\t\t\t\t\t\t\tCustom Template Design <span\n\t\t\t\t\t\t\t\tclass=\"label label-danger pull-right\">70%</span>\n\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t<div class=\"progress progress-xxs\">\n\t\t\t\t\t\t\t<div class=\"progress-bar progress-bar-danger\" style=\"width: 70%\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t</a></li>\n\t\t\t</ul>\n\t\t\t<!-- /.control-sidebar-menu -->\n\t\t</div>\n\t\t<!-- /.tab-pane -->\n\t\t<!-- Stats tab content -->\n\t\t<div class=\"tab-pane\" id=\"control-sidebar-stats-tab\">Stats Tab\n\t\t\tContent</div>\n\t\t<!-- /.tab-pane -->\n\t\t<!-- Settings tab content -->\n\t\t<div class=\"tab-pane\" id=\"control-sidebar-settings-tab\">\n\t\t\t<form method=\"post\">\n\t\t\t\t<h3 class=\"control-sidebar-heading\">General Settings</h3>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"control-sidebar-subheading\"> Report panel\n\t\t\t\t\t\tusage <input type=\"checkbox\" class=\"pull-right\" checked>\n\t\t\t\t\t</label>\n\t\t\t\t\t<p>Some information about this general settings option</p>\n\t\t\t\t</div>\n\t\t\t\t<!-- /.form-group -->\n\t\t\t</form>\n\t\t</div>\n\t\t<!-- /.tab-pane -->\n\t</div>\n</aside>\n<!-- /.control-sidebar -->\n<!-- Add the sidebar's background. This div must be placed\n               immediately after the control sidebar -->\n<div class=\"control-sidebar-bg\"></div>\n"
            },] },
];
ControlSidebarComponent.ctorParameters = function () { return [
    { type: ControlSidebarService, },
]; };
var MessagesBoxComponent = /** @class */ (function () {
    function MessagesBoxComponent(msgServ, logger) {
        this.msgServ = msgServ;
        this.logger = logger;
        this.msgLength = { 0: 0 };
        this.messages = [];
    }
    MessagesBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.msgServ.messages.subscribe(function (msg) {
            _this.logger.log('MsgBox', null, 'RECEIVED.MESSAGE', null);
            _this.messages = msg;
            _this.msgLength = { 0: _this.messages.length };
        });
    };
    return MessagesBoxComponent;
}());
MessagesBoxComponent.decorators = [
    { type: core.Component, args: [{
                selector: '.messagesBox',
                styles: [""],
                template: "<!-- Menu toggle button -->\n<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"> <i\n\tclass=\"fa fa-envelope-o\"></i> <span class=\"label label-success\"\n\t[innerHTML]=\"messages.length\"></span>\n</a>\n<ul class=\"dropdown-menu\">\n\t<li class=\"header\">{{ 'MSGBOX.COUNT' | translate:msgLength }}</li>\n\t<li>\n\t\t<!-- inner menu: contains the messages -->\n\t\t<ul class=\"menu\">\n\t\t\t<li *ngFor=\"let msg of messages; let i = index\">\n\t\t\t\t<!-- start message --> <a href=\"#\">\n\t\t\t\t\t<div class=\"pull-left\">\n\t\t\t\t\t\t<!-- User Image -->\n\t\t\t\t\t\t<img src=\"{{msg.author.avatarUrl}}\" class=\"img-circle\"\n\t\t\t\t\t\t\talt=\"{{ msg.author.getName() }}\">\n\t\t\t\t\t</div> <!-- Message title and timestamp -->\n\t\t\t\t\t<h4>\n\t\t\t\t\t\t{{msg.title}} <small><i class=\"fa fa-clock-o\"></i>\n\t\t\t\t\t\t\t{{msg.date | date:'yMd' }}</small>\n\t\t\t\t\t</h4> <!-- The message -->\n\t\t\t\t\t<p>{{msg.content}}</p>\n\t\t\t</a>\n\t\t\t</li>\n\t\t\t<!-- end message -->\n\t\t</ul> <!-- /.menu -->\n\t</li>\n\t<li class=\"footer\">\n    <a href=\"#\">{{ 'MSGBOX.FOOTER' | translate }}</a>\n  </li>\n</ul>\n"
            },] },
];
MessagesBoxComponent.ctorParameters = function () { return [
    { type: MessagesService, },
    { type: LoggerService, },
]; };
var NotificationBoxComponent = /** @class */ (function () {
    function NotificationBoxComponent(notifServ, logger) {
        this.notifServ = notifServ;
        this.logger = logger;
        this.notifLength = { 0: 0 };
        this.notifications = [];
    }
    NotificationBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.notifServ.notifications.subscribe(function (notif) {
            _this.logger.log('NotificationBox', null, 'RECEIVED.NOTIFICATION', null);
            _this.notifications = notif;
            _this.notifLength = { 0: _this.notifications.length };
        });
    };
    return NotificationBoxComponent;
}());
NotificationBoxComponent.decorators = [
    { type: core.Component, args: [{
                selector: '.notificationsBox',
                styles: [""],
                template: "<!-- Menu toggle button -->\n<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n\t<i class=\"fa fa-bell-o\"></i>\n\t<span class=\"label label-warning\">{{ notifications.length }}</span>\n</a>\n<ul class=\"dropdown-menu\">\n\t<li class=\"header\">{{ 'NOTIFBOX.COUNT' | translate:notifLength }}</li>\n\t<li>\n\t\t<!-- Inner Menu: contains the notifications -->\n\t\t<ul class=\"menu\">\n\t\t\t<li *ngFor=\"let notif of notifications.reverse(); let i = index\">\n\t\t\t\t<a routerLink=\"{{notif.link}}\">\n\t\t\t\t\t<i class=\"{{notif.class}}\"></i> {{notif.content}}\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<!-- end notification -->\n\t\t</ul>\n\t</li>\n\t<li class=\"footer\">\n\t\t<a href=\"#\">\n\t\t\t{{ 'NOTIFBOX.FOOTER' | translate }}\n\t\t</a>\n\t</li>\n</ul>\n"
            },] },
];
NotificationBoxComponent.ctorParameters = function () { return [
    { type: NotificationsService, },
    { type: LoggerService, },
]; };
var TasksBoxComponent = /** @class */ (function () {
    function TasksBoxComponent() {
        this.tasksLength = { 0: 0 };
    }
    TasksBoxComponent.prototype.ngOnInit = function () { };
    return TasksBoxComponent;
}());
TasksBoxComponent.decorators = [
    { type: core.Component, args: [{
                selector: '.tasksBox',
                styles: [""],
                template: "<!-- Menu Toggle Button -->\n<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"> <i\n\tclass=\"fa fa-flag-o\"></i> <span class=\"label label-danger\">9</span>\n</a>\n<ul class=\"dropdown-menu\">\n\t<li class=\"header\">{{ 'TASKBOX.COUNT' | translate:tasksLength }}</li>\n\t<li>\n\t\t<!-- Inner menu: contains the tasks -->\n\t\t<ul class=\"menu\">\n\t\t\t<li>\n\t\t\t\t<!-- Task item --> <a href=\"#\"> <!-- Task title and progress text -->\n\t\t\t\t\t<h3>\n\t\t\t\t\t\tDesign some buttons <small class=\"pull-right\">20%</small>\n\t\t\t\t\t</h3> <!-- The progress bar -->\n\t\t\t\t\t<div class=\"progress xs\">\n\t\t\t\t\t\t<!-- Change the css width attribute to simulate progress -->\n\t\t\t\t\t\t<div class=\"progress-bar progress-bar-aqua\" style=\"width: 20%\"\n\t\t\t\t\t\t\trole=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\"\n\t\t\t\t\t\t\taria-valuemax=\"100\">\n\t\t\t\t\t\t\t<span class=\"sr-only\">20% Complete</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t</a>\n\t\t\t</li>\n\t\t\t<!-- end task item -->\n\t\t</ul>\n\t</li>\n\t<li class=\"footer\"><a href=\"#\">{{ 'TASKBOX.FOOTER' | translate\n\t\t\t}}</a></li>\n</ul>\n"
            },] },
];
TasksBoxComponent.ctorParameters = function () { return []; };
TasksBoxComponent.propDecorators = {
    "user": [{ type: core.Input },],
};
var UserBoxComponent = /** @class */ (function () {
    function UserBoxComponent(userServ, router$$1) {
        var _this = this;
        this.userServ = userServ;
        this.router = router$$1;
        this.currentUser = new User({
            avatarUrl: 'assets/img/user2-160x160.jpg',
            email: 'weber.antoine@outlook.com',
            firstname: 'WEBER',
            lastname: 'Antoine'
        });
        this.logout = function () {
            _this.userServ.logout();
        };
        this.userServ.getCurrent().subscribe(function (user) { return _this.currentUser = user; });
    }
    UserBoxComponent.prototype.ngOnInit = function () {
    };
    return UserBoxComponent;
}());
UserBoxComponent.decorators = [
    { type: core.Component, args: [{
                selector: '.userBox',
                styles: [""],
                template: "<!-- Menu Toggle Button -->\n<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n  <!-- The user image in the navbar-->\n  <img *ngIf=\"currentUser.avatarUrl != ''\" [src]=\"currentUser.avatarUrl\" class=\"user-image\" [alt]=\"currentUser.getName()\">\n  <!-- hidden-xs hides the username on small devices so only the image appears. -->\n  <span class=\"hidden-xs\">{{currentUser.getName()}}</span>\n</a>\n<ul class=\"dropdown-menu\">\n  <!-- The user image in the menu -->\n  <li class=\"user-header\">\n    <img *ngIf=\"currentUser.avatarUrl != ''\" [src]=\"currentUser.avatarUrl\" class=\"img-circle\" [alt]=\"currentUser.getName()\">\n    <p>\n      {{currentUser.getName()}} - Web Developer\n      <small>{{ 'USERBOX.MEMBERSINCE' | translate }} {{currentUser.creationDate}}</small>\n    </p>\n  </li>\n  <!-- Menu Body -->\n  <li class=\"user-body\">\n    <div class=\"col-xs-4 text-center\">\n      <a href=\"#\">Followers</a>\n    </div>\n    <div class=\"col-xs-4 text-center\">\n      <a href=\"#\">Sales</a>\n    </div>\n    <div class=\"col-xs-4 text-center\">\n      <a href=\"#\">Friends</a>\n    </div>\n  </li>\n  <!-- Menu Footer-->\n  <li class=\"user-footer\">\n    <div class=\"pull-left\">\n      <a href=\"#\" class=\"btn btn-default btn-flat\">{{ 'USERBOX.PROFILE' | translate }}</a>\n    </div>\n    <div class=\"pull-right\">\n      <a (click)=\"logout()\" class=\"btn btn-default btn-flat\">{{ 'USERBOX.SIGNOUT' | translate }}</a>\n    </div>\n  </li>\n</ul>\n"
            },] },
];
UserBoxComponent.ctorParameters = function () { return [
    { type: UserService, },
    { type: router.Router, },
]; };
var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(breadServ) {
        var _this = this;
        this.breadServ = breadServ;
        this.display = false;
        this.header = '';
        this.description = '';
        this.levels = [];
        this.breadServ.getCurrent().subscribe(function (data) {
            _this.display = data.display;
            _this.header = data.header;
            _this.description = data.description;
            _this.levels = data.levels;
        });
    }
    return BreadcrumbComponent;
}());
BreadcrumbComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'app-breadcrumb',
                template: "<section class=\"content-header\" *ngIf=\"display\">\n  <h1>\n    {{ header }}\n    <small>{{ description }}</small>\n  </h1>\n  <ol class=\"breadcrumb\">\n    <ng-container *ngFor=\"let item of levels\">\n      <li [class.active]=\"item.active\">\n        <a [routerLink]=\"item.link\">\n          <i *ngIf=\"item.icon !=null\" class=\"fa fa-{{item.icon}}\"></i> {{ item.title }}\n        </a>\n      </li>\n    </ng-container>\n  </ol>\n</section>\n"
            },] },
];
BreadcrumbComponent.ctorParameters = function () { return [
    { type: BreadcrumbService, },
]; };
var ComponentLoaderComponent = /** @class */ (function () {
    function ComponentLoaderComponent(_factoryResolver) {
        this._factoryResolver = _factoryResolver;
        this.class_component = null;
        this.data = null;
        this.componentRef = null;
    }
    ComponentLoaderComponent.prototype.ngOnInit = function () {
        var factory = this._factoryResolver.resolveComponentFactory(this.class_component);
        this.componentRef = this.viewContainerRef.createComponent(factory);
        this.setComponentData(this.data);
    };
    ComponentLoaderComponent.prototype.ngOnChanges = function (changes) {
        this.setComponentData(changes);
    };
    ComponentLoaderComponent.prototype.setComponentData = function (changes) {
        if (this.componentRef) {
            Object.assign(this.componentRef.instance, changes);
            this.componentRef.instance.ngOnChanges(changes);
        }
    };
    ComponentLoaderComponent.prototype.ngOnDestroy = function () {
        if (this.componentRef) {
            this.componentRef.destroy();
        }
    };
    return ComponentLoaderComponent;
}());
ComponentLoaderComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'app-component-loader',
                encapsulation: core.ViewEncapsulation.None,
                template: '<ng-container #destination ></ng-container>'
            },] },
];
ComponentLoaderComponent.ctorParameters = function () { return [
    { type: core.ComponentFactoryResolver, },
]; };
ComponentLoaderComponent.propDecorators = {
    "class_component": [{ type: core.Input },],
    "data": [{ type: core.Input },],
    "viewContainerRef": [{ type: core.ViewChild, args: ['destination', { read: core.ViewContainerRef },] },],
};
function HttpLoaderFactory(httpClient) {
    return new httpLoader.TranslateHttpLoader(httpClient, 'assets/i18n/', '.json');
}
var ɵ0 = (HttpLoaderFactory);
var NgxAdminLteModule = /** @class */ (function () {
    function NgxAdminLteModule() {
    }
    return NgxAdminLteModule;
}());
NgxAdminLteModule.decorators = [
    { type: core.NgModule, args: [{
                declarations: [
                    SafeHtmlPipe,
                    BreadcrumbComponent,
                    AppHeaderComponent,
                    LogoComponent,
                    AppFooterComponent,
                    MenuAsideComponent,
                    ControlSidebarComponent,
                    MessagesBoxComponent,
                    NotificationBoxComponent,
                    TasksBoxComponent,
                    UserBoxComponent,
                    ComponentLoaderComponent,
                    LayoutAuthComponent,
                    LayoutLoginComponent,
                    LayoutRegisterComponent
                ],
                imports: [
                    platformBrowser.BrowserModule,
                    http.HttpModule,
                    router.RouterModule,
                    angular2Toaster.ToasterModule,
                    http$1.HttpClientModule,
                    core$1.TranslateModule.forRoot({
                        loader: {
                            provide: core$1.TranslateLoader,
                            useFactory: ɵ0,
                            deps: [http$1.HttpClient]
                        }
                    }),
                ],
                exports: [
                    SafeHtmlPipe,
                ],
                providers: [
                    UserService,
                    MenuService,
                    LogoService,
                    FooterService,
                    BreadcrumbService,
                    MessagesService,
                    CanActivateGuard,
                    NotificationsService,
                    TranslateService$1,
                    LoggerService,
                    ControlSidebarService
                ]
            },] },
];
NgxAdminLteModule.ctorParameters = function () { return []; };

exports.NgxAdminLteModule = NgxAdminLteModule;
exports.BreadcrumbService = BreadcrumbService;
exports.CanActivateGuard = CanActivateGuard;
exports.LoggerService = LoggerService;
exports.MessagesService = MessagesService;
exports.NotificationsService = NotificationsService;
exports.RestService = RestService;
exports.TranslateService = TranslateService$1;
exports.UserService = UserService;
exports.MenuService = MenuService;
exports.LogoService = LogoService;
exports.FooterService = FooterService;
exports.ControlSidebarService = ControlSidebarService;
exports.LayoutAuthComponent = LayoutAuthComponent;
exports.LayoutLoginComponent = LayoutLoginComponent;
exports.LayoutRegisterComponent = LayoutRegisterComponent;
exports.Message = Message;
exports.Preferencies = Preferencies;
exports.User = User;
exports.Notification = Notification;
exports.ɵa = HttpLoaderFactory;
exports.ɵb = SafeHtmlPipe;
exports.ɵf = AppFooterComponent;
exports.ɵd = AppHeaderComponent;
exports.ɵc = BreadcrumbComponent;
exports.ɵm = ComponentLoaderComponent;
exports.ɵh = ControlSidebarComponent;
exports.ɵe = LogoComponent;
exports.ɵg = MenuAsideComponent;
exports.ɵi = MessagesBoxComponent;
exports.ɵj = NotificationBoxComponent;
exports.ɵk = TasksBoxComponent;
exports.ɵl = UserBoxComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-admin-lte.umd.js.map
