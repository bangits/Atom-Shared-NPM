import { BaseEntity } from './BaseEntity';
export interface DocumentType extends BaseEntity {
    name: string;
}
export declare class DocumentTypeEntity {
    documentType: DocumentType;
    constructor(documentType: DocumentType);
}
