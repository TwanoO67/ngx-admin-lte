export class Preferences {
    avatarUrl: string;
    preferredLang: string;

    constructor(data: any = {}) {
        this.avatarUrl = data.avatarUrl || '';
        this.preferredLang = data.preferredLang || null;
    }

}
