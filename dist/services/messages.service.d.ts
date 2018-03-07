import { Message } from '../models/message';
import { Subject, ReplaySubject } from 'rxjs/Rx';
export declare class MessagesService {
    private messagesList;
    newMessages: Subject<Message>;
    messages: ReplaySubject<Message[]>;
    updates: Subject<any>;
    create: Subject<Message>;
    constructor();
    addMessage(message: Message): void;
}
