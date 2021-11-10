import { Gender } from '../../entities';
import { PagedResult } from '../shared';
export interface GetGenderResponseModel extends PagedResult<Gender> {
}
