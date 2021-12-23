import { ValidationLevel } from '@/domain/entities';
import { PagedResult } from '../shared';

export interface GetValidationLevelResponseModel extends PagedResult<ValidationLevel> {}
