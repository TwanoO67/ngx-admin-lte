import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToasterConfig } from 'angular2-toaster/angular2-toaster';
import { MenuService } from '../../services/menu.service';

@Component({
    selector: 'app-layouts-auth',
    templateUrl: './auth.html',
})
export class LayoutAuthComponent implements OnInit, OnDestroy {
    toastrConfig: ToasterConfig;
    mylinks: any[] = [];
    skin = 'skin-blue';
    displayControl = true;
    displayUser = true;
    displayTasks = true;
    displayMessages = true;
    displayNotifications = true;

    constructor(private menuServ: MenuService, private route: ActivatedRoute) {
        const param = this.route.snapshot.data[0];
        this.skin = !!param.skin ? param.skin : 'skin-blue';
        this.displayControl = !!param.displayControl ? param.displayControl : true;
        this.displayUser = !!param.displayUser ? param.displayUser : true;
        this.displayTasks = !!param.displayTasks ? param.displayTasks : true;
        this.displayMessages = !!param.displayMessages ? param.displayMessages : true;
        this.displayNotifications = !!param.displayNotifications ? param.displayNotifications : true;

        this.toastrConfig = new ToasterConfig({
            newestOnTop: true,
            showCloseButton: true,
            tapToDismiss: false,
        });

        // this.translate = translate.getTranslate();
        // this.logger = new LoggerService( this.translate );
    }

    ngOnInit() {
        const ie = this.detectIE();

        if (!ie) {
            window.dispatchEvent(new Event('resize'));
        } else {
            const event = document.createEvent('Event');
            event.initEvent('resize', false, true);
            window.dispatchEvent(event);
        }

        this.mylinks = [
            {
                icon: 'dashboard',
                link: ['/'],
                title: 'Home',
            },
        ];

        // register to menu change
        this.menuServ.getCurrent().subscribe((menu) => {
            this.mylinks = menu;
        });

        document.body.className = 'hold-transition ' + this.skin + ' sidebar-mini';
    }

    ngOnDestroy(): void {
        document.body.className = '';
    }

    protected detectIE(): boolean {
        const ua = window.navigator.userAgent;
        const msie = ua.indexOf('MSIE ') > 0;
        if (msie) {
            // IE 10 or older => return version number
            // return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
            return true;
        }

        const trident = ua.indexOf('Trident/') > 0;
        if (trident) {
            // IE 11 => return version number
            // const rv = ua.indexOf('rv:');
            // return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
            return true;
        }

        const edge = ua.indexOf('Edge/') > 0;
        if (edge) {
            // Edge (IE 12+) => return version number
            // return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
            return true;
        }

        // other browser
        return false;
    }

}
