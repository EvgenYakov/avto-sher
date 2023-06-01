import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { SPINNER_DEPS } from './spinner.dependencies';

@Component( {
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [SPINNER_DEPS]
} )
export class SpinnerComponent {
  @Input() strokeWidth: string = '2';

}
