import { AutoCard, AutoparkDetailed, ReviewUser } from '@models';

export interface AutoparkDetailedState {
  autoparkDetailed: AutoparkDetailed;
  cars: AutoCard[];
  reviews: ReviewUser[]
}