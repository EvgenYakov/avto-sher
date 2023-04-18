export interface ReviewAutopark {
  avatarPath: string;
  date: string;
  ratingValue: number;
  userFio: string;
  userStatus: string;
  autoMark: string;
  commentText: string;
}

export interface ReviewAuto {
  avatarPath: string;
  date: string;
  ratingValue: number;
  autoModel: string;
  autoDateCreate: number;
  autoparkName: string;
  price: number;
  commentText: string;
}
