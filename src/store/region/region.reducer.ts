import { Region } from '@models';
import { createReducer, on } from '@ngrx/store';

import { loadRegionsSuccess, setCurrentRegion } from './region.actions';
import { RegionState } from './region.state';

const initialState: RegionState = {
  regions: [],
  currentRegion: {} as Region,
};

export const regionReducer = createReducer(
  initialState,
  on(setCurrentRegion, (state, { region }) => ({
    ...state,
    currentRegion: { ...region }, // создание нового объекта currentRegion
  })),
  on(loadRegionsSuccess, (state, { regions }) => ({
    ...state,
    regions,
  }))
);
