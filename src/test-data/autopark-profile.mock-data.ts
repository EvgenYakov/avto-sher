import { BlueprintFactory, createBlueprintBuilder } from '@ngxp/builder';
import { faker } from '@faker-js/faker';
import { AutoparkHat } from '../app/modules/autopark-profile/interfaces/autopark-hat.interface';
import { AutoparkStatus } from '@constants';
import { AutoparkStatusData } from '../app/modules/autopark-profile/interfaces/autopark-status-data.interface';
import { getAutoparkStatusData } from '../app/modules/autopark-profile/helpers/get-data-by-status.helper';

const generateStatus = (): AutoparkStatus => {
  const values = Object.values(AutoparkStatus); // получаем массив со значениями перечисления
  const randomIndex = Math.floor(Math.random() * values.length); // выбираем случайный индекс из массива
  return values[randomIndex]; // возвращаем случайное значение из перечисления
};

const autoparkHatBlueprintFactory: BlueprintFactory<AutoparkHat> = () => ({
  autoCount: (): number => faker.datatype.number(),
  ordersCount: (): number => faker.datatype.number(),
  rating: (): number => faker.datatype.number(),
  isFavorite: (): boolean => faker.datatype.boolean(),
  autoparkName: (): string => faker.lorem.word(),
  logo: (): string => faker.image.image(),
  status: (): AutoparkStatusData => getAutoparkStatusData(generateStatus())
});

export const hatBuilder = createBlueprintBuilder(autoparkHatBlueprintFactory());
export const autoparkHatData = hatBuilder().freeze().build();