import { PrimaryKey } from '@/domain/types';
import { FilterRequestModel } from './FilterRequestModel';

export interface RegionFilterRequestModel extends FilterRequestModel {
  countryId: PrimaryKey;
}
