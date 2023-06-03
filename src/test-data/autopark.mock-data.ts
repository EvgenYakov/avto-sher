import { BlueprintFactory, createBlueprintBuilder } from '@ngxp/builder';
import { faker } from '@faker-js/faker';

import { AutoparkStatus } from '@constants';
import { AutoparkBonus, AutoparkCard, AutoparkDetailed, AutoparkStatusData } from '@models';
import { getAutoparkStatusData } from '../app/pages/autopark-detailed';

const generateStatus = (): AutoparkStatus => {
  const values = Object.values( AutoparkStatus );
  const randomIndex = Math.floor( Math.random() * values.length );
  return values[randomIndex];
};

const autoparkBonusesBlueprintFactory: BlueprintFactory<AutoparkBonus> = () => (
  {
    id: (): number => faker.datatype.number(),
    title: (): string => faker.lorem.word(),
    description: (): string => faker.lorem.text(),
    icon: (): string => faker.image.image(),
  }
);

export const bonusesBuilder = createBlueprintBuilder( autoparkBonusesBlueprintFactory() );
export const bonusesData = bonusesBuilder().freeze().buildMany( 10 );

const autoparkCardBlueprintFactory: BlueprintFactory<AutoparkCard> = () => (
  {
    id: (): number => faker.datatype.number(),
    logo: (): string => faker.image.image(),
    autoparkName: (): string => faker.lorem.word(),
    autoCount: (): number => faker.datatype.number( { max: 400 } ),
    rating: (): number => faker.datatype.number( { min: 1, max: 5 } ),
    isFavorite: (): boolean => faker.datatype.boolean(),
  }
);

export const autoparkCardBuilder = createBlueprintBuilder( autoparkCardBlueprintFactory() );
export const topAutoparksCards = autoparkCardBuilder().freeze().buildMany( 8 );
export const checkedAutoparksCards = autoparkCardBuilder().freeze().buildMany( 20 );
export const newAutoparksCards = autoparkCardBuilder().freeze().buildMany( 4 );

const autoparkDetailedBlueprintFactory: BlueprintFactory<AutoparkDetailed> = () => (
  {
    id: (): number => faker.datatype.number(),
    logo: (): string => faker.image.image(),
    autoparkName: (): string => faker.lorem.word(),
    autoCount: (): number => faker.datatype.number( { max: 1000 } ),
    rating: (): number => faker.datatype.number( { min: 0, max: 5 } ),
    isFavorite: (): boolean => faker.datatype.boolean(),
    status: (): AutoparkStatusData => getAutoparkStatusData( generateStatus() ),
    address: (): string => faker.address.streetAddress(),
    ordersCount: (): number => faker.datatype.number( { max: 10000 } ),
    bonuses: (): AutoparkBonus[] => bonusesData,
    features: (): string[] => Array.from( { length: 7 }, () => faker.lorem.word() ),
  }
);

export const autoparkDetailedBuilder = createBlueprintBuilder( autoparkDetailedBlueprintFactory() );
export const autoparkDetailedData = autoparkDetailedBuilder().freeze().build();