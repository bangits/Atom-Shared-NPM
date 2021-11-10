import { BaseEntity } from './BaseEntity';
import { PrimaryKey } from '../types';
export interface Region extends BaseEntity {
    name: string;
    countryId: PrimaryKey;
}
export declare class RegionEntity {
    region: Region;
    constructor(region: Region);
}
