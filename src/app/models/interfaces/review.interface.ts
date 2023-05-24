import { UserStatus } from '@constants';

export interface Review {
  id: number;
  avatarPath: string;
  date: string;
  ratingValue: number;
  autoMark: string;
  commentText: string;
}

export interface ReviewUser extends Review {
  userFio: string;
  userStatus: UserStatus;
}

export interface ReviewAuto extends Review {
  autoDate: string;
  orderPrice: number;
}