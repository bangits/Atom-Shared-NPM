import { AtomCommonContext } from '@/adapter/react-context';
import { MAX_PAGE_SIZE } from '@/configs';
import { Nationality } from '@/domain';
import { useContext, useEffect, useMemo, useState } from 'react';
import { CustomSelect, CustomSelectProps } from '../shared';

export interface NationalitySelectProps extends Omit<CustomSelectProps, 'options'> {}

export const NationalitiesSelect = (props: Partial<NationalitySelectProps>) => {
  const { resourceManagerUseCase } = useContext(AtomCommonContext);

  const [Nationalities, setNationalities] = useState<Nationality[]>([]);

  const selectOptions = useMemo(() => Nationalities.map((c) => ({ value: c.id, label: c.name })), [Nationalities]);

  useEffect(() => {
    resourceManagerUseCase
      .getNationality({
        filterName: null,
        pageNumber: 1,
        pageSize: MAX_PAGE_SIZE
      })
      .then((getNationalitiesResponse) => setNationalities(getNationalitiesResponse.results));
  }, []);

  return (
    <>
      <CustomSelect {...props} options={selectOptions} />
    </>
  );
};
