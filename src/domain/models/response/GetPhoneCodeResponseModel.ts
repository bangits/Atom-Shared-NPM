import { PhoneCode } from '@/domain/entities';
import { PagedResult } from '../shared';

export interface GetPhoneCodeResponseModel extends PagedResult<PhoneCode> {}
