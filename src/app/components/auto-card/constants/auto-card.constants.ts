import { AutoCard } from '@models';

export const AUTO_CARD: AutoCard = {
  id: '1',
  title: 'BMW 5er',
  avatarPath: 'https://i.imgur.com/qFCyShm.jpeg',
  year: 2022,
  motorPool: 'Быстрые ветра',
  location: 'Москва',
  price: 5800,
  conditions: [
    'Залог 15000 руб',
    'С договором',
    'Залог 35000 руб',
    'Без договора',
  ],
  characteristics: {
    power: 300,
    fuelType: 'Дизель',
  },
};
