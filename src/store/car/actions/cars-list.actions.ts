import { createAction, props } from '@ngrx/store';
import { CarCard, FilterParams } from '@models';

export enum CarsListActions {
  LOAD_ALL_CARS = '[CAR] Get all cars',
  LOAD_ALL_CARS_SUCCESS = '[CAR] Get all cars success',
  LOAD_ALL_CARS_FAILURE = '[CAR] Get all cars failure',

  // CREATE_CAR = '[CAR] Add new car in autopark',
  // CREATE_CAR_SUCCESS = '[CAR] Add new car in autopark success',
  // CREATE_CAR_FAILURE = '[CAR] Add new car in autopark failure',
  //
  // DELETE_CAR = '[CAR] Add new car in autopark',
  // DELETE_CAR_SUCCESS = '[CAR] Add new car in autopark success',
  // DELETE_CAR_FAILURE = '[CAR] Add new car in autopark failure',
  //
  FILTER_CAR_REQUEST = '[CARS] Load cars by filter',
  FILTER_CAR_REQUEST_SUCCESS = '[CARS] Load cars by filter success',
  FILTER_CAR_REQUEST_FAILURE = '[CARS] Load cars by filter failure',

  LOAD_USED_BRANDS = '[CARS BRANDS] Load used cars brands',
  LOAD_USED_BRANDS_SUCCESS = '[CARS BRANDS] Load used cars brands success',
  LOAD_USED_MODELS = '[CARS MODELS] Load used cars models',
  LOAD_USED_MODELS_SUCCESS = '[CARS MODELS] Load used cars models by brand success',

  LOAD_MORE = '[CARS LIST] Load more cars'
}

export const loadMore = createAction(
  CarsListActions.LOAD_MORE,
);

export const loadAllCars = createAction(
  CarsListActions.LOAD_ALL_CARS,
);

export const loadAllCarsSuccess = createAction(
  CarsListActions.LOAD_ALL_CARS_SUCCESS,
  props<{ cars: CarCard[] }>()
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
export const filterCar = createAction(
  CarsListActions.FILTER_CAR_REQUEST,
  props<{ filterParams: FilterParams }>()
);

export const filterCarSuccess = createAction(
  CarsListActions.FILTER_CAR_REQUEST_SUCCESS,
  props<{ filteredCars: CarCard[] }>()
);

export const filterCarFailure = createAction(
  CarsListActions.FILTER_CAR_REQUEST_FAILURE,
  props<{ errors: string }>()
);

export const loadUsedCarsBrands = createAction(
  CarsListActions.LOAD_USED_BRANDS,
);

export const loadUsedCarsBrandsSuccess = createAction(
  CarsListActions.LOAD_USED_BRANDS_SUCCESS,
  props<{ brands: string[] }>()
);

export const loadModelsByBrand = createAction(
  CarsListActions.LOAD_USED_MODELS,
  props<{ brand: string }>()
);

export const loadModelsByBrandSuccess = createAction(
  CarsListActions.LOAD_USED_MODELS_SUCCESS,
  props<{ models: string[] }>()
);