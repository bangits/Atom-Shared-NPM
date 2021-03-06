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
  actionFn: (partnerIds) => Promise<ActionResponseModel>;
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
            .then((changePartnerResults) => {
              if (changePartnerResults.successCount)
                alert.success({
                  alertLabel:
                    changePartnerResults.successCount > 1
                      ? t
                          .get('successMultipleAlertMessage')
                          .replace(TRANSLATION_CHANGED_VALUE, changePartnerResults.successCount.toString())
                      : t.get('successAlertMessage')
                });

              if (changePartnerResults.failsCount)
                alert.error({
                  alertLabel:
                    changePartnerResults.failsCount > 1
                      ? t
                          .get('errorMultipleAlertMessage')
                          .replace(TRANSLATION_CHANGED_VALUE, changePartnerResults.failsCount.toString())
                      : changePartnerResults.errorCode === 1
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
