import { AutoProfile, BackendError } from '@models';

export interface CarProfileState {
  isLoading: boolean;
  autoProfile: AutoProfile;
  pathsOfImages: string[];
  additional: string[];
  error: BackendError | null;
}