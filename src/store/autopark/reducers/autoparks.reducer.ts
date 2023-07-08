import { createReducer, on } from '@ngrx/store';

import { AuctionAutoparks } from '@models';

import { AutoparksState } from '../states';
import { loadAuctionAutoparksByRegionSuccess } from '../actions';


const initialState: AutoparksState = {
  auctionAutoparksCard: {} as AuctionAutoparks
}

export const autoparksReducer = createReducer(
  initialState,
  on( loadAuctionAutoparksByRegionSuccess, (state, { auctionAutoparks }) => ({
    ...state,
    auctionAutoparksCard: auctionAutoparks
  }) ),
)