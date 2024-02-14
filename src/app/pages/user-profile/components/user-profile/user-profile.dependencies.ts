import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SpinnerComponent } from '@components';
import { CardButtonComponent, CardLinkComponent, UserAvatarComponent } from '@pages';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextareaModule } from 'primeng/inputtextarea';

export const USER_PROFILE_DEPS = [
  CardModule,
  UserAvatarComponent,
  NgIf,
  FormsModule,
  ReactiveFormsModule,
  InputTextareaModule,
  NgFor,
  CardLinkComponent,
  NgClass,
  CardButtonComponent,
  AsyncPipe,
  ButtonModule,
  SpinnerComponent,
];
