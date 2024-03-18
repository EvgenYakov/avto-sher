import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { LoadingTypes } from '@constants';
import { CarProfile } from '@models';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { CarService } from '@services';
import { catchError, map, of, switchMap } from 'rxjs';

import { loadAutoparkCars } from '../../autopark';
import { addLoading, removeLoading } from '../../shared';
import { loadCar, loadCarFailure, loadCarSuccess } from '../actions';

@Injectable()
export class CarDetailedEffects {
  constructor(
    private actions$: Actions,
    private carService: CarService,
    private store: Store
  ) {}

  public loadCarProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCar),
      switchMap(({ carId }) => this.carService.getCarProfile(carId)),
      map((car: CarProfile) => {
        this.store.dispatch(loadAutoparkCars({ autoparkId: car.autopark.id }));
        return loadCarSuccess({ car });
      }),
      catchError((error: HttpErrorResponse) => of(loadCarFailure({ error: error.message })))
    )
  );

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

  addLoading$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCar),
      map(() => addLoading({ addLoading: LoadingTypes.CAR_DETAILED }))
    )
  );

  removeLoading$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCarSuccess),
      map(() => removeLoading({ removeLoading: LoadingTypes.CAR_DETAILED }))
    )
  );
}
