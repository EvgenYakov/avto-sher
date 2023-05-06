import { ChangeDetectionStrategy, Component, Input, OnInit, } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { RatingForm, ReviewAutopark } from '@models';
import { reviewData } from '@test-data';

@Component({
  selector: 'app-review-autopark',
  templateUrl: './review-autopark-card.component.html',
  styleUrls: ['./review-autopark-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewAutoparkCardComponent implements OnInit {
  @Input() review: ReviewAutopark = reviewData;

  public formGroup: FormGroup<RatingForm>;

  public ngOnInit(): void {
    this.formGroup = this.initializeForm(this.review.ratingValue);
  }

  private initializeForm(value: number): FormGroup<RatingForm> {
    const ratingForm = new FormGroup<RatingForm>({
      defaultValue: new FormControl(value, []),
    });

    return ratingForm;
  }
}
