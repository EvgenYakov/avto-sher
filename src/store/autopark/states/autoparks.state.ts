import { AuctionAutoparks, Region } from '@models';

export interface AutoparksState {
  regions: Region[];
  auctionAutoparksCard: AuctionAutoparks;
}