import React from 'react';
import { CustomSelectProps } from '..';

const AccountManagementProvider = React.lazy(() => {
  return System.import('@atom/account-management').then((module) => ({
    default: module.AccountManagementProvider
  }));
});

const UserWalletsCurrencies = React.lazy(() => {
  return System.import('@atom/account-management').then((module) => ({
    default: module.UserWalletsCurrencies
  }));
});

export const ExchangeCurrencySelect = (props: CustomSelectProps & { userId: number }) => (
  <React.Suspense fallback={null}>
    <AccountManagementProvider>
      <UserWalletsCurrencies {...props} />
    </AccountManagementProvider>
  </React.Suspense>
);
