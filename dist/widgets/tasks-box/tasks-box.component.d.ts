import { OnInit } from '@angular/core';
import { Message } from '../../models/message';
export declare class TasksBoxComponent implements OnInit {
    messages: Message[];
    tasksLength: {};
    user: any;
    constructor();
    ngOnInit(): void;
}
