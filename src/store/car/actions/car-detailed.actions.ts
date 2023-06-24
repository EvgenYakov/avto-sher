import { createAction, props } from '@ngrx/store';
import { CarCard, CarProfile } from '@models';

export enum CarDetailedActions {
  LOAD_CAR = '[CAR] Load car profile',
  LOAD_CAR_SUCCESS = '[CAR] Load car profile success',
  LOAD_CAR_FAILURE = '[CAR] Load car profile failure',

  ADD_PHOTO = '[CAR] Add photo car',
  ADD_PHOTO_SUCCESS = '[CAR] Add photo car success',
  ADD_PHOTO_FAILURE = '[CAR] Add photo car failure',

  DELETE_PHOTOS = '[CAR] Delete photos car',
  DELETE_PHOTOS_SUCCESS = '[CAR] Delete photos car success',
  DELETE_PHOTOS_FAILURE = '[CAR] Delete photos car failure',

  CHANGE_STATUS_CAR = '[CAR] Change car status',
  CHANGE_STATUS_SUCCESS = '[CAR] Change car success',
  CHANGE_STATUS_FAILURE = '[CAR] Change car failure',
}

export const loadCar = createAction(
  CarDetailedActions.LOAD_CAR,
  props<{ carId: number }>()
);

export const loadCarSuccess = createAction(
  CarDetailedActions.LOAD_CAR_SUCCESS,
  props<{ car: CarProfile }>()
);

export const loadCarFailure = createAction(
  CarDetailedActions.LOAD_CAR_FAILURE,
  props<{ error: string }>()
);

export const addPhoto = createAction(
  CarDetailedActions.ADD_PHOTO,
  props<{ newPhoto: string }>()
);

export const addPhotoSuccess = createAction(
  CarDetailedActions.ADD_PHOTO_SUCCESS,
  props<{ photo: string }>()
);

export const addPhotoFailure = createAction(
  CarDetailedActions.ADD_PHOTO_FAILURE,
  props<{ errors: any }>()
);

export const deletePhotos = createAction(
  CarDetailedActions.DELETE_PHOTOS,
  props<{ deletedPhotos: string[] }>()
);

export const deletePhotosSuccess = createAction(
  CarDetailedActions.DELETE_PHOTOS_SUCCESS,
  props<{ photos: string[] }>()
);

export const deletePhotosFailure = createAction(
  CarDetailedActions.DELETE_PHOTOS_FAILURE,
  props<{ errors: any }>()
);

export const changeCarStatus = createAction(
  CarDetailedActions.CHANGE_STATUS_CAR,
  props<{ carId: number; status: string }>()
);

export const changeCarStatusSuccess = createAction(
  CarDetailedActions.CHANGE_STATUS_SUCCESS,
  props<{ newCar: CarCard }>()
);

export const changeCarStatusFailure = createAction(
  CarDetailedActions.CHANGE_STATUS_FAILURE,
  props<{ errors: any }>()
);