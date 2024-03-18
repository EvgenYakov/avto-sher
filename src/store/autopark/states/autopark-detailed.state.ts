import { AutoparkCard, AutoparkDetailed, CarCard, ReviewUser } from '@models';

export interface AutoparkDetailedState {
  autoparkDetailed: AutoparkDetailed;
  autoparkCard: AutoparkCard | null;
  cars: CarCard[];
  reviews: ReviewUser[];
  autoparkCarsPage: number;
  autoparkCarsLimit: number;
  pagesLeft: number;
  errors: string;
}
