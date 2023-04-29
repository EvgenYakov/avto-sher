import { ChangeDetectionStrategy, Component } from '@angular/core';

import {
  AUTOPARK_COLUMN,
  DRIVER_COLUMN,
  INFO_COLUMN,
} from './constants/footer-navigation.constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  public driverNav = DRIVER_COLUMN;
  public autoparkNav = AUTOPARK_COLUMN;
  public infoNav = INFO_COLUMN;
}
