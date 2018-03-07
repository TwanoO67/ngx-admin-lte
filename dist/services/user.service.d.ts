import { User } from '../models/user';
import { ReplaySubject } from 'rxjs/Rx';
import { Router } from '@angular/router';
export declare class UserService {
    private router;
    private current;
    logoutAction: Function;
    constructor(router: Router);
    setCurrent(user: User): void;
    getCurrent(): ReplaySubject<User>;
    logout(): void;
}
