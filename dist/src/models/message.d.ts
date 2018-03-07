import { User } from './user';
export declare class Message {
    content: string;
    title: string;
    author: User;
    destination: User;
    date: string;
    constructor(data?: any);
}
