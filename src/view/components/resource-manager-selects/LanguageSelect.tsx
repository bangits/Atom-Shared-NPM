import { AtomCommonContext } from '@/adapter/react-context';
import { MAX_PAGE_SIZE } from '@/configs';
import { useContext, useEffect, useState, useMemo } from 'react';
import { CustomSelect, CustomSelectProps } from './CustomSelect';
import { Language } from '@/domain/entities';

export const LanguageSelect = (props: CustomSelectProps) => {
  const { resourceManagerUseCase } = useContext(AtomCommonContext);

  const [languages, setLanguages] = useState<Language[]>([]);

  const selectOptions = useMemo(() => languages.map((c) => ({ id: c.id, label: c.name })), [languages]);

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