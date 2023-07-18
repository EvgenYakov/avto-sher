import { createFeatureSelector, createSelector } from '@ngrx/store';

import { UserState } from './user.state';

const userFeatureSelector = createFeatureSelector<UserState>('user');

export const selectUserProfile = createSelector(
  userFeatureSelector,
  (state) => state.userProfile
);

export const selectUserId = createSelector(
  userFeatureSelector,
  (state) => state.userProfile.id
);

export const selectUserAutoparks = createSelector(
  userFeatureSelector,
  (state) => state.autoparks
);