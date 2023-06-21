import { AutoparkStatusData } from './autopark-status-data.interface';


export interface AutoparkCard {
  id: number;
  title: string;
  logo: string;
  rating: number;
  autoCount: number;
  isFavorite: boolean;
}

export interface AutoparkDetailed extends AutoparkCard {
  ordersCount: number;
  status: AutoparkStatusData;
  address: string;
  features: string[];
  bonuses: AutoparkBonus[];
}

export interface AutoparkBonus {
  id: number;
  title: string;
  icon: string;
  description: string;
}