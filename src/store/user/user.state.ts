import { AutoparkCard, UserProfile } from '@models';

export interface UserState {
  userProfile: UserProfile;
  autoparks: AutoparkCard[];
  backendErrors: any;
}
