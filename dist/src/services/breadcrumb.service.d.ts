import { ReplaySubject } from 'rxjs/ReplaySubject';
export declare class BreadcrumbService {
    current: ReplaySubject<any>;
    private initialData;
    constructor();
    setCurrent(data: any): void;
    getCurrent(): any;
    clear(): void;
}
