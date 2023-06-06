import { FormikProps } from 'formik';
import { useCallback, useMemo, MouseEvent, ChangeEvent } from 'react';
import { InputWithSwitch, TextInputProps } from '@atom/design-system';
import { TimeUnits } from '@/domain';
import { useTranslation } from '@/view';

export interface InputWithTimeFiledProps<T> {
  form: FormikProps<T>;
  label: string;
  inputProps: TextInputProps;
  variantName: string;
  inputName: string;
  onSwitchChange?: (value: number, e: MouseEvent<SVGSVGElement>) => void;
  onInputChange?: (value: string, e: ChangeEvent) => void;
}

export const InputWithTimeFiled = <T,>({
  form,
  label,
  variantName,
  inputName,
  inputProps = {},
  onSwitchChange,
  onInputChange
}: InputWithTimeFiledProps<T>) => {
  const t = useTranslation();

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

  const options = useMemo(
    () => [
      {
        id: TimeUnits.Minute,
        label: t.get('minutesShort')
      },
      {
        id: TimeUnits.Hour,
        label: t.get('hours')
      },
      {
        id: TimeUnits.Day,
        label: t.get('days')
      }
    ],
    [t]
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
