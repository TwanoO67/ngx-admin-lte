import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
export declare class RestService {
    private http;
    modelName: string;
    headers: Headers;
    private serverWithApiUrl;
    lastGetAll: Array<any>;
    lastGet: any;
    constructor(http: Http);
    setApiUrl(url: string): void;
    getAllFromLS(maxtime?: number): Array<any>;
    getFromCache(id: any): any;
    private getActionUrl();
    getAll(): Observable<any[]>;
    get(id: number): Observable<any>;
    add(item: any): Observable<number>;
    addAll(tab: Array<any>): Observable<Array<number>>;
    update(id: number, itemToUpdate: any): Observable<number>;
    delete(id: number): Observable<Response>;
    private handleError(error);
}
