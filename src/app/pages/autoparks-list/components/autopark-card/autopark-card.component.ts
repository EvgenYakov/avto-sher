import { ChangeDetectionStrategy, Component, effect, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AppRoutes, MainRoutes } from '@constants';
import { AutoparkCard } from '@models';
import { ImageModule } from 'primeng/image';
import { RatingModule } from 'primeng/rating';

@Component({
  selector: 'app-autopark-card',
  templateUrl: './autopark-card.component.html',
  styleUrls: ['./autopark-card.component.scss'],
  standalone: true,
  imports: [ImageModule, RatingModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutoparkCardComponent {
  readonly autoparkCard = input.required<AutoparkCard>();

  readonly rating = signal<number>(0);

  constructor(private router: Router) {
    effect(
      () => {
        this.rating.set(this.autoparkCard().rating ?? 0);
      },
      { allowSignalWrites: true }
    );
  }

  public handleImageClick(event: MouseEvent): void {
    event.stopPropagation();
  }

  public navigateToAutoparkProfile(autoparkId: number): void {
    this.router.navigate([AppRoutes.MAIN + '/' + MainRoutes.AUTOPARK_DETAILED, autoparkId]);
  }
}
