import { AutoparkStatusData } from './autopark-status-data.interface';

export interface AutoparkHat {
  logo: string;
  status: AutoparkStatusData;
  autoparkName: string;
  autoCount: number;
  rating: number;
  ordersCount: number;
  isFavorite: boolean;
}