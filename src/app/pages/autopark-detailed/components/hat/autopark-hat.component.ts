import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { AutoparkDetailed } from '@models';
import { AUTOPARK_HAT_DEPS } from './autopark-hat.dependencies';

@Component( {
  selector: 'app-autopark-hat',
  templateUrl: './autopark-hat.component.html',
  styleUrls: ['./autopark-hat.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AUTOPARK_HAT_DEPS],
} )
export class AutoparkHatComponent {
  @Input() hatData: AutoparkDetailed;

}
