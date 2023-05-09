import { PermissionSlugs } from '../models';

export interface IPermissionRepository {
  subscribeForUpdate(cb: (data: PermissionSlugs[]) => void): void;
  getPermissions(): Promise<PermissionSlugs[]>;
}
