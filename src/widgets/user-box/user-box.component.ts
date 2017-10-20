import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  /* tslint:disable */
  selector: '.userBox',
  /* tslint:enable */
  styleUrls: ['./user-box.component.css'],
  templateUrl: './user-box.component.html',
})
export class UserBoxComponent implements OnInit {
  // default user, only an example, please use the userService to modify
  currentUser: User = new User({
    avatarUrl: 'assets/img/user2-160x160.jpg',
    email: 'weber.antoine@outlook.com',
    firstname: 'WEBER',
    lastname: 'Antoine',
  });

  constructor(private userServ: UserService) {
    // se connecter au modif du user courant
    this.userServ.getCurrent().subscribe((user: User) => this.currentUser = user);
  }

  ngOnInit(): void {
    // TODO
  }

  logout = (): void => {
    this.userServ.logout();
  }
}
