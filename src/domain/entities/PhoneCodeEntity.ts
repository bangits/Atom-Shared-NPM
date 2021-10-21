import { BaseEntity } from './BaseEntity';

export interface PhoneCode extends BaseEntity {
  name: string;
}

export class PhoneCodeEntity {
  constructor(public phoneCode: PhoneCode) {}
}
