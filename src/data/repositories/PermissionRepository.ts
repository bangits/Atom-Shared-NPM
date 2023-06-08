import { ISocketService } from '@/atom-common';
import { DI_CONSTANTS } from '@/di/constants';
import { IPermissionRepository, PermissionSlugs } from '@/domain';
import { injectable, inject } from 'inversify';

@injectable()
export class PermissionRepository implements IPermissionRepository {
  @inject(DI_CONSTANTS.PermissionSocketService)
  private readonly socketService: ISocketService;

  connectToHub = async (): Promise<boolean> => {
    try {
      await this.socketService.connect('/rolepermissionhub');

      return true;
    } catch (error) {
      return false;
    }
  };

  getPermissions = () =>
    new Promise<PermissionSlugs[]>((resolve) => {
      this.socketService.on('GetPermissions', resolve);
    });

  subscribeForUpdate = (cb: (data: PermissionSlugs[]) => void) => this.socketService.on('GetPermissions', cb);
}
