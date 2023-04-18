import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BaseControl } from '@models';

@Component({
  selector: 'app-multi-select-input',
  templateUrl: './multi-select-input.component.html',
  styleUrls: ['./multi-select-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiSelectInputComponent extends BaseControl {
  @Input() options: { id: number, name: string }[];
  @Input() defaultLabel: string;
}
