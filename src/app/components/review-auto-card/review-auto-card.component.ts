import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RatingForm } from '@components';
import { ReviewAutoInterface } from '@models';
import { reviewAutoConstant } from './constants/review-auto.constant';

@Component({
  selector: 'app-review-auto-card',
  templateUrl: './review-auto-card.component.html',
  styleUrls: ['./review-auto-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewAutoCardComponent implements OnInit{
  @Input() reviewModel: ReviewAutoInterface = reviewAutoConstant;

  public formGroup: FormGroup<RatingForm>;

  public ngOnInit(): void {
    this.formGroup = this.initializeForm(this.reviewModel.ratingValue);
  }

  private initializeForm(value: number): FormGroup<RatingForm> {
    const ratingForm = new FormGroup<RatingForm>({
      defaultValue: new FormControl(value, [])
    });

    return ratingForm;
  }

}
