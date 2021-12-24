import { AtomCommonContext } from '@/adapter/react-context';
import { MAX_PAGE_SIZE } from '@/configs';
import { ValidationLevel } from '@/domain/entities/ValidationLevelEntity';
import { useContext, useEffect, useMemo, useState } from 'react';
import { CustomSelect, CustomSelectProps } from '../shared';

export const ValidationLevelSelect = (props: Partial<CustomSelectProps>) => {
  const { resourceManagerUseCase } = useContext(AtomCommonContext);

  const [validationLevel, setValidationLevel] = useState<ValidationLevel[]>([]);

  const selectOptions = useMemo(
    () => validationLevel?.map((c) => ({ value: c?.id, label: c?.name })),
    [validationLevel]
  );

  useEffect(() => {
    resourceManagerUseCase
      .getValidationLevel({
        filterName: null,
        pageNumber: 1,
        pageSize: MAX_PAGE_SIZE
      })
      .then((getValidationLevelResponse) => setValidationLevel(getValidationLevelResponse.results));
  }, []);

  return (
    <>
      <CustomSelect {...props} options={selectOptions} />
    </>
  );
};
