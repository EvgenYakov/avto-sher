import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-autopark-control',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './autopark-control.component.html',
  styleUrls: ['./autopark-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutoparkControlComponent {}
