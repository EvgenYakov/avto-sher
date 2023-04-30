import { BackendError } from '@models';
import { CarProfile } from '../interfaces/car-profile.interface';

export interface CarProfileState {
  isLoading: boolean;
  profileCar: CarProfile;
  photos: string[];
  features: string[];
  error: BackendError | null;
}