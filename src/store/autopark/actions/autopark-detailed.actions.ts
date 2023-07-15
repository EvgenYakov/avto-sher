import { createAction, props } from '@ngrx/store';

import { AutoparkDetailed, CarCard } from '@models';


export enum AutoparkDetailedActions {
  LOAD_AUTOPARK_DETAILED = '[AUTOPARK] Load profile of autopark',
  LOAD_AUTOPARK_DETAILED_SUCCESS = '[AUTOPARK] Load autopark success',
  LOAD_AUTOPARK_DETAILED_FAILURE = '[AUTOPARK] Load autopark failure',

  LOAD_AUTOPARK_CARS = '[AUTOPARK CARS] Get autopark cars',
  LOAD_AUTOPARK_CARS_SUCCESS = '[AUTOPARK CARS] Get autopark cars success',
  LOAD_AUTOPARK_CARS_FAILURE = '[AUTOPARK CARS] Get autopark cars failure',

  LOAD_MORE_AUTOPARK_CARS = '[AUTOPARK CARS] Load next 5 autopark cars',
}

export const loadAutoparkDetailed = createAction(
  AutoparkDetailedActions.LOAD_AUTOPARK_DETAILED,
  props<{ autoparkId: number }>()
);

export const loadAutoparkDetailedSuccess = createAction(
  AutoparkDetailedActions.LOAD_AUTOPARK_DETAILED_SUCCESS,
  props<{ autoparkDetailed: AutoparkDetailed }>()
);

export const loadAutoparkDetailedFailure = createAction(
  AutoparkDetailedActions.LOAD_AUTOPARK_DETAILED_FAILURE,
  props<{ errors: string }>()
);

export const loadMoreAutoparkCars = createAction(
  AutoparkDetailedActions.LOAD_MORE_AUTOPARK_CARS,
);

export const loadAutoparkCars = createAction(
  AutoparkDetailedActions.LOAD_AUTOPARK_CARS,
  props<{ autoparkId: number }>()
);

export const loadAutoparkCarsSuccess = createAction(
  AutoparkDetailedActions.LOAD_AUTOPARK_CARS_SUCCESS,
  props<{ cars: CarCard[], pagesLeft: number }>()
);

export const loadAutoparkCarsFailure = createAction(
  AutoparkDetailedActions.LOAD_AUTOPARK_CARS_FAILURE,
  props<{ errors: any }>()
);