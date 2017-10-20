export class User {
    avatarUrl: string;
    connected: boolean;
    creationDate: number;
    email: string;
    firstname: string;
    lastname: string;
    preferredLang?: string;

    constructor(data: any) {
        this.avatarUrl = data.avatarUrl || '';
        this.connected = data.connected;
        this.creationDate = data.creationDate || Date.now();
        this.email = data.email || '';
        this.firstname = data.firstname || '';
        this.lastname = data.lastname || '';
        this.preferredLang = data.preferredLang || 'en';
    }

    getDummyUser(): User {
        return new User({
            avatarUrl: '',
            connected: false,
            creationDate: Date.now(),
            email: '',
            firstname: '',
            lastname: '',
            preferredLang: 'en',
        });
    }
    getName() {
        return this.firstname + ' ' + this.lastname;
    }
}
