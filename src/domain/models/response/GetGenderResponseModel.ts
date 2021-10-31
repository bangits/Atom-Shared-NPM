import { Gender } from '@/domain/entities';
import { PagedResult } from '../shared';

export interface GetGenderResponseModel extends PagedResult<Gender> {}
