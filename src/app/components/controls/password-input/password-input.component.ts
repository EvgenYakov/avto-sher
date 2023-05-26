import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BaseControl } from '@models';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PasswordInputComponent extends BaseControl {
  @Input() isFeedback = false;
}
