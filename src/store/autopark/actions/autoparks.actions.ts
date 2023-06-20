import { createAction, props } from '@ngrx/store';

import { AuctionAutoparks, Region } from '@models';

export enum AutoparksActions {
  LOAD_AUTOPARK_REGIONS = '[AUTOPARK] Load all autoparks regions',
  LOAD_AUTOPARK_REGIONS_SUCCESS = '[AUTOPARK] Load all autoparks regions success',
  LOAD_AUTOPARK_REGIONS_FAILURE = '[AUTOPARK] Load all autoparks regions failure',

  LOAD_AUCTION_AUTOPARKS_BY_REGION = '[AUTOPARKS] Load auction autoparks',
  LOAD_AUCTION_AUTOPARKS_BY_REGION_SUCCESS = '[AUTOPARKS] Load auction autoparks success',
  LOAD_AUCTION_AUTOPARKS_BY_REGION_FAILURE = '[AUTOPARKS] Load auction autoparks failure',

  SELECT_REGION = '[AUTOPARK] Select region',
}

export const loadAutoparkRegions = createAction(
  AutoparksActions.LOAD_AUTOPARK_REGIONS,
);

export const loadAutoparkRegionsSuccess = createAction(
  AutoparksActions.LOAD_AUTOPARK_REGIONS_SUCCESS,
  props<{ regions: Region[] }>()
);

export const loadAutoparkRegionsFailure = createAction(
  AutoparksActions.LOAD_AUTOPARK_REGIONS_FAILURE,
);

export const loadAuctionAutoparksByRegion = createAction(
  AutoparksActions.LOAD_AUCTION_AUTOPARKS_BY_REGION,
  props<{ regionName: string }>()
);

export const loadAuctionAutoparksByRegionSuccess = createAction(
  AutoparksActions.LOAD_AUCTION_AUTOPARKS_BY_REGION_SUCCESS,
  props<{ auctionAutoparks: AuctionAutoparks }>()
);

export const loadAuctionAutoparksByRegionFailure = createAction(
  AutoparksActions.LOAD_AUCTION_AUTOPARKS_BY_REGION_FAILURE,
);

export const selectRegion = createAction(
  AutoparksActions.SELECT_REGION,
  props<{ region: Region }>()
);