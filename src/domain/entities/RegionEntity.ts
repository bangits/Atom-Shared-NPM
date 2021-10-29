import { BaseEntity } from './BaseEntity';
import { PrimaryKey } from '@/domain/types';

export interface Region extends BaseEntity {
  name: string;
  countryId: PrimaryKey;
}

export class RegionEntity {
  constructor(public region: Region) {}
}
