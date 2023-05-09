import { AtomCommonContext } from '@/atom-common';
import {  useContext, useEffect, useState } from 'react';

export const useHasPermission = () => {
  const containerInstance = useContext(AtomCommonContext);

  const [updated,setUpdated] = useState(null);
  

  const [permissionService] = useState(containerInstance.permissionService);


  const forceUpdate = () => {
    setUpdated({});
  }

  useEffect(() => {
    permissionService.subscribe(forceUpdate);
  }, []);

  return permissionService.hasPermission;
};
