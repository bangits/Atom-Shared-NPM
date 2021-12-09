import { useTranslation } from '@/atom-common';
import { TRANSLATION_CHANGED_VALUE } from '@/configs/constants';
import { useMemo } from 'react';

export interface UseValidationTranslationReturnValue {
  required(): string;
  max(value: number): string;
  min(value: number): string;
}

export const useValidationTranslation = (): UseValidationTranslationReturnValue => {
  const t = useTranslation();

  return useMemo(
    () => ({
      required: () => t.get('validations.required'),
      min: (value: number) => t.get('validations.min').replace(TRANSLATION_CHANGED_VALUE, value.toString()),
      max: (value: number) => t.get('validations.max').replace(TRANSLATION_CHANGED_VALUE, value.toString()),
      textInput: () => t.get('validations.textInput')
    }),
    [t]
  );
};
