import { TimeZones } from '@/domain/entities';
import { PagedResult } from '../shared';

export interface GetTimeZoneResponseModel extends PagedResult<TimeZones> {}
