import { Auction, AutoparkRegion } from '@models';

export interface AutoparksState {
  regions: AutoparkRegion[];
  auctionAutoparksCard: Auction;
}