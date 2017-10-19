import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/Rx';

@Injectable()
export class LogoService {
  private current: ReplaySubject<any> = new ReplaySubject<any>(1);
  // default logo
  logo: any = {
    html_mini: '<b>A</b>LT',
    html_lg: '<b>Admin</b>LTE'
  };

  constructor() {
    this.setCurrent(this.logo);
  }

  /* Redefine the logo */
  setCurrent(logo: any) {
    if (logo.small ||  logo.big) {
      console.log('NgxAdminLTE: LogoService setCurrent: small and big are now deprecated in logo, use html_mini and html_lg');
    }
    this.current.next(logo);
  }

  getCurrent() {
    return this.current;
  }

  // deprecated
  setCurrentLogo(data: any) {
    console.log('NgxAdminLTE: LogoService setCurrentLogo, is deprecated use setCurrent');
    return this.setCurrent(data);
  }
}
