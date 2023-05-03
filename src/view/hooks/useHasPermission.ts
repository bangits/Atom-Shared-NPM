import { PermissionSlugs } from "@/domain";
import { useCallback } from "react";
import { SlugType } from "./usePermission";

export type hasPermissionResultType = boolean | Record<string, boolean>;

const checkIsExist = (value: string | number) => {
  const findedData = Object.values(PermissionSlugs).find(
    (item) => item.toString().toLowerCase() === value.toString().toLowerCase()
  );

  return findedData || Number(findedData) === 0 ? true : false;
};

export const useHasPermission = () => {
  const hasPermission = useCallback(
    (permission: SlugType): hasPermissionResultType => {
      if (!permission && permission !== 0) return false;
      if (!Array.isArray(permission)) {
        const data = checkIsExist(permission);
        return data;
      } else {
        const data = [...permission].reduce((acc, cur, i) => {
          acc[i] = checkIsExist(cur);
          return acc;
        }, {});
        return data;
      }
    },
    []
  );

  return hasPermission;
};