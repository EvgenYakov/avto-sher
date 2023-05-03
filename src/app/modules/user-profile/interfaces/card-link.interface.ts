import { UserProfile } from '@models';

export interface CardLink {
  title: string;
  counterProperty: keyof UserProfile;
  counterText: string;
  routerLink: string;
  cssClass: string;
}
