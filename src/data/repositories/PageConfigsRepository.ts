import { IHttpService } from '@/atom-common';
import { DI_CONSTANTS } from '@/di/constants';
import { PrimaryKey } from '@/domain';
import { IPageConfigsRepository } from '@/domain/boundaries';
import { GetPageConfigsResponseModel } from '@/domain/models';
import { inject, injectable } from 'inversify';
import { API_ROUTES } from '..';

@injectable()
export class PageConfigsRepository implements IPageConfigsRepository {
  @inject(DI_CONSTANTS.UserHttpService)
  private readonly userHttpService: IHttpService;

  getPageConfig = async (pageId: PrimaryKey, userId: PrimaryKey): Promise<GetPageConfigsResponseModel[]> => {
    return await this.userHttpService.get<GetPageConfigsResponseModel[], {}>({
      url: API_ROUTES.PageConfigs + `/${pageId}` + `/${userId}`,
      query: {
        userId,
        pageId
      }
    });
  };

  updatePageConfig = async (configId: PrimaryKey, configJson: string): Promise<boolean> => {
    return await this.userHttpService.put<boolean, {}, {}>({
      url: API_ROUTES.PageConfigs + `/${configId}`,
      body: {
        configJson
      }
    });
  };
}
