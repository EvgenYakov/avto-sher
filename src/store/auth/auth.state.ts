import { AuthResponse } from '@models';

export interface AuthState {
  isAuth: boolean;
  authResponse: AuthResponse | null;
  backendErrors: string;
}