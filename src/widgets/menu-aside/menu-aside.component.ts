import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-menu-aside',
  styleUrls: ['./menu-aside.component.css'],
  templateUrl: './menu-aside.component.html'
})
export class MenuAsideComponent implements OnInit {
  public currentUrl: string;
  public currentUser: User = new User();

  @Input() links: Array<any> = [];
  @Input() display_menu_user = true;
  @Input() display_menu_search = true;

  constructor(
    private userServ: UserService,
    public router: Router
  ) {
    // getting the current url
    this.router.events.subscribe((evt: any) => this.currentUrl = evt.url);
    this.userServ.getCurrent().subscribe((user) => this.currentUser = user);
  }

  public ngOnInit() { }

}
