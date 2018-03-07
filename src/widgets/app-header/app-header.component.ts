import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { UserService } from '../../services/user.service';
import { ControlSidebarService } from '../../services/control-sidebar.service';

@Component( {
    selector: 'app-header',
    styleUrls: ['./app-header.component.css'],
    templateUrl: './app-header.component.html'
})
export class AppHeaderComponent {
  @Input() public display_messages = true;
  @Input() public display_notifications = true;
  @Input() public display_tasks = true;
  @Input() public display_user = true;
  @Input() public display_control = true;
  @Input() public display_logout = false;
  @Input() public header_components = [];

  constructor(
    private userService: UserService,
    private sidebarService: ControlSidebarService
  ) { }

  logout(): void {
    this.userService.logout();
  }

  toggleSidebar(){
    this.sidebarService.toggle();
  }

}
