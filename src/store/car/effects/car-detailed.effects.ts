import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, of, switchMap } from 'rxjs';

import { CarService } from '@services';
import { CarProfile } from '@models';

import { loadCar, loadCarFailure, loadCarSuccess } from '../actions';
import { Store } from '@ngrx/store';
import { loadAutoparkCars } from '../../autopark';

@Injectable()
export class CarDetailedEffects {
  constructor(
    private actions$: Actions,
    private carService: CarService,
    private store: Store
  ) {
  }

  public loadCarProfile$ = createEffect( () => this.actions$.pipe(
    ofType( loadCar ),
    switchMap( ({ carId }) => this.carService.getCarProfile( carId ) ),
    map( (car: CarProfile) => {
      this.store.dispatch( loadAutoparkCars( { autoparkId: car.autopark.id } ) )
      return loadCarSuccess( { car } )
    } ),
    catchError( (error: HttpErrorResponse) => of( loadCarFailure( { error: error.message } ) ) )
  ) );

  // public addCarPhoto$ = createEffect( () => this.actions$.pipe(
  //   ofType( addPhoto ),
  //   switchMap( ({ newPhoto }) => this.carService.addPhoto( 1, newPhoto ) ),
  //   map( (photo) => addPhotoSuccess( { photo } ) ),
  //   catchError( (error: HttpErrorResponse) =>
  //     of( addPhotoFailure( { errors: error } ) )
  //   )
  // ) );
  //
  // public deleteCarPhotos$ = createEffect( () => this.actions$.pipe(
  //   ofType( deletePhotos ),
  //   switchMap( ({ deletedPhotos }) => this.carService.deletePhotos( 1, deletedPhotos ) ),
  //   map( (photos) => deletePhotosSuccess( { photos } ) ),
  //   catchError( (error: HttpErrorResponse) =>
  //     of( deletePhotosFailure( { errors: error } ) )
  //   )
  // ) );
}