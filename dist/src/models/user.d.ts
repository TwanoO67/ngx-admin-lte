export declare class User {
    firstname: string;
    lastname: string;
    email: string;
    avatarUrl: string;
    creationDate: string;
    preferredLang: string;
    connected: boolean;
    constructor(data?: any);
    getName(): string;
}
