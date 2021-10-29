import { DocumentType } from '@/domain/entities';
import { PagedResult } from '../shared';

export interface GetDocumentTypeResponseModel extends PagedResult<DocumentType> {}
