import { createFeatureSelector, createSelector } from '@ngrx/store';

import { UserState } from './user.state';

const userFeatureSelector = createFeatureSelector<UserState>( 'user' );

export const selectUserProfile = createSelector(
  userFeatureSelector,
  (state) => state.userProfile
);
