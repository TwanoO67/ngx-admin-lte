import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable()
export class RestService {
    public modelName: string;
    public headers: HttpHeaders;
    private serverWithApiUrl: string;

    // cache data
    public lastGetAll: Array<any>;
    public lastGet: any;

    constructor(private http: HttpClient) {
        this.modelName = 'to-configure';

        this.headers = new HttpHeaders({
          'Content-Type':  'application/json',
          'Accept': 'application/json'
        });
    }

    public setApiUrl( url: string) {
      this.serverWithApiUrl = url;
    }

    // HELPERS
    public getAllFromLS(maxtime = 0): Array<any> {
      const json = localStorage.getItem( 'rest_all_' + this.modelName );
      if ( json ) {
        const obj = JSON.parse(json);
        if ( obj && (obj.date < (Date.now() - maxtime) ) ) {
          return obj;
        }
      }
    }


    public getFromCache(id): any {
      if (this.lastGetAll) {
        return this.lastGetAll.find((unit) => unit.id === id);
      } else {
        return null;
      }
    }

    private getActionUrl() {
      return this.serverWithApiUrl + this.modelName + '/';
    }


    // REST functions
    public getAll(): Observable<any[]> {
        return this.http.get(this.getActionUrl(), { headers: this.headers })
        .pipe(
            map((response:  HttpResponse<any>) => {
              // getting an array having the same name as the model
              const data = response.body[this.modelName];
              // transforming the array from indexed to associative
              const tab = data.records.map((elem) => {
                const unit = {};
                // using the columns order and number to rebuild the object
                data.columns.forEach( (champ, index) => {
                  unit[champ] = elem[index];
                });
                return unit;
              });
              this.lastGetAll = tab;
              const obj = {
                data: tab,
                date: Date.now()
              };
              localStorage.setItem( 'rest_all_' + this.modelName, JSON.stringify(obj) );
              return tab;
            }),
            catchError(this.handleError)
        );
    }

    public get(id: number): Observable<any> {
        return this.http.get(this.getActionUrl() + id, { headers: this.headers })
        .pipe(
            map((response:  HttpResponse<any>) => {
              const data = response.body;
              this.lastGet = data;
              return data;
            }),
            catchError(this.handleError)
          );
    }

    public add(item: any): Observable<any> {
        const toAdd = JSON.stringify(item);

        return this.http.post(this.getActionUrl(), toAdd, { headers: this.headers })
        .pipe(
            map((response:  HttpResponse<any>) => response.body),
            catchError(this.handleError)
        );
    }

    public addAll(tab: Array<any>): Observable<any> {
      const toAdd = JSON.stringify(tab);

      return this.http.post(this.getActionUrl(), toAdd, { headers: this.headers })
      .pipe(
          map((response:  HttpResponse<any>) => response.body),
          catchError(this.handleError)
      );
    }

    public update(id: number, itemToUpdate: any): Observable<any> {
        return this.http.put(this.getActionUrl() + id, JSON.stringify(itemToUpdate), { headers: this.headers })
        .pipe(
            map((response:  HttpResponse<any>) => response.body),
            catchError(this.handleError)
        );
    }

    public delete(id: number): Observable<any> {
        return this.http.delete(this.getActionUrl() + id, { headers: this.headers })
        .pipe(
            catchError(this.handleError)
        );
    }

    private handleError(error:  HttpResponse<any>) {
        console.error(error);
        return Observable.throw(error.body || 'Server error');
    }
}
