import { FormControl } from '@angular/forms';

export interface RatingForm {
  defaultValue: FormControl<number | null>;
  lonelyStarFill?: FormControl<number | null>;
}
