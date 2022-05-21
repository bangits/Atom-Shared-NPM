import { BaseEntity } from './BaseEntity';

export class TimeZones extends BaseEntity {
  gmT_offset: string;
  dsT_offset: string;
  code: string;
}
