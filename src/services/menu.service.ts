import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/Rx';

@Injectable()
export class MenuService {
  private current: ReplaySubject<any> = new ReplaySubject<any>(1);

  constructor() { }

  setCurrent(menu: any) {
    this.current.next(menu);
  }

  getCurrent() {
    return this.current;
  }

  // deprecated
  setCurrentMenu(data: any) {
    console.log('NgxAdminLTE: MenuService setCurrentMenu, is deprecated use setCurrent');
    return this.setCurrent(data);
  }
}
