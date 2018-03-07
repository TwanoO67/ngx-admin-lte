import { OnInit } from '@angular/core';
import { Notification } from '../../models/notification';
import { NotificationsService } from '../../services/notifications.service';
import { LoggerService } from '../../services/logger.service';
export declare class NotificationBoxComponent implements OnInit {
    private notifServ;
    private logger;
    notifications: Notification[];
    notifLength: {
        0: number;
    };
    constructor(notifServ: NotificationsService, logger: LoggerService);
    ngOnInit(): void;
}
