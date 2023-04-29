import { AutoCard } from '@models';

export const AUTO_CARD: AutoCard = {
  id: '1',
  title: 'BMW 5er',
  avatarPath: 'https://i.imgur.com/qFCyShm.jpeg',
  year: 2022,
  autopark: 'Быстрые ветра',
  location: 'Москва',
  price: 5800,
  conditions: ['Залог 15000 руб', '+5% комиссии', 'С возможностью выкупа'],
  additional: ['Фирменная оклейка', 'Кресло для детей'],
  pathsOfImages: [
    'https://i.imgur.com/qFCyShm.jpeg',
    'https://i.imgur.com/bBcIjLn.jpg',
    'https://i.imgur.com/MD44vAd.jpg',
    'https://i.imgur.com/nL92j6k.jpg',
    'https://i.imgur.com/0Ulx7Rh.jpg',
    'https://i.imgur.com/Pnn9YVG.jpg',
    'https://i.imgur.com/e4fqMZz.jpg',
  ],
  viewsCounter: 350,
  daysOfWork: [
    'Понедельник: 9.00 - 23.00 по МСК',
    'Вторник: 9.00 - 00.00 по МСК',
    'Среда: выходной',
    'Четверг: 9.00 - 19.00 по МСК',
    'Пятница: 6.00 - 9.00 по МСК',
    'Суббота: круглосуточно',
    'Понедельник: круглосуточно',
  ],
  characteristics: {
    power: 300,
    fuelType: 'Дизель',
    gearboxType: 'Автоматическая',
    fare: 'Бизнес',
  },
};
