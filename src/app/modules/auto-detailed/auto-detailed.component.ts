import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-auto-detailed',
  templateUrl: './auto-detailed.component.html',
  styleUrls: ['./auto-detailed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutoDetailedComponent {}
