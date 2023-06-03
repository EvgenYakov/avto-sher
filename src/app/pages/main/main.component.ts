import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MAIN_DEPS } from './main.dependencies';

@Component( {
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone: true,
  imports: [MAIN_DEPS],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class MainComponent {

}
