import { createReducer, on } from '@ngrx/store';

import { UserProfile } from '@models';

import { UserState } from './user.state';
import {
  changeProfileAvatarFailure,
  changeProfileAvatarSuccess,
  changeProfileDescriptionFailure,
  changeProfileDescriptionSuccess, deleteProfileAvatarFailure, deleteProfileAvatarSuccess
} from './user.actions';
import { getMeSuccess } from '../auth';

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
  on( changeProfileAvatarSuccess, (state, { avatarPath }) => ({
      ...state,
      userProfile: {
        ...state.userProfile,
        avatarPath
      }
    })
  ),
  on( deleteProfileAvatarSuccess, (state) => ({
      ...state,
      userProfile: {
        ...state.userProfile,
        avatar: ''
      }
    })
  ),
  on( changeProfileDescriptionFailure, changeProfileAvatarFailure, deleteProfileAvatarFailure, (state, { errors }) => ({
      ...state,
      backendErrors: errors
    })
  ),
);