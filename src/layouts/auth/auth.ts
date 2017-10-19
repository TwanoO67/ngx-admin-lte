import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MenuService } from '../../services/menu.service';
import { ToasterConfig } from 'angular2-toaster/angular2-toaster';

@Component({
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

    constructor(
        private menuServ: MenuService, route: ActivatedRoute) {
        const param = route.snapshot.data[0];
        this.skin = !!param.skin ? param.skin : 'skin-blue';
        this.display_control = !!param.display_control ? param.display_control : true;
        this.display_user = !!param.display_user ? param.display_user : true;
        this.display_tasks = !!param.display_tasks ? param.display_tasks : true;
        this.display_messages = !!param.display_messages ? param.display_messages : true;
        this.display_notifications = !!param.display_notifications ? param.display_notifications : true;

        this.toastrConfig = new ToasterConfig({
            newestOnTop: true,
            showCloseButton: true,
            tapToDismiss: false
        });
    }

    public ngOnInit(): void {
        //  sedding the resize event, for AdminLTE to place the height
        const ie = this.detectIE();
        if (!ie) {
            window.dispatchEvent(new Event('resize'));
        } else {
            // solution for IE from @hakonamatata
            const event = document.createEvent('Event');
            event.initEvent('resize', false, true);
            window.dispatchEvent(event);
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

        const msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            // IE 10 or older => return version number
            // return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
            return true;
        }

        const trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            // const rv = ua.indexOf('rv:');
            // return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
            return true;
        }

        const edge = ua.indexOf('Edge/');
        if (edge > 0) {
            // Edge (IE 12+) => return version number
            // return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
            return true;
        }

        // other browser
        return false;
    }

}
