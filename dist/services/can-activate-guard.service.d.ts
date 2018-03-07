import { CanActivate, Router } from '@angular/router';
import { UserService } from './user.service';
export declare class CanActivateGuard implements CanActivate {
    private router;
    private userService;
    private connected;
    constructor(router: Router, userService: UserService);
    canActivate(): boolean;
}
