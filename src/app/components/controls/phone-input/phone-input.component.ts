import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseControl } from '@models';

@Component({
  selector: 'app-phone-input',
  templateUrl: './phone-input.component.html',
  styleUrls: ['./phone-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhoneInputComponent extends BaseControl {

}
