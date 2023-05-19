import { InputWithSwitch, TextInputProps } from '@atom/design-system';
import { FormikProps } from 'formik';
import { useCallback, useMemo } from 'react';

export interface FeeInputProps<T> {
  options: { id: number; label: string }[];
  form: FormikProps<T>;
  label: string;
  variantName: string;
  inputName: string;
}

export const FeeInput = <T,>({ options, form, label, variantName, inputName }: FeeInputProps<T>) => {
  const onInputChange = useCallback(
    (value) => {
      form.setFieldValue(inputName, value);
    },
    [form.setFieldValue, inputName]
  );

  const onSwitchChange = useCallback(
    (value) => {
      form.setFieldValue(variantName, value);
    },
    [form.setFieldValue, variantName]
  );

  const inputProps: TextInputProps = useMemo(
    () => ({
      label,
      type: 'number',
      color: form.errors[inputName] ? 'danger' : 'primary',
      explanation: form.errors[inputName] || ''
    }),
    [label, form.errors, inputName]
  );

  return (
    <InputWithSwitch
      inputProps={inputProps}
      inputValue={form.values[inputName]}
      switchValue={form.values[variantName]}
      switchOptions={options}
      onSwitchChange={onSwitchChange}
      onInputChange={onInputChange}
    />
  );
};
