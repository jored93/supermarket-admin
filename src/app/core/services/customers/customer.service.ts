import { Utils } from '../../../tools/utils';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as AppConst from '../../../app.const';
import { catchError, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  searchAllCustomers() {

    return this.getObservable(
      {},
      Utils.getCustomers(),
      AppConst.HTTP_METHOD_GET
    ).pipe(retry(1), catchError(Utils.parseErrorHandle));
  }

  searchValidCustomersPaid( identification: string ) {
    return this.getObservable(
      {},
      Utils.getCustomerById(identification),
      AppConst.HTTP_METHOD_GET
    ).pipe(retry(1), catchError(Utils.parseErrorHandle));
  }

  getObservable<T>(body: any, url: string, httpMethod?: string): Observable<T> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  
    const method = httpMethod ?? AppConst.HTTP_METHOD_GET;
    return this.getHttpConfiguration(body, url, method, httpOptions);
  }

  getHttpConfiguration(
    body: any,
    url: string,
    httpMethod: string,
    httpOptions: {}
  ): Observable<any> {
    let httpResponse;
    switch (httpMethod) {
      case AppConst.HTTP_METHOD_GET:
        httpResponse = this.http.get(url, httpOptions);
        break;
      case AppConst.HTTP_METHOD_POST:
        httpResponse = this.http.post<any>(url, body, httpOptions);
        break;
      case AppConst.HTTP_METHOD_PUT:
        httpResponse = this.http.put(url, body, httpOptions);
        break;
      default:
        httpResponse = this.http.delete(url, httpOptions);
        break;
    }
    return httpResponse;
  }
}