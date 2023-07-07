import { createReducer, on } from '@ngrx/store';
import { ToasterType } from '@constants';

import { ToasterState } from './toaster.state';
import { addBeErrorMessage } from './toaster.actions';

const initialState: ToasterState = {
  detail: '',
  severity: ToasterType.SUCCESS
}

export const toasterReducer = createReducer(
  initialState,
  on( addBeErrorMessage, (state, { detail }) => ({
    ...state,
    detail,
    severity: ToasterType.ERROR
  }) ),
);