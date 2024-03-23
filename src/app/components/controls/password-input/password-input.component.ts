import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PasswordModule } from 'primeng/password';

import { ControlWrapperComponent } from '../control-wrapper/control-wrapper.component';
import { BaseControlDirective } from 'src/app/models/classes/base-control.directive';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ControlWrapperComponent, PasswordModule, FormsModule, ReactiveFormsModule, NgClass],
})
export class PasswordInputComponent extends BaseControlDirective {
  @Input() isFeedback = false;
}
