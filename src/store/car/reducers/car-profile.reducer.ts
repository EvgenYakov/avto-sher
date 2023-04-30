import { CarProfileState } from '../state/car-profile.state';
import { CarProfile } from '../interfaces/car-profile.interface';
import { createReducer, on } from '@ngrx/store';
import {
  addPhoto,
  addPhotoFailure,
  addPhotoSuccess,
  deletePhotos,
  deletePhotosFailure,
  deletePhotosSuccess,
  loadCar,
  loadCarFailure,
  loadCarSuccess
} from '../actions/car-profile.actions';

const initialState: CarProfileState = {
  isLoading: false,
  photos: [],
  features: [],
  profileCar: {} as CarProfile,
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
    photos: action.car.photos,
    features: action.car.features,
    isLoading: false
  })),
  on(addPhotoSuccess, (state, action) => ({
    ...state,
    photos: [...state.photos, action.photo],
    isLoading: false
  })),
  on(deletePhotosSuccess, (state, action) => ({
    ...state,
    photos: action.photos,
    isLoading: false
  })),
)