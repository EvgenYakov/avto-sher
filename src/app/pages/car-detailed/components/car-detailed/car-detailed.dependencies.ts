import { AutoCardComponent, LoadMoreComponent, RentCardComponent } from '@components';
import { ButtonModule } from 'primeng/button';
import { GalleriaModule } from 'primeng/galleria';

export const AUTO_DETAILED_DEPS = [
  GalleriaModule,
  ButtonModule,
  RentCardComponent,
  AutoCardComponent,
  LoadMoreComponent,
];
