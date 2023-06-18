import { createAction, props } from '@ngrx/store';

export enum UserActions {

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
  props<{ avatarPath: string }>()
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