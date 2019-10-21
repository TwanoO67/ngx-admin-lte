import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class FooterService {
    public current: ReplaySubject<any> = new ReplaySubject<any>( 1 );
    public default: any = {
      right_part: 'Anything you want',
      left_part: `<strong>Copyright &copy; 2016 <a href="#" routerLink="/">Company X</a>.
    	</strong> All rights reserved.`
    }

    constructor() {}

    /* Redefine the footer html */
    public setCurrent( footer: any ) {
      this.current.next( footer );
    }

    public getCurrent() {
      return this.current;
    }
}
