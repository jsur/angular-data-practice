import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Player } from '../models/Player';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/catch';

@Injectable()
export class StatisticsService {

  constructor(private http: HttpClient) { }

  private statsQueryString = `PerMode=Totals&LeagueID=00&Season=2016-17&SeasonType=Regular Season`;

  getPlayerList(): Observable<Player[]> {
     return this.http.get(`
      ${environment.base_url}leaguedashplayerbiostats?${this.statsQueryString}`)
        .map(((response: any) => {
          return response.resultSets[0].rowSet.map((item) => {
            return new Player(item);
          });
        })
      )
      .retry(3)
      .catch(this.catchError)
  }

  private catchError(e: HttpErrorResponse): Observable<HttpErrorResponse> {
    return Observable.throw(e);
  }

}
