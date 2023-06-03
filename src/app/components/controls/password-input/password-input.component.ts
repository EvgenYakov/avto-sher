import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseControl } from '@models';
import { NgClass } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { ControlWrapperComponent } from '../control-wrapper/control-wrapper.component';

@Component({
    selector: 'app-password-input',
    templateUrl: './password-input.component.html',
    styleUrls: ['./password-input.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [ControlWrapperComponent, PasswordModule, FormsModule, ReactiveFormsModule, NgClass]
})
export class PasswordInputComponent extends BaseControl {

}
