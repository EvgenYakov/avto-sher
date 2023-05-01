import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { autoparkHatData } from '@test-data';

@Component({
  selector: 'app-autopark-profile',
  templateUrl: './autopark-profile.component.html',
  styleUrls: ['./autopark-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutoparkProfileComponent implements OnInit {

  public mockAutoparkHat = autoparkHatData;

  constructor() {
  }

  public ngOnInit(): void {
  }

}
