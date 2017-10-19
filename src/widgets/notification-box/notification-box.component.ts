import { Component, OnInit } from '@angular/core';
import { Notification } from '../../models/notification';
import { NotificationsService } from '../../services/notifications.service';
import { LoggerService } from '../../services/logger.service';

@Component({
    /* tslint:disable */
    selector: '.notificationsBox',
    /* tslint:enable */
    styleUrls: ['./notification-box.component.css'],
    templateUrl: './notification-box.component.html'
})
export class NotificationBoxComponent implements OnInit {
    notifications: Notification[];
    notifLength: {};

    constructor(private notifServ: NotificationsService, private logger: LoggerService) {
        this.notifications = [];
    }

    public ngOnInit() {
        // Every incoming notification changes entire local notification Array.
        this.notifServ.notifications.subscribe((notif: Notification[]) => {
            this.logger.log('NotificationBox', undefined, 'RECEIVED.NOTIFICATION', undefined);
            this.notifications = notif;
            this.notifLength = { 0: this.notifications.length };
        });
    }

}
