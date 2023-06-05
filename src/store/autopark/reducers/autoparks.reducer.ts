import { createReducer, on } from '@ngrx/store';

import { AutoparksState } from '../states';
import { loadAuctionAutoparksByRegionSuccess, loadAutoparkRegionsSuccess } from '../actions';

import { Auction } from '@models';

const initialState: AutoparksState = {
  regions: [],
  auctionAutoparksCard: {} as Auction
}

export const autoparksReducer = createReducer(
  initialState,
  on( loadAutoparkRegionsSuccess, (state, action) => ({
    ...state,
    regions: action.regions
  }) ),
  on( loadAuctionAutoparksByRegionSuccess, (state, action) => ({
    ...state,
    auctionAutoparksCard: action.auctionAutoparks
  }) ),
)