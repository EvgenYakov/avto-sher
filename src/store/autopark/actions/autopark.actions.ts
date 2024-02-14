import { AutoparkDetailed, CarCard } from '@models';
import { createAction, props } from '@ngrx/store';

import { CreateAutopark } from '../../../app/pages/autopark-control/components/create-autopark/models/create-autopark-form.interface';

export enum AutoparkActions {
  LOAD_AUTOPARK_DETAILED = '[AUTOPARK] Load profile of autopark',
  LOAD_AUTOPARK_DETAILED_SUCCESS = '[AUTOPARK] Load autopark success',
  LOAD_AUTOPARK_DETAILED_FAILURE = '[AUTOPARK] Load autopark failure',

  LOAD_AUTOPARK_CARS = '[AUTOPARK CARS] Get autopark cars',
  LOAD_AUTOPARK_CARS_SUCCESS = '[AUTOPARK CARS] Get autopark cars success',
  LOAD_AUTOPARK_CARS_FAILURE = '[AUTOPARK CARS] Get autopark cars failure',

  LOAD_MORE_AUTOPARK_CARS = '[AUTOPARK CARS] Load next 5 autopark cars',

  CREATE_AUTOPARK = '[AUTOPARK] Create autopark',
  CREATE_AUTOPARK_SUCCESS = '[AUTOPARK] Create autopark success',
  CREATE_AUTOPARK_FAILURE = '[AUTOPARK] Create autopark failure',
}

export const loadAutoparkDetailed = createAction(
  AutoparkActions.LOAD_AUTOPARK_DETAILED,
  props<{ autoparkId: number }>()
);

export const loadAutoparkDetailedSuccess = createAction(
  AutoparkActions.LOAD_AUTOPARK_DETAILED_SUCCESS,
  props<{ autoparkDetailed: AutoparkDetailed }>()
);

export const loadAutoparkDetailedFailure = createAction(
  AutoparkActions.LOAD_AUTOPARK_DETAILED_FAILURE,
  props<{ errors: string }>()
);

export const loadMoreAutoparkCars = createAction(AutoparkActions.LOAD_MORE_AUTOPARK_CARS);

export const loadAutoparkCars = createAction(AutoparkActions.LOAD_AUTOPARK_CARS, props<{ autoparkId: number }>());

export const loadAutoparkCarsSuccess = createAction(
  AutoparkActions.LOAD_AUTOPARK_CARS_SUCCESS,
  props<{ cars: CarCard[]; pagesLeft: number }>()
);

export const loadAutoparkCarsFailure = createAction(
  AutoparkActions.LOAD_AUTOPARK_CARS_FAILURE,
  props<{ errors: any }>()
);

export const createAutopark = createAction(AutoparkActions.CREATE_AUTOPARK, props<{ autopark: CreateAutopark }>());

export const createAutoparkSuccess = createAction(
  AutoparkActions.CREATE_AUTOPARK_SUCCESS,
  props<{ autopark: AutoparkDetailed }>()
);

export const createAutoparkFailure = createAction(AutoparkActions.CREATE_AUTOPARK_FAILURE);
