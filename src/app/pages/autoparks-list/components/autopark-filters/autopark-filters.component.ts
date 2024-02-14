import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-autopark-filters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './autopark-filters.component.html',
  styleUrls: ['./autopark-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutoparkFiltersComponent {}
