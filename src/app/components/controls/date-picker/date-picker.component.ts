import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BaseControlDirective } from '@models';
import { CalendarModule } from 'primeng/calendar';

import { ControlWrapperComponent } from '../control-wrapper/control-wrapper.component';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ControlWrapperComponent, CalendarModule, FormsModule, ReactiveFormsModule, NgClass],
})
export class DatePickerComponent extends BaseControlDirective {
  @Input() dateFormat: string = 'dd.mm.yy';
}
