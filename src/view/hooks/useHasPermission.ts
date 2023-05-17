import { AtomCommonContext } from '@/atom-common';
import { useCallback, useContext, useEffect, useState } from 'react';

export const useHasPermission = () => {
  const containerInstance = useContext(AtomCommonContext);

  const [, setUpdated] = useState(null);

  const [permissionService] = useState(containerInstance.permissionService);

  const forceUpdate = useCallback(() => setUpdated({}), []);

  useEffect(() => {
    permissionService.subscribe(forceUpdate);
  }, []);

  return permissionService.hasPermission;
};
