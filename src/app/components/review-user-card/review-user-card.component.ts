import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ReviewUser } from '@models';

import { REVIEW_USER_CARD_DEPS } from './review-user-card.dependencies';

@Component({
  selector: 'app-review-user-card',
  templateUrl: './review-user-card.component.html',
  styleUrls: ['./review-user-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [REVIEW_USER_CARD_DEPS],
})
export class ReviewUserCardComponent {
  @Input() review: ReviewUser;
}
