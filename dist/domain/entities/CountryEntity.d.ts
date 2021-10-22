import { BaseEntity } from './BaseEntity';
export interface Country extends BaseEntity {
    name: string;
    isoCode: string;
}
export declare class CountryEntity {
    country: Country;
    constructor(country: Country);
}
