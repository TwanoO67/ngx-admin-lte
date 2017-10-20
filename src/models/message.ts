import { User } from './user';

export class Message {
  content: string;
  title: string;
  author: User;
  destination: User;
  date: string;

  constructor(data: any = {}) {
    this.content = data.content || '';
    this.title = data.title || '';
    this.author = data.author || null;
    this.destination = data.destination || null;
    this.date = data.date || Date.now();
  }
}
