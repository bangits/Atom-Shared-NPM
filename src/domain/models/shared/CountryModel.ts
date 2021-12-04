import { PrimaryKey } from '@/domain';

export interface CountryModel {
  countryId: PrimaryKey;
  defaultCurrency?: boolean;
}
