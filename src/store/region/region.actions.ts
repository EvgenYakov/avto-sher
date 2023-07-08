import { createAction, props } from '@ngrx/store';
import { Region } from '@models';

export enum RegionActions {
  LOAD_REGIONS = '[REGIONS] Load regions',
  LOAD_REGIONS_SUCCESS = '[REGIONS] Load regions success',

  SET_CURRENT_REGION = '[REGION] Change region',
  SET_CURRENT_REGION_SUCCESS = '[REGION] Change region success',
}

export const setCurrentRegion = createAction(
  RegionActions.SET_CURRENT_REGION,
  props<{ region: Region }>()
);

export const setCurrentRegionSuccess = createAction(
  RegionActions.SET_CURRENT_REGION_SUCCESS,
);

export const loadRegions = createAction(
  RegionActions.LOAD_REGIONS,
);

export const loadRegionsSuccess = createAction(
  RegionActions.LOAD_REGIONS_SUCCESS,
  props<{ regions: Region[] }>()
);