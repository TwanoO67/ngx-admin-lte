import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class BreadcrumbService {
  public current: ReplaySubject<any>;
  private initialData: any = {
    description: '',
    display: false,
    header : '',

    levels: [
      {
        icon: 'clock-o',
        link: ['/'],
        title: 'Default'
      }
    ]
  };

  constructor() {
    this.current = new ReplaySubject(1);
    this.clear();
  }

  public setCurrent(data: any) {
    this.current.next(data);
  }

  public getCurrent() {
    return this.current;
  }

  public clear() {
    this.set(this.initialData);
  }

  // deprecated
  public set(data: any) {
    console.log('NgxAdminLTE: BreadcrumbService set, is deprecated use setCurrent');
    return this.setCurrent(data);
  }

}
