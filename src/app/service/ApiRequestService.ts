import {Injectable} from '@angular/core';
import {AppConfig} from '../app-config';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {catchError} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class ApiRequestService {

  constructor(private appConfig: AppConfig,
              private http: HttpClient) {
  }

  // get(url: string, urlParams?: URLSearchParams): Observable<any> {
  //   // let requestOptions = this.getRequestOptions(RequestMethod.Get, url, urlParams);
  //   return this.http.get(this.appConfig.baseApiPath + url );
  // }

  get<T>(url: string, params?: HttpParams): Observable<any> {
    return this.http.get<T>(this.appConfig.baseApiPath + url, {params});
  }

  post<T>(url: string, body: any | null): Observable<T> {
    return this.http.post<T>(this.appConfig.baseApiPath + url, body, httpOptions);
  }

  put<T>(url: string, body: any): Observable<T> {
    return this.http.put<T>(this.appConfig.baseApiPath + url, body, httpOptions);
  }

}
