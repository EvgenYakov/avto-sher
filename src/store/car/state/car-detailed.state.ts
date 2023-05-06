import { AutoProfile, BackendError } from '@models';

export interface CarDetailedState {
  autoProfile: AutoProfile;
  pathsOfImages: string[];
  additional: string[];
  error: BackendError | null;
}