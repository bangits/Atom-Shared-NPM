import { Country } from '@/domain/entities';
import { PagedResult } from '../shared';

export interface GetCountriesResponseModel extends PagedResult<Country> {}
