import { createReducer, on } from '@ngrx/store';
import { Region } from '@models';

import { RegionState } from './region.state';
import { setCurrentRegion, loadRegionsSuccess } from './region.actions';

const initialState: RegionState = {
  regions: [],
  currentRegion: {} as Region
}

export const regionReducer = createReducer(
  initialState,
  on(setCurrentRegion, (state, { region }) => ({
    ...state,
    currentRegion: { ...region } // создание нового объекта currentRegion
  })),
  on(loadRegionsSuccess, (state, { regions }) => ({
    ...state,
    regions
  })),
);