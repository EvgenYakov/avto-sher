import { createAction, props } from '@ngrx/store';
import { UserProfile } from '@models';
import { AuthActions } from '../auth';

export enum UserActions {

  GET_ME = '[USER] Get user information',
  GET_ME_SUCCESS = '[USER] Get user information success',
  GET_ME_FAILURE = '[USER] Get user information failure',

  CHANGE_PROFILE_DESCRIPTION = '[USER] Change user profile description',
  CHANGE_PROFILE_DESCRIPTION_SUCCESS = '[USER] Change user profile description success',
  CHANGE_PROFILE_DESCRIPTION_FAILURE = '[USER] Change user profile description failure',

  CHANGE_PROFILE_AVATAR = '[USER] Change user profile avatar',
  CHANGE_PROFILE_AVATAR_SUCCESS = '[USER] Change user profile avatar success',
  CHANGE_PROFILE_AVATAR_FAILURE = '[USER] Change user profile avatar failure',

  DELETE_PROFILE_AVATAR = '[USER] Delete user profile avatar',
  DELETE_PROFILE_AVATAR_SUCCESS = '[USER] Delete user profile avatar success',
  DELETE_PROFILE_AVATAR_FAILURE = '[USER] Delete user profile avatar failure',
}

export const getMe = createAction(
  UserActions.GET_ME,
);

export const getMeSuccess = createAction(
  UserActions.GET_ME_SUCCESS,
  props<{ user: UserProfile }>()
);

export const getMeFailure = createAction(
  UserActions.GET_ME_FAILURE,
);

export const changeProfileDescription = createAction(
  UserActions.CHANGE_PROFILE_DESCRIPTION,
  props<{ info: string }>()
);

export const changeProfileDescriptionSuccess = createAction(
  UserActions.CHANGE_PROFILE_DESCRIPTION_SUCCESS,
  props<{ info: string }>()
);

export const changeProfileDescriptionFailure = createAction(
  UserActions.CHANGE_PROFILE_DESCRIPTION_FAILURE,
  props<{ errors: string }>()
);

export const changeProfileAvatar = createAction(
  UserActions.CHANGE_PROFILE_AVATAR,
  props<{ newAvatar: File }>()
);

export const changeProfileAvatarSuccess = createAction(
  UserActions.CHANGE_PROFILE_AVATAR_SUCCESS,
  props<{ avatar: string }>()
);

export const changeProfileAvatarFailure = createAction(
  UserActions.CHANGE_PROFILE_AVATAR_FAILURE,
  props<{ errors: string }>()
);

export const deleteProfileAvatar = createAction(
  UserActions.DELETE_PROFILE_AVATAR,
);

export const deleteProfileAvatarSuccess = createAction(
  UserActions.DELETE_PROFILE_AVATAR_SUCCESS,
);

export const deleteProfileAvatarFailure = createAction(
  UserActions.DELETE_PROFILE_AVATAR_FAILURE,
  props<{ errors: string }>()
);