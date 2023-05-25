import { ActionResponseModel, PrimaryKey, UseTranslationReturnValue, useBulkActionAlert } from '@/atom-common';
import { alert } from '@atom/design-system';
import { useCallback, useEffect, useState } from 'react';

export interface UseActionWithDialogParameters<T> {
  dialogFn: (dialogParameters: {
    onSubmit: (closeFn: () => void) => void;
    t: UseTranslationReturnValue;
    column: T | T[];
  }) => void;
  t: UseTranslationReturnValue;
  actionFn: (ids: PrimaryKey[]) => Promise<unknown>;
  isFetching: boolean;
  getColumnId: (column: T) => PrimaryKey;
  refetch: () => void;
}

export const useActionWithDialog = <T>({
  dialogFn,
  t,
  getColumnId,
  actionFn,
  refetch,
  isFetching
}: UseActionWithDialogParameters<T>): { openDialogFn: (column: T | T[]) => void; columnLoadingIds: PrimaryKey[] } => {
  const bulkActionAlert = useBulkActionAlert();

  const [columnLoadingIds, setColumnLoadingIds] = useState<PrimaryKey[]>([]);

  const showErrorConnectionAlert = useCallback(
    () =>
      alert.error({
        alertLabel: t.get('connectionError')
      }),
    []
  );

  const openDialogFn = useCallback(
    (column: T | T[]) => {
      dialogFn({
        column,
        t,
        onSubmit: (closeFn) => {
          const columnIds = Array.isArray(column) ? column.map(getColumnId) : [getColumnId(column)];

          setColumnLoadingIds(columnIds);

          closeFn();

          actionFn(columnIds)
            .then((actionResponseModel: ActionResponseModel) => {
              bulkActionAlert(actionResponseModel);

              refetch();
            })
            .catch(showErrorConnectionAlert);
        }
      });
    },
    [dialogFn, t, bulkActionAlert, getColumnId, actionFn, refetch]
  );

  useEffect(() => {
    if (!isFetching) setColumnLoadingIds([]);
  }, [isFetching]);

  return {
    openDialogFn,
    columnLoadingIds
  };
};
