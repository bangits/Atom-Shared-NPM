import { Suspense, lazy } from 'react';

import type { SupportedCurrenciesSelectProps } from '@atom/cms-management';

const CMSManagementProvider = lazy(async () => ({
  default: (await System.import('@atom/cms-management')).CMSManagementProvider
}));

const SupportedCurrenciesSelect = lazy(async () => ({
  default: (await System.import('@atom/cms-management')).SupportedCurrenciesSelect
}));

export const CurrencySelect = (props: SupportedCurrenciesSelectProps) => (
  <Suspense fallback={<></>}>
    <CMSManagementProvider>
      <SupportedCurrenciesSelect {...props} />
    </CMSManagementProvider>
  </Suspense>
);
