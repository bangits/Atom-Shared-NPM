import { Language } from '@/domain/entities';
import { PagedResult } from '../models';

export interface GetLanguageResponseModel extends PagedResult<Language> {}
