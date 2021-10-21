import { Country } from '@/domain/entities';
import { PagedResult } from '../models';

export interface GetCountriesResponseModel extends PagedResult<Country> {}
