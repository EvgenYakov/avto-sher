export interface AutoparkCard {
  id: number;
  title: string;
  logo: string;
  rating: number;
  isPremium: boolean;
  region: string;
  carsCount: number;
}

export interface AutoparkDetailed extends AutoparkCard {
  isFavorite: boolean;
  ordersCount: number;
  description: string;
  backgroundImage: string;
  createdAt: Date;
  address: string;
  rentalConditions: string[];
  rentSchedule: string;
  minRentPeriod: string;
  bonuses: AutoparkBonus[];
}

export interface AutoparkBonus {
  id: number;
  title: string;
  description: string;
  icon: string;
}
