import { useTranslation } from '@/atom-common';
import { TRANSLATION_CHANGED_VALUE } from '@/configs/constants';
import { useMemo } from 'react';

export const useValidationTranslation = () => {
  const t = useTranslation();

  return useMemo(
    () => ({
      required: () => t.get('validations.required'),
      textInput: () => t.get('validations.textInput'),
      integer: () => t.get('validations.integer'),
      min: (value: number) => t.get('validations.min').replace(TRANSLATION_CHANGED_VALUE, value.toString()),
      max: (value: number) => t.get('validations.max').replace(TRANSLATION_CHANGED_VALUE, value.toString()),
      maxNumber: (value: number) => t.get('validations.maxNumber').replace(TRANSLATION_CHANGED_VALUE, value.toString()),
      range: (rangeStart: number, rangeEnd: number) =>
        t
          .get('validations.range')
          .replace(TRANSLATION_CHANGED_VALUE, rangeStart.toString())
          .replace(TRANSLATION_CHANGED_VALUE, rangeEnd.toString()),
      email: () => t.get('validations.email'),
      slug: () => t.get('validations.slug'),
      duplicate: () => t.get('validations.duplicate'),
      password: () => t.get('validations.password'),
      positive: () => t.get('validations.positive'),
      noSpace: () => t.get('validations.noSpace'),
      minValue: (value: number) => t.get('validations.minValue').replace(TRANSLATION_CHANGED_VALUE, value.toString()),
      maxValue: (value: number) => t.get('validations.maxValue').replace(TRANSLATION_CHANGED_VALUE, value.toString()),
      website: () => t.get('validations.website'),
      phoneCodeRequired: () => t.get('validations.phoneCodeRequired'),
      lessOrEqual: (value: number) =>
        t.get('validations.lessOrEqual').replace(TRANSLATION_CHANGED_VALUE, value.toString()),
      lessThanMin: () => t.get('validations.lessThanMin'),
      moreThanMax: () => t.get('validations.moreThanMax'),
      negative: () => t.get('validations.negative'),
      selectDefaultOption: () => t.get('validations.selectDefaultOption')
    }),
    [t]
  );
};

export type UseValidationTranslationReturnValue = ReturnType<typeof useValidationTranslation>;
