import { PrimaryKey } from '@/domain/types';
import { FilterRequestModel } from '../shared';

export interface CityVillageFilterRequestModel extends FilterRequestModel {
  regionId: PrimaryKey;
  isCity: boolean;
}
