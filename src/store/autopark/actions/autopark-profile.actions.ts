import { createAction, props } from '@ngrx/store';

import { AutoCard, AutoparkDetailed, ReviewUser } from '@models';
import { AutoparkDetailedResponse } from '@services';

export enum AutoparkDetailedActions {
  LOAD_AUTOPARK_DETAILED = '[AUTOPARK] Load profile of autopark',
  LOAD_AUTOPARK_DETAILED_SUCCESS = '[AUTOPARK] Load profile of autopark success',
  LOAD_AUTOPARK_DETAILED_FAILURE = '[AUTOPARK] Load profile of autopark failure',
}

export const loadAutoparkDetailed = createAction(
  AutoparkDetailedActions.LOAD_AUTOPARK_DETAILED,
  props<{ autoparkId: number }>()
);

export const loadAutoparkDetailedSuccess = createAction(
  AutoparkDetailedActions.LOAD_AUTOPARK_DETAILED_SUCCESS,
  props<{ autoparkDetailedResponse: AutoparkDetailedResponse }>()
);

export const loadAutoparkDetailedFailure = createAction(
  AutoparkDetailedActions.LOAD_AUTOPARK_DETAILED_FAILURE,
  props<{ errors: any }>()
);