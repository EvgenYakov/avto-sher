import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseControl } from '@models';
import { NgClass } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControlWrapperComponent } from '../control-wrapper/control-wrapper.component';

@Component({
    selector: 'app-text-input',
    templateUrl: './text-input.component.html',
    styleUrls: ['./text-input.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [ControlWrapperComponent, FormsModule, InputTextModule, ReactiveFormsModule, NgClass]
})
export class TextInputComponent extends BaseControl {

}
