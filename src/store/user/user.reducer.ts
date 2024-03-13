import { UserProfile } from '@models';
import { createReducer, on } from '@ngrx/store';

import { createAutoparkSuccess, loadAutoparksByOwnerSuccess } from '../autopark';

import {
  changeProfileAvatarFailure,
  changeProfileAvatarSuccess,
  changeProfileDescriptionFailure,
  changeProfileDescriptionSuccess,
  deleteProfileAvatarFailure,
  deleteProfileAvatarSuccess,
  getMeSuccess,
} from './user.actions';
import { UserState } from './user.state';

const initialState: UserState = {
  userProfile: {} as UserProfile,
  autoparks: [],
  backendErrors: null,
};

export const userReducer = createReducer(
  initialState,
  on(getMeSuccess, (state, { user }) => ({
    ...state,
    userProfile: user,
  })),
  on(changeProfileDescriptionSuccess, (state, { info }) => ({
    ...state,
    userProfile: {
      ...state.userProfile,
      info,
    },
  })),
  on(changeProfileAvatarSuccess, (state, { avatar }) => ({
    ...state,
    userProfile: {
      ...state.userProfile,
      avatar,
    },
  })),
  on(deleteProfileAvatarSuccess, state => ({
    ...state,
    userProfile: {
      ...state.userProfile,
      avatar: '',
    },
  })),
  on(changeProfileDescriptionFailure, changeProfileAvatarFailure, deleteProfileAvatarFailure, (state, { errors }) => ({
    ...state,
    backendErrors: errors,
  })),
  on(createAutoparkSuccess, (state, { autopark }) => ({
    ...state,
    autoparks: [...state.autoparks, autopark],
  })),
  on(loadAutoparksByOwnerSuccess, (state, { autoparks }) => ({
    ...state,
    autoparks: [...autoparks],
  }))
);
