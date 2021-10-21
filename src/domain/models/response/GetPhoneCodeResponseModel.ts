import { PhoneCode } from '@/domain/entities';
import { PagedResult } from '../models';

export interface GetPhoneCodeResponseModel extends PagedResult<PhoneCode> {}
