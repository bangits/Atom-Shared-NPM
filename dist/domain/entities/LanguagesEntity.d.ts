import { BaseEntity } from './BaseEntity';
export interface Language extends BaseEntity {
    name: string;
    code: string;
}
export declare class LanguageEntity {
    language: Language;
    constructor(language: Language);
}
