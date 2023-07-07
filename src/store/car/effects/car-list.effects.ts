import { Injectable } from '@angular/core';

import { map, skip, switchMap, withLatestFrom } from 'rxjs';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { CarService, isObjectEmptyOrAllNull } from '@services';
import { LoadingTypes } from '@constants';

import {
  loadCars,
  loadCarsSuccess,
  loadModelsByBrand,
  loadModelsByBrandSuccess,
  loadMore,
  loadMoreSuccess,
  loadUsedCarsBrands,
  loadUsedCarsBrandsSuccess
} from '../actions';
import { addLoading, removeLoading } from '../../shared';
import { selectCarsFilterParams, selectCarsLimit, selectCarsPage } from '../selectors';
import { selectRegion, setCurrentRegion } from '../../region';

@Injectable()
export class CarListEffects {
  constructor(
    private actions$: Actions,
    private carService: CarService,
    private store: Store,
  ) {}

  public loadAllCars$ = createEffect( () =>
    this.actions$.pipe(
      ofType( loadCars, loadMore ),
      withLatestFrom(
        this.store.select( selectCarsPage ),
        this.store.select( selectCarsLimit ),
        this.store.select( selectCarsFilterParams ),
        this.store.select( selectRegion )
      ),
      switchMap( ([action, page, limit, params, region]) => {
        const isLoadMoreAction = action.type === loadMore.type;

        if (isObjectEmptyOrAllNull( params )) {
          return this.carService.getAllCars( region.name, page, limit ).pipe(
            map( cars => ({ cars, isLoadMoreAction }) )
          );
        } else {
          return this.carService.getCarsByFilter( params, region.name, page, limit ).pipe(
            map( cars => ({ cars, isLoadMoreAction }) )
          );
        }
      } ),
      map( ({ cars, isLoadMoreAction }) =>
        isLoadMoreAction ? loadMoreSuccess( { cars } ) : loadCarsSuccess( { cars } )
      )
    )
  );

  public getUsedBrands$ = createEffect( () => this.actions$.pipe(
    ofType( loadUsedCarsBrands, setCurrentRegion ),
    withLatestFrom(
      this.store.select( selectRegion )
    ),
    skip( 1 ),
    switchMap( ([_, region]) => this.carService.getCarsBrands( region.name ) ),
    map( (brands) => loadUsedCarsBrandsSuccess( { brands } ) ),
  ) );

  public getModelsByBrand$ = createEffect( () => this.actions$.pipe(
    ofType( loadModelsByBrand ),
    withLatestFrom(
      this.store.select( selectRegion )
    ),
    switchMap( ([{ brand }, region]) => this.carService.getModelsByBrand( region.name, brand ) ),
    map( (models) => loadModelsByBrandSuccess( { models } ) ),
  ) );

  public addModelsLoading$ = createEffect( () =>
    this.actions$.pipe(
      ofType(
        loadModelsByBrand
      ),
      map( () => addLoading( { addLoading: LoadingTypes.CAR_MODELS } ) )
    )
  );

  public removeModelsLoading$ = createEffect( () =>
    this.actions$.pipe(
      ofType(
        loadModelsByBrandSuccess,
      ),
      map( () => removeLoading( { removeLoading: LoadingTypes.CAR_MODELS } ) )
    )
  );

  public addCarsListLoading$ = createEffect( () =>
    this.actions$.pipe(
      ofType(
        loadCars
      ),
      map( () => addLoading( { addLoading: LoadingTypes.CARS_LIST } ) )
    )
  );

  public removeCarsListLoading$ = createEffect( () =>
    this.actions$.pipe(
      ofType(
        loadCarsSuccess,
      ),
      map( () => removeLoading( { removeLoading: LoadingTypes.CARS_LIST } ) )
    )
  );

}