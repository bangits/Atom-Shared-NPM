import { BaseEntity } from './BaseEntity';
import { PrimaryKey } from '../types';
export interface CityVillage extends BaseEntity {
    name: string;
    regionId: PrimaryKey;
    isCity: boolean;
}
export declare class CityVillageEntity {
    cityVillage: CityVillage;
    constructor(cityVillage: CityVillage);
}
