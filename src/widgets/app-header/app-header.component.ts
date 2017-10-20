import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  styleUrls: ['./app-header.component.css'],
  templateUrl: './app-header.component.html',
})
export class AppHeaderComponent {
  @Input() displayMessages = true;
  @Input() displayNotifications = true;
  @Input() displayTasks = true;
  @Input() displayUser = true;
  @Input() displayControl = true;
}
