import { NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RatingModule } from 'primeng/rating';

export const RATING_STARS_DEPS = [FormsModule, ReactiveFormsModule, RatingModule, NgIf];
