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
  id: string;
  title: string;
  avatarPath: string;
  year: number;
  autopark: string;
  location: string;
  price: number;
  conditions: string[];
  characteristics: AutoCharacteristics;
}
