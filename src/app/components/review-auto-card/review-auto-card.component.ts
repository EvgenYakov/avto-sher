import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ReviewInterface } from '@models';
import { reviewConstant } from '../review-autopark-card/constants/review-autopark.constant';
import { FormControl, FormGroup } from '@angular/forms';
import { RatingForm } from '../review-autopark-card/interfaces/rating-form.interface';

@Component({
  selector: 'app-review-auto-card',
  templateUrl: './review-auto-card.component.html',
  styleUrls: ['./review-auto-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewAutoCardComponent implements OnInit{
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
