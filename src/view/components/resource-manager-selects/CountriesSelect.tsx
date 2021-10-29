import { AtomCommonContext } from '@/adapter/react-context';
import { MAX_PAGE_SIZE } from '@/configs';
import { Country } from '@/domain/entities';
import { useContext, useEffect, useMemo, useState } from 'react';
import { CustomSelect, CustomSelectProps } from '../shared';

export const CountriesSelect = (props: CustomSelectProps) => {
  const { resourceManagerUseCase } = useContext(AtomCommonContext);

  const [countries, setCountries] = useState<Country[]>([]);

  const selectOptions = useMemo(() => countries.map((c) => ({ value: c.id, label: c.name })), [countries]);

  useEffect(() => {
    resourceManagerUseCase
      .getCountries({
        filterName: null,
        pageNumber: 1,
        pageSize: MAX_PAGE_SIZE
      })
      .then((getCountriesResponse) => setCountries(getCountriesResponse.results));
  }, []);

  return (
    <>
      <CustomSelect {...props} options={selectOptions} />
    </>
  );
};
