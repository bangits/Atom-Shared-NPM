import { useTranslation } from '@/atom-common';
import { useMemo } from 'react';
import { FeeInput } from './FeeInput';
import { Field, FastFieldProps } from 'formik';

export interface FeeInputFieldProps {
  variantName: string;
  inputName: string;
  label: string;
}

export const FeeInputField = ({ label, inputName, variantName }: FeeInputFieldProps) => {
  const t = useTranslation();

  const options = useMemo(
    () => [
      {
        id: 1,
        label: '%'
      },
      {
        id: 2,
        label: t.get('fixed')
      }
    ],
    []
  );

  return (
    <Field>
      {({ form }: FastFieldProps) => (
        <FeeInput variantName={variantName} inputName={inputName} label={label} form={form} options={options} />
      )}
    </Field>
  );
};
