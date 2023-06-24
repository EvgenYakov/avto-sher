import { createReducer, on } from '@ngrx/store';

import { CarProfile } from '@models';

import { CarDetailedState } from '../states';
import { loadCarSuccess } from '../actions';

const initialState: CarDetailedState = {
  carProfile: {} as CarProfile,
  errors: ''
}

export const carDetailedReducer = createReducer(
  initialState,
  on( loadCarSuccess, (state, { car }) => ({
    ...state,
    carProfile: car
  }) ),
)