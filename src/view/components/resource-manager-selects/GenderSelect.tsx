import { AtomCommonContext } from '@/adapter/react-context';
import { Gender } from '@/domain/entities';
import { useContext, useEffect, useMemo, useState } from 'react';
import { CustomSelect, CustomSelectProps } from '../shared';

export const GenderSelect = (props: Omit<CustomSelectProps, 'options'>) => {
  const { resourceManagerUseCase } = useContext(AtomCommonContext);

  const [genders, setGenders] = useState<Gender[]>([]);

  const selectOptions = useMemo(() => genders.map((c) => ({ value: c.id, label: c.name })), [genders]);

  useEffect(() => {
    resourceManagerUseCase.getGender().then((getGenderResponse) => setGenders(getGenderResponse.results));
  }, []);

  return (
    <>
      <CustomSelect {...props} options={selectOptions} />
    </>
  );
};
