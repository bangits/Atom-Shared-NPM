import { Region } from '@/domain/entities';
import { PagedResult } from '../models';

export interface GetRegionResponseModel extends PagedResult<Region> {}
