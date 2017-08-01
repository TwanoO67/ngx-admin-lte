import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { MenuService } from '../../services/menu.service';
import { LoggerService } from '../../services/logger.service';

import { ToasterService, ToasterConfig } from 'angular2-toaster/angular2-toaster';
import { TranslateService } from '../../services/translate.service';

@Component( {
    selector: 'app-layouts-auth',
    templateUrl: './auth.html'
})
export class LayoutAuthComponent implements OnInit {
    public toastrConfig: ToasterConfig;
    public mylinks: Array<any> = [];
    private logger: LoggerService;

    constructor(
      private userServ: UserService,
      private menuServ: MenuService,
      private toastr: ToasterService,
      private translate: TranslateService
    ) {
        this.toastrConfig = new ToasterConfig( {
            newestOnTop: true,
            showCloseButton: true,
            tapToDismiss: false
        });
        // this.translate = translate.getTranslate();
        // this.logger = new LoggerService( this.translate );
    }

    public ngOnInit() {
        //  sedding the resize event, for AdminLTE to place the height
        const ie = this.detectIE();
        if ( !ie ) {
            window.dispatchEvent( new Event( 'resize' ) );
        } else {
            // solution for IE from @hakonamatata
            const event = document.createEvent( 'Event' );
            event.initEvent( 'resize', false, true );
            window.dispatchEvent( event );
        }

        // default menu structure, please use the menuService to modify
        this.mylinks = [
          {
            'title': 'Home',
            'icon': 'dashboard',
            'link': ['/']
          }
        ];

        // register to menu change
        this.menuServ.currentMenu.subscribe((menu) => {
          this.mylinks = menu;
        });

    }

    protected detectIE(): any {
        const ua = window.navigator.userAgent;

        // Test values; Uncomment to check result …
        // IE 10
        // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
        // IE 11
        // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
        // IE 12 / Spartan
        // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
        // Edge (IE 12+)
        // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)
        // Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

        const msie = ua.indexOf( 'MSIE ' );
        if ( msie > 0 ) {
            // IE 10 or older => return version number
            return parseInt( ua.substring( msie + 5, ua.indexOf( '.', msie ) ), 10 );
        }

        const trident = ua.indexOf( 'Trident/' );
        if ( trident > 0 ) {
            // IE 11 => return version number
            const rv = ua.indexOf( 'rv:' );
            return parseInt( ua.substring( rv + 3, ua.indexOf( '.', rv ) ), 10 );
        }

        const edge = ua.indexOf( 'Edge/' );
        if ( edge > 0 ) {
            // Edge (IE 12+) => return version number
            return parseInt( ua.substring( edge + 5, ua.indexOf( '.', edge ) ), 10 );
        }

        // other browser
        return false;
    }

}
