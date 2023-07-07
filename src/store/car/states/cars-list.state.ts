import { EntityState } from '@ngrx/entity';

import { CarCard } from '@models';
import { CarFilterParams } from '@components';

export interface CarsListState extends EntityState<CarCard> {
  filters: CarFilterParams;
  usedBrands: string[];
  usedModels: string[];
  page: number;
  limit: number;
  error: string;
}