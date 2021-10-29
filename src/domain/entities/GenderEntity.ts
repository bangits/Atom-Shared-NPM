import { BaseEntity } from './BaseEntity';

export interface Gender extends BaseEntity {
  name: string;
}

export class GenderEntity {
  constructor(public gender: Gender) {}
}
