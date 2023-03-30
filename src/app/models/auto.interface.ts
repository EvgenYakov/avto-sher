export interface AutoCardInterface {
  id: string;
  title: string;
  avatarPath: string;
  year: number;
  motorPool: string;
  location: string;
  price: number;
  conditions: string[];
  characteristics: AutoCharacteristicsInterface;
}

export interface AutoCharacteristicsInterface {
  power: number;
  fuelType: string;
}
