import { BaseEntity } from './BaseEntity';
export interface PhoneCode extends BaseEntity {
    name: string;
}
export declare class PhoneCodeEntity {
    phoneCode: PhoneCode;
    constructor(phoneCode: PhoneCode);
}
