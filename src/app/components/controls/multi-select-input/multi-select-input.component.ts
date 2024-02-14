import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BaseControlDirective } from '@models';
import { MultiSelectModule } from 'primeng/multiselect';

import { ControlWrapperComponent } from '../control-wrapper/control-wrapper.component';

@Component({
  selector: 'app-multi-select-input',
  templateUrl: './multi-select-input.component.html',
  styleUrls: ['./multi-select-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ControlWrapperComponent, MultiSelectModule, FormsModule, ReactiveFormsModule, NgClass],
})
export class MultiSelectInputComponent extends BaseControlDirective {
  @Input() options: { id: number; name: string }[];
  @Input() defaultLabel: string;
}
