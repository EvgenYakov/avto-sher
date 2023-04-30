import { EntityState } from '@ngrx/entity';
import { CarCard } from '../interfaces/car.interface';

export interface CarsListState extends EntityState<CarCard> {
  isLoading: boolean;
  error: string | null;
}