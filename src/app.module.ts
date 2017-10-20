import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

import { SafeHtmlPipe } from './pipes/safe-html.pipes';
const pipes = [
  SafeHtmlPipe,
];

import { AppFooterComponent } from './widgets/app-footer';
import { AppHeaderComponent } from './widgets/app-header';
import { BreadcrumbComponent } from './widgets/breadcrumb';
import { ControlSidebarComponent } from './widgets/control-sidebar';
import { LogoComponent } from './widgets/logo';
import { MenuAsideComponent } from './widgets/menu-aside';
import { MessagesBoxComponent } from './widgets/messages-box';
import { NotificationBoxComponent } from './widgets/notification-box';
import { TasksBoxComponent } from './widgets/tasks-box';
import { UserBoxComponent } from './widgets/user-box';

const widgets = [
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
  ...pipes,
];

import { BreadcrumbService } from './services/breadcrumb.service';
import { CanActivateGuard } from './services/can-activate-guard.service';
import { FooterService } from './services/footer.service';
import { LoggerService } from './services/logger.service';
import { LogoService } from './services/logo.service';
import { MenuService } from './services/menu.service';
import { MessagesService } from './services/messages.service';
import { NotificationsService } from './services/notifications.service';
import { TranslateService } from './services/translate.service';
import { UserService } from './services/user.service';

const services = [
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
];

// les layouts
import { LayoutAuthComponent } from './layouts/auth/auth';
import { LayoutLoginComponent } from './layouts/login/login.component';
import { LayoutRegisterComponent } from './layouts/register/register.component';

const layouts = [
  LayoutAuthComponent,
  LayoutLoginComponent,
  LayoutRegisterComponent,
];

@NgModule({
  declarations: [
    ...widgets,
    ...layouts,
  ],
  exports: [
    ...layouts,
    ...services,
    ...widgets,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule,
    ToasterModule,
    TranslateModule.forRoot({
      loader: {
        deps: [HttpClient],
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
      },
    }),
  ],
  providers: [
    ...services,
  ],
})
export class NgxAdminLteModule { }
