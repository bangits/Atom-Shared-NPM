import { IPageConfigsRepository, PageConfigTypesEnum } from '@/atom-common';
import { DI_CONSTANTS } from '@/di/constants';
import { PageConfigsViewModel, PageConfigViewModel } from '@/view/models';
import { inject, injectable } from 'inversify';
import { PageIdsEnum, PrimaryKey } from '..';

@injectable()
export class PageConfigsUseCase {
  @inject(DI_CONSTANTS.PageConfigsRepository)
  private readonly pageConfigsRepository: IPageConfigsRepository;

  private pageConfigCaches: Record<number, PageConfigsViewModel> = {};

  getPageConfigs = async (pageId: PageIdsEnum, userId: PrimaryKey): Promise<PageConfigsViewModel> => {
    if (this.pageConfigCaches[pageId]) return this.pageConfigCaches[pageId];

    const getPageConfigsResponseModel = await this.pageConfigsRepository.getPageConfig(pageId, userId);

    const filtersConfig = getPageConfigsResponseModel.find(
      (config) => config.pageConfigTypeId === PageConfigTypesEnum.FILTER
    );
    const columnConfig = getPageConfigsResponseModel.find(
      (config) => config.pageConfigTypeId === PageConfigTypesEnum.COLUMN
    );

    const pageConfigsViewModel = {
      filtersConfig: filtersConfig
        ? {
            id: filtersConfig.id,
            config: JSON.parse(filtersConfig.configJson) as PageConfigViewModel[]
          }
        : null,
      columnConfig: columnConfig
        ? {
            id: columnConfig.id,
            config: JSON.parse(columnConfig.configJson) as PageConfigViewModel[]
          }
        : null
    };

    this.pageConfigCaches[pageId] = pageConfigsViewModel;

    return pageConfigsViewModel;
  };

  updatePageConfigs = async (
    pageId: PageIdsEnum,
    configId: PrimaryKey,
    configJson: PageConfigViewModel[]
  ): Promise<boolean> => {
    this.pageConfigCaches[pageId] = null;

    return await this.pageConfigsRepository.updatePageConfig(configId, JSON.stringify(configJson));
  };
}
