import { AtomCommonContext } from '@/atom-common';
import { INPUT_MAX_VALUES, MAX_PAGE_SIZE } from '@/configs';
import { PrimaryKey } from '@/domain';
import { PhoneCode } from '@/domain/entities';
import { InputWithDropdown } from '@atom/design-system';
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';

export interface TelephoneInputProps {
  phoneCodeDefaultValue?: PrimaryKey;
  phoneDefaultValue?: string;
  label?: string;
  onChange: (fullPhoneNumber: string, phoneCodeValue: PrimaryKey, phoneNuumber: string) => void;
}

export const TelephoneInput = ({
  phoneCodeDefaultValue = 1,
  phoneDefaultValue = '1',
  onChange,
  label
}: TelephoneInputProps) => {
  const { resourceManagerUseCase } = useContext(AtomCommonContext);

  const [phoneCodes, setPhoneCodes] = useState<PhoneCode[]>([]);

  const [phoneNumber, setPhoneNumber] = useState(phoneDefaultValue || '');
  const [selectedPhoneCode, setSelectedPhoneCode] = useState<PhoneCode>(null);

  const selectOption = useMemo(() => phoneCodes.map((p) => ({ value: p.id, label: p.name })), [phoneCodes]);

  const dropdownInputProps = useMemo(() => ({ type: 'number' }), []);

  const dropdownProps = useMemo(
    () => ({
      options: selectOption,
      value: selectedPhoneCode?.id || null,
      defaultValue: phoneCodeDefaultValue
    }),
    [selectedPhoneCode, phoneCodeDefaultValue, selectOption]
  );

  const inputProps = useMemo(
    () => ({
      label,
      type: 'number',
      value: phoneNumber,
      maxLength: INPUT_MAX_VALUES.PHONE_NUMBER - 3
    }),
    [phoneNumber, label]
  );

  const onPhoneCodeChange = useCallback(
    (phoneCodeId: PrimaryKey) => {
      const selectedPhoneCode = phoneCodes.find((phoneCode) => phoneCode.id === phoneCodeId);

      const fullPhoneNumber = `${selectedPhoneCode?.name || ''}${phoneNumber}`;

      setSelectedPhoneCode(selectedPhoneCode);
      onChange(fullPhoneNumber, selectedPhoneCode?.id || null, phoneNumber);
    },
    [phoneCodes, phoneNumber, onChange]
  );

  const onPhoneInputChange = useCallback(
    (phoneNumber: string) => {
      const fullPhoneNumber = `${selectedPhoneCode?.name || ''}${phoneNumber}`;

      setPhoneNumber(phoneNumber);
      onChange(fullPhoneNumber, selectedPhoneCode?.id || null, phoneNumber);
    },
    [selectedPhoneCode, onChange]
  );

  useEffect(() => {
    resourceManagerUseCase
      .getPhoneCode({
        filterName: null,
        pageNumber: 1,
        pageSize: MAX_PAGE_SIZE
      })
      .then((getPhoneCodeResponse) => setPhoneCodes(getPhoneCodeResponse.results));
  }, []);

  useEffect(() => {
    if (phoneCodeDefaultValue && phoneCodes.length)
      setSelectedPhoneCode(phoneCodes.find((phoneCode) => phoneCode.id === phoneCodeDefaultValue));
  }, [phoneCodes]);

  return (
    <InputWithDropdown
      onInputChange={onPhoneInputChange}
      onDropdownChange={onPhoneCodeChange}
      dropdownInputProps={dropdownInputProps}
      dropdownProps={dropdownProps}
      inputProps={inputProps}
    />
  );
};
