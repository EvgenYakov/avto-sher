import { ChangeDetectionStrategy, Component } from '@angular/core';

import {
  AUTOPARK_COLUMN,
  DRIVER_COLUMN,
  INFO_COLUMN,
} from './constants/footer.constant';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  public driver = DRIVER_COLUMN;
  public autopark = AUTOPARK_COLUMN;
  public info = INFO_COLUMN;
}
