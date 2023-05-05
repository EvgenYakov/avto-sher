import { BlueprintFactory, createBlueprintBuilder } from '@ngxp/builder';
import { faker } from '@faker-js/faker';

import { ReviewAutopark } from '@models';
import { UserStatus } from '@constants';
import * as moment from 'moment';

const reviewBlueprintFactory: BlueprintFactory<ReviewAutopark> = () => ({
  id: (): number => faker.datatype.number(),
  avatarPath: (): string => faker.image.image(),
  date: (): any => moment(faker.date.past()).format('DD.MM.YYYY'),
  ratingValue: (): number => faker.datatype.number({ min: 0, max: 5 }),
  userFio: (): string => faker.name.fullName(),
  commentText: (): string => faker.lorem.paragraph(3),
  autoMark: (): string => faker.company.name(),
  userStatus: (): UserStatus => UserStatus.DRIVER,
});

export const reviewBuilder = createBlueprintBuilder(reviewBlueprintFactory());
export const reviewsData = reviewBuilder().freeze().buildMany(10);
export const reviewData = reviewBuilder().build();