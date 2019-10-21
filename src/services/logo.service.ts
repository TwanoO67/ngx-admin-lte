import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class LogoService {
    private current: ReplaySubject<any> = new ReplaySubject<any>( 1 );
    // default logo
    public logo: any = {
      html_mini: '<b>A</b>LT',
      html_lg: '<b>Admin</b>LTE'
    };

    constructor() {
      this.setCurrent(this.logo);
    }

    /* Redefine the logo */
    public setCurrent( logo: any ) {
      if (logo.small || logo.big ) {
        console.log('NgxAdminLTE: LogoService setCurrent: small and big are now deprecated in logo, use html_mini and html_lg');
      }
      this.current.next( logo );
    }

    public getCurrent() {
      return this.current;
    }
}
