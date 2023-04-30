import { EntityState } from '@ngrx/entity';
import { AutoCard, FilterParams } from '@models';

export interface CarsListState extends EntityState<AutoCard> {
  isLoading: boolean;
  filters: FilterParams;
  error: string | null;
}