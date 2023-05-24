import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RatingForm } from '@models';

@Component({
  selector: 'app-rating-date',
  templateUrl: './rating-date.component.html',
  styleUrls: ['./rating-date.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingDateComponent implements OnInit {

  @Input() rating: { ratingValue: number, date: string };

  public formGroup: FormGroup<RatingForm>;

  public ngOnInit(): void {
    this.formGroup = this.initializeForm(this.rating.ratingValue);
  }

  private initializeForm(value: number): FormGroup<RatingForm> {
    const ratingForm = new FormGroup<RatingForm>({
      defaultValue: new FormControl(value, []),
    });

    return ratingForm;
  }
}
