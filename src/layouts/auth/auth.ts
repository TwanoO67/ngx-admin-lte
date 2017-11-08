import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { MenuService } from '../../services/menu.service';
import { LoggerService } from '../../services/logger.service';
import { ToasterService, ToasterConfig } from 'angular2-toaster/angular2-toaster';
import { TranslateService } from '../../services/translate.service';
import { UserBody } from '../../models/user-body';

@Component( {
    selector: 'app-layouts-auth',
    templateUrl: './auth.html'
})
export class LayoutAuthComponent implements OnInit, OnDestroy {
    public toastrConfig: ToasterConfig;
    public mylinks: Array<any> = [];
    public skin = 'skin-blue';
    public display_control = true;
    public display_user = true;
    public display_tasks = true;
    public display_messages = true;
    public display_notifications = true;
    public display_menu_user = true;
    public display_menu_search = true;
    public menu_title = 'NAVIGATION';
    public display_logout = false;
    public display_profile = false;
    public user_body: UserBody;
    private logger: LoggerService;

    constructor(
      private userServ: UserService,
      private menuServ: MenuService,
      private toastr: ToasterService,
      private translate: TranslateService,
      route: ActivatedRoute) {
        const param = route.snapshot.data[0];
        this.skin = this.paramExistOrDefault(param, 'skin', 'skin-blue');
        this.display_control = this.paramExistOrDefault(param, 'display_control');
        this.display_user = this.paramExistOrDefault(param, 'display_user');
        this.display_tasks = this.paramExistOrDefault(param, 'display_tasks');
        this.display_messages = this.paramExistOrDefault(param, 'display_messages');
        this.display_notifications = this.paramExistOrDefault(param, 'display_notifications');
        this.display_menu_user = this.paramExistOrDefault(param, 'display_menu_user');
        this.display_menu_search = this.paramExistOrDefault(param, 'display_menu_search');
        this.menu_title = this.paramExistOrDefault(param, 'display_menu_search', 'NAVIGATION');
        this.display_logout = this.paramExistOrDefault(param, 'display_logout', false);
        this.display_profile = this.paramExistOrDefault(param, 'display_profile', true);
        this.user_body = this.paramExistOrDefault(param, 'user_body', null);

        this.toastrConfig = new ToasterConfig( {
            newestOnTop: true,
            showCloseButton: true,
            tapToDismiss: false
        });
        // this.translate = translate.getTranslate();
        // this.logger = new LoggerService( this.translate );
    }

    private paramExistOrDefault(param: any, index: string, default_value: any = true) {
      return param.hasOwnProperty(index) ? param[index] : default_value;
    }

    public ngOnInit(): void {
        //  sedding the resize event, for AdminLTE to place the height
        const ie = this.detectIE();
        if (!ie) {
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
        this.menuServ.getCurrent().subscribe((menu) => {
          this.mylinks = menu;
        });

      document.body.className = 'hold-transition ' + this.skin + ' sidebar-mini';
    }

    public ngOnDestroy(): void {
      document.body.className = '';
    }

    protected detectIE(): boolean {
        const ua: string = window.navigator.userAgent;

        // Test values; Un-comment to check result …
        // IE 10
        // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
        // IE 11
        // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
        // IE 12 / Spartan
        // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
        // Edge (IE 12+)
        // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)
        // Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

        // const msie = ua.indexOf('MSIE ');
        // if (msie > 0) {
        //     // IE 10 or older => return version number
        //     // return parseInt( ua.substring( msie + 5, ua.indexOf( '.', msie ) ), 10 );
        //     return true;
        // }

        // const trident = ua.indexOf('Trident/');
        // if (trident > 0) {
        //     // IE 11 => return version number
        //     // const rv = ua.indexOf( 'rv:' );
        //     // return parseInt( ua.substring( rv + 3, ua.indexOf( '.', rv ) ), 10 );
        //     return true;
        // }

        // const edge = ua.indexOf('Edge/');
        // if (edge > 0) {
        //     // Edge (IE 12+) => return version number
        //     // return parseInt( ua.substring( edge + 5, ua.indexOf( '.', edge ) ), 10 );
        //     return true;
        // }

        // // other browser
        // return false;

        return ua.includes('MSIE ') || ua.includes('Trident/') || ua.includes('Edge/');
    }

}
