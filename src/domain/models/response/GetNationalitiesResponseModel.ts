import { Nationality } from '@/domain/entities';
import { PagedResult } from '../shared';

export interface GetNationalitiesResponseModel extends PagedResult<Nationality> {}
