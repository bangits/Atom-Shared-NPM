import { LicenseTypesEnum } from '../enums/LicenseTypesEnum';
import { PagedModel } from '../shared';

export class LicensesRequestModel extends PagedModel {
  type: LicenseTypesEnum;
  name: string;
}
