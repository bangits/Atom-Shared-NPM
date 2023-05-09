import { AtomCommonContext } from '@/atom-common';
import { SlugType } from '@/domain';
import { useCallback, useContext, useEffect, useState } from 'react';

export const usePermission = (slugId: SlugType) => {
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
