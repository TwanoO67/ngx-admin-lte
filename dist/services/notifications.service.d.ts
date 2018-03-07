import { Notification } from '../models/notification';
import { Subject, ReplaySubject } from 'rxjs/Rx';
export declare class NotificationsService {
    private notificationsList;
    newNotifications: Subject<Notification>;
    notifications: ReplaySubject<Notification[]>;
    updates: Subject<any>;
    create: Subject<Notification>;
    constructor();
    addNotification(notification: Notification): void;
}
