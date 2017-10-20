import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-menu-aside',
  styleUrls: ['./menu-aside.component.css'],
  templateUrl: './menu-aside.component.html',
})
export class MenuAsideComponent {
  currentUrl: string;
  currentUser: User = new User({});

  @Input() links: any[] = [];

  constructor(private userServ: UserService, private router: Router) {
    // getting the current url
    this.router.events.subscribe((evt: any) => this.currentUrl = evt.url);
    this.userServ.getCurrent().subscribe((user) => this.currentUser = user);
  }

}
