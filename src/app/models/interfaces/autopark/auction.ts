import { AutoparkAuctionCard } from '@models';

export interface Auction {
  top: AutoparkAuctionCard[],
  checked: AutoparkAuctionCard[],
  new: AutoparkAuctionCard[],
}