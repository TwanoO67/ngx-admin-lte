import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs/Rx';
import { User } from '../models/user';

@Injectable()
export class UserService {
  private current: ReplaySubject<User> = new ReplaySubject<User>(1);

  constructor(
    private router: Router
  ) { }

  setCurrent(user: User) {
    this.current.next(user);
  }

  getCurrent() {
    return this.current;
  }

  logout() {
    const user = new User({});
    user.connected = false;
    this.setCurrentUser(user);
    this.router.navigate(['login']);
  }

  // deprecated
  setCurrentUser(data: any) {
    console.log('NgxAdminLTE: UserService setCurrentUser, is deprecated use setCurrent');
    return this.setCurrent(data);
  }
}
