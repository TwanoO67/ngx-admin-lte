import { Injectable, Input } from '@angular/core';
import { UserService } from './user.service';
import { TranslateService } from './translate.service';

@Injectable()
export class LoggerService {

    constructor( private translate: TranslateService ) {}

    public log( component: string, msg?: string, i18nRef?: string, data?: string[] ) {
        // here we should test some environment config to show or not the log
        if ( true ) {
            if ( i18nRef ) {
                let params: {} = {};
                if ( data ) {
                    params = ( data[0] ) ? { 0: data[0] } : params;
                    params = ( data[1] ) ? { 0: data[0], 1: data[1] } : params;
                    params = ( data[2] ) ? { 0: data[0], 1: data[1], 2: data[2] } : params;
                }
                this.translate.getTranslate().get( i18nRef, params ).subscribe(( res: string ) => {
                    console.log( component + ': ' + res );
                });
            } else {
                console.log( component + ': ' + msg );
            }
        }
    }
}
