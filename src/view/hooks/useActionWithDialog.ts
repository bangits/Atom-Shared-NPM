import { ActionResponseModel, PrimaryKey, TRANSLATION_CHANGED_VALUE, UseTranslationReturnValue } from '@/atom-common';
import { alert } from '@atom/design-system';
import { useCallback, useEffect, useState } from 'react';

export interface UseActionWithDialogParameters<T> {
  dialogFn: (dialogParameters: {
    onSubmit: (closeFn: () => void) => void;
    t: UseTranslationReturnValue;
    column: T | T[];
  }) => void;
  t: UseTranslationReturnValue;
  actionFn: (ids: PrimaryKey[]) => Promise<ActionResponseModel | void>;
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
            .then((actionResponseModel) => {
              if (!actionResponseModel) return;

              if (actionResponseModel.successCount)
                alert.success({
                  alertLabel:
                    actionResponseModel.successCount > 1
                      ? t
                          .get('successMultipleAlertMessage')
                          .replace(TRANSLATION_CHANGED_VALUE, actionResponseModel.successCount.toString())
                      : t.get('successAlertMessage')
                });

              if (actionResponseModel.failsCount)
                alert.error({
                  alertLabel:
                    actionResponseModel.failsCount > 1
                      ? t
                          .get('errorMultipleAlertMessage')
                          .replace(TRANSLATION_CHANGED_VALUE, actionResponseModel.failsCount.toString())
                      : actionResponseModel.errorCode === 1
                      ? t.get('providerIsNotActive')
                      : t.get('errorAlertMessage')
                });

              refetch();
            })
            .catch(showErrorConnectionAlert);
        }
      });
    },
    [dialogFn, t, getColumnId, actionFn, refetch]
  );

  useEffect(() => {
    if (!isFetching) setColumnLoadingIds([]);
  }, [isFetching]);

  return {
    openDialogFn,
    columnLoadingIds
  };
};
