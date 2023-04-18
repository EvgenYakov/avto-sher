import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseControl } from '@models';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NumberInputComponent extends BaseControl {

}
