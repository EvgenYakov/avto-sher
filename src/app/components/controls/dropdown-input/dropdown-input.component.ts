import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BaseControl } from '@models';

@Component({
  selector: 'app-dropdown-input',
  templateUrl: './dropdown-input.component.html',
  styleUrls: ['./dropdown-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownInputComponent extends BaseControl {
  @Input() options: { id: number, name: string }[];
}
