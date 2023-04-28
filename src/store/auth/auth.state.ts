import { AuthResponse, BackendError } from '@models';

export interface AuthState {
  isLoading: boolean;
  isAuth: boolean;
  authResponse: AuthResponse | null;
  backendErrors: BackendError | null;
}