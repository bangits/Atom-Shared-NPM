import {
  CacheService,
  HttpService,
  ICacheService,
  IHttpService,
  LocalStorageService,
  SessionStorageService,
  TranslationService
} from '@/common/services';
import {
  ExchangeManagerRepository,
  FileManagerRepository,
  PageConfigsRepository,
  ResourceManagerRepository
} from '@/data';
import {
  ExchangeManagerUseCase,
  FileManagerUseCase,
  IPageConfigsRepository,
  PageConfigsUseCase,
  ResourceManagerUseCase,
  TranslationUseCase
} from '@/domain';
import { Container } from 'inversify';
import { DI_CONSTANTS } from './constants';
export class DiContainer {
  public diContainer: Container;

  public configure = () => {
    this.diContainer = new Container({
      defaultScope: 'Singleton'
    });

    // Services
    this.diContainer.bind<IHttpService>(DI_CONSTANTS.HttpService).toDynamicValue(
      () =>
        new HttpService({
          baseURL: 'http://20.69.79.186/api/v1'
        })
    );
    this.diContainer.bind<IHttpService>(DI_CONSTANTS.FileManagerHttpService).toDynamicValue(
      () =>
        new HttpService({
          baseURL: 'http://52.143.92.215/api/v1'
        })
    );
    this.diContainer.bind<IHttpService>(DI_CONSTANTS.ExchangeManagerHttpService).toDynamicValue(
      () =>
        new HttpService({
          baseURL: 'http://20.115.248.6/api/v1'
        })
    );
    this.diContainer.bind<ICacheService>(DI_CONSTANTS.CacheService).to(CacheService);
    this.diContainer.bind(DI_CONSTANTS.LocalStorageService).to(LocalStorageService);
    this.diContainer.bind(DI_CONSTANTS.SessionStorageService).to(SessionStorageService);
    this.diContainer.bind(DI_CONSTANTS.TranslationService).to(TranslationService);
    this.diContainer.bind(DI_CONSTANTS.UserHttpService).toDynamicValue(
      () =>
        new HttpService({
          baseURL: 'http://20.83.89.52/api/v1'
        })
    );

    // Repositories
    this.diContainer.bind(DI_CONSTANTS.ResourceManagerRepository).to(ResourceManagerRepository);
    this.diContainer.bind(DI_CONSTANTS.FileManagerRepository).to(FileManagerRepository);
    this.diContainer.bind(DI_CONSTANTS.ExchangeManagerRepository).to(ExchangeManagerRepository);
    this.diContainer.bind<IPageConfigsRepository>(DI_CONSTANTS.PageConfigsRepository).to(PageConfigsRepository);

    // Use Cases
    this.diContainer.bind(DI_CONSTANTS.ResourceManagerUseCase).to(ResourceManagerUseCase);
    this.diContainer.bind(DI_CONSTANTS.TranslationUseCase).to(TranslationUseCase);
    this.diContainer.bind(DI_CONSTANTS.FileManagerUseCase).to(FileManagerUseCase);
    this.diContainer.bind(DI_CONSTANTS.ExchangeManagerUseCase).to(ExchangeManagerUseCase);
    this.diContainer.bind(DI_CONSTANTS.PageConfigsUseCase).to(PageConfigsUseCase);
  };
}
