import { BaseEntity } from './BaseEntity';
export interface Gender extends BaseEntity {
    name: string;
}
export declare class GenderEntity {
    gender: Gender;
    constructor(gender: Gender);
}
