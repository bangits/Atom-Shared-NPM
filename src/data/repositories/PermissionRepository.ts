import { IPermissionRepository } from '@/domain';
import { injectable } from 'inversify';

@injectable()
export class PermissionRepository implements IPermissionRepository {
  getPermissions = async () => [];

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  subscribeForUpdate = async () => {};
}
