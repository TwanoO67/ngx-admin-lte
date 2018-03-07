import { OnInit } from '@angular/core';
import { MessagesService } from '../../services/messages.service';
import { LoggerService } from '../../services/logger.service';
import { Message } from '../../models/message';
export declare class MessagesBoxComponent implements OnInit {
    private msgServ;
    private logger;
    messages: Message[];
    msgLength: {
        0: number;
    };
    constructor(msgServ: MessagesService, logger: LoggerService);
    ngOnInit(): void;
}
