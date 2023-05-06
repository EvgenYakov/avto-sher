import { UserStatus } from '@constants';

export interface ReviewAutopark {
  id: number;
  avatarPath: string;
  date: string;
  ratingValue: number;
  userFio: string;
  userStatus: UserStatus;
  autoMark: string;
  commentText: string;
}