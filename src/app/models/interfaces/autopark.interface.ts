import { AutoCard } from './auto.interface';

export interface AutoparkCard {
  logo: string;
  autoparkName: string;
  autoCount: number;
  ratingCount: number;
  isPremium: boolean
}

export interface AutoparkProfile extends AutoparkCard{
  cars: AutoCard[];

}