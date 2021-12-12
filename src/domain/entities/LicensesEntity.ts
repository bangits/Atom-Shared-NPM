import { BaseEntity } from './BaseEntity';

export interface Licenses extends BaseEntity {
    name: string;
}

export class LicensesEntity {
  constructor(public licenses: Licenses) {}
}
