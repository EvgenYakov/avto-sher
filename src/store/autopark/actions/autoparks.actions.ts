import { AuctionAutoparks, AutoparkCard } from '@models';
import { createAction, props } from '@ngrx/store';

export enum AutoparksActions {
  LOAD_AUCTION_AUTOPARKS = '[AUCTION] Load auction autoparks',
  LOAD_AUCTION_AUTOPARKS_SUCCESS = '[AUCTION] Load auction autoparks success',

  LOAD_AUTOPARKS_LIST = '[AUTOPARKS] Load autoparks list',
  LOAD_AUTOPARKS_LIST_SUCCESS = '[AUTOPARKS] Load autoparks list success',
  LOAD_AUTOPARKS_LIST_FAILURE = '[AUTOPARKS] Load autoparks list failure',

  LOAD_AUTOPARKS_BY_OWNER = '[AUTOPARKS] Load autoparks by owner',
  LOAD_AUTOPARKS_BY_OWNER_SUCCESS = '[AUTOPARKS] Load autoparks by owner success',
  LOAD_AUTOPARKS_BY_OWNER_FAILURE = '[AUTOPARKS] Load autoparks by owner failure',
}

export const loadAuctionAutoparksByRegion = createAction(
  AutoparksActions.LOAD_AUCTION_AUTOPARKS,
  props<{ regionName: string }>()
);

export const loadAuctionAutoparksByRegionSuccess = createAction(
  AutoparksActions.LOAD_AUCTION_AUTOPARKS_SUCCESS,
  props<{ auctionAutoparks: AuctionAutoparks }>()
);

export const loadAutoparks = createAction(AutoparksActions.LOAD_AUTOPARKS_LIST, props<{ regionName: string }>());

export const loadAutoparksSuccess = createAction(
  AutoparksActions.LOAD_AUTOPARKS_LIST_SUCCESS,
  props<{ autoparks: AutoparkCard[]; pagesLeft: number }>()
);

export const loadAutoparksByOwner = createAction(AutoparksActions.LOAD_AUTOPARKS_BY_OWNER);

export const loadAutoparksByOwnerSuccess = createAction(
  AutoparksActions.LOAD_AUTOPARKS_BY_OWNER_SUCCESS,
  props<{ autoparks: AutoparkCard[] }>()
);

export const loadAutoparksByOwnerFailure = createAction(AutoparksActions.LOAD_AUTOPARKS_BY_OWNER_FAILURE);
