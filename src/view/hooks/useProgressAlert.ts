import { alert } from '@atom/design-system';
import { useCallback, useRef } from 'react';
import { useTranslation } from './useTranslation';

export const useProgressAlert = () => {
  const alertIdRef = useRef<string | null>(null);

  const t = useTranslation();

  return useCallback(
    (progress: number) => {
      if (!alertIdRef.current && progress === 100) return;

      const alertLabel = t.get('actionInProgress').replace('$VALUE', progress.toString());

      if (!alertIdRef.current) {
        const alertId = alert.loading({
          alertLabel,
          autoClose: false
        });

        alertIdRef.current = alertId;

        return;
      }

      // @ts-expect-error remove after ds version
      alert.updateAlert(alertIdRef.current, {
        alertLabel
      });

      if (progress === 100 && alertIdRef.current) {
        alert.success({
          alertLabel: t.get('successAlertMessage')
        });

        setTimeout(() => {
          alert.remove(alertIdRef.current);

          alertIdRef.current = null;
        }, 500);
      }
    },
    [t]
  );
};
