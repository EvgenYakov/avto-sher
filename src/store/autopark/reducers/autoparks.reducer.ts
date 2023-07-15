import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

import { AuctionAutoparks, AutoparkCard } from '@models';

import { AutoparksState } from '../states';
import { loadAuctionAutoparksByRegionSuccess, loadAutoparksSuccess } from '../actions';


export const autoparkCardAdapter: EntityAdapter<AutoparkCard> = createEntityAdapter<AutoparkCard>( {} );


const initialState: AutoparksState = autoparkCardAdapter.getInitialState( {
  auctionAutoparksCard: {} as AuctionAutoparks,
  filters: [],
  page: 1,
  limit: 10,
  pagesLeft: 0
} )

export const autoparksReducer = createReducer(
  initialState,
  on( loadAuctionAutoparksByRegionSuccess, (state, { auctionAutoparks }) => ({
    ...state,
    auctionAutoparksCard: auctionAutoparks
  }) ),
  on( loadAutoparksSuccess, (state, { autoparks, pagesLeft }) => ({
    ...state,
    ...autoparkCardAdapter.setAll( autoparks, state ),
    pagesLeft
  }) ),
)