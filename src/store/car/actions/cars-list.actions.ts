import { createAction, props } from '@ngrx/store';
import { CarCard } from '../interfaces/car.interface';
import { CarProfile } from '../interfaces/car-profile.interface';

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
  props<{ cars: CarCard[] }>()
);

export const loadCarsFailure = createAction(
  CarsListActions.LOAD_CARS_FAILURE,
  props<{ errors: any }>()
);

export const createCar = createAction(
  CarsListActions.CREATE_CAR,
  props<{ newCar: CarProfile }>()
);

export const createCarSuccess = createAction(
  CarsListActions.CREATE_CAR_SUCCESS,
  props<{ car: CarProfile }>()
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
);

export const deleteCarFailure = createAction(
  CarsListActions.DELETE_CAR_FAILURE,
  props<{ errors: any }>()
);