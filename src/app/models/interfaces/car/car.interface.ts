import { RequestStatus, CarTariff, Fuel, Transmission } from '@constants';
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
  autoparkName: string;
  region: string;
}

export interface CarProfile extends CarCard {
  bonuses: AutoparkBonus[];
  autoparkId: number;
  autoparkAddress: string;
}

export interface OrderHistoryCarCard extends CarCard {
  orderDate: string;
}

export interface CarResponse extends CarCard {
  autopark: {
    id: number,
    title: 'string',
    address: 'string'
  },
}