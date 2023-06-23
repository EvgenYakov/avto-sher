export interface AutoparkCard {
  id: number;
  title: string;
  logo: string;
  rating: number;
  autoCount: number;
  isFavorite: boolean;
}

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
  address: string
  bonuses: AutoparkBonus[]
}

export interface AutoparkBonus {
  id: number;
  title: string;
  description: string;
  icon: string;
}