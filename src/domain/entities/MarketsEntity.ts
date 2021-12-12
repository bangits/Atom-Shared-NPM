import { BaseEntity } from './BaseEntity';

export interface Market extends BaseEntity {
  name: string;
  isoCode: string;
}

export class MarketEntity {
  constructor(public market: Market) {}
}
