import { createAction, props } from '@ngrx/store';

import { AutoparkRegion } from '@models';

export enum AutoparksActions {
  LOAD_AUTOPARK_REGIONS = '[AUTOPARK] Load all autoparks regions',
  LOAD_AUTOPARK_REGIONS_SUCCESS = '[AUTOPARK] Load all autoparks regions success',
  LOAD_AUTOPARK_REGIONS_FAILURE = '[AUTOPARK] Load all autoparks regions failure',
}

export const loadAutoparkRegions = createAction(
  AutoparksActions.LOAD_AUTOPARK_REGIONS,
);

export const loadAutoparkRegionsSuccess = createAction(
  AutoparksActions.LOAD_AUTOPARK_REGIONS_SUCCESS,
  props<{ regions: AutoparkRegion[] }>()
);

export const loadAutoparkRegionsFailure = createAction(
  AutoparksActions.LOAD_AUTOPARK_REGIONS_FAILURE,
);