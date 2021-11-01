import { useTranslation } from '@/atom-common';
import { VALIDATION_CHANGED_VALUE } from '@/configs/constants';

export interface UseValidationTranslationReturnValue {
  required(): string;
  max(value: number): string;
  min(value: number): string;
}

export const useValidationTranslation = (): UseValidationTranslationReturnValue => {
  const t = useTranslation();

  return {
    required: () => t.get('validations.required'),
    min: (value: number) => t.get('validations.max').replace(VALIDATION_CHANGED_VALUE, value.toString()),
    max: (value: number) => t.get('validations.min').replace(VALIDATION_CHANGED_VALUE, value.toString())
  };
};
