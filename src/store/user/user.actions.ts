import { createAction, props } from '@ngrx/store';

export enum UserActions {

  CHANGE_PROFILE_DESCRIPTION = '[USER] Change user profile description',
  CHANGE_PROFILE_DESCRIPTION_SUCCESS = '[USER] Change user profile description success',
  CHANGE_PROFILE_DESCRIPTION_FAILURE = '[USER] Change user profile description failure',

  CHANGE_PROFILE_AVATAR = '[USER] Change user profile avatar',
  CHANGE_PROFILE_AVATAR_SUCCESS = '[USER] Change user profile avatar success',
  CHANGE_PROFILE_AVATAR_FAILURE = '[USER] Change user profile avatar failure',
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