import { PrimaryKey } from '@/domain/types';
import { FilterRequestModel } from '../shared';

export interface CityVillageFilterRequestModel extends FilterRequestModel {
  regionIds: PrimaryKey[];
  isCity: boolean;
}
