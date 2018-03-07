import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/Rx';

@Injectable()
export class ControlSidebarService {
    private current: ReplaySubject<any> = new ReplaySubject<any>( 1 );
    public default: any = false;

    private current_value = false;

    constructor() {
      this.current.next( this.default );
    }

    public getCurrent(){
      return this.current;
    }

    public open() {
      this.current_value = true;
      this.current.next( this.current_value );
    }

    public close() {
      this.current_value = false;
      this.current.next( this.current_value );
    }

    public toggle(){
      this.current_value = !this.current_value;
      this.current.next( this.current_value );
    }
}
