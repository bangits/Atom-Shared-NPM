import { useTranslation } from '@/atom-common';
import { TRANSLATION_CHANGED_VALUE } from '@/configs/constants';
import { useMemo } from 'react';

export interface UseValidationTranslationReturnValue {
  required(): string;
  textInput(): string;
  max(value: number): string;
  minValue(value: number): string;
  maxValue(value: number): string;

  min(value: number): string;
  maxNumber(value: number): string;
  selectDefaultOption(): string;
  email(): string;
  password(): string;
  website(): string;
  phoneCodeRequired(): string;
}

export const useValidationTranslation = (): UseValidationTranslationReturnValue => {
  const t = useTranslation();

  return useMemo(
    () => ({
      required: () => t.get('validations.required'),
      textInput: () => t.get('validations.textInput'),
      min: (value: number) => t.get('validations.min').replace(TRANSLATION_CHANGED_VALUE, value.toString()),
      max: (value: number) => t.get('validations.max').replace(TRANSLATION_CHANGED_VALUE, value.toString()),
      maxNumber: (value: number) => t.get('validations.maxNumber').replace(TRANSLATION_CHANGED_VALUE, value.toString()),
      email: () => t.get('validations.email'),
      password: () => t.get('validations.password'),
      minValue: (value: number) => t.get('validations.maxValue').replace(TRANSLATION_CHANGED_VALUE, value.toString()),
      maxValue: (value: number) => t.get('validations.maxValue').replace(TRANSLATION_CHANGED_VALUE, value.toString()),
      website: () => t.get('validations.website'),
      phoneCodeRequired: () => t.get('validations.phoneCodeRequired'),
      selectDefaultOption: () => t.get('validations.selectDefaultOption')
    }),
    [t]
  );
};
