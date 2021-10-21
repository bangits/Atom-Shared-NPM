import { AtomCommonContext } from '@/adapter/react-context';
import { MAX_PAGE_SIZE } from '@/configs';
import { useContext, useEffect, useMemo, useState } from 'react';
import { CustomSelect, CustomSelectProps } from './CustomSelect';
import { PhoneCode } from '@/domain/entities';

export const PhoneCodeSelect = (props: CustomSelectProps) => {
  const { resourceManagerUseCase } = useContext(AtomCommonContext);

  const [phoneCode, setPhoneCode] = useState<PhoneCode[]>([]);

  const selectOption = useMemo(() => phoneCode.map((p) => ({ id: p.id, label: p.name })), [phoneCode]);

  useEffect(() => {
    resourceManagerUseCase
      .getPhoneCode({
        filterName: null,
        pageNumber: 1,
        pageSize: MAX_PAGE_SIZE
      })
      .then((getPhoneCodeResponse) => setPhoneCode(getPhoneCodeResponse.results));
  }, []);

  return (
    <>
      <CustomSelect {...props} option={selectOption} />
    </>
  );
};
