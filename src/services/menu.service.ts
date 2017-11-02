import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/Rx';
import { Router } from '@angular/router';

@Injectable()
export class MenuService {
    private current: ReplaySubject<any> = new ReplaySubject<any>( 1 );

    constructor(
      private router: Router
    ) {}

    public setCurrent( menu: any ) {
      this.current.next( menu );
    }

    public getCurrent() {
      return this.current;
    }

}
