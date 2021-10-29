import { PrimaryKey } from '@/domain/types';
import { FilterRequestModel } from './FilterRequestModel';

export interface CityVillageFilterRequestModel extends FilterRequestModel {
  regionId: PrimaryKey;
  isCity: boolean;
}
