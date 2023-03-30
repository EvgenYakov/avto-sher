import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ReviewInterface } from '@models';
import { FormControl, FormGroup } from '@angular/forms';
import { RatingForm } from './interfaces/rating-form.interface';
import { reviewConstant } from './constants/review-autopark.constant';

@Component({
  selector: 'app-review-autopark-card',
  templateUrl: './review-autopark-card.component.html',
  styleUrls: ['./review-autopark-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewAutoparkCardComponent implements OnInit {

  @Input() reviewModel: ReviewInterface = reviewConstant;

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