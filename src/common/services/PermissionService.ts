/* eslint-disable no-console */
import { injectable, inject } from 'inversify';
import { PermissionSlugs } from '@/domain';
import { Subscribable } from './Subscribable';
import { IPermissionRepository } from '@/domain';
import { DI_CONSTANTS } from '@/di/constants';
import { SocketService } from './SocketService';
import { StorageService } from './StorageService';
@injectable()
export class PermissionService extends Subscribable<PermissionSlugs[]> {
  private static initialized = false;
  private static permissions: PermissionSlugs[] = [];

  @inject(DI_CONSTANTS.PermissionRepository)
  private permissionsRepository: IPermissionRepository;

  @inject(DI_CONSTANTS.LocalStorageService)
  private localStorageService: StorageService;

  init = async () => {
    if (PermissionService.initialized) {
      return;
    }

    PermissionService.initialized = true;

    // TODO: Move this to constants
    const accessToken = this.localStorageService.getItem<string>('token');

    if (!accessToken) return;

    SocketService.setAccessToken(accessToken);

    await this.permissionsRepository.connectToHub();

    const userPermissions = await this.permissionsRepository.getPermissions();

    this.permissionsRepository.subscribeForUpdate((updatedTranslations) => {
      PermissionService.permissions = updatedTranslations;
      this.publish(updatedTranslations);
    });

    PermissionService.permissions = userPermissions;
    this.publish(userPermissions);
  };

  checkIsExist = (value: PermissionSlugs | PermissionSlugs[]) => {
    return Object.values(PermissionService.permissions).some((item) => item === value);
  }
    

  hasPermission = (permissionsForCheck: PermissionSlugs | PermissionSlugs[]) => {
    if (!PermissionService.permissions?.length) return false;

    return !Array.isArray(permissionsForCheck)
      ? this.checkIsExist(permissionsForCheck)
      : permissionsForCheck.map(this.checkIsExist);
  };
}
