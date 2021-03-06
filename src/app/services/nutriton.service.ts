import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Food } from '../models/food.model';
import { SearchResult } from '../models/search-result.model';



@Injectable()
export class NutritionService {

  apiKey: string;
  constructor(private http: Http) {
    this.apiKey = '';
  }


  searchFood(query: string): Observable<SearchResult[]> {
    const url = 'https://api.nal.usda.gov/ndb/search/?format=json&';
    const params: string = [
      `q=${query}`,
      `sort=r`,
      `max=25`,
      `offset=0`,
      `ds=Standard%20Reference`,
      `api_key=${this.apiKey}`
    ].join('&');
    const queryUrl = `${url}${params}`;
    return this.http.get(queryUrl).map((response: Response) =>
      response.json().list ? response.json().list.item.map(item => {
        return new SearchResult(item);
      }) : []);
  }

  fetchFood(query: string): Observable<Food> {
    const url = 'https://api.nal.usda.gov/ndb/nutrients/?format=json&';
    const params: string = [
      `ndbno=${query}`,
      `nutrients=255`, // Water
      `nutrients=208`, // Energy
      `nutrients=203`, // Protein
      `nutrients=204`, // Total lipid
      `nutrients=205`, // Carbohydrate
      `nutrients=268`, // Energy
      `nutrients=269`, // Sugars
      `nutrients=291`, // Fiber
      `api_key=${this.apiKey}`
    ].join('&');

    const queryUrl = `${url}${params}`;
    return this.http.get(queryUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response): Food {
    const body = res.json().report.foods[0];
    return new Food(body);
  }

  private handleError(error: Response | any) {
    let errorMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errorMsg = err;
    } else {
      errorMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errorMsg);
  }
}
