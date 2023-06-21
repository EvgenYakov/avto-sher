import { createReducer, on } from '@ngrx/store';

import { AuctionAutoparks, Region } from '@models';

import { AutoparksState } from '../states';
import { loadAuctionAutoparksByRegionSuccess, loadAutoparkRegionsSuccess, selectRegion } from '../actions';


const initialState: AutoparksState = {
  regions: [],
  selectedRegion: {} as Region,
  auctionAutoparksCard: {} as AuctionAutoparks
}

export const autoparksReducer = createReducer(
  initialState,
  on( selectRegion, (state, { region }) => ({
    ...state,
    selectedRegion: region
  }) ),
  on( loadAutoparkRegionsSuccess, (state, { regions }) => ({
    ...state,
    regions
  }) ),
  on( loadAuctionAutoparksByRegionSuccess, (state, { auctionAutoparks }) => ({
    ...state,
    auctionAutoparksCard: auctionAutoparks
  }) ),
)