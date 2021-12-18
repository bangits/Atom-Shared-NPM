import { PrimaryKey } from '@/domain/types';
import { FilterRequestModel } from '../shared';

export interface CityFilterRequestModel extends FilterRequestModel {
  cityIds: PrimaryKey[];
}
