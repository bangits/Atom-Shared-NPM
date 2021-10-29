import { CityVillage } from '@/domain/entities';
import { PagedResult } from '../models';

export interface GetCityVillageResponseModel extends PagedResult<CityVillage> {}
