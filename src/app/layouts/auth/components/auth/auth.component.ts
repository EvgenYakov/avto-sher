import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AUTH_DEPS } from './auth.dependencies';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: AUTH_DEPS
})
export class AuthComponent {

}
