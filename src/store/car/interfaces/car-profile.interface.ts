import { CarCard } from './car.interface';

export interface CarProfile extends CarCard {
  photos: string[];
  features: string[];
}