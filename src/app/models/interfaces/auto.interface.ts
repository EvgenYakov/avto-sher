export interface AutoCard {
  id: string;
  title: string;
  avatarPath: string;
  year: number;
  motorPool: string;
  location: string;
  price: number;
  conditions: string[];
  additional: string[];
  viewsCounter: number;
  pathsOfImages: string[];
  daysOfWork: string[];
  characteristics: AutoCharacteristics;
}

export interface AutoCharacteristics {
  power: number;
  fuelType: string;
  gearboxType: string;
  fare: string;
}
