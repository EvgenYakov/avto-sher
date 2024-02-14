import { Injectable } from '@angular/core';

import { LoadingTypes } from '@constants';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { CarService, isObjectEmptyOrAllNull } from '@services';
import { map, switchMap, withLatestFrom } from 'rxjs';

import { addLoading, removeLoading } from '../../shared';
import {
  loadCars,
  loadCarsSuccess,
  loadModelsByBrand,
  loadModelsByBrandSuccess,
  loadMoreCars,
  loadMoreCarsSuccess,
  loadUsedCarsBrands,
  loadUsedCarsBrandsSuccess,
} from '../actions';
import { selectCarsFilterParams, selectCarsLimit, selectCarsPage } from '../selectors';

@Injectable()
export class CarListEffects {
  constructor(
    private actions$: Actions,
    private carService: CarService,
    private store: Store
  ) {}

  public loadAllCars$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCars),
      withLatestFrom(
        this.store.select(selectCarsPage),
        this.store.select(selectCarsLimit),
        this.store.select(selectCarsFilterParams)
      ),
      switchMap(([{ regionName }, page, limit, params]) => {
        if (isObjectEmptyOrAllNull(params)) {
          return this.carService.getAllCars(regionName, page, limit);
        } else {
          return this.carService.getCarsByFilter(params, regionName, page, limit);
        }
      }),
      map(paginationResponse =>
        loadCarsSuccess({
          cars: paginationResponse.data,
          pagesLeft: paginationResponse.metadata.pagesLeft,
        })
      )
    )
  );

  public loadMoreCars$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMoreCars),
      withLatestFrom(
        this.store.select(selectCarsPage),
        this.store.select(selectCarsLimit),
        this.store.select(selectCarsFilterParams)
      ),
      switchMap(([{ regionName }, page, limit, params]) => {
        if (isObjectEmptyOrAllNull(params)) {
          return this.carService.getAllCars(regionName, page, limit);
        } else {
          return this.carService.getCarsByFilter(params, regionName, page, limit);
        }
      }),
      map(paginationResponse =>
        loadMoreCarsSuccess({
          cars: paginationResponse.data,
          pagesLeft: paginationResponse.metadata.pagesLeft,
        })
      )
    )
  );

  public getUsedBrands$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsedCarsBrands),
      switchMap(({ regionName }) => this.carService.getCarsBrands(regionName)),
      map(brands => loadUsedCarsBrandsSuccess({ brands }))
    )
  );

  public getModelsByBrand$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadModelsByBrand),
      switchMap(({ regionName, brand }) => this.carService.getModelsByBrand(regionName, brand)),
      map(models => loadModelsByBrandSuccess({ models }))
    )
  );

  public addModelsLoading$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadModelsByBrand),
      map(() => addLoading({ addLoading: LoadingTypes.CAR_MODELS }))
    )
  );

  public removeModelsLoading$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadModelsByBrandSuccess),
      map(() => removeLoading({ removeLoading: LoadingTypes.CAR_MODELS }))
    )
  );

  public addCarsListLoading$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCars),
      map(() => addLoading({ addLoading: LoadingTypes.CARS_LIST }))
    )
  );

  public removeCarsListLoading$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCarsSuccess),
      map(() => removeLoading({ removeLoading: LoadingTypes.CARS_LIST }))
    )
  );
}
