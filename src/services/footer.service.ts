import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/Rx';

@Injectable()
export class FooterService {
  current: ReplaySubject<any> = new ReplaySubject<any>(1);
  default: any = {
    left_part: `<strong>Copyright &copy; 2016 <a href="#" routerLink="/">Company X</a>.
    </strong> All rights reserved.`,
    right_part: 'Anything you want',
  };

  setCurrent(footer: any) {
    this.current.next(footer);
  }

  getCurrent() {
    return this.current;
  }
}
