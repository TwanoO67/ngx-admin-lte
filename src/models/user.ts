export class User {
    firstname: string;
    lastname: string;
    email: string;
    avatarUrl: string;
    creationDate: number;
    preferredLang?: string;
    connected: boolean;

    constructor(data: any) {
        this.firstname = data.firstname || '';
        this.lastname = data.lastname || '';
        this.email = data.email || '';
        this.avatarUrl = data.avatarUrl || '';
        this.creationDate = data.creationDate || Date.now();
        this.preferredLang = data.preferredLang || 'en';
        this.connected = data.connected;
    }

    getDummyUser(): User {
        return new User ({
            firstname: '',
            lastname: '',
            email: '',
            avatarUrl: '',
            creationDate: Date.now(),
            preferredLang: 'en',
            connected: false
        });
    }
    getName() {
        return this.firstname + ' ' + this.lastname;
    }
}
