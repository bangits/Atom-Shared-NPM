import { BaseEntity } from './BaseEntity';
export interface Currency extends BaseEntity {
    name: string;
    code: string;
}
export declare class CurrencyEntity {
    currency: Currency;
    constructor(currency: Currency);
}
