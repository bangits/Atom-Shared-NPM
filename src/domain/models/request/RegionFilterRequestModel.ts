import { PrimaryKey } from '@/domain/types';
import { FilterRequestModel } from '../shared';

export interface RegionFilterRequestModel extends FilterRequestModel {
  countryIds: PrimaryKey[];
}
