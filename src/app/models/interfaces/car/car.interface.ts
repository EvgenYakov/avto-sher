import { CarTariff, Fuel, RequestStatus, Transmission } from '@constants';

import { AutoparkBonus } from '../autopark';

export interface CarCard {
  id: number;
  fuel: Fuel;
  type: CarTariff;
  enginePower: number;
  status: RequestStatus;
  createdAt: Date;
  additionalInfo: string[];
  financialInfo: string[];
  yearOfRelease: number;
  photos: string[];
  price: number;
  transmission: Transmission;
  model: string;
  brand: string;
  autopark: {
    id: number;
    title: string;
    region: string;
    address: string;
    rentSchedule: string;
    minRentPeriod: string;
    rentalConditions: string[];
    bonuses: AutoparkBonus[];
  };
}

export interface CarProfile extends CarCard {}

export interface OrderHistoryCarCard extends CarCard {
  orderDate: string;
}
