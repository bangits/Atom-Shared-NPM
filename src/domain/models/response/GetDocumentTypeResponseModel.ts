import { DocumentType } from '@/domain/entities';
import { PagedResult } from '../models';

export interface GetDocumentTypeResponseModel extends PagedResult<DocumentType> {}
