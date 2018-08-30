import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { ToasterModule, ToasterService } from 'angular2-toaster/angular2-toaster';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// AoT requires an exported function for factories
export function HttpLoaderFactory (httpClient) {
  return new TranslateHttpLoader(httpClient, 'assets/i18n/', '.json');
}

// Pipes
import { SafeHtmlPipe } from './pipes/safe-html.pipes';

// Widgets
import { AppHeaderComponent } from './widgets/app-header/app-header.component';
import { LogoComponent } from './widgets/logo/logo.component';
import { AppFooterComponent } from './widgets/app-footer/app-footer.component';
import { MenuAsideComponent } from './widgets/menu-aside/menu-aside.component';
import { ControlSidebarComponent } from './widgets/control-sidebar/control-sidebar.component';
import { MessagesBoxComponent } from './widgets/messages-box/messages-box.component';
import { NotificationBoxComponent } from './widgets/notification-box/notification-box.component';
import { TasksBoxComponent } from './widgets/tasks-box/tasks-box.component';
import { UserBoxComponent } from './widgets/user-box/user-box.component';
import { BreadcrumbComponent } from './widgets/breadcrumb/breadcrumb.component';
import { ComponentLoaderComponent } from './widgets/component-loader/component-loader.component';

// Services
import { UserService } from './services/user.service';
import { MenuService } from './services/menu.service';
import { LogoService } from './services/logo.service';
import { FooterService } from './services/footer.service';
import { MessagesService } from './services/messages.service';
import { CanActivateGuard } from './services/can-activate-guard.service';
import { NotificationsService } from './services/notifications.service';
import { BreadcrumbService } from './services/breadcrumb.service';
import { TranslateService } from './services/translate.service';
import { LoggerService } from './services/logger.service';
import { ControlSidebarService } from './services/control-sidebar.service';

// Layouts
import { LayoutAuthComponent } from './layouts/auth/auth';
import { LayoutLoginComponent } from './layouts/login/login.component';
import { LayoutRegisterComponent } from './layouts/register/register.component';


@NgModule({
  declarations: [
    // PIPES
    SafeHtmlPipe,
    // WIDGETS
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
    // LAYOUTS
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
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    }),
  ],
  exports: [
    SafeHtmlPipe,
  ],
  providers: [
    // SERVICES
    UserService,
    MenuService,
    LogoService,
    FooterService,
    BreadcrumbService,
    MessagesService,
    CanActivateGuard,
    NotificationsService,
    TranslateService,
    LoggerService,
    ControlSidebarService,
    ToasterService
  ]
})
export class NgxAdminLteModule { }
