import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-control-wrapper',
  templateUrl: './control-wrapper.component.html',
  styleUrls: ['./control-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlWrapperComponent {
  @Input() isRequired: boolean;
  @Input() label: string;
  @Input() error: string;
  @Input() control: FormControl;
  @Input() isTouched: boolean;
}
