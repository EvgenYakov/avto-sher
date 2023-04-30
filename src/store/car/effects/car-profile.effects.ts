import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CarService } from '../../../app/services/http/car.service';
import {
  addPhoto,
  addPhotoFailure,
  addPhotoSuccess, deletePhotos, deletePhotosFailure, deletePhotosSuccess,
  loadCar,
  loadCarFailure,
  loadCarSuccess
} from '../actions/car-profile.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class CarProfileEffects {
  constructor(
    private actions$: Actions,
    private carService: CarService,
  ) {
  }

  public loadCar$ = createEffect(() => this.actions$.pipe(
    ofType(loadCar),
    switchMap(({ carId }) => this.carService.getCarProfile(carId)),
    map((car) => loadCarSuccess({ car })),
    catchError((error: HttpErrorResponse) =>
      of(loadCarFailure({ errors: error }))
    )
  ));

  public addCarPhoto$ = createEffect(() => this.actions$.pipe(
    ofType(addPhoto),
    switchMap(({ newPhoto }) => this.carService.addPhoto(1, newPhoto)),
    map((photo) => addPhotoSuccess({ photo })),
    catchError((error: HttpErrorResponse) =>
      of(addPhotoFailure({ errors: error }))
    )
  ));

  public deleteCarPhotos$ = createEffect(() => this.actions$.pipe(
    ofType(deletePhotos),
    switchMap(({ deletedPhotos }) => this.carService.deletePhotos(1, deletedPhotos)),
    map((photos) => deletePhotosSuccess({ photos })),
    catchError((error: HttpErrorResponse) =>
      of(deletePhotosFailure({ errors: error }))
    )
  ));
}