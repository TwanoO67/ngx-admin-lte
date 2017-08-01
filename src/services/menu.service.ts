import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/Rx';
import { Router } from '@angular/router';

@Injectable()
export class MenuService {
    public currentMenu: ReplaySubject<any> = new ReplaySubject<any>( 1 );

    constructor(
      private router: Router
    ) {}

    public setCurrentMenu( menu: any ) {
      this.currentMenu.next( menu );
    }
}
