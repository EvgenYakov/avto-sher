import { AutoCard, AutoparkDetailed, ReviewAutopark } from '@models';

export interface AutoparkDetailedState {
  autoparkDetailed: AutoparkDetailed;
  cars: AutoCard[];
  reviews: ReviewAutopark[]
}