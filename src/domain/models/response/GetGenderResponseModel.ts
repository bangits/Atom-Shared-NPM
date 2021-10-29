import { Gender } from '@/domain/entities';
import { PagedResult } from '../models';

export interface GetGenderResponseModel extends PagedResult<Gender> {}
