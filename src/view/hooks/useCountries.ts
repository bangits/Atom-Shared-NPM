import { AtomCommonContext, Country, MAX_PAGE_SIZE } from '@/atom-common';
import { useContext, useEffect, useState } from 'react';

export const useCountries = () => {
  const { resourceManagerUseCase } = useContext(AtomCommonContext);

  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    resourceManagerUseCase
      .getCountries({
        filterName: null,
        pageNumber: 1,
        pageSize: MAX_PAGE_SIZE
      })
      .then((getCountriesResponse) => setCountries(getCountriesResponse.results));
  }, []);

  return countries;
};
