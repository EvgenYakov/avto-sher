import { EntityState } from '@ngrx/entity';
import { AutoCard, FilterParams } from '@models';

export interface CarsListState extends EntityState<AutoCard> {
  filters: FilterParams;
  error: string | null;
}