import { BackendError } from '@models';
import { AuthResponse } from '../../app/layouts/auth';


export interface AuthState {
  isAuth: boolean;
  authResponse: AuthResponse | null;
  backendErrors: BackendError | null;
}