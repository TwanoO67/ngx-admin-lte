"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var angular2_toaster_1 = require("angular2-toaster/angular2-toaster");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var core_2 = require("@ngx-translate/core");
var http_loader_1 = require("@ngx-translate/http-loader");
var http_2 = require("@angular/common/http");
// AoT requires an exported function for factories
function HttpLoaderFactory(httpClient) {
    return new http_loader_1.TranslateHttpLoader(httpClient, 'assets/i18n/', '.json');
}
exports.HttpLoaderFactory = HttpLoaderFactory;
// Pipes
var safe_html_pipes_1 = require("./pipes/safe-html.pipes");
// Widgets
var app_header_1 = require("./widgets/app-header");
var logo_1 = require("./widgets/logo");
var app_footer_1 = require("./widgets/app-footer");
var menu_aside_1 = require("./widgets/menu-aside");
var control_sidebar_1 = require("./widgets/control-sidebar");
var messages_box_1 = require("./widgets/messages-box");
var notification_box_1 = require("./widgets/notification-box");
var tasks_box_1 = require("./widgets/tasks-box");
var user_box_1 = require("./widgets/user-box");
var breadcrumb_1 = require("./widgets/breadcrumb");
var component_loader_1 = require("./widgets/component-loader");
// Services
var user_service_1 = require("./services/user.service");
var menu_service_1 = require("./services/menu.service");
var logo_service_1 = require("./services/logo.service");
var footer_service_1 = require("./services/footer.service");
var messages_service_1 = require("./services/messages.service");
var can_activate_guard_service_1 = require("./services/can-activate-guard.service");
var notifications_service_1 = require("./services/notifications.service");
var breadcrumb_service_1 = require("./services/breadcrumb.service");
var translate_service_1 = require("./services/translate.service");
var logger_service_1 = require("./services/logger.service");
var control_sidebar_service_1 = require("./services/control-sidebar.service");
// les layouts
var auth_1 = require("./layouts/auth/auth");
var login_component_1 = require("./layouts/login/login.component");
var register_component_1 = require("./layouts/register/register.component");
var NgxAdminLteModule = /** @class */ (function () {
    function NgxAdminLteModule() {
    }
    NgxAdminLteModule = __decorate([
        core_1.NgModule({
            declarations: [
                // PIPES
                safe_html_pipes_1.SafeHtmlPipe,
                // WIDGETS
                breadcrumb_1.BreadcrumbComponent,
                app_header_1.AppHeaderComponent,
                logo_1.LogoComponent,
                app_footer_1.AppFooterComponent,
                menu_aside_1.MenuAsideComponent,
                control_sidebar_1.ControlSidebarComponent,
                messages_box_1.MessagesBoxComponent,
                notification_box_1.NotificationBoxComponent,
                tasks_box_1.TasksBoxComponent,
                user_box_1.UserBoxComponent,
                component_loader_1.ComponentLoaderComponent,
                // LAYOUTS
                auth_1.LayoutAuthComponent,
                login_component_1.LayoutLoginComponent,
                register_component_1.LayoutRegisterComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule,
                angular2_toaster_1.ToasterModule,
                http_2.HttpClientModule,
                core_2.TranslateModule.forRoot({
                    loader: {
                        provide: core_2.TranslateLoader,
                        useFactory: (HttpLoaderFactory),
                        deps: [http_2.HttpClient]
                    }
                }),
            ],
            exports: [
                safe_html_pipes_1.SafeHtmlPipe,
            ],
            providers: [
                // SERVICES
                user_service_1.UserService,
                menu_service_1.MenuService,
                logo_service_1.LogoService,
                footer_service_1.FooterService,
                breadcrumb_service_1.BreadcrumbService,
                messages_service_1.MessagesService,
                can_activate_guard_service_1.CanActivateGuard,
                notifications_service_1.NotificationsService,
                translate_service_1.TranslateService,
                logger_service_1.LoggerService,
                control_sidebar_service_1.ControlSidebarService
            ]
        })
    ], NgxAdminLteModule);
    return NgxAdminLteModule;
}());
exports.NgxAdminLteModule = NgxAdminLteModule;
//# sourceMappingURL=ngx-admin-lte.module.js.map