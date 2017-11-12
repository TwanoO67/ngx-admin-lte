import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-menu-aside',
  styleUrls: ['./menu-aside.component.css'],
  templateUrl: './menu-aside.component.html'
})
export class MenuAsideComponent implements OnInit, OnChanges {
  public currentUrl: string;
  public currentUser: User = new User();

  @Input() links: Array<any> = [];
  @Input() display_menu_user = true;
  @Input() display_menu_search = true;
  @Input() menu_title = ''; // deprecated

  constructor(private userServ: UserService, public router: Router) {
    // getting the current url
    this.router.events.subscribe((evt: any) => this.currentUrl = evt.url);
    this.userServ.getCurrent().subscribe((user) => this.currentUser = user);
  }

  public ngOnInit() { }

  public ngOnChanges(changes: any) {
    if ( this.menu_title !== '') {
      console.log('menu_title is deprecated please use "header" in your menuService links configuration');
    }
  }

}
