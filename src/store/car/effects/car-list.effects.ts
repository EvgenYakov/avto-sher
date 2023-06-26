import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { CarService } from '@services';
import {
  filterCar,
  filterCarFailure,
  filterCarSuccess,
  loadModelsByBrand,
  loadModelsByBrandSuccess,
  loadUsedCarsBrands,
  loadUsedCarsBrandsSuccess
} from '../actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class CarListEffects {
  constructor(
    private actions$: Actions,
    private carService: CarService,
    private store: Store
  ) {
  }

  // public loadAllCars$ = createEffect( () => this.actions$.pipe(
  //   ofType( loadAllCars ),
  //   switchMap( () => this.carService.getListCars() ),
  //   map( (cars) => loadAllCarsSuccess( { cars } ) ),
  //   catchError( (error: HttpErrorResponse) => of( loadAllCarsFailure( { errors: error.error.message } ) ) )
  // ) );

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

}