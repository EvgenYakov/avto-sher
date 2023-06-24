import { CarStatus, CarTransmission, CarType, Fuel } from '@constants';
import { AutoparkBonus } from '../autopark';

export interface CarCard {
  id: number;
  fuel: Fuel;
  type: CarType;
  enginePower: number;
  status: CarStatus;
  createdAt: Date;
  additionalInfo: string[];
  financialInfo: string[];
  yearOfRelease: number;
  photos: string[];
  price: number;
  transmission: CarTransmission;
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