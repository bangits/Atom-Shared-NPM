import { PrimaryKey } from '@/domain';
import { BaseEntity } from './BaseEntity';

export class Nationality extends BaseEntity {
  name: string;
  countryId: PrimaryKey;
}
