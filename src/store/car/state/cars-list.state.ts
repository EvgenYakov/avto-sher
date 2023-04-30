import { EntityState } from '@ngrx/entity';
import { AutoCard } from '@models';

export interface CarsListState extends EntityState<AutoCard> {
  isLoading: boolean;
  error: string | null;
}