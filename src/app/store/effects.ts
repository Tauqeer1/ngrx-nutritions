import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import * as FoodActions from './actions';
import { NutritionService } from '../services/nutriton.service';


@Injectable()
export class FoodEffects {
  constructor(
    private actions$: Actions,
    private nutritionService: NutritionService) { }

  @Effect()
  searchFood$: Observable<Action> = this.actions$
    .ofType(FoodActions.SEARCH)
    .map(toPayload)
    .switchMap(query => {
      return this.nutritionService.searchFood(query)
        .map(results => new FoodActions.SearchDone(results));
    });

  @Effect()
  fetchFood$: Observable<Action> = this.actions$
    .ofType(FoodActions.FETCH_FOOD)
    .map(toPayload)
    .switchMap(query => {
      return this.nutritionService.fetchFood(query)
        .map(food => new FoodActions.FetchFoodDone(food));
    });



}

