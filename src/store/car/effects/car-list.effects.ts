import { Injectable } from '@angular/core';

import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { CarService } from '@services';

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

  // public filteredCars$ = createEffect( () => this.actions$.pipe(
  //   ofType( filterCar ),
  //   switchMap( ({ filterParams }) => this.carService.filteredCars( filterParams ) ),
  //   map( (filteredCars) => filterCarSuccess( { filteredCars } ) ),
  //   catchError( (error: HttpErrorResponse) =>
  //     of( filterCarFailure( { errors: error } ) )
  //   )
  // ) );

  // //instead of 1 need to get current autopark-profile from store and put id from this autopark-profile
  // public createCar$ = createEffect(() => this.actions$.pipe(
  //   ofType(createCar),
  //   switchMap(({ newCar }) => this.carService.createCar(newCar, 1)),
  //   map((car) => createCarSuccess({ car })),
  //   catchError((error: HttpErrorResponse) =>
  //     of(createCarFailure({ errors: error }))
  //   )
  // ));
  //
  // public deleteCar$ = createEffect(() => this.actions$.pipe(
  //   ofType(deleteCar),
  //   switchMap(({ carId }) => this.carService.deleteCar(carId)),
  //   map((carId) => deleteCarSuccess({ carId })),
  //   catchError((error: HttpErrorResponse) =>
  //     of(deleteCarFailure({ errors: error }))
  //   )
  // ));
}