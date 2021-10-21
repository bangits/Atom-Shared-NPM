import { BaseEntity } from './BaseEntity';

export interface Language extends BaseEntity {
  name: string;
  code: string;
}

export class LanguageEntity {
  constructor(public language: Language) {}
}
