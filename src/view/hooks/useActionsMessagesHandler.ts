import { alert } from '@atom/design-system';
import { ActionResponseModel } from '../../../dist/domain';
import { useTranslation } from './useTranslation';
import { TRANSLATION_CHANGED_VALUE } from '@/configs';

export interface useActionAlertProps {
  refetch?: () => void;
  actionsResults: ActionResponseModel;
  successMessageSingle?: string;
  successMessageBulk?: string;
  failMessageSingle?: string;
  failMessageBulk?: string;
}

export const useActionsMessagesHandler = () => {
  const t = useTranslation();

  return ({
    refetch,
    actionsResults,
    successMessageSingle,
    successMessageBulk,
    failMessageSingle,
    failMessageBulk
  }: useActionAlertProps) => {
    if (actionsResults.successCount === 1 && !actionsResults.failsCount) {
      refetch?.();
      alert.success({
        alertLabel: successMessageSingle || t.get('successAlertMessage')
      });
    } else if (actionsResults.successCount) {
      refetch?.();
      alert.success({
        alertLabel:
          successMessageBulk?.replace(TRANSLATION_CHANGED_VALUE, String(actionsResults.successCount)) ||
          t.get('successMultipleAlertMessage').replace(TRANSLATION_CHANGED_VALUE, String(actionsResults.successCount))
      });
    }

    if (actionsResults.failsCount === 1 && !actionsResults.successCount) {
      alert.error({
        alertLabel: failMessageSingle || t.get('errorAlertMessage')
      });
    } else if (actionsResults.failsCount) {
      alert.error({
        alertLabel:
          failMessageBulk?.replace(TRANSLATION_CHANGED_VALUE, String(actionsResults.failsCount)) ||
          t.get('errorMultipleAlertMessage').replace(TRANSLATION_CHANGED_VALUE, String(actionsResults.failsCount))
      });
    }

    return {
      successCount: 0,
      failsCount: 0
    };
  };
};
