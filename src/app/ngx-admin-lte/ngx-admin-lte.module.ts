import { NgModule } from '@angular/core';
import { LayoutsAuthComponent } from './layouts/auth/auth';
import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

export function createTranslateLoader( http: Http ) {
    return new TranslateStaticLoader( http, '../public/assets/i18n', '.json' );
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
import { MessagesService } from './services/messages.service';
import { CanActivateGuard } from './services/guard.service';
import { NotificationService } from './services/notification.service';
import { BreadcrumbService } from './services/breadcrumb.service';
import { AdminLTETranslateService } from './services/translate.service';
import { LoggerService } from './services/logger.service';

let services = [
    UserService,
    BreadcrumbService,
    MessagesService,
    CanActivateGuard,
    NotificationService,
    AdminLTETranslateService,
    LoggerService
];

// les pages
import { HomeComponent } from './pages/home/home.component';
import { PageNumComponent } from './pages/page-num/page-num.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

let pages = [
    HomeComponent,
    PageNumComponent,
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
        deps: [Http],
        provide: TranslateLoader,
        useFactory: (createTranslateLoader)
    }),
  ],
  providers: [
    ...services
  ],
  bootstrap: []
})
export class NgxAdminLteModule { }
