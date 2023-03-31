export interface ReviewAutoparkInterface {
  avatarPath: string;
  date: string;
  ratingValue: number;
  userFio: string;
  userStatus: string;
  autoMark: string;
  commentText: string;
}

export interface ReviewAutoInterface {
  avatarPath: string;
  date: string;
  ratingValue: number;
  autoModel: string;
  autoDateCreate: number;
  autoparkName: string;
  price: number;
  commentText: string;
}