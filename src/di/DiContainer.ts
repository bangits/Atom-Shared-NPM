import {
  CacheService,
  enviromentService,
  HttpService,
  ICacheService,
  IHttpService,
  ISocketService,
  LocalStorageService,
  PermissionService,
  SessionStorageService,
  SocketService,
  TranslationService
} from '@/common/services';
import {
  ExchangeManagerRepository,
  FileManagerRepository,
  PageConfigsRepository,
  PermissionRepository,
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
          baseURL: enviromentService.get<{ resourceManager: string }>('apiUrlPaths').resourceManager
        })
    );
    this.diContainer.bind<IHttpService>(DI_CONSTANTS.FileManagerHttpService).toDynamicValue(
      () =>
        new HttpService({
          baseURL: enviromentService.get<{ fileManager: string }>('apiUrlPaths').fileManager
        })
    );
    this.diContainer.bind<IHttpService>(DI_CONSTANTS.ExchangeManagerHttpService).toDynamicValue(
      () =>
        new HttpService({
          baseURL: enviromentService.get<{ exchangeManager: string }>('apiUrlPaths').exchangeManager
        })
    );

    this.diContainer.bind<ISocketService>(DI_CONSTANTS.PermissionSocketService).toDynamicValue(() => new SocketService('/rm'));

    this.diContainer.bind<ICacheService>(DI_CONSTANTS.CacheService).to(CacheService);
    this.diContainer.bind(DI_CONSTANTS.LocalStorageService).to(LocalStorageService);
    this.diContainer.bind(DI_CONSTANTS.SessionStorageService).to(SessionStorageService);
    this.diContainer.bind(DI_CONSTANTS.TranslationService).to(TranslationService);
    this.diContainer.bind(DI_CONSTANTS.PermissionService).to(PermissionService);
    this.diContainer.bind(DI_CONSTANTS.UserHttpService).toDynamicValue(
      () =>
        new HttpService({
          baseURL: enviromentService.get<{ userManager: string }>('apiUrlPaths').userManager
        })
    );

    // Repositories
    this.diContainer.bind(DI_CONSTANTS.ResourceManagerRepository).to(ResourceManagerRepository);
    this.diContainer.bind(DI_CONSTANTS.FileManagerRepository).to(FileManagerRepository);
    this.diContainer.bind(DI_CONSTANTS.ExchangeManagerRepository).to(ExchangeManagerRepository);
    this.diContainer.bind(DI_CONSTANTS.PermissionRepository).to(PermissionRepository);
    this.diContainer.bind<IPageConfigsRepository>(DI_CONSTANTS.PageConfigsRepository).to(PageConfigsRepository);

    // Use Cases
    this.diContainer.bind(DI_CONSTANTS.ResourceManagerUseCase).to(ResourceManagerUseCase);
    this.diContainer.bind(DI_CONSTANTS.TranslationUseCase).to(TranslationUseCase);
    this.diContainer.bind(DI_CONSTANTS.FileManagerUseCase).to(FileManagerUseCase);
    this.diContainer.bind(DI_CONSTANTS.ExchangeManagerUseCase).to(ExchangeManagerUseCase);
    this.diContainer.bind(DI_CONSTANTS.PageConfigsUseCase).to(PageConfigsUseCase);
  };
}
