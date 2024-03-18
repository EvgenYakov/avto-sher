import { NgFor, NgIf } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';

import { RentCardComponent } from '../rent-card/rent-card.component';

export const AUTO_CARD_DEPS = [CardModule, NgFor, ButtonModule, RentCardComponent, NgIf, ImageModule];
