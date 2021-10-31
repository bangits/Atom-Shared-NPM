import { BaseEntity } from './BaseEntity';
import { PrimaryKey } from '@/domain/types';

export interface CityVillage extends BaseEntity {
  name: string;
  regionId: PrimaryKey;
  isCity: boolean;
}

export class CityVillageEntity {
  constructor(public cityVillage: CityVillage) {}
}
