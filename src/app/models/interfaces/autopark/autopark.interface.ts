export interface AutoparkDetailed {
  id: number;
  title: string;
  logo: string;
  rating: number;
  isPremium: boolean;
  isFavorite: boolean;
  region: string;
  carsCount: number;
  ordersCount: number;
  description: string;
  backgroundImage: string;
  createdAt: Date;
  address: string;
  rentalConditions: string[];
  bonuses: AutoparkBonus[];
}

export interface AutoparkBonus {
  id: number;
  title: string;
  description: string;
  icon: string;
}