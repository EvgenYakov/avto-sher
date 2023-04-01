import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AutoparkCard, RatingForm, ReviewAuto } from '@models';
import { reviewAutoConstant } from '../review-auto-card/constants/review-auto.constant';
import { FormControl, FormGroup } from '@angular/forms';
import { autoparkCard } from './constants/autopar.constant';

@Component({
  selector: 'app-autopark-card',
  templateUrl: './autopark-card.component.html',
  styleUrls: ['./autopark-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutoparkCardComponent implements OnInit{
  @Input() autoparkCard: AutoparkCard = autoparkCard;

  public formGroup: FormGroup<RatingForm>;

  public ngOnInit(): void {
    this.formGroup = this.initializeForm(this.autoparkCard.ratingCount);
  }

  private initializeForm(value: number): FormGroup<RatingForm> {
    const ratingForm = new FormGroup<RatingForm>({
      defaultValue: new FormControl(value, []),
      lonelyStarFill: new FormControl(1,[])
    });

    return ratingForm;
  }
}
