import { NgFor, NgIf } from '@angular/common';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

import { RentCardComponent } from '../rent-card/rent-card.component';
import { ImageModule } from 'primeng/image';

export const AUTO_CARD_DEPS = [CardModule, NgFor,
  ButtonModule, RentCardComponent, NgIf, ImageModule
];