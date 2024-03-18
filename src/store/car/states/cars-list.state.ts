import { CarFilterParams } from '@components';
import { CarCard } from '@models';
import { EntityState } from '@ngrx/entity';

export interface CarsListState extends EntityState<CarCard> {
  filters: CarFilterParams;
  usedBrands: string[];
  usedModels: string[];
  page: number;
  limit: number;
  pagesLeft: number;
  error: string;
}
