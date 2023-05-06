import { ChangeDetectionStrategy, Component, Input, OnInit, } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { AutoparkCard, RatingForm } from '@models';

@Component({
  selector: 'app-autopark-profile-card',
  templateUrl: './autopark-card.component.html',
  styleUrls: ['./autopark-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutoparkCardComponent implements OnInit {
  @Input() autoparkCard: AutoparkCard;

  public formGroup: FormGroup<RatingForm>;

  public ngOnInit(): void {
    this.formGroup = this.initializeForm(this.autoparkCard.rating);
  }

  private initializeForm(value: number): FormGroup<RatingForm> {
    const ratingForm = new FormGroup<RatingForm>({
      defaultValue: new FormControl(value, []),
      lonelyStarFill: new FormControl(1, []),
    });

    return ratingForm;
  }
}
