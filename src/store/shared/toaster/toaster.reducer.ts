import { ToasterType } from '@constants';
import { createReducer, on } from '@ngrx/store';

import { addBeErrorMessage } from './toaster.actions';
import { ToasterState } from './toaster.state';

const initialState: ToasterState = {
  detail: '',
  severity: ToasterType.SUCCESS,
};

export const toasterReducer = createReducer(
  initialState,
  on(addBeErrorMessage, (state, action) => ({
    ...state,
    detail: action.detail,
    severity: action.severity,
  }))
);
