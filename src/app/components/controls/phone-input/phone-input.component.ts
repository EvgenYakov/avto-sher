import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputMaskModule } from 'primeng/inputmask';
import { BaseControlDirective } from 'src/app/models/classes/base-control.directive';

import { ControlWrapperComponent } from '../control-wrapper/control-wrapper.component';

@Component({
  selector: 'app-phone-input',
  templateUrl: './phone-input.component.html',
  styleUrls: ['./phone-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ControlWrapperComponent, InputMaskModule, FormsModule, ReactiveFormsModule, NgClass],
})
export class PhoneInputComponent extends BaseControlDirective {}
