import { Country } from '../../entities';
import { PagedResult } from '../shared';
export interface GetCountriesResponseModel extends PagedResult<Country> {
}
