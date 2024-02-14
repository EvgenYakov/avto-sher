import { CarProfile } from '@models';
import { createReducer, on } from '@ngrx/store';

import { loadCarSuccess } from '../actions';
import { CarDetailedState } from '../states';

const initialState: CarDetailedState = {
  carProfile: {} as CarProfile,
  errors: '',
};

export const carDetailedReducer = createReducer(
  initialState,
  on(loadCarSuccess, (state, { car }) => ({
    ...state,
    carProfile: car,
  }))
);
