import { AutoparkDetailed, UserProfile } from '@models';

export interface UserState {
  userProfile: UserProfile,
  autoparks: AutoparkDetailed[]
  backendErrors: any
}