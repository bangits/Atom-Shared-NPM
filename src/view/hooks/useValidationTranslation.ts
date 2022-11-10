import { useTranslation } from '@/atom-common';
import { TRANSLATION_CHANGED_VALUE } from '@/configs/constants';
import { useMemo } from 'react';

export const useValidationTranslation = () => {
  const t = useTranslation();

  return useMemo(
    () => ({
      required: () => t.get('validations.required'),
      textInput: () => t.get('validations.textInput'),
      min: (value: number) => t.get('validations.min').replace(TRANSLATION_CHANGED_VALUE, value.toString()),
      max: (value: number) => t.get('validations.max').replace(TRANSLATION_CHANGED_VALUE, value.toString()),
      maxNumber: (value: number) => t.get('validations.maxNumber').replace(TRANSLATION_CHANGED_VALUE, value.toString()),
      email: () => t.get('validations.email'),
      slug: () => t.get('validations.slug'),
      password: () => t.get('validations.password'),
      minValue: (value: number) => t.get('validations.minValue').replace(TRANSLATION_CHANGED_VALUE, value.toString()),
      maxValue: (value: number) => t.get('validations.maxValue').replace(TRANSLATION_CHANGED_VALUE, value.toString()),
      website: () => t.get('validations.website'),
      phoneCodeRequired: () => t.get('validations.phoneCodeRequired'),
      lessThanMin: () => t.get('validations.lessThanMin'),
      moreThanMax: () => t.get('validations.moreThanMax'),
      selectDefaultOption: () => t.get('validations.selectDefaultOption')
    }),
    [t]
  );
};

export type UseValidationTranslationReturnValue = ReturnType<typeof useValidationTranslation>;
