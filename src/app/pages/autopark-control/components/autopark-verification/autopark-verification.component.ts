import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-autopark-verification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './autopark-verification.component.html',
  styleUrls: ['./autopark-verification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutoparkVerificationComponent {}
