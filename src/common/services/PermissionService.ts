import { injectable } from 'inversify';
import { PermissionSlugs, SlugType } from '@/domain/models';
import { Subscribable } from './Subscribable';
import { IPermissionRepository } from '@/domain/boundaries/IPermissionRepository';

@injectable()
export class PermissionService extends Subscribable<PermissionSlugs[]> {
  private initialized = false;
  private permissions: PermissionSlugs[] = [];

  private permissionsRepository: IPermissionRepository;

  init = async () => {
    if (this.initialized) return;

    this.initialized = true;

    const userPermissions = await this.permissionsRepository.getPermissions();

    this.permissionsRepository.subscribeForUpdate((updatedTranslations) => {
      this.permissions = updatedTranslations;
      this.publish(updatedTranslations);
    });

    this.permissions = userPermissions;
    this.publish(userPermissions);
  };

  checkIsExist = (value: SlugType) => Object.values(this.permissions).some((item) => item === value);

  hasPermission = (permissionsForCheck: SlugType) => {
    if (!this.permissions.length) return false;

    return !Array.isArray(permissionsForCheck)
      ? this.checkIsExist(permissionsForCheck)
      : permissionsForCheck.map(this.checkIsExist);
  };
}
