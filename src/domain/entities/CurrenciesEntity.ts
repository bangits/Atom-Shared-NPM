import { BaseEntity } from './BaseEntity';

export interface Currency extends BaseEntity {
  name: string;
  code: string;
}

export class CurrencyEntity {
  constructor(public currency: Currency) {}
}
