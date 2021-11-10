import { AtomCommonContext } from '@/adapter/react-context';
import { MAX_PAGE_SIZE } from '@/configs';
import { DocumentType } from '@/domain/entities';
import { useContext, useEffect, useMemo, useState } from 'react';
import { CustomSelect, CustomSelectProps } from '../shared';

export const DocumentTypeSelect = (props: Partial<CustomSelectProps>) => {
  const { resourceManagerUseCase } = useContext(AtomCommonContext);

  const [documentTypes, setDocumentTypes] = useState<DocumentType[]>([]);

  const selectOptions = useMemo(() => documentTypes.map((c) => ({ value: c.id, label: c.name })), [documentTypes]);

  useEffect(() => {
    resourceManagerUseCase
      .getDocumentType({
        filterName: null,
        pageNumber: 1,
        pageSize: MAX_PAGE_SIZE
      })
      .then((getDocumentTypesResponse) => setDocumentTypes(getDocumentTypesResponse.results));
  }, []);

  return (
    <>
      <CustomSelect {...props} options={selectOptions} />
    </>
  );
};
