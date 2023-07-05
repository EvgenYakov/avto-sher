import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';
import { AutoCardComponent, LoadMoreComponent, RentCardComponent } from '@components';

export const AUTO_DETAILED_DEPS = [
  GalleriaModule, ButtonModule, RentCardComponent, AutoCardComponent, LoadMoreComponent
];