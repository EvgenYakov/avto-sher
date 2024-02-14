import { NgClass, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-control-wrapper',
  templateUrl: './control-wrapper.component.html',
  styleUrls: ['./control-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf, NgClass],
})
export class ControlWrapperComponent {
  @Input() isRequired: boolean;
  @Input() label: string;
  @Input() error: string;
  @Input() control: FormControl;
  @Input() isTouched: boolean;
}
