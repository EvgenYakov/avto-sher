import { createAction, props } from '@ngrx/store';

import { AuctionAutoparks } from '@models';

export enum AutoparksActions {
  LOAD_AUCTION_AUTOPARKS = '[AUCTION] Load auction autoparks',
  LOAD_AUCTION_AUTOPARKS_SUCCESS = '[AUCTION] Load auction autoparks success',
}

export const loadAuctionAutoparksByRegion = createAction(
  AutoparksActions.LOAD_AUCTION_AUTOPARKS,
  props<{ regionName: string }>()
);

export const loadAuctionAutoparksByRegionSuccess = createAction(
  AutoparksActions.LOAD_AUCTION_AUTOPARKS_SUCCESS,
  props<{ auctionAutoparks: AuctionAutoparks }>()
);