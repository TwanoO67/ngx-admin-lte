import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateGuard } from './ngx-admin-lte/services/guard.service';
import { LayoutsAuthComponent } from './ngx-admin-lte/layouts/auth/auth';
import { LoginComponent } from './ngx-admin-lte/pages/login/login.component';
import { RegisterComponent } from './ngx-admin-lte/pages/register/register.component';
import { HomeComponent } from './ngx-admin-lte/pages/home/home.component';

// Components
import { AppComponent } from './app.component';

const routes: Routes = [
  // logged routes
  {
    canActivate: [CanActivateGuard],
    children: [
      {
        canActivate: [CanActivateGuard],
        component: HomeComponent,
        path: 'home'
      },
    ],
    component: LayoutsAuthComponent,
    path: '',
  },
  // not logged routes
  {
    component: LoginComponent,
    path: 'login'
  },
  {
    component: RegisterComponent,
    path: 'register'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
