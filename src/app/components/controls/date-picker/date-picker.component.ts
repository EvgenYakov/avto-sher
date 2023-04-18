import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BaseControl } from '@models';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatePickerComponent extends BaseControl {
  @Input() dateFormat: string = 'dd.mm.yy';
}
