// based on https://github.com/ng-book/angular2-rxjs-chat/blob/master/app/ts/services/MessagesService.ts
import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs/Rx';
import { Message } from '../models/message';

type IMessagesOperation = (messages: Message[]) => Message[];

@Injectable()
export class MessagesService {
  private messagesList: Message[] = [];
  // a stream that publishes new messages only once
  newMessages: Subject<Message> = new Subject<Message>();

  // `messages` is a stream that emits an array of the most up to date messages
  messages: ReplaySubject<Message[]> = new ReplaySubject<Message[]>(1);

  // `updates` receives _operations_ to be applied to our `messages`
  // it's a way we can perform changes on *all* messages (that are currently
  // stored in `messages`)
  updates: Subject<any> = new Subject<any>();

  // action streams
  create: Subject<Message> = new Subject<Message>();
  //  markThreadAsRead: Subject<any> = new Subject<any>();

  constructor() {
    // recois des operation, et les fais sur la liste interne, puis diffuse le resultat sur messages
    this.updates.subscribe((ope) => {
      this.messagesList = ope(this.messagesList);
      console.log(this.messagesList);
      this.messages.next(this.messagesList);
    });

    this.newMessages
      .map(function (message: Message): IMessagesOperation {
        return (messages: Message[]) => {
          return messages.concat(message);
        };
      })
      .subscribe(this.updates);
  }

  // an imperative function call to this action stream
  addMessage(message: Message): void {
    this.newMessages.next(message);
  }

}
