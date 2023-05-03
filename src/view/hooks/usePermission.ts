import { useCallback, useEffect, useState } from 'react';
import { hasPermissionResultType, useHasPermission } from './useHasPermission';

export type SlugType = number | string | number[] | string[];

export const usePermission = (slugId: SlugType) => {
  const [result, setResult] = useState<SlugType | hasPermissionResultType>([]);
  const hasPermission = useHasPermission();

  const checkSlugIsExist = useCallback(() => {
    if (slugId || slugId === 0) {
      const data = Array.isArray(slugId)
        ? [...Object.values(hasPermission(slugId))]
        : hasPermission(slugId);

      setResult(data);
    }
  }, [slugId, hasPermission]);

  useEffect(() => {
    checkSlugIsExist();
  }, []);

  return result;
};

