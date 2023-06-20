import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CardModule } from 'primeng/card';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';

import { CardButtonComponent, CardLinkComponent, UserAvatarComponent } from '@pages';
import { SpinnerComponent } from '@components';

export const USER_PROFILE_DEPS = [
  CardModule, UserAvatarComponent, NgIf, FormsModule, ReactiveFormsModule,
  InputTextareaModule, NgFor, CardLinkComponent, NgClass, CardButtonComponent,
  AsyncPipe, ButtonModule, SpinnerComponent
];