import { DiContainerContext } from '@/atom-common';
import { TranslationModel } from '@/domain/models';
import { LanguageType } from '@/domain/types';
import { TranslationService } from '@/services';
import { useContext, useEffect, useState } from 'react';

export interface UseTranslationReturnValue {
  init(defaultLanguageId: LanguageType): void;
  changeLanguage(language: LanguageType): void;
  get(key: string): string;
}

export const useTranslation = (): UseTranslationReturnValue => {
  const containerInstance = useContext(DiContainerContext);

  const [currentTranslations, setCurrentTranslations] = useState<TranslationModel>({});

  const [translationService] = useState<TranslationService>(containerInstance.diContainer.get('TranslationService'));

  useEffect(() => {
    const unsubscribe = translationService.subscribe(setCurrentTranslations);

    return () => {
      unsubscribe();
    };
  }, []);

  return {
    init: (defaultLanguageId) => translationService?.init(defaultLanguageId),
    changeLanguage: translationService?.changeLanguage,
    get: translationService?.get
  };
};
