import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-backend-errors',
  templateUrl: './backend-errors.component.html',
  styleUrls: ['./backend-errors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackendErrorsComponent {
  @Input() public message: string;
}
