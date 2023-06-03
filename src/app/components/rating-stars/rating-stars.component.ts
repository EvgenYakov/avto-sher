import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { RATING_STARS_DEPS } from './rating-stars.dependencies';

import { Rating, RatingForm } from '@models';

@Component( {
  selector: 'app-rating-stars',
  templateUrl: './rating-stars.component.html',
  styleUrls: ['./rating-stars.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RATING_STARS_DEPS]
} )
export class RatingStarsComponent implements OnInit {
  @Input() rating: Rating;

  public formGroup: FormGroup<RatingForm>;

  public ngOnInit(): void {
    this.formGroup = this.initializeForm( this.rating.value );
  }

  private initializeForm(value: number): FormGroup<RatingForm> {
    const ratingForm = new FormGroup<RatingForm>( {
      defaultValue: new FormControl( value, [] ),
    } );

    return ratingForm;
  }

}
