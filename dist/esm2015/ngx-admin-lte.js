import { Injectable, Component, Pipe, Input, ComponentFactoryResolver, ViewContainerRef, ViewChild, ViewEncapsulation, NgModule } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { ReplaySubject as ReplaySubject$1, Subject } from 'rxjs/Rx';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { Http, Headers, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { ToasterService, ToasterConfig, ToasterModule } from 'angular2-toaster/angular2-toaster';
import { DomSanitizer, BrowserModule } from '@angular/platform-browser';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BreadcrumbService {
    constructor() {
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
        this.current = new ReplaySubject(1);
        this.clear();
    }
    /**
     * @param {?} data
     * @return {?}
     */
    setCurrent(data) {
        this.current.next(data);
    }
    /**
     * @return {?}
     */
    getCurrent() {
        return this.current;
    }
    /**
     * @return {?}
     */
    clear() {
        this.setCurrent(this.initialData);
    }
}
BreadcrumbService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
BreadcrumbService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class User {
    /**
     * @param {?=} data
     */
    constructor(data = {}) {
        this.connected = false;
        this.firstname = data.firstname || '';
        this.lastname = data.lastname || '';
        this.email = data.email || '';
        this.avatarUrl = data.avatarUrl || '';
        this.creationDate = data.creation_date || Date.now();
        this.preferredLang = data.preferredLang || null;
        this.connected = data.connected || false;
    }
    /**
     * @return {?}
     */
    getName() {
        return this.firstname + ' ' + this.lastname;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class UserService {
    /**
     * @param {?} router
     */
    constructor(router) {
        this.router = router;
        this.current = new ReplaySubject$1(1);
    }
    /**
     * @param {?} user
     * @return {?}
     */
    setCurrent(user) {
        this.current.next(user);
    }
    /**
     * @return {?}
     */
    getCurrent() {
        return this.current;
    }
    /**
     * @return {?}
     */
    logout() {
        if (this.logoutAction) {
            this.logoutAction();
        }
        else {
            const /** @type {?} */ user = new User();
            user.connected = false;
            this.setCurrent(user);
            this.router.navigate(['login']);
        }
    }
}
UserService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
UserService.ctorParameters = () => [
    { type: Router, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CanActivateGuard {
    /**
     * @param {?} router
     * @param {?} userService
     */
    constructor(router, userService) {
        this.router = router;
        this.userService = userService;
        this.connected = false;
        this.userService.getCurrent().subscribe((user) => {
            this.connected = user.connected;
        });
    }
    /**
     * @return {?}
     */
    canActivate() {
        // test here if you user is logged
        if (!this.connected) {
            this.router.navigate(['login']);
        }
        return this.connected;
    }
}
CanActivateGuard.decorators = [
    { type: Injectable },
];
/** @nocollapse */
CanActivateGuard.ctorParameters = () => [
    { type: Router, },
    { type: UserService, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const langs = ['en', 'fr', 'ru', 'he', 'zh', 'pt', 'it'];
const langmatch = /en|fr|ru|he|zh|pt|it/;
class TranslateService$1 {
    /**
     * @param {?} userServ
     * @param {?} translate
     */
    constructor(userServ, translate) {
        this.userServ = userServ;
        this.translate = translate;
        this.lang = 'us';
        translate.addLangs(langs);
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');
        this.userServ.getCurrent().subscribe((user) => {
            this.currentUser = user;
            // the lang to use, if the lang isn't available, it will use the current loader to get them
            const /** @type {?} */ browserLang = this.translate.getBrowserLang();
            const /** @type {?} */ browserCultureLang = this.translate.getBrowserCultureLang();
            console.log('Detected browser language: "' + browserCultureLang + '"');
            // check if current User has a Preferred Language set, and it differs from his browser lang
            let /** @type {?} */ useLang = 'en';
            const /** @type {?} */ prefLang = (this.currentUser) ? this.currentUser.preferredLang : null;
            if (!prefLang) {
                useLang = browserLang.match(langmatch) ? browserLang : 'en';
            }
            else {
                console.log('Detected User preferred language: "' + prefLang + '"');
                useLang = prefLang.match(langmatch) ? prefLang : 'en';
            }
            this.translate.use(useLang);
            console.log('Translation language has been set to: "' + useLang + '"');
            // translate.use( 'ru' );
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // TODO
    }
    /**
     * @return {?}
     */
    getTranslate() {
        return this.translate;
    }
}
TranslateService$1.decorators = [
    { type: Injectable },
];
/** @nocollapse */
TranslateService$1.ctorParameters = () => [
    { type: UserService, },
    { type: TranslateService, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LoggerService {
    /**
     * @param {?} translate
     */
    constructor(translate) {
        this.translate = translate;
    }
    /**
     * @param {?} component
     * @param {?=} msg
     * @param {?=} i18nRef
     * @param {?=} data
     * @return {?}
     */
    log(component, msg, i18nRef, data) {
        // here we should test some environment config to show or not the log
        {
            if (i18nRef) {
                let /** @type {?} */ params = {};
                if (data) {
                    params = (data[0]) ? { 0: data[0] } : params;
                    params = (data[1]) ? { 0: data[0], 1: data[1] } : params;
                    params = (data[2]) ? { 0: data[0], 1: data[1], 2: data[2] } : params;
                }
                this.translate.getTranslate().get(i18nRef, params).subscribe((res) => {
                    console.log(component + ': ' + res);
                });
            }
            else {
                console.log(component + ': ' + msg);
            }
        }
    }
}
LoggerService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
LoggerService.ctorParameters = () => [
    { type: TranslateService$1, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MessagesService {
    constructor() {
        this.messagesList = [];
        this.newMessages = new Subject();
        this.messages = new ReplaySubject$1(1);
        this.updates = new Subject();
        this.create = new Subject();
        // recois des operation, et les fais sur la liste interne, puis diffuse le resultat sur messages
        this.updates.subscribe((ope) => {
            this.messagesList = ope(this.messagesList);
            console.log(this.messagesList);
            this.messages.next(this.messagesList);
        });
        this.newMessages
            .map(function (message) {
            return (messages) => {
                return messages.concat(message);
            };
        })
            .subscribe(this.updates);
    }
    /**
     * @param {?} message
     * @return {?}
     */
    addMessage(message) {
        this.newMessages.next(message);
    }
}
MessagesService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
MessagesService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NotificationsService {
    constructor() {
        this.notificationsList = [];
        this.newNotifications = new Subject();
        this.notifications = new ReplaySubject$1(1);
        this.updates = new Subject();
        this.create = new Subject();
        // recois des operation, et les fais sur la liste interne, puis diffuse le resultat sur notifications
        this.updates.subscribe((ope) => {
            this.notificationsList = ope(this.notificationsList);
            console.log(this.notificationsList);
            this.notifications.next(this.notificationsList);
        });
        this.newNotifications
            .map(function (notification) {
            return (notifications) => {
                return notifications.concat(notification);
            };
        })
            .subscribe(this.updates);
    }
    /**
     * @param {?} notification
     * @return {?}
     */
    addNotification(notification) {
        this.newNotifications.next(notification);
    }
}
NotificationsService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
NotificationsService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class RestService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.modelName = 'to-configure';
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    /**
     * @param {?} url
     * @return {?}
     */
    setApiUrl(url) {
        this.serverWithApiUrl = url;
    }
    /**
     * @param {?=} maxtime
     * @return {?}
     */
    getAllFromLS(maxtime = 0) {
        const /** @type {?} */ json = localStorage.getItem('rest_all_' + this.modelName);
        if (json) {
            const /** @type {?} */ obj = JSON.parse(json);
            if (obj && (obj.date < (Date.now() - maxtime))) {
                return obj;
            }
        }
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getFromCache(id) {
        if (this.lastGetAll) {
            return this.lastGetAll.find((unit) => unit.id === id);
        }
        else {
            return null;
        }
    }
    /**
     * @return {?}
     */
    getActionUrl() {
        return this.serverWithApiUrl + this.modelName + '/';
    }
    /**
     * @return {?}
     */
    getAll() {
        return this.http.get(this.getActionUrl(), { headers: this.headers })
            .map((response) => {
            // getting an array having the same name as the model
            const /** @type {?} */ data = response.json()[this.modelName];
            // transforming the array from indexed to associative
            const /** @type {?} */ tab = data.records.map((elem) => {
                const /** @type {?} */ unit = {};
                // using the columns order and number to rebuild the object
                data.columns.forEach((champ, index) => {
                    unit[champ] = elem[index];
                });
                return unit;
            });
            this.lastGetAll = tab;
            const /** @type {?} */ obj = {
                data: tab,
                date: Date.now()
            };
            localStorage.setItem('rest_all_' + this.modelName, JSON.stringify(obj));
            return tab;
        })
            .catch(this.handleError);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    get(id) {
        return this.http.get(this.getActionUrl() + id, { headers: this.headers })
            .map((response) => {
            const /** @type {?} */ data = response.json();
            this.lastGet = data;
            return data;
        })
            .catch(this.handleError);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    add(item) {
        const /** @type {?} */ toAdd = JSON.stringify(item);
        return this.http.post(this.getActionUrl(), toAdd, { headers: this.headers })
            .map((response) => response.json())
            .catch(this.handleError);
    }
    /**
     * @param {?} tab
     * @return {?}
     */
    addAll(tab) {
        const /** @type {?} */ toAdd = JSON.stringify(tab);
        return this.http.post(this.getActionUrl(), toAdd, { headers: this.headers })
            .map((response) => response.json())
            .catch(this.handleError);
    }
    /**
     * @param {?} id
     * @param {?} itemToUpdate
     * @return {?}
     */
    update(id, itemToUpdate) {
        return this.http.put(this.getActionUrl() + id, JSON.stringify(itemToUpdate), { headers: this.headers })
            .map((response) => response.json())
            .catch(this.handleError);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    delete(id) {
        return this.http.delete(this.getActionUrl() + id, { headers: this.headers })
            .catch(this.handleError);
    }
    /**
     * @param {?} error
     * @return {?}
     */
    handleError(error) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
RestService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
RestService.ctorParameters = () => [
    { type: Http, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MenuService {
    /**
     * @param {?} router
     */
    constructor(router) {
        this.router = router;
        this.current = new ReplaySubject$1(1);
    }
    /**
     * @param {?} menu
     * @return {?}
     */
    setCurrent(menu) {
        this.current.next(menu);
    }
    /**
     * @return {?}
     */
    getCurrent() {
        return this.current;
    }
}
MenuService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
MenuService.ctorParameters = () => [
    { type: Router, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LogoService {
    constructor() {
        this.current = new ReplaySubject$1(1);
        this.logo = {
            html_mini: '<b>A</b>LT',
            html_lg: '<b>Admin</b>LTE'
        };
        this.setCurrent(this.logo);
    }
    /**
     * @param {?} logo
     * @return {?}
     */
    setCurrent(logo) {
        if (logo.small || logo.big) {
            console.log('NgxAdminLTE: LogoService setCurrent: small and big are now deprecated in logo, use html_mini and html_lg');
        }
        this.current.next(logo);
    }
    /**
     * @return {?}
     */
    getCurrent() {
        return this.current;
    }
}
LogoService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
LogoService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FooterService {
    constructor() {
        this.current = new ReplaySubject$1(1);
        this.default = {
            right_part: 'Anything you want',
            left_part: `<strong>Copyright &copy; 2016 <a href="#" routerLink="/">Company X</a>.
    	</strong> All rights reserved.`
        };
    }
    /**
     * @param {?} footer
     * @return {?}
     */
    setCurrent(footer) {
        this.current.next(footer);
    }
    /**
     * @return {?}
     */
    getCurrent() {
        return this.current;
    }
}
FooterService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
FooterService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ControlSidebarService {
    constructor() {
        this.current = new ReplaySubject$1(1);
        this.default = false;
        this.current_value = false;
        this.current.next(this.default);
    }
    /**
     * @return {?}
     */
    getCurrent() {
        return this.current;
    }
    /**
     * @return {?}
     */
    open() {
        this.current_value = true;
        this.current.next(this.current_value);
    }
    /**
     * @return {?}
     */
    close() {
        this.current_value = false;
        this.current.next(this.current_value);
    }
    /**
     * @return {?}
     */
    toggle() {
        this.current_value = !this.current_value;
        this.current.next(this.current_value);
    }
}
ControlSidebarService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ControlSidebarService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LayoutAuthComponent {
    /**
     * @param {?} userServ
     * @param {?} menuServ
     * @param {?} toastr
     * @param {?} translate
     * @param {?} route
     */
    constructor(userServ, menuServ, toastr, translate, route) {
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
        const /** @type {?} */ param = route.snapshot.data[0];
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
        this.toastrConfig = new ToasterConfig({
            newestOnTop: true,
            showCloseButton: true,
            tapToDismiss: false
        });
        // this.translate = translate.getTranslate();
        // this.logger = new LoggerService( this.translate );
    }
    /**
     * @param {?} param
     * @param {?} index
     * @param {?=} default_value
     * @return {?}
     */
    paramExistOrDefault(param, index, default_value = true) {
        return param.hasOwnProperty(index) ? param[index] : default_value;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        //  sedding the resize event, for AdminLTE to place the height
        const /** @type {?} */ ie = this.detectIE();
        if (!ie) {
            window.dispatchEvent(new Event('resize'));
        }
        else {
            // solution for IE from @hakonamatata
            const /** @type {?} */ event = document.createEvent('Event');
            event.initEvent('resize', false, true);
            window.dispatchEvent(event);
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
        this.menuServ.getCurrent().subscribe((menu) => {
            this.mylinks = menu;
        });
        document.body.className = 'hold-transition ' + this.skin + ' sidebar-mini';
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        document.body.className = '';
    }
    /**
     * @return {?}
     */
    detectIE() {
        const /** @type {?} */ ua = window.navigator.userAgent;
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
    }
}
LayoutAuthComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-layouts-auth',
                template: `<div class="wrapper">
	<app-header
		[display_messages]='display_messages'
		[display_notifications]='display_notifications'
		[display_tasks]='display_tasks'
		[display_user]='display_user'
		[display_control]='display_control'
		[display_logout]='display_logout'
		[header_components]='header_components'
    >{{ 'LOADING' | translate }} header...</app-header>
	<app-menu-aside
	[links]="mylinks"
	[display_menu_user]='display_menu_user'
	[display_menu_search]='display_menu_search'
	>{{ 'LOADING' | translate }} menu...</app-menu-aside>
	<!-- Content Wrapper. Contains page content -->
	<div class="content-wrapper">
		<!-- Content Header (Page header) -->
		<toaster-container [toasterconfig]="toastrConfig"></toaster-container>
		<app-breadcrumb></app-breadcrumb>
		<!-- Main content -->
		<section class="content">
			<div [ngClass]="{'box': boxed_style, 'box-default': boxed_style}">
				<div [ngClass]="{'box-body': boxed_style}">
					<router-outlet></router-outlet>
				</div>
			</div>
		</section>
		<!-- /.content -->
	</div>
	<!-- /.content-wrapper -->
	<app-footer>{{ 'LOADING' | translate }} footer...</app-footer>
	<app-control-sidebar>{{ 'LOADING' | translate }} control sidebar...</app-control-sidebar>
</div>
<!-- ./wrapper -->
`
            },] },
];
/** @nocollapse */
LayoutAuthComponent.ctorParameters = () => [
    { type: UserService, },
    { type: MenuService, },
    { type: ToasterService, },
    { type: TranslateService$1, },
    { type: ActivatedRoute, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LayoutLoginComponent {
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        window.dispatchEvent(new Event('resize'));
        document.body.className = 'hold-transition login-page';
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        document.body.className = '';
    }
}
LayoutLoginComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-layout-login',
                styles: ['./login.css'],
                template: `<div class="login-box" >
  <div class="login-logo">
    <app-logo [hide]='"mini"'></app-logo>
  </div>
  <!-- /.login-logo -->
  <div class="login-box-body">
    <router-outlet></router-outlet>
  </div>
  <!-- /.login-box-body -->
</div>
<!-- /.login-box -->
`
            },] },
];
/** @nocollapse */
LayoutLoginComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LayoutRegisterComponent {
    constructor() {
        // TODO
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // TODO
    }
}
LayoutRegisterComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-layout-register',
                template: `<body class="hold-transition register-page">
<div class="register-box">
  <div class="register-logo">
    <app-logo></app-logo>
  </div>
  <div class="register-box-body">
    <router-outlet></router-outlet>
  </div>
  <!-- /.form-box -->
</div>
<!-- /.register-box -->
</body>
`
            },] },
];
/** @nocollapse */
LayoutRegisterComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Message {
    /**
     * @param {?=} data
     */
    constructor(data = {}) {
        this.content = data.content || '';
        this.title = data.title || '';
        this.author = data.author || null;
        this.destination = data.destination || null;
        this.date = data.date || Date.now();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Preferencies {
    /**
     * @param {?=} data
     */
    constructor(data = {}) {
        this.avatarUrl = data.avatarUrl || '';
        this.preferredLang = data.preferredLang || null;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Notification {
    /**
     * @param {?=} data
     */
    constructor(data = {}) {
        this.content = data.content || '';
        this.class = data.class || '';
        this.link = data.link || '';
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SafeHtmlPipe {
    /**
     * @param {?} sanitized
     */
    constructor(sanitized) {
        this.sanitized = sanitized;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    }
}
SafeHtmlPipe.decorators = [
    { type: Pipe, args: [{ name: 'safeHtml' },] },
];
/** @nocollapse */
SafeHtmlPipe.ctorParameters = () => [
    { type: DomSanitizer, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AppHeaderComponent {
    /**
     * @param {?} userService
     * @param {?} sidebarService
     */
    constructor(userService, sidebarService) {
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
    /**
     * @return {?}
     */
    logout() {
        this.userService.logout();
    }
    /**
     * @return {?}
     */
    toggleSidebar() {
        this.sidebarService.toggle();
    }
}
AppHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-header',
                styles: [``],
                template: `<!-- Main Header -->
<header class="main-header">
	<!-- Logo -->
	<app-logo></app-logo>
	<!-- Header Navbar -->
	<nav class="navbar navbar-static-top" role="navigation">
		<!-- Sidebar toggle button-->
		<a class="sidebar-toggle" data-toggle="offcanvas" role="button">
			<!-- ADMIN LTE 2.4.0  <a class="sidebar-toggle" data-toggle="push-menu" role="button"> -->
      <span class="sr-only">Toggle navigation</span>
		</a>
		<!-- Navbar Right Menu -->
		<div class="navbar-custom-menu">
			<ul class="nav navbar-nav" >
				<!-- Messages: style can be found in dropdown.less-->
				<li class="dropdown messages-menu messagesBox" *ngIf="display_messages"></li>
				<!-- Notifications Menu -->
				<li class="dropdown notifications-menu notificationsBox" *ngIf="display_notifications"></li>
				<!-- Tasks Menu -->
				<li class="dropdown tasks-menu tasksBox" *ngIf="display_tasks"></li>
				<!-- User Account Menu -->
        <li class="dropdown user user-menu userBox" *ngIf="display_user"></li>
        <li *ngIf="display_logout">
					<button class="btn btn-primary btn-lg" (click)="logout()">
						<i class="fa fa-power-off"></i>
					</button>
				</li>
				<!-- Control Sidebar Toggle Button -->
				<li>
					<a class="toggle-sidebar-right" role="button" *ngIf="display_control">
						<i class="fa fa-gears" (click)="toggleSidebar()"></i>
					</a>
				</li>
				<!-- Additionnal components -->
				<ng-container *ngFor="let widget of header_components">
					<li>
						<app-component-loader [class_component]="widget.class" [data]="widget.data"></app-component-loader>
					</li>
				</ng-container>
			</ul>
		</div>
	</nav>
</header>
`
            },] },
];
/** @nocollapse */
AppHeaderComponent.ctorParameters = () => [
    { type: UserService, },
    { type: ControlSidebarService, },
];
AppHeaderComponent.propDecorators = {
    "display_messages": [{ type: Input },],
    "display_notifications": [{ type: Input },],
    "display_tasks": [{ type: Input },],
    "display_user": [{ type: Input },],
    "display_control": [{ type: Input },],
    "display_logout": [{ type: Input },],
    "header_components": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LogoComponent {
    /**
     * @param {?} logoServ
     */
    constructor(logoServ) {
        this.logoServ = logoServ;
        this.hide = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.logoServ.getCurrent().subscribe((logo) => {
            this.logo = logo;
        });
    }
}
LogoComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-logo',
                template: `<!-- Logo -->
<a href="#" routerLink="/" class="logo"> <!-- mini logo for sidebar mini 50x50 pixels -->
	<ng-container *ngIf="hide !== 'mini'">
		<ng-container *ngIf="logo?.html_mini; else oldsyntaxmini">
			<span class="logo-mini" [innerHtml]="logo?.html_mini | safeHtml"></span>
		</ng-container>
		<ng-template #oldsyntaxmini>
			<span class="logo-mini"><b>{{logo.small.bold}}</b>{{logo.small.normal}}</span> <!-- logo for regular state and mobile devices -->
		</ng-template>
	</ng-container>
	<ng-container *ngIf="hide !== 'lg'">
		<ng-container *ngIf="logo?.html_lg; else oldsyntaxlg">
			<span class="logo-lg" [innerHtml]="logo?.html_lg | safeHtml"></span>
		</ng-container>
		<ng-template #oldsyntaxlg>
			<span class="logo-lg" ><b>{{logo.big.bold}}</b>{{logo.big.normal}}</span>
		</ng-template>
	</ng-container>
</a>
`
            },] },
];
/** @nocollapse */
LogoComponent.ctorParameters = () => [
    { type: LogoService, },
];
LogoComponent.propDecorators = {
    "hide": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AppFooterComponent {
    /**
     * @param {?} footerServ
     */
    constructor(footerServ) {
        this.footerServ = footerServ;
        this.footer = {};
        this.footerServ.getCurrent().subscribe(footer => this.footer = footer);
    }
}
AppFooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-footer',
                styles: [``],
                template: `<!-- Main Footer -->
<footer class="main-footer">
	<!-- To the right -->
	<div class="pull-right hidden-xs" [innerHTML]="footer?.right_part | safeHtml"></div>
	<!-- Default to the left -->
	<div [innerHtml]="footer?.left_part | safeHtml"></div>
</footer>
`
            },] },
];
/** @nocollapse */
AppFooterComponent.ctorParameters = () => [
    { type: FooterService, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MenuAsideComponent {
    /**
     * @param {?} userServ
     * @param {?} router
     */
    constructor(userServ, router) {
        this.userServ = userServ;
        this.router = router;
        this.currentUser = new User();
        this.links = [];
        this.display_menu_user = true;
        this.display_menu_search = true;
        this.menu_title = '';
        // getting the current url
        this.router.events.subscribe((evt) => this.currentUrl = evt.url);
        this.userServ.getCurrent().subscribe((user) => this.currentUser = user);
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.menu_title !== '') {
            console.log('menu_title is deprecated please use "header" in your menuService links configuration');
        }
    }
}
MenuAsideComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-menu-aside',
                styles: [``],
                template: `<!-- Left side column. contains the logo and sidebar -->
<aside class="main-sidebar">
	<!-- sidebar: style can be found in sidebar.less -->
	<section class="sidebar" >
		<!-- Sidebar user panel (optional) -->
		<div *ngIf="display_menu_user" class="user-panel">
			<div class="pull-left image" *ngIf="currentUser?.avatarUrl" >
				<img [src]="currentUser?.avatarUrl" class="img-circle"
					[alt]="currentUser?.getName()">
			</div>
			<div class="pull-left info">
				<p>{{currentUser?.getName()}}</p>
				<!-- Status -->
				<a href="#"><i class="fa fa-circle text-success"></i> Online</a>
			</div>
		</div>
		<!-- search form (Optional) -->
		<form *ngIf="display_menu_search" action="#" method="get" class="sidebar-form">
			<div class="input-group">
				<input type="text" name="q" class="form-control"
					placeholder="Search..."> <span class="input-group-btn">
					<button type="submit" name="search" id="search-btn"
						class="btn btn-flat">
						<i class="fa fa-search"></i>
					</button>
				</span>
			</div>
		</form>
		<!-- /.search form -->
		<!-- Sidebar Menu -->
		<ul class="sidebar-menu" data-widget="tree">
			<!-- DEPRECATED since 1.0.1 -->
			<ng-container *ngIf="menu_title !== '' ">
				<li class="header">{{menu_title}}</li>
			</ng-container>
			<!-- /DEPRECATED since 1.0.1 -->
			<ng-container *ngFor="let item of links">
				<!-- HEADER -->
				<ng-container *ngIf="item.header">
					<li class="header">{{item.header}}</li>
				</ng-container>
				<!-- COMPONENT -->
				<ng-container *ngIf="item.class">
					<li>
						<app-component-loader [class_component]="item.class" [data]="item.data"></app-component-loader>
					</li>
				</ng-container>
				<!-- LINK -->
				<ng-container *ngIf="item.link">
					<li [class.active]="item.link[0] === currentUrl">
						<a *ngIf="!item.external" [routerLink]="item.link">
							<i class="fa fa-{{item.icon}}"></i>
							<span>{{item.title}}</span>
						</a>
						<a *ngIf="item.external" [href]="item.link" [target]="item.target">
							<i class="fa fa-{{item.icon}}"></i>
							<span>{{item.title}}</span>
						</a>
					</li>
				</ng-container>
				<!-- LINK WITH SUBLINKS -->
				<ng-container *ngIf="item.sublinks">
					<li class="treeview">
						<a href="#">
							<i *ngIf="item.icon" class="fa fa-{{item.icon}}"></i>
							<span>{{item.title}}</span>
							<span class="pull-right-container">
								<i class="fa fa-angle-left pull-right"></i>
							</span>
							<!--i class="fa fa-angle-left pull-right"></i-->
						</a>
						<ul class="treeview-menu">
							<ng-container *ngFor="let subitem of item.sublinks">
								<li [class.active]="subitem.link[0] === currentUrl">
									<a *ngIf="!subitem.external" [routerLink]="subitem.link">
										<i *ngIf="subitem.icon" class="fa fa-{{subitem.icon}}"></i>
										<span>{{subitem.title}}</span>
									</a>
									<a *ngIf="subitem.external" [href]="subitem.link" [target]="subitem.target">
										<i *ngIf="subitem.icon" class="fa fa-{{subitem.icon}}"></i>
										<span>{{subitem.title}}</span>
									</a>
								</li>
							</ng-container>
						</ul>
					</li>
				</ng-container>
			</ng-container>
		</ul>
		<!-- /.sidebar-menu -->
	</section>
	<!-- /.sidebar -->
</aside>
`
            },] },
];
/** @nocollapse */
MenuAsideComponent.ctorParameters = () => [
    { type: UserService, },
    { type: Router, },
];
MenuAsideComponent.propDecorators = {
    "links": [{ type: Input },],
    "display_menu_user": [{ type: Input },],
    "display_menu_search": [{ type: Input },],
    "menu_title": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ControlSidebarComponent {
    /**
     * @param {?} _sidebar
     */
    constructor(_sidebar) {
        this._sidebar = _sidebar;
    }
}
ControlSidebarComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-control-sidebar',
                styles: [``],
                template: `<!-- Control Sidebar -->
<aside [ngClass]="{
	'control-sidebar': true,
	'control-sidebar-dark': true,
	'control-sidebar-open': _sidebar.getCurrent() | async
}" >
	<!-- Create the tabs -->
	<ul class="nav nav-tabs nav-justified control-sidebar-tabs">
		<li class="active"><a href="#control-sidebar-home-tab"
			data-toggle="tab"><i class="fa fa-home"></i></a></li>
		<li><a href="#control-sidebar-settings-tab" data-toggle="tab"><i
				class="fa fa-gears"></i></a></li>
	</ul>
	<!-- Tab panes -->
	<div class="tab-content">
		<!-- Home tab content -->
		<div class="tab-pane active" id="control-sidebar-home-tab">
			<h3 class="control-sidebar-heading">Recent Activity</h3>
			<ul class="control-sidebar-menu">
				<li><a href="javascript::;"> <i
						class="menu-icon fa fa-birthday-cake bg-red"></i>
						<div class="menu-info">
							<h4 class="control-sidebar-subheading">Langdon's Birthday</h4>
							<p>Will be 23 on April 24th</p>
						</div>
				</a></li>
			</ul>
			<!-- /.control-sidebar-menu -->
			<h3 class="control-sidebar-heading">Tasks Progress</h3>
			<ul class="control-sidebar-menu">
				<li><a href="javascript::;">
						<h4 class="control-sidebar-subheading">
							Custom Template Design <span
								class="label label-danger pull-right">70%</span>
						</h4>
						<div class="progress progress-xxs">
							<div class="progress-bar progress-bar-danger" style="width: 70%"></div>
						</div>
				</a></li>
			</ul>
			<!-- /.control-sidebar-menu -->
		</div>
		<!-- /.tab-pane -->
		<!-- Stats tab content -->
		<div class="tab-pane" id="control-sidebar-stats-tab">Stats Tab
			Content</div>
		<!-- /.tab-pane -->
		<!-- Settings tab content -->
		<div class="tab-pane" id="control-sidebar-settings-tab">
			<form method="post">
				<h3 class="control-sidebar-heading">General Settings</h3>
				<div class="form-group">
					<label class="control-sidebar-subheading"> Report panel
						usage <input type="checkbox" class="pull-right" checked>
					</label>
					<p>Some information about this general settings option</p>
				</div>
				<!-- /.form-group -->
			</form>
		</div>
		<!-- /.tab-pane -->
	</div>
</aside>
<!-- /.control-sidebar -->
<!-- Add the sidebar's background. This div must be placed
               immediately after the control sidebar -->
<div class="control-sidebar-bg"></div>
`
            },] },
];
/** @nocollapse */
ControlSidebarComponent.ctorParameters = () => [
    { type: ControlSidebarService, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MessagesBoxComponent {
    /**
     * @param {?} msgServ
     * @param {?} logger
     */
    constructor(msgServ, logger) {
        this.msgServ = msgServ;
        this.logger = logger;
        this.msgLength = { 0: 0 };
        this.messages = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // Every incoming message changes entire local message Array.
        this.msgServ.messages.subscribe((msg) => {
            this.logger.log('MsgBox', null, 'RECEIVED.MESSAGE', null);
            this.messages = msg;
            this.msgLength = { 0: this.messages.length };
        });
    }
}
MessagesBoxComponent.decorators = [
    { type: Component, args: [{
                /* tslint:disable */
                selector: '.messagesBox',
                /* tslint:enable */
                styles: [``],
                template: `<!-- Menu toggle button -->
<a href="#" class="dropdown-toggle" data-toggle="dropdown"> <i
	class="fa fa-envelope-o"></i> <span class="label label-success"
	[innerHTML]="messages.length"></span>
</a>
<ul class="dropdown-menu">
	<li class="header">{{ 'MSGBOX.COUNT' | translate:msgLength }}</li>
	<li>
		<!-- inner menu: contains the messages -->
		<ul class="menu">
			<li *ngFor="let msg of messages; let i = index">
				<!-- start message --> <a href="#">
					<div class="pull-left">
						<!-- User Image -->
						<img src="{{msg.author.avatarUrl}}" class="img-circle"
							alt="{{ msg.author.getName() }}">
					</div> <!-- Message title and timestamp -->
					<h4>
						{{msg.title}} <small><i class="fa fa-clock-o"></i>
							{{msg.date | date:'yMd' }}</small>
					</h4> <!-- The message -->
					<p>{{msg.content}}</p>
			</a>
			</li>
			<!-- end message -->
		</ul> <!-- /.menu -->
	</li>
	<li class="footer">
    <a href="#">{{ 'MSGBOX.FOOTER' | translate }}</a>
  </li>
</ul>
`
            },] },
];
/** @nocollapse */
MessagesBoxComponent.ctorParameters = () => [
    { type: MessagesService, },
    { type: LoggerService, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NotificationBoxComponent {
    /**
     * @param {?} notifServ
     * @param {?} logger
     */
    constructor(notifServ, logger) {
        this.notifServ = notifServ;
        this.logger = logger;
        this.notifLength = { 0: 0 };
        this.notifications = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // Every incoming notification changes entire local notification Array.
        this.notifServ.notifications.subscribe((notif) => {
            this.logger.log('NotificationBox', null, 'RECEIVED.NOTIFICATION', null);
            this.notifications = notif;
            this.notifLength = { 0: this.notifications.length };
        });
    }
}
NotificationBoxComponent.decorators = [
    { type: Component, args: [{
                /* tslint:disable */
                selector: '.notificationsBox',
                /* tslint:enable */
                styles: [``],
                template: `<!-- Menu toggle button -->
<a href="#" class="dropdown-toggle" data-toggle="dropdown">
	<i class="fa fa-bell-o"></i>
	<span class="label label-warning">{{ notifications.length }}</span>
</a>
<ul class="dropdown-menu">
	<li class="header">{{ 'NOTIFBOX.COUNT' | translate:notifLength }}</li>
	<li>
		<!-- Inner Menu: contains the notifications -->
		<ul class="menu">
			<li *ngFor="let notif of notifications.reverse(); let i = index">
				<a routerLink="{{notif.link}}">
					<i class="{{notif.class}}"></i> {{notif.content}}
				</a>
			</li>
			<!-- end notification -->
		</ul>
	</li>
	<li class="footer">
		<a href="#">
			{{ 'NOTIFBOX.FOOTER' | translate }}
		</a>
	</li>
</ul>
`
            },] },
];
/** @nocollapse */
NotificationBoxComponent.ctorParameters = () => [
    { type: NotificationsService, },
    { type: LoggerService, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TasksBoxComponent {
    constructor() {
        this.tasksLength = { 0: 0 };
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
TasksBoxComponent.decorators = [
    { type: Component, args: [{
                /* tslint:disable */
                selector: '.tasksBox',
                /* tslint:enable */
                styles: [``],
                template: `<!-- Menu Toggle Button -->
<a href="#" class="dropdown-toggle" data-toggle="dropdown"> <i
	class="fa fa-flag-o"></i> <span class="label label-danger">9</span>
</a>
<ul class="dropdown-menu">
	<li class="header">{{ 'TASKBOX.COUNT' | translate:tasksLength }}</li>
	<li>
		<!-- Inner menu: contains the tasks -->
		<ul class="menu">
			<li>
				<!-- Task item --> <a href="#"> <!-- Task title and progress text -->
					<h3>
						Design some buttons <small class="pull-right">20%</small>
					</h3> <!-- The progress bar -->
					<div class="progress xs">
						<!-- Change the css width attribute to simulate progress -->
						<div class="progress-bar progress-bar-aqua" style="width: 20%"
							role="progressbar" aria-valuenow="20" aria-valuemin="0"
							aria-valuemax="100">
							<span class="sr-only">20% Complete</span>
						</div>
					</div>
			</a>
			</li>
			<!-- end task item -->
		</ul>
	</li>
	<li class="footer"><a href="#">{{ 'TASKBOX.FOOTER' | translate
			}}</a></li>
</ul>
`
            },] },
];
/** @nocollapse */
TasksBoxComponent.ctorParameters = () => [];
TasksBoxComponent.propDecorators = {
    "user": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class UserBoxComponent {
    /**
     * @param {?} userServ
     * @param {?} router
     */
    constructor(userServ, router) {
        this.userServ = userServ;
        this.router = router;
        this.currentUser = new User({
            avatarUrl: 'assets/img/user2-160x160.jpg',
            email: 'weber.antoine@outlook.com',
            firstname: 'WEBER',
            lastname: 'Antoine'
        });
        this.logout = () => {
            this.userServ.logout();
        };
        // se connecter au modif du user courant
        this.userServ.getCurrent().subscribe((user) => this.currentUser = user);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // TODO
    }
}
UserBoxComponent.decorators = [
    { type: Component, args: [{
                /* tslint:disable */
                selector: '.userBox',
                /* tslint:enable */
                styles: [``],
                template: `<!-- Menu Toggle Button -->
<a href="#" class="dropdown-toggle" data-toggle="dropdown">
  <!-- The user image in the navbar-->
  <img *ngIf="currentUser.avatarUrl != ''" [src]="currentUser.avatarUrl" class="user-image" [alt]="currentUser.getName()">
  <!-- hidden-xs hides the username on small devices so only the image appears. -->
  <span class="hidden-xs">{{currentUser.getName()}}</span>
</a>
<ul class="dropdown-menu">
  <!-- The user image in the menu -->
  <li class="user-header">
    <img *ngIf="currentUser.avatarUrl != ''" [src]="currentUser.avatarUrl" class="img-circle" [alt]="currentUser.getName()">
    <p>
      {{currentUser.getName()}} - Web Developer
      <small>{{ 'USERBOX.MEMBERSINCE' | translate }} {{currentUser.creationDate}}</small>
    </p>
  </li>
  <!-- Menu Body -->
  <li class="user-body">
    <div class="col-xs-4 text-center">
      <a href="#">Followers</a>
    </div>
    <div class="col-xs-4 text-center">
      <a href="#">Sales</a>
    </div>
    <div class="col-xs-4 text-center">
      <a href="#">Friends</a>
    </div>
  </li>
  <!-- Menu Footer-->
  <li class="user-footer">
    <div class="pull-left">
      <a href="#" class="btn btn-default btn-flat">{{ 'USERBOX.PROFILE' | translate }}</a>
    </div>
    <div class="pull-right">
      <a (click)="logout()" class="btn btn-default btn-flat">{{ 'USERBOX.SIGNOUT' | translate }}</a>
    </div>
  </li>
</ul>
`
            },] },
];
/** @nocollapse */
UserBoxComponent.ctorParameters = () => [
    { type: UserService, },
    { type: Router, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BreadcrumbComponent {
    /**
     * @param {?} breadServ
     */
    constructor(breadServ) {
        this.breadServ = breadServ;
        this.display = false;
        this.header = '';
        this.description = '';
        this.levels = [];
        // getting the data from the services
        this.breadServ.getCurrent().subscribe((data) => {
            this.display = data.display;
            this.header = data.header;
            this.description = data.description;
            this.levels = data.levels;
        });
    }
}
BreadcrumbComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-breadcrumb',
                template: `<section class="content-header" *ngIf="display">
  <h1>
    {{ header }}
    <small>{{ description }}</small>
  </h1>
  <ol class="breadcrumb">
    <ng-container *ngFor="let item of levels">
      <li [class.active]="item.active">
        <a [routerLink]="item.link">
          <i *ngIf="item.icon !=null" class="fa fa-{{item.icon}}"></i> {{ item.title }}
        </a>
      </li>
    </ng-container>
  </ol>
</section>
`
            },] },
];
/** @nocollapse */
BreadcrumbComponent.ctorParameters = () => [
    { type: BreadcrumbService, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Component to dynamicly load other component
 */
class ComponentLoaderComponent {
    /**
     * Component initialisation
     * @param {?} _factoryResolver
     */
    constructor(_factoryResolver) {
        this._factoryResolver = _factoryResolver;
        /**
         * class of the component to load
         */
        this.class_component = null;
        /**
         * data to pass to component
         */
        this.data = null;
        /**
         * component reference
         */
        this.componentRef = null;
    }
    /**
     * Lifecycle hook OnInit
     * @return {?}
     */
    ngOnInit() {
        // Build the child component
        const /** @type {?} */ factory = this._factoryResolver.resolveComponentFactory(this.class_component);
        this.componentRef = this.viewContainerRef.createComponent(factory);
        // then give some data
        this.setComponentData(this.data);
    }
    /**
     * Lifecycle hook OnChanges, on modification of data send it to the child
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.setComponentData(changes);
    }
    /**
     * Send data to the inner component
     * @param {?} changes
     * @return {?}
     */
    setComponentData(changes) {
        if (this.componentRef) {
            // send data to component
            Object.assign(this.componentRef.instance, changes);
            // trigger component ngOnChange
            this.componentRef.instance.ngOnChanges(changes);
        }
    }
    /**
     * Lifecycle hook OnDestroy
     * @return {?}
     */
    ngOnDestroy() {
        if (this.componentRef) {
            this.componentRef.destroy();
        }
    }
}
ComponentLoaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-component-loader',
                encapsulation: ViewEncapsulation.None,
                template: '<ng-container #destination ></ng-container>'
            },] },
];
/** @nocollapse */
ComponentLoaderComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver, },
];
ComponentLoaderComponent.propDecorators = {
    "class_component": [{ type: Input },],
    "data": [{ type: Input },],
    "viewContainerRef": [{ type: ViewChild, args: ['destination', { read: ViewContainerRef },] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} httpClient
 * @return {?}
 */
function HttpLoaderFactory(httpClient) {
    return new TranslateHttpLoader(httpClient, 'assets/i18n/', '.json');
}
const ɵ0 = (HttpLoaderFactory);
class NgxAdminLteModule {
}
NgxAdminLteModule.decorators = [
    { type: NgModule, args: [{
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
                    BrowserModule,
                    HttpModule,
                    RouterModule,
                    ToasterModule,
                    HttpClientModule,
                    TranslateModule.forRoot({
                        loader: {
                            provide: TranslateLoader,
                            useFactory: ɵ0,
                            deps: [HttpClient]
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
/** @nocollapse */
NgxAdminLteModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { NgxAdminLteModule, BreadcrumbService, CanActivateGuard, LoggerService, MessagesService, NotificationsService, RestService, TranslateService$1 as TranslateService, UserService, MenuService, LogoService, FooterService, ControlSidebarService, LayoutAuthComponent, LayoutLoginComponent, LayoutRegisterComponent, Message, Preferencies, User, Notification, HttpLoaderFactory as ɵa, SafeHtmlPipe as ɵb, AppFooterComponent as ɵf, AppHeaderComponent as ɵd, BreadcrumbComponent as ɵc, ComponentLoaderComponent as ɵm, ControlSidebarComponent as ɵh, LogoComponent as ɵe, MenuAsideComponent as ɵg, MessagesBoxComponent as ɵi, NotificationBoxComponent as ɵj, TasksBoxComponent as ɵk, UserBoxComponent as ɵl };
//# sourceMappingURL=ngx-admin-lte.js.map
