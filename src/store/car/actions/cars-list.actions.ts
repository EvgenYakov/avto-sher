import { createAction, props } from '@ngrx/store';
import { CarCard } from '@models';
import { CarFilterParams } from '@components';

export enum CarsListActions {
  LOAD_CARS = '[CAR] Get all cars',
  LOAD_CARS_SUCCESS = '[CAR] Get all cars success',

  SET_CARS_FILTERS = '[CAR] Set filters',

  // CREATE_CAR = '[CAR] Add new car in autopark',
  // CREATE_CAR_SUCCESS = '[CAR] Add new car in autopark success',
  // CREATE_CAR_FAILURE = '[CAR] Add new car in autopark failure',
  //
  // DELETE_CAR = '[CAR] Add new car in autopark',
  // DELETE_CAR_SUCCESS = '[CAR] Add new car in autopark success',
  // DELETE_CAR_FAILURE = '[CAR] Add new car in autopark failure',

  LOAD_USED_BRANDS = '[CARS BRANDS] Load used cars brands',
  LOAD_USED_BRANDS_SUCCESS = '[CARS BRANDS] Load used cars brands success',
  LOAD_USED_MODELS = '[CARS MODELS] Load used cars models',
  LOAD_USED_MODELS_SUCCESS = '[CARS MODELS] Load used cars models by brand success',

  LOAD_MORE = '[CARS LIST] Load more cars',
  LOAD_MORE_SUCCESS = '[CARS LIST] Load more cars success',
}

export const loadMoreCars = createAction(
  CarsListActions.LOAD_MORE,
  props<{ regionName: string }>()
);

export const loadMoreCarsSuccess = createAction(
  CarsListActions.LOAD_MORE_SUCCESS,
  props<{ cars: CarCard[], pagesLeft: number }>()
);

export const setCarsFiltersParams = createAction(
  CarsListActions.SET_CARS_FILTERS,
  props<{ params: CarFilterParams }>()
)

export const loadCars = createAction(
  CarsListActions.LOAD_CARS,
  props<{ regionName: string }>()
);

export const loadCarsSuccess = createAction(
  CarsListActions.LOAD_CARS_SUCCESS,
  props<{ cars: CarCard[], pagesLeft: number }>()
);


// export const createCar = createAction(
//   CarsListActions.CREATE_CAR,
//   props<{ newCar: AutoProfile }>()
// );
//
// export const createCarSuccess = createAction(
//   CarsListActions.CREATE_CAR_SUCCESS,
//   props<{ car: AutoProfile }>()
// );
//
// export const createCarFailure = createAction(
//   CarsListActions.CREATE_CAR_FAILURE,
//   props<{ errors: any }>()
// );
//
// export const deleteCar = createAction(
//   CarsListActions.DELETE_CAR,
//   props<{ carId: number }>()
// );
//
// export const deleteCarSuccess = createAction(
//   CarsListActions.DELETE_CAR_SUCCESS,
//   props<{ carId: number }>()
// );
//
// export const deleteCarFailure = createAction(
//   CarsListActions.DELETE_CAR_FAILURE,
//   props<{ errors: any }>()
// );
//

export const loadUsedCarsBrands = createAction(
  CarsListActions.LOAD_USED_BRANDS,
  props<{ regionName: string }>()
);

export const loadUsedCarsBrandsSuccess = createAction(
  CarsListActions.LOAD_USED_BRANDS_SUCCESS,
  props<{ brands: string[] }>()
);

export const loadModelsByBrand = createAction(
  CarsListActions.LOAD_USED_MODELS,
  props<{ regionName: string, brand: string }>()
);

export const loadModelsByBrandSuccess = createAction(
  CarsListActions.LOAD_USED_MODELS_SUCCESS,
  props<{ models: string[] }>()
);