import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class BreadcrumbService {
  current: ReplaySubject<any>;
  private initialData: any = {
    description: '',
    display: false,
    header: '',

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

  setCurrent(data: any) {
    this.current.next(data);
  }

  getCurrent() {
    return this.current;
  }

  clear() {
    this.set(this.initialData);
  }

  // deprecated
  set(data: any) {
    console.log('NgxAdminLTE: BreadcrumbService set, is deprecated use setCurrent');
    return this.setCurrent(data);
  }

}
