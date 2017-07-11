import { NgModule } from '@angular/core';
import { LayoutsAuthComponent } from './layouts/auth/auth';
import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

export function createTranslateLoader( http: Http ) {
    return new TranslateHttpLoader( http, '../public/assets/i18n', '.json' );
}

import { AppHeaderComponent } from './widgets/app-header';
import { AppFooterComponent } from './widgets/app-footer';
import { MenuAsideComponent } from './widgets/menu-aside';
import { ControlSidebarComponent } from './widgets/control-sidebar';
import { MessagesBoxComponent } from './widgets/messages-box';
import { NotificationBoxComponent } from './widgets/notification-box';
import { TasksBoxComponent } from './widgets/tasks-box';
import { UserBoxComponent } from './widgets/user-box';
import { BreadcrumbComponent } from './widgets/breadcrumb';

let widgets = [
    BreadcrumbComponent,
    AppHeaderComponent,
    AppFooterComponent,
    MenuAsideComponent,
    ControlSidebarComponent,
    MessagesBoxComponent,
    NotificationBoxComponent,
    TasksBoxComponent,
    UserBoxComponent
];

import { UserService } from './services/user.service';
import { MenuService } from './services/menu.service';
import { MessagesService } from './services/messages.service';
import { CanActivateGuard } from './services/can-activate-guard.service';
import { NotificationService } from './services/notification.service';
import { BreadcrumbService } from './services/breadcrumb.service';
import { TranslateService } from './services/translate.service';
import { LoggerService } from './services/logger.service';

let services = [
    UserService,
    MenuService,
    BreadcrumbService,
    MessagesService,
    CanActivateGuard,
    NotificationService,
    TranslateService,
    LoggerService
];

// les pages
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

let pages = [
    LoginComponent,
    RegisterComponent
];

@NgModule({
  declarations: [
    LayoutsAuthComponent,
    ...widgets,
    ...pages
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    ToasterModule,
    TranslateModule.forRoot({
      loader: {
        deps: [Http],
        provide: TranslateLoader,
        useFactory: (createTranslateLoader)
    }}),
  ],
  providers: [
    ...services
  ],
  bootstrap: []
})
export class NgxAdminLteModule { }
