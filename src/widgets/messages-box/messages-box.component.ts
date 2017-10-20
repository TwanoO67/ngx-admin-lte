import { Component, OnInit } from '@angular/core';
import { Message } from '../../models/message';
import { LoggerService } from '../../services/logger.service';
import { MessagesService } from '../../services/messages.service';

@Component({
    /* tslint:disable */
    selector: '.messagesBox',
    /* tslint:enable */
    styleUrls: ['./messages-box.component.css'],
    templateUrl: './messages-box.component.html',
})
export class MessagesBoxComponent implements OnInit {
    // Declaring the variable for binding with initial value
    messages: Message[];
    msgLength: {};

    constructor(private msgServ: MessagesService, private logger: LoggerService) {
        this.messages = [];
    }

    ngOnInit() {
        // Every incoming message changes entire local message Array.
        this.msgServ.messages.subscribe((msg: Message[]) => {
            this.logger.log('MsgBox', ['RECEIVED.MESSAGE']);
            this.messages = msg;
            this.msgLength = { 0: this.messages.length };
        });
    }
}
