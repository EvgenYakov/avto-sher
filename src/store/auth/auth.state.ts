import { BackendError } from '@models';
import { AuthResponse } from '../../app/pages/auth';


export interface AuthState {
  isAuth: boolean;
  authResponse: AuthResponse | null;
  backendErrors: BackendError | null;
}