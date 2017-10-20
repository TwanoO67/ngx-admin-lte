import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RestService {
  modelName: string;
  // cache data
  lastGetAll: any[];
  lastGet: any;

  private headers: Headers;
  private serverWithApiUrl: string;

  constructor(private http: Http) {
    this.modelName = 'to-configure';
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  setApiUrl(url: string) {
    this.serverWithApiUrl = url;
  }

  // HELPERS
  getAllFromLS(maxtime = 0): any[] {
    const json = localStorage.getItem('rest_all_' + this.modelName);
    if (json) {
      const obj = JSON.parse(json);
      if (obj && (obj.date < (Date.now() - maxtime))) {
        return obj;
      }
    }
    return [];
  }

  getFromCache(id: string): any {
    if (this.lastGetAll) {
      return this.lastGetAll.find((unit) => unit.id === id);
    } else {
      return null;
    }
  }

  // REST functions
  getAll(): Observable<any[]> {
    return this.http.get(this.getActionUrl())
      .map((response: Response) => {
        // getting an array having the same name as the model
        const data = response.json()[this.modelName];
        // transforming the array from indexed to associative
        const tab = data.records.map((elem) => {
          const unit = {};
          // using the columns order and number to rebuild the object
          data.columns.forEach((champ, index) => {
            unit[champ] = elem[index];
          });
          return unit;
        });
        this.lastGetAll = tab;
        const obj = {
          data: tab,
          date: Date.now(),
        };
        localStorage.setItem('rest_all_' + this.modelName, JSON.stringify(obj));
        return tab;
      })
      .catch(this.handleError);
  }

  get(id: number): Observable<any> {
    return this.http.get(this.getActionUrl() + id)
      .map((response: Response) => {
        const data = response.json();
        this.lastGet = data;
        return data;
      })
      .catch(this.handleError);
  }

  add(item: any): Observable<number> {
    const toAdd = JSON.stringify(item);

    return this.http.post(this.getActionUrl(), toAdd, { headers: this.headers })
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  addAll(tab: any[]): Observable<number[]> {
    const toAdd = JSON.stringify(tab);

    return this.http.post(this.getActionUrl(), toAdd, { headers: this.headers })
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  update(id: number, itemToUpdate: any): Observable<number> {
    return this.http.put(this.getActionUrl() + id, JSON.stringify(itemToUpdate), { headers: this.headers })
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  delete(id: number): Observable<Response> {
    return this.http.delete(this.getActionUrl() + id)
      .catch(this.handleError);
  }

  private getActionUrl() {
    return this.serverWithApiUrl + this.modelName + '/';
  }

  private handleError(error: Response) {
    // console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
