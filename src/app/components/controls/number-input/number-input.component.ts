import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseControl } from '@models';
import { NgClass } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { ControlWrapperComponent } from '../control-wrapper/control-wrapper.component';

@Component({
    selector: 'app-number-input',
    templateUrl: './number-input.component.html',
    styleUrls: ['./number-input.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [ControlWrapperComponent, InputNumberModule, FormsModule, ReactiveFormsModule, NgClass]
})
export class NumberInputComponent extends BaseControl {

}
