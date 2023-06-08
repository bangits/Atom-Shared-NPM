import { useCallback, useMemo, MouseEvent, ChangeEvent } from 'react';
import { FormikProps } from 'formik';
import { InputWithSwitch, TextInputProps } from '@atom/design-system';

export interface InputWithSwitchFieldProps<T> {
  options: { id: number; label: string }[];
  form: FormikProps<T>;
  label: string;
  inputProps?: TextInputProps;
  variantName: string;
  inputName: string;
  onSwitchChange?: (value: number, e: MouseEvent<SVGSVGElement>) => void;
  onInputChange?: (value: string, e: ChangeEvent) => void;
}

export const InputWithSwitchField = <T,>({
  options,
  form,
  label,
  variantName,
  inputName,
  inputProps = {},
  onSwitchChange,
  onInputChange
}: InputWithSwitchFieldProps<T>) => {
  const handleInputChange = useCallback(
    (value: string, e: ChangeEvent) => {
      onInputChange?.(value, e);
      form.setFieldValue(inputName, value);
    },
    [form.setFieldValue, inputName]
  );

  const handleSwitchChange = useCallback(
    (value: number, e: MouseEvent<SVGSVGElement>) => {
      onSwitchChange?.(value, e);
      form.setFieldValue(variantName, value);
    },
    [form.setFieldValue, variantName]
  );

  const defaultInputProps: TextInputProps = useMemo(
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
      inputProps={{ ...defaultInputProps, ...inputProps }}
      inputValue={form.values[inputName]}
      switchValue={form.values[variantName]}
      switchOptions={options}
      onSwitchChange={handleSwitchChange}
      onInputChange={handleInputChange}
    />
  );
};
