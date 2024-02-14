import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AppRoutes, MainRoutes } from '@constants';
import { AutoparkCard } from '@models';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-autopark-card',
  standalone: true,
  templateUrl: './autopark-card.component.html',
  styleUrls: ['./autopark-card.component.scss'],
  imports: [CommonModule, ImageModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutoparkCardComponent {
  @Input() autoparkCard: AutoparkCard;

  constructor(private router: Router) {}

  public handleImageClick(event: MouseEvent): void {
    event.stopPropagation();
  }

  public navigateToAutoparkProfile(autoparkId: number): void {
    this.router.navigate([AppRoutes.MAIN + '/' + MainRoutes.AUTOPARK_DETAILED, autoparkId]);
  }
}
