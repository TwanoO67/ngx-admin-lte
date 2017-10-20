import { Component, Input } from '@angular/core';
import { Message } from '../../models/message';
import { User } from '../../models/user';

@Component({
    /* tslint:disable */
    selector: '.tasksBox',
    /* tslint:enable */
    styleUrls: ['./tasks-box.component.css'],
    templateUrl: './tasks-box.component.html',
})
export class TasksBoxComponent {
    messages: Message[];
    tasksLength: {} = { 0: '9' };
    @Input() user: User;

}
