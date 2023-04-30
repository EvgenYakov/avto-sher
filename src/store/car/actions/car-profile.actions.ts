import { createAction, props } from '@ngrx/store';
import { CarCard } from '../interfaces/car.interface';
import { CarProfile } from '../interfaces/car-profile.interface';

export enum CarProfileActions {
  LOAD_CAR = '[CAR] Get car profile',
  LOAD_CAR_SUCCESS = '[CAR] Get car profile success',
  LOAD_CAR_FAILURE = '[CAR] Get car profile failure',


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
  CarProfileActions.LOAD_CAR,
  props<{ carId: number }>()
);

export const loadCarSuccess = createAction(
  CarProfileActions.LOAD_CAR_SUCCESS,
  props<{ car: CarProfile }>()
);

export const loadCarFailure = createAction(
  CarProfileActions.LOAD_CAR_FAILURE,
  props<{ errors: any }>()
);


export const addPhoto = createAction(
  CarProfileActions.ADD_PHOTO,
  props<{ newPhoto: string }>()
);

export const addPhotoSuccess = createAction(
  CarProfileActions.ADD_PHOTO_SUCCESS,
  props<{ photo: string }>()
);

export const addPhotoFailure = createAction(
  CarProfileActions.ADD_PHOTO_FAILURE,
  props<{ errors: any }>()
);


export const deletePhotos = createAction(
  CarProfileActions.DELETE_PHOTOS,
  props<{ deletedPhotos: string[] }>()
);

export const deletePhotosSuccess = createAction(
  CarProfileActions.DELETE_PHOTOS_SUCCESS,
  props<{ photos: string[] }>()
);

export const deletePhotosFailure = createAction(
  CarProfileActions.DELETE_PHOTOS_FAILURE,
  props<{ errors: any }>()
);

export const changeCarStatus = createAction(
  CarProfileActions.CHANGE_STATUS_CAR,
  props<{ carId: number; status: string }>()
);

export const changeCarStatusSuccess = createAction(
  CarProfileActions.CHANGE_STATUS_SUCCESS,
  props<{ newCar: CarCard }>()
);

export const changeCarStatusFailure = createAction(
  CarProfileActions.CHANGE_STATUS_FAILURE,
  props<{ errors: any }>()
);