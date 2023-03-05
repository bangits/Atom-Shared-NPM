import { CMSManagementProvider, SupportedCurrenciesSelect, SupportedCurrenciesSelectProps } from '@atom/cms-management';

export const CurrencySelect = (props: SupportedCurrenciesSelectProps) => (
  <CMSManagementProvider>
    <SupportedCurrenciesSelect {...props} />
  </CMSManagementProvider>
);
