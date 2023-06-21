import { createAction, props } from '@ngrx/store';

import { AuctionAutoparks, Region } from '@models';

export enum AutoparksActions {
  LOAD_REGIONS = '[REGIONS] Load regions',
  LOAD_REGIONS_SUCCESS = '[REGIONS] Load regions success',
  LOAD_REGIONS_FAILURE = '[REGIONS] Load regions failure',

  LOAD_AUCTION_AUTOPARKS_BY_REGION = '[AUCTION] Load auction autoparks',
  LOAD_AUCTION_AUTOPARKS_BY_REGION_SUCCESS = '[AUCTION] Load auction autoparks success',
  LOAD_AUCTION_AUTOPARKS_BY_REGION_FAILURE = '[AUCTION] Load auction autoparks failure',

  SELECT_REGION = '[REGION] Select region',
}

export const loadAutoparkRegions = createAction(
  AutoparksActions.LOAD_REGIONS,
);

export const loadAutoparkRegionsSuccess = createAction(
  AutoparksActions.LOAD_REGIONS_SUCCESS,
  props<{ regions: Region[] }>()
);

export const loadAutoparkRegionsFailure = createAction(
  AutoparksActions.LOAD_REGIONS_FAILURE,
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