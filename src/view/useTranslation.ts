import { containerInstance } from '@/di/config';
import { TranslationModel } from '@/domain/models';
import { LanguageType } from '@/domain/types';
import { TranslationService } from '@/services';
import { useEffect, useState } from 'react';

const translationService: TranslationService = containerInstance.diContainer.get('TranslationService');

export interface UseTranslationReturnValue {
  init(defaultLanguageId: LanguageType): void;
  changeLanguage(language: LanguageType): void;
  get(key: string): any;
}

export const useTranslation = (): UseTranslationReturnValue => {
  const [currentTranslations, setCurrentTranslations] = useState<TranslationModel>({});

  useEffect(() => {
    const unsubscribe = translationService.subscribe(setCurrentTranslations);

    return () => {
      unsubscribe();
    };
  }, []);

  return {
    init: (defaultLanguageId) => translationService.init(defaultLanguageId),
    changeLanguage: translationService.changeLanguage,
    get: translationService.get
  };
};
