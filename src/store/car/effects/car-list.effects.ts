import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { catchError, map, of, switchMap, withLatestFrom } from 'rxjs';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { CarService } from '@services';
import { LoadingTypes } from '@constants';

import {
  filterCar,
  filterCarFailure,
  filterCarSuccess,
  loadAllCars,
  loadAllCarsSuccess,
  loadModelsByBrand,
  loadModelsByBrandSuccess,
  loadMore,
  loadUsedCarsBrands,
  loadUsedCarsBrandsSuccess
} from '../actions';
import { addLoading, removeLoading } from '../../shared';
import { selectCarsPage } from '../selectors';

@Injectable()
export class CarListEffects {
  constructor(
    private actions$: Actions,
    private carService: CarService,
    private store: Store
  ) {}

  public loadAllCars$ = createEffect( () => this.actions$.pipe(
    ofType( loadAllCars, loadMore ),
    withLatestFrom(
      this.store.select( selectCarsPage )
    ),
    switchMap( ([_,page]) => this.carService.getAllCars( page ) ),
    map( (cars) => loadAllCarsSuccess( { cars } ) ),
  ) );

  public getUsedBrands$ = createEffect( () => this.actions$.pipe(
    ofType( loadUsedCarsBrands ),
    switchMap( () => this.carService.getCarsBrands() ),
    map( (brands) => loadUsedCarsBrandsSuccess( { brands } ) ),
  ) );

  public getModelsByBrand$ = createEffect( () => this.actions$.pipe(
    ofType( loadModelsByBrand ),
    switchMap( ({ brand }) => this.carService.getModelsByBrand( brand ) ),
    map( (models) => loadModelsByBrandSuccess( { models } ) ),
  ) );

  public filteredCars$ = createEffect( () => this.actions$.pipe(
    ofType( filterCar ),
    switchMap( ({ filterParams }) => this.carService.getCarsByFilter( filterParams ) ),
    map( (filteredCars) => {
      console.log(filteredCars)
      return filterCarSuccess( { filteredCars } )
    } ),
    catchError( (error: HttpErrorResponse) => of( filterCarFailure( { errors: error.message } ) ) )
  ) );

  public addLoading$ = createEffect( () =>
    this.actions$.pipe(
      ofType(
        loadModelsByBrand
      ),
      map( () => addLoading( { addLoading: LoadingTypes.CAR_MODELS } ) )
    )
  );

  public removeLoading$ = createEffect( () =>
    this.actions$.pipe(
      ofType(
        loadModelsByBrandSuccess,
      ),
      map( () => removeLoading( { removeLoading: LoadingTypes.CAR_MODELS } ) )
    )
  );

}