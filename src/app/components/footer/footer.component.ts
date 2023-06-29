import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AUTOPARK_COLUMN, DRIVER_COLUMN, INFO_COLUMN, SOCIAL_NETWORK, } from './constants/footer-navigation.constants';
import { FOOTER_CARD_DEPS } from './footer.dependencies';
import { HoverImageDirective } from './hover-image/hover-image.directive';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
  imports: [FOOTER_CARD_DEPS, HoverImageDirective, RouterLink]
})
export class FooterComponent {
  public driverNav = DRIVER_COLUMN;
  public autoparkNav = AUTOPARK_COLUMN;
  public infoNav = INFO_COLUMN;
  public socialNetworks = SOCIAL_NETWORK;
}
