import { FormControl } from '@angular/forms';

export interface ICustomBonusForm {
  title: FormControl<string | null>;
  description: FormControl<string | null>;
}
