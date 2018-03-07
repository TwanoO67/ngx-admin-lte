import { OnInit } from '@angular/core';
import { TranslateService as NGXTranslateService } from '@ngx-translate/core';
import { UserService } from './user.service';
export declare class TranslateService implements OnInit {
    private userServ;
    private translate;
    private lang;
    private currentUser;
    constructor(userServ: UserService, translate: NGXTranslateService);
    ngOnInit(): void;
    getTranslate(): NGXTranslateService;
}
