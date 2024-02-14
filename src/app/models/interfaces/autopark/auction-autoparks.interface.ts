import { AuctionAutoparkCard } from '@models';

export interface AuctionAutoparks {
  top: AuctionAutoparkCard[];
  checked: AuctionAutoparkCard[];
  fresh: AuctionAutoparkCard[];
}
