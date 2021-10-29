import { BaseEntity } from './BaseEntity';

export interface DocumentType extends BaseEntity {
  name: string;
}

export class DocumentTypeEntity {
  constructor(public documentType: DocumentType) {}
}
