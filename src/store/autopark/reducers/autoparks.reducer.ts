import { createReducer, on } from '@ngrx/store';

import { AutoparksState } from '../states';
import { loadAuctionAutoparksByRegionSuccess, loadAutoparkRegionsSuccess } from '../actions';

import { AuctionAutoparks } from '@models';

const initialState: AutoparksState = {
  regions: [],
  auctionAutoparksCard: {} as AuctionAutoparks
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