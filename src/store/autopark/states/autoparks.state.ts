import { AuctionAutoparks, Region } from '@models';

export interface AutoparksState {
  regions: Region[];
  selectedRegion: Region;
  auctionAutoparksCard: AuctionAutoparks;
}