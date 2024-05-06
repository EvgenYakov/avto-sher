import { LoadingTypes } from '@constants';

export interface LoadingState {
  types: LoadingTypes[];
  inRequestQueue: number;
}
