import { AtomCommonContext } from '@/adapter/react-context';
import { MAX_PAGE_SIZE } from '@/configs';
import { Country } from '@/domain/entities';
import { useContext, useEffect, useMemo, useState } from 'react';
import { CustomSelect, CustomSelectProps } from '../shared';

export interface CountrySelectProps extends Omit<CustomSelectProps, 'options'> {
  cityId?: number | number[];
}

export const CountriesSelect = ({ cityId, ...props }: Partial<CountrySelectProps>) => {
  const { resourceManagerUseCase } = useContext(AtomCommonContext);

  const [countries, setCountries] = useState<Country[]>([]);

  const selectOptions = useMemo(() => countries.map((c) => ({ value: c.id, label: c.name })), [countries]);

  if (!cityId || (Array.isArray(cityId) && !cityId.length)) return;

  useEffect(() => {
    resourceManagerUseCase
      .getCountries({
        cityIds: Array.isArray(cityId) ? cityId : [cityId],
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
