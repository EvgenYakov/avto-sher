import { EntityState } from '@ngrx/entity';

import { CarCard, FilterParams } from '@models';

export interface CarsListState extends EntityState<CarCard> {
  filters: FilterParams;
  usedBrands: string[];
  usedModels: string[];
  page: number;
  limit: number;
  error: string;
}