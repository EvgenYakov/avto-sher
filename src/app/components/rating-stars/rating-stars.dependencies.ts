import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

import { RatingModule } from 'primeng/rating';

export const RATING_STARS_DEPS = [FormsModule, ReactiveFormsModule, RatingModule, NgIf];