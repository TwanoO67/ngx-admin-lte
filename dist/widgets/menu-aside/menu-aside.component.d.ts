import { OnInit, OnChanges } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
export declare class MenuAsideComponent implements OnInit, OnChanges {
    private userServ;
    router: Router;
    currentUrl: string;
    currentUser: User;
    links: Array<any>;
    display_menu_user: boolean;
    display_menu_search: boolean;
    menu_title: string;
    constructor(userServ: UserService, router: Router);
    ngOnInit(): void;
    ngOnChanges(changes: any): void;
}
