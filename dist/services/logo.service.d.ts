import { ReplaySubject } from 'rxjs/Rx';
export declare class LogoService {
    private current;
    logo: any;
    constructor();
    setCurrent(logo: any): void;
    getCurrent(): ReplaySubject<any>;
}
