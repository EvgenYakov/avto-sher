import { ChangeDetectionStrategy, Component } from '@angular/core';

import {
  AUTOPARK_COLUMN,
  COPYRIGHT_TEXT,
  DRIVER_COLUMN,
  INFO_COLUMN,
  LEGAL_SERVICE_COLUMN,
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
  public legalService = LEGAL_SERVICE_COLUMN;
  public copyrightText = COPYRIGHT_TEXT;
}
