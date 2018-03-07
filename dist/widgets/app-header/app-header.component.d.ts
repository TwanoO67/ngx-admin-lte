import { UserService } from '../../services/user.service';
import { ControlSidebarService } from '../../services/control-sidebar.service';
export declare class AppHeaderComponent {
    private userService;
    private sidebarService;
    display_messages: boolean;
    display_notifications: boolean;
    display_tasks: boolean;
    display_user: boolean;
    display_control: boolean;
    display_logout: boolean;
    header_components: any[];
    constructor(userService: UserService, sidebarService: ControlSidebarService);
    logout(): void;
    toggleSidebar(): void;
}
