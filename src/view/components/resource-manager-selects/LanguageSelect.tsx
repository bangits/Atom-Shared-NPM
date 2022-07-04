import { AtomCommonContext } from '@/adapter/react-context';
import { MAX_PAGE_SIZE } from '@/configs';
import { PrimaryKey } from '@/domain';
import { Language } from '@/domain/entities';
import { useContext, useEffect, useMemo, useState } from 'react';
import { CustomSelect, CustomSelectProps } from '../shared';

export const LanguageSelect = (
  props: Partial<CustomSelectProps> & { expectLanguagesIds?: PrimaryKey[]; valueProp?: 'code' | 'id' }
) => {
  const { resourceManagerUseCase } = useContext(AtomCommonContext);

  const [languages, setLanguages] = useState<Language[]>([]);

  const selectOptions = useMemo(
    () =>
      languages
        .map((c) => ({ value: c[props.valueProp || 'id'], label: c.name, code: c.code }))
        .filter((currency) => (props.expectLanguagesIds ? !props.expectLanguagesIds.includes(currency.value) : true)),
    [languages]
  );

  useEffect(() => {
    resourceManagerUseCase
      .getLanguage({
        filterName: null,
        pageNumber: 1,
        pageSize: MAX_PAGE_SIZE
      })
      .then((getLanguageResponse) => setLanguages(getLanguageResponse.results));
  }, []);

  return (
    <>
      <CustomSelect {...props} options={selectOptions} />
    </>
  );
};
