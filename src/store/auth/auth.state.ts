import { AuthResponse } from '@pages';

export interface AuthState {
  isLoggedIn: boolean;
  authResponse: AuthResponse | null;
  backendErrors: string;
}