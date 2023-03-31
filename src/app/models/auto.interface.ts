export interface AutoCard {
  id: string;
  title: string;
  avatarPath: string;
  year: number;
  motorPool: string;
  location: string;
  price: number;
  conditions: string[];
  characteristics: AutoCharacteristics;
}

export interface AutoCharacteristics {
  power: number;
  fuelType: string;
}
