import {
  addPhoto,
  addPhotoFailure,
  addPhotoSuccess,
  CarProfileState,
  deletePhotos,
  deletePhotosFailure,
  deletePhotosSuccess,
  loadCar,
  loadCarFailure,
  loadCarSuccess
} from '@store';
import { createReducer, on } from '@ngrx/store';
import { AutoProfile } from '@models';

const initialState: CarProfileState = {
  isLoading: false,
  pathsOfImages: [],
  additional: [],
  autoProfile: {} as AutoProfile,
  error: null
}

export const carProfileReducer = createReducer(
  initialState,
  on(loadCar, addPhoto, deletePhotos, (state) => ({
    ...state,
    isLoading: true
  })),
  on(loadCarFailure, addPhotoFailure, deletePhotosFailure, (state, action) => ({
    ...state,
    error: action.errors,
    isLoading: false
  })),
  on(loadCarSuccess, (state, action) => ({
    ...state,
    profileCar: action.car,
    photos: action.car.pathsOfImages,
    additional: action.car.additional,
    isLoading: false
  })),
  on(addPhotoSuccess, (state, action) => ({
    ...state,
    photos: [...state.pathsOfImages, action.photo],
    isLoading: false
  })),
  on(deletePhotosSuccess, (state, action) => ({
    ...state,
    photos: action.photos,
    isLoading: false
  })),
)