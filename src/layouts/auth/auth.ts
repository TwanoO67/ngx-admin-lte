import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    public display_logout = false;
    public header_components = [];
    public boxed_style = true;
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
        this.display_logout = this.paramExistOrDefault(param, 'display_logout', false);
        this.header_components = this.paramExistOrDefault(param, 'header_components', []);
        this.boxed_style = this.paramExistOrDefault(param, 'boxed_style', true);

        this.toastrConfig = new ToasterConfig( {
            newestOnTop: true,
            showCloseButton: true,
            tapToDismiss: false
        });
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
            'header': 'NAVIGATION'
          },
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
        return ua.includes('MSIE ') || ua.includes('Trident/') || ua.includes('Edge/');
    }

}
