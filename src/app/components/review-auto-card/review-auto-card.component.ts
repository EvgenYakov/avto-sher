import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { REVIEW_AUTO_CARD_DEPS } from './review-auto-card.dependencies';

import { ReviewAuto } from '@models';

@Component( {
  selector: 'app-review-car-card',
  templateUrl: './review-auto-card.component.html',
  styleUrls: ['./review-auto-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [REVIEW_AUTO_CARD_DEPS]
} )
export class ReviewAutoCardComponent implements OnInit {
  @Input() public autoReview: ReviewAuto;
  public expanded = false;
  public comment: string = '';

  constructor() {}

  ngOnInit(): void {
    this.comment = this.autoReview.comment;
  }

  public toggleExpand() {
    this.expanded = !this.expanded;
  }

  public getDisplayText(): string {
    const maxLength = 240;
    if ( this.comment.length > maxLength && !this.expanded ) {
      return this.comment.substr( 0, maxLength ) + '...';
    }
    return this.comment;
  }
}
