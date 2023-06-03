import { UserStatus } from '@constants';
import { Rating } from './rating.interface';

export interface Review {
  id: number;
  avatarPath: string;
  rating: Rating;
  autoMark: string;
  comment: string;
}

export interface ReviewUser extends Review {
  userFio: string;
  userStatus: UserStatus;
}

export interface ReviewAuto extends Review {
  autoparkName: string;
  autoDate: string;
  orderPrice: number;
}