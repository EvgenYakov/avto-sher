import { createReducer, on } from '@ngrx/store';

import { UserProfile } from '@models';
import { getMeSuccess } from '@store';

import { UserState } from './user.state';
import { changeProfileDescriptionFailure, changeProfileDescriptionSuccess } from './user.actions';

const initialState: UserState = {
  userProfile: {} as UserProfile,
  backendErrors: null
}

export const userReducer = createReducer(
  initialState,
  on( getMeSuccess, (state, { user }) => ({
      ...state,
      userProfile: user
    })
  ),
  on( changeProfileDescriptionSuccess, (state, { info }) => ({
      ...state,
      userProfile: {
        ...state.userProfile,
        info
      }
    })
  ),
  on( changeProfileDescriptionFailure, (state, { errors }) => ({
      ...state,
      backendErrors: errors
    })
  ),
);