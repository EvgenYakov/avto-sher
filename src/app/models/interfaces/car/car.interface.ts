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
  rentSchedule: string;
  minRentPeriod: string;
  rentalConditions: string[];
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

export interface CreateCar {
  id?: number | string | null;
  fuel: Fuel;
  type: CarTariff;
  enginePower: number;
  additionalInfo: string[];
  financialInfo: string[];
  yearOfRelease: number;
  images?: File[];
  rentSchedule: string;
  minRentPeriod: number;
  rentalConditions: string[];
  price: number;
  transmission: Transmission;
  model: string;
  brand: string;
  autoparkId: number;
}
