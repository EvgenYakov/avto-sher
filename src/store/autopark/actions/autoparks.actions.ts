import { createAction, props } from '@ngrx/store';

import { Auction, AutoparkRegion } from '@models';

export enum AutoparksActions {
  LOAD_AUTOPARK_REGIONS = '[AUTOPARK] Load all autoparks regions',
  LOAD_AUTOPARK_REGIONS_SUCCESS = '[AUTOPARK] Load all autoparks regions success',
  LOAD_AUTOPARK_REGIONS_FAILURE = '[AUTOPARK] Load all autoparks regions failure',

  LOAD_AUCTION_AUTOPARKS_BY_REGION = '[AUTOPARKS] Load autoparks for start page by particular region',
  LOAD_AUCTION_AUTOPARKS_BY_REGION_SUCCESS = '[AUTOPARKS] Load autoparks for start page by particular region success',
  LOAD_AUCTION_AUTOPARKS_BY_REGION_FAILURE = '[AUTOPARKS] Load autoparks for start page by particular region failure',
}

export const loadAutoparkRegions = createAction(
  AutoparksActions.LOAD_AUTOPARK_REGIONS,
);

export const loadAutoparkRegionsSuccess = createAction(
  AutoparksActions.LOAD_AUTOPARK_REGIONS_SUCCESS,
  props<{ regions: AutoparkRegion[] }>()
);

export const loadAutoparkRegionsFailure = createAction(
  AutoparksActions.LOAD_AUTOPARK_REGIONS_FAILURE,
);

export const loadAuctionAutoparksByRegion = createAction(
  AutoparksActions.LOAD_AUCTION_AUTOPARKS_BY_REGION,
  props<{ regionId: number }>()
);

export const loadAuctionAutoparksByRegionSuccess = createAction(
  AutoparksActions.LOAD_AUCTION_AUTOPARKS_BY_REGION_SUCCESS,
  props<{ auctionAutoparks: Auction }>()
);

export const loadAuctionAutoparksByRegionFailure = createAction(
  AutoparksActions.LOAD_AUCTION_AUTOPARKS_BY_REGION_FAILURE,
);