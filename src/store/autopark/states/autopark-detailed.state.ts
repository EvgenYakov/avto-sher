import { AutoparkDetailed, CarCard, ReviewUser } from '@models';

export interface AutoparkDetailedState {
  autoparkDetailed: AutoparkDetailed;
  cars: CarCard[];
  reviews: ReviewUser[];
  autoparkCarsPage: number;
  autoparkCarsLimit: number;
  pagesLeft: number;
  errors: string;
}
