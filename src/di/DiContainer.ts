import {
  CacheService,
  HttpService,
  ICacheService,
  IHttpService,
  LocalStorageService,
  SessionStorageService,
  TranslationService
} from '@/common/services';
import { ResourceManagerRepository } from '@/data';
import { ResourceManagerUseCase, TranslationUseCase } from '@/domain';
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
          baseURL: 'http://52.188.141.27/api/v1'
        })
    );
    this.diContainer.bind<ICacheService>(DI_CONSTANTS.CacheService).to(CacheService);
    this.diContainer.bind(DI_CONSTANTS.LocalStorageService).to(LocalStorageService);
    this.diContainer.bind(DI_CONSTANTS.SessionStorageService).to(SessionStorageService);
    this.diContainer.bind(DI_CONSTANTS.TranslationService).to(TranslationService);

    // Repositories
    this.diContainer.bind(DI_CONSTANTS.ResourceManagerRepository).to(ResourceManagerRepository);

    // Use Cases
    this.diContainer.bind(DI_CONSTANTS.ResourceManagerUseCase).to(ResourceManagerUseCase);
    this.diContainer.bind(DI_CONSTANTS.TranslationUseCase).to(TranslationUseCase);
  };
}
