import {throwError as observableThrowError,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, catchError, retry } from 'rxjs/operators';
import { Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';

import { environment } from '../environments/environment';
import { DraggyModel } from './draggy/draggy.model';
// import { IndeterminatePreloaderService } from './indeterminate-preloader.service';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;
  public errorBlueprint = {
    error: '500',
    msg: 'Something went wrong'
  };

  constructor(private httpClient: HttpClient) { }

  getDraggyItems(from: number, to: number, date?: string, filters?: any[]): Observable<any> {
    this.startPreloader();
    const completeApiUrl = `${this.apiUrl}/items?from=${from}&to=${to}`;
    return this.httpClient.get<[DraggyModel]>(completeApiUrl,
      { headers: new HttpHeaders().set('Authorization', 'sample-bearer-token') })
      .pipe(
        map(items => {
          this.stopPreloader();
          return items.map(item => {
            return new DraggyModel(
              item.title,
              item.duration
            );
          });
        })
      );
  }

  startPreloader() {

  }

  stopPreloader() {

  }
}
