import { AuthResponse, BackendError } from '@models';

export interface AuthState {
  isAuth: boolean;
  authResponse: AuthResponse | null;
  backendErrors: BackendError | null;
}