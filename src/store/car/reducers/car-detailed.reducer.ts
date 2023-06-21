

import { createReducer, on } from '@ngrx/store';
import { AutoProfile } from '@models';
import { CarDetailedState } from '../state';

const initialState: CarDetailedState = {
  pathsOfImages: [],
  additional: [],
  autoProfile: {} as AutoProfile,
  errors: ''
}

export const carDetailedReducer = createReducer(
  initialState,
  // on(loadCarFailure, addPhotoFailure, deletePhotosFailure, (state, action) => ({
  //   ...state,
  //   error: action.errors,
  // })),
  // on(loadCarSuccess, (state, action) => ({
  //   ...state,
  //   profileCar: action.car,
  //   photos: action.car.pathsOfImages,
  //   additional: action.car.additional,
  // })),
  // on(addPhotoSuccess, (state, action) => ({
  //   ...state,
  //   photos: [...state.pathsOfImages, action.photo],
  // })),
  // on(deletePhotosSuccess, (state, action) => ({
  //   ...state,
  //   photos: action.photos,
  // })),
)