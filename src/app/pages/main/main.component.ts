import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MAIN_DEPS } from './main.dependencies';
import { BreadcrumbComponent } from '@components';

@Component( {
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone: true,
  imports: [MAIN_DEPS, BreadcrumbComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class MainComponent {

}
