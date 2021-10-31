import { asyncForeach } from '@/helpers';
import { CacheService, enviromentService, HttpService, ICacheService, IHttpService } from '@/services';
import { Container } from 'inversify';

export type DiConfig = {
  modulePath: string;
  moduleName: string;
};

export type DiFiles = {
  module: any;
  name: string;
};

export class DiContainer {
  public diContainer: Container;
  public diFiles: DiFiles[] = [];

  public configure = async (diConfigs: DiConfig[]) => {
    this.diContainer = new Container({
      defaultScope: 'Singleton'
    });

    this.diContainer.bind<IHttpService>('IHttpService').toDynamicValue(() => {
      return new HttpService({
        baseURL: 'http://52.151.228.248/api/v1'
      });
    });

    await asyncForeach(diConfigs, async ({ moduleName, modulePath }) => {
      if (moduleName === 'HttpService') return;

      const module = await import(`../${modulePath}`);

      this.diContainer.bind(`I${moduleName}`).to(module[moduleName]);
      this.diContainer.bind(moduleName).to(module[moduleName]);

      this.diFiles.push({ name: moduleName, module: module });
    });

    this.diContainer.bind<IHttpService>('IHttpService').toDynamicValue(
      () =>
        new HttpService({
          baseURL: enviromentService.get<string>('apiUrl')
        })
    );

    this.diContainer.bind<ICacheService>('ICacheService').to(CacheService);
  };
}
