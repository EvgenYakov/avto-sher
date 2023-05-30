import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ReviewAuto } from '@models';
import { reviewAutoData } from '@test-data';

@Component({
  selector: 'app-review-auto-card',
  templateUrl: './review-auto-card.component.html',
  styleUrls: ['./review-auto-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewAutoCardComponent implements OnInit {
  @Input() public autoReview: ReviewAuto = reviewAutoData;
  public expanded = false;
  public comment: string = '';

  constructor() {}

  ngOnInit(): void {
    this.comment = this.autoReview.comment;
  }

  public toggleExpand() {
    this.expanded = !this.expanded;
  }

  public getDisplayText() {
    const maxLength = 240;
    if (this.comment.length > maxLength && !this.expanded) {
      return this.comment.substr(0, maxLength) + '...';
    }
    return this.comment;
  }
}
