import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ReviewUser } from '@models';

@Component({
  selector: 'app-review-user-card',
  templateUrl: './review-user-card.component.html',
  styleUrls: ['./review-user-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewUserCardComponent {
  @Input() review: ReviewUser;
}
