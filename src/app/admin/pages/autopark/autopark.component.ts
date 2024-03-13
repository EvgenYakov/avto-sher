import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-autopark-control',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './autopark.component.html',
  styleUrls: ['./autopark.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutoparkComponent {}
