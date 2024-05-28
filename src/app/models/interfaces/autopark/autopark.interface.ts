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
  phoneNumber: string;
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

export interface ICreateBonus {
  bonusId: number;
  autoParkId?: number;
}

export interface ICustomBonus {
  id?: number;
  title: string;
  description: string;
  autoParkId: number;
}

export interface ICreateCustomBonus {
  id?: number;
  title: string;
  description: string;
  autoParkId?: number;
}

export interface IDeleteBonus {
  bonusId: number;
  autoParkId: number;
}

export interface CreateAutopark {
  id?: number;
  title: string;
  description: string;
  address: string;
  phoneNumber: string;
  region: string;
  logo: File;
}

export interface IUpdateAutopark {
  id?: number;
  title: string;
  phoneNumber: string;
  description: string;
  address: string;
}
