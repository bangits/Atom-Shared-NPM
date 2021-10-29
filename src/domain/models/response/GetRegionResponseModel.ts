import { Region } from '@/domain/entities';
import { PagedResult } from '../shared';

export interface GetRegionResponseModel extends PagedResult<Region> {}
