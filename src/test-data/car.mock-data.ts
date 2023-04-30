import { faker } from '@faker-js/faker';
import { BlueprintFactory, createBlueprintBuilder } from '@ngxp/builder';
import { AutoCard, AutoCharacteristics, AutoProfile } from '@models';

const carsBlueprintFactory: BlueprintFactory<AutoCard> = () => ({
  id: (): string => faker.datatype.string(),
  title: (): string => faker.lorem.word(),
  avatarPath: (): string => faker.image.image(),
  year: (): number => faker.datatype.number(),
  autopark: (): string => faker.lorem.word(),
  location: (): string => faker.lorem.word(),
  price: (): number => faker.datatype.number(),
  conditions: (): string[] => Array.from({ length: 4 }, () => faker.lorem.word()),
  characteristics: (): AutoCharacteristics => {
    const power = faker.datatype.number();
    const fuelType = faker.lorem.word();
    const gearboxType = faker.lorem.word();
    const fare = faker.lorem.word();
    return { power, fare, fuelType, gearboxType }
  }
});

const carBlueprintFactory: BlueprintFactory<AutoProfile> = () => ({
  id: (): string => faker.datatype.string(),
  title: (): string => faker.lorem.word(),
  avatarPath: (): string => faker.image.image(),
  year: (): number => faker.datatype.number(),
  autopark: (): string => faker.lorem.word(),
  location: (): string => faker.lorem.word(),
  price: (): number => faker.datatype.number(),
  conditions: (): string[] => Array.from({ length: 4 }, () => faker.lorem.word()),
  characteristics: (): AutoCharacteristics => {
    const power = faker.datatype.number();
    const fuelType = faker.lorem.word();
    const gearboxType = faker.lorem.word();
    const fare = faker.lorem.word();
    return { power, fare, fuelType, gearboxType }
  },
  additional: (): string[] => Array.from({ length: 4 }, () => faker.lorem.word()),
  viewsCounter: (): number => faker.datatype.number(),
  pathsOfImages: (): string[] => Array.from({ length: 4 }, () => faker.image.image()),
  daysOfWork: (): string[] => Array.from({ length: 4 }, () => faker.lorem.word())
});

export const carsBuilder = createBlueprintBuilder(carsBlueprintFactory());
export const carsData = carsBuilder().freeze().buildMany(10);

export const carBuilder = createBlueprintBuilder(carBlueprintFactory());
export const carData = carBuilder().freeze().build();
