import { AtomCommonContext } from '@/atom-common';
import { useContext, useEffect, useMemo, useState } from 'react';
import { CustomSelect, CustomSelectProps } from '..';

export const ExchangeCurrencySelect = (props: CustomSelectProps & { userId: number; defaultCurrencyCode: string }) => {
  const { exchangeManagerUseCase } = useContext(AtomCommonContext);

  const [currencyCodes, setCurrencyCodes] = useState<string[]>([]);

  const selectOptions = useMemo(
    () => currencyCodes.map((currencyCode) => ({ value: currencyCode, label: currencyCode })),
    [currencyCodes]
  );

  useEffect(() => {
    if (!props.defaultCurrencyCode) return;

    exchangeManagerUseCase
      .getExchangeCompatibleCurrencyCodes(props.defaultCurrencyCode)
      .then((currencyCodes) => setCurrencyCodes([props.defaultCurrencyCode, ...currencyCodes]));
  }, [props.defaultCurrencyCode]);

  return (
    <>
      <CustomSelect {...props} options={selectOptions} />
    </>
  );
};
