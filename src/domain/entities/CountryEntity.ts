import { BaseEntity } from './BaseEntity';

export interface Country extends BaseEntity {
  name: string;
  isoCode: string;
}

export class CountryEntity {
  constructor(public country: Country) {}
}
