import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/Rx';
import { Router } from '@angular/router';

@Injectable()
export class LogoService {
    public currentLogo: ReplaySubject<any> = new ReplaySubject<any>( 1 );

    constructor(
      private router: Router
    ) {}

    public setCurrentLogo( logo: any ) {
      this.currentLogo.next( logo );
    }
}
