import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AutoparkDetailed } from '@models';

@Component({
  selector: 'app-autopark-hat',
  templateUrl: './autopark-hat.component.html',
  styleUrls: ['./autopark-hat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutoparkHatComponent {
  @Input() hatData: AutoparkDetailed;

}
