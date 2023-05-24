import { BlueprintFactory, createBlueprintBuilder } from '@ngxp/builder';
import { faker } from '@faker-js/faker';

import { ReviewAuto, ReviewUser } from '@models';
import { UserStatus } from '@constants';
import * as moment from 'moment';

const reviewUserBlueprintFactory: BlueprintFactory<ReviewUser> = () => ({
  id: (): number => faker.datatype.number(),
  avatarPath: (): string => faker.image.image(),
  date: (): any => moment(faker.date.past()).format('DD.MM.YYYY'),
  ratingValue: (): number => faker.datatype.number({min: 0, max: 5}),
  userFio: (): string => faker.name.fullName(),
  commentText: (): string => faker.lorem.paragraph(3),
  autoMark: (): string => faker.company.name(),
  userStatus: (): UserStatus => UserStatus.DRIVER,
});

const reviewAutoBlueprintFactory: BlueprintFactory<ReviewAuto> = () => ({
  id: (): number => faker.datatype.number(),
  avatarPath: (): string => faker.image.image(),
  date: (): any => moment(faker.date.past()).format('DD.MM.YYYY'),
  ratingValue: (): number => faker.datatype.number({min: 0, max: 5}),
  commentText: (): string => faker.lorem.paragraph(3),
  autoMark: (): string => faker.company.name(),
  autoDate: (): any => moment(faker.date.past()).format('DD.MM.YYYY'),
  orderPrice: (): number => faker.datatype.number()
});

export const reviewUserBuilder = createBlueprintBuilder(reviewUserBlueprintFactory());
export const reviewsUserData = reviewUserBuilder().freeze().buildMany(10);

export const reviewAutoBuilder = createBlueprintBuilder(reviewAutoBlueprintFactory());
export const reviewsAutoData = reviewAutoBuilder().freeze().buildMany(10);
export const reviewAutoData = reviewAutoBuilder().freeze().build();
