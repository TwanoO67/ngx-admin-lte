import { OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
export declare class UserBoxComponent implements OnInit {
    private userServ;
    private router;
    currentUser: User;
    constructor(userServ: UserService, router: Router);
    ngOnInit(): void;
    logout: () => void;
}
