import { AtomCommonContext } from '@/adapter/react-context';
import { MAX_PAGE_SIZE } from '@/configs';
import { useContext, useEffect, useState, useMemo } from 'react';
import { CustomSelect, CustomSelectProps } from './CustomSelect';
import { Currency } from '@/domain/entities';

export const CurrencySelect = (props: CustomSelectProps) => {
  const { resourceManagerUseCase } = useContext(AtomCommonContext);

  const [currency, setCurrency] = useState<Currency[]>([]);

  const selectOptions = useMemo(() => currency.map((c) => ({ id: c.id, label: c.name })), [currency]);

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
