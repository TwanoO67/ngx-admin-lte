import { User } from '../models/user';
import { Router } from '@angular/router';
export declare class UserService {
    private router;
    private current;
    logoutAction: Function;
    constructor(router: Router);
    setCurrent(user: User): void;
    getCurrent(): any;
    logout(): void;
}
