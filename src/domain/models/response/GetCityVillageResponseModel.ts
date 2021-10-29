import { CityVillage } from '@/domain/entities';
import { PagedResult } from '../shared';

export interface GetCityVillageResponseModel extends PagedResult<CityVillage> {}
