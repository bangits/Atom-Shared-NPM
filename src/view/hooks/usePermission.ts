import { AtomCommonContext } from '@/atom-common';
import { PermissionSlugs } from '@/domain';
import { useCallback, useContext, useEffect, useState } from 'react';

export const usePermission = (slugId: PermissionSlugs | PermissionSlugs[]) => {
  const containerInstance = useContext(AtomCommonContext);

  const [currentPermissions, setCurrentPermissions] = useState<boolean | boolean[]>();

  const [permissionService] = useState(containerInstance.permissionService);

  const checkSlugIsExist = useCallback(
    () => setCurrentPermissions(permissionService.hasPermission(slugId)),
    [slugId, permissionService.hasPermission]
  );

  useEffect(() => {
    checkSlugIsExist();

    permissionService.subscribe(checkSlugIsExist);
  }, []);

  return currentPermissions;
};
