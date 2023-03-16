import { alert } from '@atom/design-system';
import { useCallback, useRef } from 'react';
import { useTranslation } from './useTranslation';

export const useProgressAlert = ({ onSuccess }: { onSuccess?: () => void } = {}) => {
  const alertIdRef = useRef<string | null>(null);

  const t = useTranslation();

  return useCallback(
    (progress: number) => {
      if (progress === 100) {
        alert.success({
          alertLabel: t.get('successAlertMessage')
        });

        onSuccess?.();

        if (alertIdRef.current)
          setTimeout(() => {
            alert.remove(alertIdRef.current);

            alertIdRef.current = null;
          }, 500);

        return;
      }

      const alertLabel = t.get('actionInProgress').replace('$VALUE', progress.toString());

      if (!alertIdRef.current) {
        alertIdRef.current = alert.loading({
          alertLabel,
          autoClose: false
        });

        return;
      }

      alert.updateAlert(alertIdRef.current, {
        alertLabel
      });
    },
    [t, onSuccess]
  );
};
