import { Injectable, OnInit } from '@angular/core';
import { TranslateService as NGXTranslateService } from '@ngx-translate/core';
import { User } from '../models/user';
import { UserService } from './user.service';

const langs = ['en', 'fr', 'ru', 'he', 'zh'];
const langmatch = /en|fr|ru|he|zh/;

@Injectable()
export class TranslateService implements OnInit {
    private currentUser: User;

    constructor(private userServ: UserService, private translate: NGXTranslateService) {
        translate.addLangs(langs);
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');

        this.userServ.getCurrent().subscribe((user: User) => {
            this.currentUser = user;
            // the lang to use, if the lang isn't available, it will use the current loader to get them
            const browserLang = this.translate.getBrowserLang();
            // const browserCultureLang = this.translate.getBrowserCultureLang();
            // console.log('Detected browser language: "' + browserCultureLang + '"');

            // check if current User has a Preferred Language set, and it differs from his browser lang
            let useLang = 'en';
            const prefLang = (this.currentUser) ? this.currentUser.preferredLang : null;
            if (!prefLang) {
                useLang = browserLang.match(langmatch) ? browserLang : 'en';
            } else {
                // console.log('Detected User preferred language: "' + prefLang + '"');
                useLang = prefLang.match(langmatch) ? prefLang : 'en';
            }
            this.translate.use(useLang);
            // console.log('Translation language has been set to: "' + useLang + '"');
            // translate.use( 'ru' );
        });
    }

    ngOnInit() {
        // TODO
    }

    getTranslate(): NGXTranslateService {
        return this.translate;
    }

}
