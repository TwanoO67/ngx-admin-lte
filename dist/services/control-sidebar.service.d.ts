import { ReplaySubject } from 'rxjs/Rx';
export declare class ControlSidebarService {
    private current;
    default: any;
    private current_value;
    constructor();
    getCurrent(): ReplaySubject<any>;
    open(): void;
    close(): void;
    toggle(): void;
}
