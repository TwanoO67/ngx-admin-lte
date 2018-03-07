import { ReplaySubject } from 'rxjs/ReplaySubject';
export declare class BreadcrumbService {
    current: ReplaySubject<any>;
    private initialData;
    constructor();
    setCurrent(data: any): void;
    getCurrent(): ReplaySubject<any>;
    clear(): void;
}
