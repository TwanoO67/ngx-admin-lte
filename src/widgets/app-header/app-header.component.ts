import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  styleUrls: ['./app-header.component.css'],
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent {
  @Input() display_messages = true;
  @Input() display_notifications = true;
  @Input() display_tasks = true;
  @Input() display_user = true;
  @Input() display_control = true;

  constructor() { }
}
