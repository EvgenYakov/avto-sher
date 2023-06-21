import { CarStatus, CarTransmission, CarType, Fuel } from '@constants';

export interface AutoProfile extends AutoCard {
  additional: string[];
  viewsCounter: number;
  pathsOfImages: string[];
  daysOfWork: string[];
}

export interface AutoCharacteristics {
  power: number;
  fuelType: string;
  gearboxType: string;
  fare: string;
}

export interface AutoCard {
  id: number;
  title: string;
  avatarPath: string;
  year: number;
  autopark: string;
  location: string;
  price: number;
  conditions: string[];
  characteristics: AutoCharacteristics;
}

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
  marka: string;
  autoparkName: string;
  region: string;
}