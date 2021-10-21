import { Currency } from '@/domain/entities';
import { PagedResult } from '../models';

export interface GetCurrencyResponseModel extends PagedResult<Currency> {}
