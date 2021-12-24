import { PrimaryKey } from '@/atom-common';
import { PageConfigTypesEnum } from '../enums';

export class GetPageConfigsResponseModel {
  id: PrimaryKey;
  userId: PrimaryKey;
  pageConfigTypeId: PageConfigTypesEnum;
  appPage: {
    id: PrimaryKey;
    name: string;
  };
  configJson: string;
}
