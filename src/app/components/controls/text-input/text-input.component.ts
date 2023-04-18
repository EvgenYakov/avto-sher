import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseControl } from '@models';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextInputComponent extends BaseControl {

}
