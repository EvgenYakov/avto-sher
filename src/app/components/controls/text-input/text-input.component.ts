import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';

import { ControlWrapperComponent } from '../control-wrapper/control-wrapper.component';
import { BaseControlDirective } from 'src/app/models/classes/base-control.directive';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ControlWrapperComponent, FormsModule, InputTextModule, ReactiveFormsModule, NgClass],
})
export class TextInputComponent extends BaseControlDirective {}
