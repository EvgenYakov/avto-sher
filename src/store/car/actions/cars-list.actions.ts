import { createAction, props } from '@ngrx/store';
import { AutoCard, AutoProfile } from '@models';

export enum CarsListActions {
  LOAD_CARS = '[CAR] Get autopark`s cars',
  LOAD_CARS_SUCCESS = '[CAR] Get autopark`s cars success',
  LOAD_CARS_FAILURE = '[CAR] Get autopark`s cars failure',

  CREATE_CAR = '[CAR] Add new car in autopark',
  CREATE_CAR_SUCCESS = '[CAR] Add new car in autopark success',
  CREATE_CAR_FAILURE = '[CAR] Add new car in autopark failure',

  DELETE_CAR = '[CAR] Add new car in autopark',
  DELETE_CAR_SUCCESS = '[CAR] Add new car in autopark success',
  DELETE_CAR_FAILURE = '[CAR] Add new car in autopark failure',
}

export const loadCars = createAction(
  CarsListActions.LOAD_CARS,
  props<{ autoparkId: number }>()
);

export const loadCarsSuccess = createAction(
  CarsListActions.LOAD_CARS_SUCCESS,
  props<{ cars: AutoCard[] }>()
);

export const loadCarsFailure = createAction(
  CarsListActions.LOAD_CARS_FAILURE,
  props<{ errors: any }>()
);

export const createCar = createAction(
  CarsListActions.CREATE_CAR,
  props<{ newCar: AutoProfile }>()
);

export const createCarSuccess = createAction(
  CarsListActions.CREATE_CAR_SUCCESS,
  props<{ car: AutoProfile }>()
);

export const createCarFailure = createAction(
  CarsListActions.CREATE_CAR_FAILURE,
  props<{ errors: any }>()
);

export const deleteCar = createAction(
  CarsListActions.DELETE_CAR,
  props<{ carId: number }>()
);

export const deleteCarSuccess = createAction(
  CarsListActions.DELETE_CAR_SUCCESS,
  props<{ carId: number }>()
);

export const deleteCarFailure = createAction(
  CarsListActions.DELETE_CAR_FAILURE,
  props<{ errors: any }>()
);