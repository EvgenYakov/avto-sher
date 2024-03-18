import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BaseControlDirective } from '@models';
import { DropdownModule } from 'primeng/dropdown';

import { ControlWrapperComponent } from '../control-wrapper/control-wrapper.component';

@Component({
  selector: 'app-dropdown-input',
  templateUrl: './dropdown-input.component.html',
  styleUrls: ['./dropdown-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ControlWrapperComponent, DropdownModule, FormsModule, ReactiveFormsModule, NgClass],
})
export class DropdownInputComponent extends BaseControlDirective {
  @Input() options: { id: number; name: string }[];
}
