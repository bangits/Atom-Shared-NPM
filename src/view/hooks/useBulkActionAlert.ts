import { ActionResponseModel, TRANSLATION_CHANGED_VALUE, useTranslation } from '@/atom-common';
import { alert } from '@atom/design-system';
import { useCallback } from 'react';

export const useBulkActionAlert = () => {
  const t = useTranslation();

  return useCallback(
    (actionResponseModel: ActionResponseModel) => {
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
    },
    [t]
  );
};
