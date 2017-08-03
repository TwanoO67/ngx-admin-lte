import { Component, OnInit } from '@angular/core';
import { Notification } from '../../models/notification';
import { NotificationsService } from '../../services/notifications.service';

@Component( {
    /* tslint:disable */
    selector: '.notificationsBox',
    /* tslint:enable */
    styleUrls: ['./notification-box.component.css'],
    templateUrl: './notification-box.component.html'
})
export class NotificationBoxComponent implements OnInit {

    public notifications: Notification[];
    notifLength: {};

    constructor( private notifServ: NotificationsService, private logger: LoggerService ) {
        this.notifications = [];
    }

    public ngOnInit() {
        // Every incoming notification changes entire local notification Array.
        this.notifServ.notifications.subscribe(( notif: Notification[] ) => {
            this.logger.log( 'NotificationBox', null, 'RECEIVED.NOTIFICATION', null );
            this.notifications = notif;
            this.notifLength = { 0: this.notifications.length };
        });
    }

}
