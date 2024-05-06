import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { UiFacade } from '../../../../store/shared/ui.facade';

@Component({
  selector: 'app-global-loader',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <div class="loader-line" [class.active]="uiFacade.inRequest$ | async"></div>
  `,
  styleUrl: './global-loader.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlobalLoaderComponent {
  constructor(public uiFacade: UiFacade) {}
}
