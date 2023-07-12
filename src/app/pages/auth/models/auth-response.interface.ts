import { UserRole } from '@constants';

export interface AuthResponse {
  accessToken: string;
  role: UserRole
}