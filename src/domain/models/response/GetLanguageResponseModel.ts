import { Language } from '@/domain/entities';
import { PagedResult } from '../shared';

export interface GetLanguageResponseModel extends PagedResult<Language> {}
