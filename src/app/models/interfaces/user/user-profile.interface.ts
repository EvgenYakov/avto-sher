import { AutoparkDetailed } from '../autopark';

export interface UserProfile {
  id: number;
  fullName: string;
  phoneNumber: string;
  email: string;
  avatar: string;
  info: string;
  role: string;
  requestsCounter: number;
  ordersCounter: number;
  reviewsAboutUserCounter: number;
  reviewsByUserCounter: number;
  favoriteCarsCounter: number;
  favoriteAutoparksCounter: number;
  autopark?: AutoparkDetailed;
}
