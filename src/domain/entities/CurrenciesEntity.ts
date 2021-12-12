import { BaseEntity } from './BaseEntity';

export class Currency extends BaseEntity {
  name: string;
  code: string;
  symbol: string;
}