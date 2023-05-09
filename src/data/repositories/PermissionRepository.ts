import { IHttpService } from '@/common/services';
import { DI_CONSTANTS } from '@/di/constants';
import { IPermissionRepository, PermissionSlugs } from '@/domain';
import { inject, injectable } from 'inversify';

@injectable()
export class PermissionRepository implements IPermissionRepository {
  @inject(DI_CONSTANTS.PermissionService)
  private readonly httpService: IHttpService;

  getPermissions = async () => {
    const permissions = await this.httpService.get<PermissionSlugs[], {}>({
      url: `/Permissions`
    });

    return permissions ?? [];
  };

  subscribeForUpdate = async () => {
    // eslint-disable-next-line no-console
    console.log('aa');
  };
}
