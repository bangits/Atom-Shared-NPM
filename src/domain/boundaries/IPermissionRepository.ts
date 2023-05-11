import { PermissionSlugs } from '../models';

export interface IPermissionRepository {
  connectToHub(): Promise<boolean>;
  subscribeForUpdate(cb: (data: PermissionSlugs[]) => void): void;
  getPermissions(): Promise<PermissionSlugs[]>;
}
