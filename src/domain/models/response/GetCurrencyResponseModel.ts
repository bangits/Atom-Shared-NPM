import { Currency } from '@/domain/entities';
import { PagedResult } from '../shared';

export interface GetCurrencyResponseModel extends PagedResult<Currency> {}
