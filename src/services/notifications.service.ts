
// based on https://github.com/ng-book/angular2-rxjs-chat/blob/master/app/ts/services/NotificationsService.ts
import { Notification } from '../models/notification';
import { Injectable } from '@angular/core';
import { Subject, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';

const initialNotifications: Notification[] = [];

type INotificationsOperation = (notifications: Notification[]) => Notification[];

@Injectable()
export class NotificationsService {
  private notificationsList: Notification[] = [];
  // a stream that publishes new notifications only once
  public newNotifications: Subject<Notification> = new Subject<Notification>();

  // `notifications` is a stream that emits an array of the most up to date notifications
  public notifications: ReplaySubject<Notification[]> = new ReplaySubject<Notification[]>(1);

  // `updates` receives _operations_ to be applied to our `notifications`
  // it's a way we can perform changes on *all* notifications (that are currently
  // stored in `notifications`)
  public updates: Subject<any> = new Subject<any>();

  // action streams
  public create: Subject<Notification> = new Subject<Notification>();
  // public markThreadAsRead: Subject<any> = new Subject<any>();

  constructor() {
    // recois des operation, et les fais sur la liste interne, puis diffuse le resultat sur notifications
    this.updates.subscribe((ope) => {
      this.notificationsList = ope(this.notificationsList);
      console.log(this.notificationsList);
      this.notifications.next(this.notificationsList);
    });

    this.newNotifications.pipe(
      map(function(notification: Notification): INotificationsOperation {
        return (notifications: Notification[]) => {
          return notifications.concat(notification);
        };
      })
    )
      .subscribe(this.updates);

  }

  // an imperative function call to this action stream
  public addNotification(notification: Notification): void {
    this.newNotifications.next(notification);
  }

}
