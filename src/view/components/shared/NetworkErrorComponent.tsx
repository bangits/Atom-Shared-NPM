import { useTranslation } from '@/view';
import { alert } from '@atom/design-system';
import { useEffect } from 'react';

export const NetworkErrorComponent = () => {
  const t = useTranslation();

  useEffect(() => {
    window.addEventListener('online', () => alert.success({ alertLabel: t.get('networkConnectionSuccess') }));
    window.addEventListener('offline', () => alert.error({ alertLabel: t.get('networkConnectionError') }));
  }, [t]);

  return null;
};
