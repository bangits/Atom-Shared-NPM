import { AtomCommonContext } from '@/adapter/react-context';
import { MAX_PAGE_SIZE } from '@/configs';
import { PrimaryKey } from '@/domain';
import { Currency } from '@/domain/entities';
import { useContext, useEffect, useMemo, useState } from 'react';
import { CustomSelect, CustomSelectProps } from '../shared';

export const CurrencySelect = (
  props: Omit<Partial<CustomSelectProps> & { expectCurrenciesIds?: PrimaryKey[]; valueProp?: 'code' | 'id' }, 'options'>
) => {
  const { resourceManagerUseCase } = useContext(AtomCommonContext);

  const [currency, setCurrency] = useState<Currency[]>([]);

  const selectOptions = useMemo(
    () =>
      currency
        .map((c) => ({ value: c[props.valueProp || 'value'], label: c.code }))
        .filter((currency) => (props.expectCurrenciesIds ? !props.expectCurrenciesIds.includes(currency.value) : true)),
    [currency, props.expectCurrenciesIds]
  );

  useEffect(() => {
    resourceManagerUseCase
      .getCurrency({
        filterName: null,
        pageNumber: 1,
        pageSize: MAX_PAGE_SIZE
      })
      .then((getCurrencyResponse) => setCurrency(getCurrencyResponse.results));
  }, []);

  return (
    <>
      <CustomSelect {...props} options={selectOptions} />
    </>
  );
};
