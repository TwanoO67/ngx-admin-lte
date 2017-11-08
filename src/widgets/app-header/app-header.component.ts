import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserBody } from '../../models/user-body';

import { UserService } from '../../services/user.service';

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
  @Input() public display_profile = true;
  @Input() public user_body: UserBody = null;

  constructor(private userService: UserService) { }

  logout(): void {
    this.userService.logout();
  }

}
