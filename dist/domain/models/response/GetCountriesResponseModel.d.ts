import { Country } from '../../entities';
import { PagedResult } from '../models';
export interface GetCountriesResponseModel extends PagedResult<Country> {
}
