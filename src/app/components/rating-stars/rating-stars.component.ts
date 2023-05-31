import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Rating, RatingForm } from '@models';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rating-stars',
  templateUrl: './rating-stars.component.html',
  styleUrls: ['./rating-stars.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingStarsComponent implements OnInit {
  @Input() rating: Rating;

  public formGroup: FormGroup<RatingForm>;

  public ngOnInit(): void {
    this.formGroup = this.initializeForm(this.rating.value);
  }

  private initializeForm(value: number): FormGroup<RatingForm> {
    const ratingForm = new FormGroup<RatingForm>({
      defaultValue: new FormControl(value, []),
    });

    return ratingForm;
  }

}
