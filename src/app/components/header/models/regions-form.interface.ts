import { FormControl } from '@angular/forms';

import { Region } from '@models';

export interface RegionsForm {
  selectedRegion: FormControl<Region | null>;
}
