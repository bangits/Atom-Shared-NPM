import { AtomCommonContext } from '@/adapter/react-context';
import { MAX_PAGE_SIZE } from '@/configs';
import { useContext, useEffect, useState, useMemo } from 'react';
import { CustomSelect, CustomSelectProps } from './CustomSelect';
import { Gender } from '@/domain/entities';

export const GenderSelect = (props: CustomSelectProps) => {
  const { resourceManagerUseCase } = useContext(AtomCommonContext);

  const [genders, setGenders] = useState<Gender[]>([]);

  const selectOptions = useMemo(() => genders.map((c) => ({ id: c.id, label: c.name })), [genders]);

  useEffect(() => {
    resourceManagerUseCase
      .getGender({
        filterName: null,
        pageNumber: 1,
        pageSize: MAX_PAGE_SIZE
      })
      .then((getGenderResponse) => setGenders(getGenderResponse.results));
  }, []);

  return (
    <>
      <CustomSelect {...props} options={selectOptions} />
    </>
  );
};
