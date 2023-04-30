import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

import { CarService } from '@services';
import {
  createCar,
  createCarFailure,
  createCarSuccess,
  deleteCar,
  deleteCarFailure,
  deleteCarSuccess,
  loadCars,
  loadCarsFailure,
  loadCarsSuccess
} from '../actions/cars-list.actions';

@Injectable()
export class CarListEffects {
  constructor(
    private actions$: Actions,
    private carService: CarService,
  ) {
  }

  public loadCars$ = createEffect(() => this.actions$.pipe(
    ofType(loadCars),
    switchMap(({ autoparkId }) => this.carService.getCars(autoparkId)),
    map((cars) => loadCarsSuccess({ cars })),
    catchError((error: HttpErrorResponse) =>
      of(loadCarsFailure({ errors: error }))
    )
  ));

  //instead of 1 need to get current autopark from store and put id from this autopark
  public createCar$ = createEffect(() => this.actions$.pipe(
    ofType(createCar),
    switchMap(({ newCar }) => this.carService.createCar(newCar, 1)),
    map((car) => createCarSuccess({ car })),
    catchError((error: HttpErrorResponse) =>
      of(createCarFailure({ errors: error }))
    )
  ));

  public deleteCar$ = createEffect(() => this.actions$.pipe(
    ofType(deleteCar),
    switchMap(({ carId }) => this.carService.deleteCar(carId)),
    map((carId) => deleteCarSuccess({ carId })),
    catchError((error: HttpErrorResponse) =>
      of(deleteCarFailure({ errors: error }))
    )
  ));
}