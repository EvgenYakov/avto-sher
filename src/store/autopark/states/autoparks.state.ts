import { AuctionAutoparks, AutoparkCard } from '@models';
import { EntityState } from '@ngrx/entity';

export interface AutoparksState extends EntityState<AutoparkCard> {
  auctionAutoparksCard: AuctionAutoparks;
  filters: [];
  page: number;
  limit: number;
  pagesLeft: number;
}
