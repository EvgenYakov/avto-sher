import { UserProfile } from '@models';

export interface UserState {
  userProfile: UserProfile,
  backendErrors: any
}