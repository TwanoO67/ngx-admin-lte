import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  /* tslint:disable */
  selector: '.userBox',
  /* tslint:enable */
  styleUrls: ['./user-box.component.css'],
  templateUrl: './user-box.component.html'
})
export class UserBoxComponent implements OnInit {
  //default user
  currentUser: User = new User({
    avatarUrl: 'public/assets/img/user2-160x160.jpg',
    email: 'weber.antoine.pro@gmail.com',
    firstname: 'WEBER',
    lastname: 'Antoine'
  });

  constructor(private userServ: UserService, private router: Router) {
    // se connecter au modif du user courant
    this.userServ.currentUser.subscribe((user: User) => this.currentUser = user);
  }

  public ngOnInit() {
    // TODO
  }

  private logout = (): void => {
    this.userServ.logout();
  }
}
