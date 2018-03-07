import { ReplaySubject } from 'rxjs/Rx';
export declare class FooterService {
    current: ReplaySubject<any>;
    default: any;
    constructor();
    setCurrent(footer: any): void;
    getCurrent(): ReplaySubject<any>;
}
