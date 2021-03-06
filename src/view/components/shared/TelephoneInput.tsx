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
  error?: string | false;
  onChange: (fullPhoneNumber: string, phoneCodeValue: PrimaryKey, phoneNuumber: string) => void;
  onBlur?: () => void;
  forceClear?: boolean;
}

export const TelephoneInput = ({
  phoneCodeDefaultValue,
  phoneDefaultValue,
  onChange,
  label,
  onBlur,
  error,
  forceClear
}: TelephoneInputProps) => {
  const { resourceManagerUseCase } = useContext(AtomCommonContext);

  const [phoneCodes, setPhoneCodes] = useState<PhoneCode[]>([]);

  const [phoneNumber, setPhoneNumber] = useState(phoneDefaultValue || '');
  const [selectedPhoneCode, setSelectedPhoneCode] = useState<PhoneCode>(null);

  const selectOption = useMemo(() => phoneCodes.map((p) => ({ value: p.id, label: p.name })), [phoneCodes]);

  const dropdownInputProps = useMemo(() => ({ type: 'number' }), [selectedPhoneCode]);

  const dropdownProps = useMemo(
    () => ({
      options: selectOption,
      value: selectedPhoneCode?.id || '',
      defaultValue: phoneCodeDefaultValue,
      onBlur,
      color: error ? ('danger' as const) : undefined
    }),
    [selectedPhoneCode, phoneCodeDefaultValue, selectOption, onBlur, error]
  );

  const inputProps = useMemo(
    () => ({
      label,
      type: 'number',
      value: phoneNumber,
      maxLength: INPUT_MAX_VALUES.PHONE_NUMBER - 3,
      onBlur,
      color: error ? ('danger' as const) : undefined,
      explanation: error || undefined
    }),
    [phoneNumber, label, onBlur, error]
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
      .then((getPhoneCodeResponse) => {
        const phoneCodes = getPhoneCodeResponse.results;

        if (phoneCodeDefaultValue && phoneCodes.length)
          setSelectedPhoneCode(phoneCodes.find((phoneCode) => phoneCode.id === phoneCodeDefaultValue));

        setPhoneCodes(getPhoneCodeResponse.results);
      });
  }, []);

  useEffect(() => {
    if (forceClear) {
      setPhoneNumber('');
      setSelectedPhoneCode(null);
    }
  }, [forceClear]);

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
