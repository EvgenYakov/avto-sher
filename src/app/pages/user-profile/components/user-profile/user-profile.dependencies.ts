import { NgClass, NgFor, NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CardModule } from 'primeng/card';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { UserAvatarComponent } from '../user-avatar';
import { CardLinkComponent } from '../card-link';
import { CardButtonComponent } from '../card-button';

export const USER_PROFILE_DEPS = [
  CardModule, UserAvatarComponent, NgIf, FormsModule, ReactiveFormsModule,
  InputTextareaModule, NgFor, CardLinkComponent, NgClass, CardButtonComponent
];