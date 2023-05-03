import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { autoparkHatData, carsData } from '@test-data';

@Component({
  selector: 'app-autopark-profile',
  templateUrl: './autopark-profile.component.html',
  styleUrls: ['./autopark-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutoparkProfileComponent implements OnInit {

  public mockAutoparkHat = autoparkHatData;
  public mockCardsCar = carsData;

  constructor() {
  }

  public ngOnInit(): void {
  }

}
