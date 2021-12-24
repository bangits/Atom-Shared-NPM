import { GetPageConfigsResponseModel, PrimaryKey } from '@/atom-common';

export interface IPageConfigsRepository {
  getPageConfig(pageId: PrimaryKey, userId: PrimaryKey): Promise<GetPageConfigsResponseModel[]>;
  updatePageConfig(configId: PrimaryKey, configJson: string): Promise<boolean>;
}
