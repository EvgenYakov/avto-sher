import { EntityState } from '@ngrx/entity';

import { CarCard, FilterParams } from '@models';

export interface CarsListState extends EntityState<CarCard> {
  filters: FilterParams;
  error: string;
  allCarsPage: number;
  allCarsLimit: number;
}