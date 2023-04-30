import { faker } from '@faker-js/faker';
import { BlueprintFactory, createBlueprintBuilder } from '@ngxp/builder';
import { CarCard } from '../store/car/interfaces/car.interface';
import { CarProfile } from '../store/car/interfaces/car-profile.interface';

const carsBlueprintFactory: BlueprintFactory<CarCard> = () => ({
  id: (): number => faker.datatype.number(),
  photo: (): string => faker.image.image(),
  autoparkName: (): string => faker.lorem.word(),
  name: (): string => faker.lorem.word(),
  location: (): string => faker.lorem.word(),
  price: (): number => faker.datatype.number(),
  year: (): number => faker.datatype.number(),
});

const carBlueprintFactory: BlueprintFactory<CarProfile> = () => ({
  id: (): number => faker.datatype.number(),
  photo: (): string => faker.image.image(),
  autoparkName: (): string => faker.lorem.word(),
  name: (): string => faker.lorem.word(),
  location: (): string => faker.datatype.string(),
  price: (): number => faker.datatype.number(),
  year: (): number => faker.datatype.number(),
  features: (): string[] => Array.from({ length: 4 }, () => faker.lorem.word())
});

export const carsBuilder = createBlueprintBuilder(carsBlueprintFactory());
export const carsData = carsBuilder().freeze().buildMany(10);

export const carBuilder = createBlueprintBuilder(carBlueprintFactory());
export const carData = carBuilder().freeze().build();
